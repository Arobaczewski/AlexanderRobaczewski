import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Character = ({ 
  characterImageUrl = "/character.png", 
  deskImageUrl = "/monitors.png" 
}) => {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 0.8, 0.1, 1000);
    camera.position.set(0, 0.5, 4);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(400, 500);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    
    // Load character texture
    const characterTexture = textureLoader.load(characterImageUrl);
    
    // Load desk texture
    const deskTexture = textureLoader.load(deskImageUrl);

    // Create character plane (sitting person)
    const characterGeometry = new THREE.PlaneGeometry(2, 2.5);
    const characterMaterial = new THREE.MeshPhongMaterial({
      map: characterTexture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.1
    });

    const characterPlane = new THREE.Mesh(characterGeometry, characterMaterial);
    characterPlane.position.set(0, 0.2, 0.5); // Slightly forward and up
    characterPlane.castShadow = true;
    scene.add(characterPlane);

    // Create desk plane (monitors and desk) - made bigger
    const deskGeometry = new THREE.PlaneGeometry(4, 2.4); // Increased from 3x1.8
    const deskMaterial = new THREE.MeshPhongMaterial({
      map: deskTexture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.1
    });

    const deskPlane = new THREE.Mesh(deskGeometry, deskMaterial);
    deskPlane.position.set(0, -0.3, -0.5); // Behind and below character
    deskPlane.receiveShadow = true;
    scene.add(deskPlane);

    // Add subtle glow effects for both layers
    const characterGlowGeometry = new THREE.PlaneGeometry(2.2, 2.7);
    const characterGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    const characterGlow = new THREE.Mesh(characterGlowGeometry, characterGlowMaterial);
    characterGlow.position.set(0, 0.2, 0.4);
    scene.add(characterGlow);

    const deskGlowGeometry = new THREE.PlaneGeometry(4.2, 2.6); // Increased to match bigger desk
    const deskGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide
    });
    const deskGlow = new THREE.Mesh(deskGlowGeometry, deskGlowMaterial);
    deskGlow.position.set(0, -0.3, -0.6);
    scene.add(deskGlow);

    // Add screen glow effects (simulating monitor light) - adjusted for bigger monitors
    const screenGlow1 = new THREE.PointLight(0x00ffff, 0.4, 4); // Increased intensity and range
    screenGlow1.position.set(-1.2, 0.2, -0.3); // Spread out more for bigger monitors
    scene.add(screenGlow1);

    const screenGlow2 = new THREE.PointLight(0x00ff88, 0.4, 4);
    screenGlow2.position.set(0, 0.2, -0.3);
    scene.add(screenGlow2);

    const screenGlow3 = new THREE.PointLight(0x0088ff, 0.4, 4);
    screenGlow3.position.set(1.2, 0.2, -0.3); // Spread out more for bigger monitors
    scene.add(screenGlow3);

    // Add floating code particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(3, 4, 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Main teal accent light
    const mainLight = new THREE.PointLight(0x14b8a6, 0.8, 8);
    mainLight.position.set(2, 2, 2);
    scene.add(mainLight);

    // Animation variables
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Character animations (now stationary)
      // Character stays in fixed position - no floating or breathing
      characterPlane.position.y = 0.2; // Fixed Y position
      characterPlane.position.x = 0; // Fixed X position

      // Remove breathing scale animation
      characterPlane.scale.setScalar(1); // Fixed scale

      // Keep only subtle mouse interaction for character
      characterPlane.rotation.y = mouseX * 0.03; // Reduced from 0.08
      characterPlane.rotation.x = mouseY * 0.015; // Reduced from 0.03

      // Desk animations (more subtle, like it's solid)
      deskPlane.position.y = -0.3 + Math.sin(time * 0.6) * 0.02;
      deskPlane.rotation.y = mouseX * 0.02;

      // Glow effects follow their respective planes (character now stationary)
      characterGlow.position.y = 0.15; // Fixed position slightly below character
      characterGlow.position.x = 0; // Fixed X position
      characterGlow.rotation.y = characterPlane.rotation.y * 0.5;

      deskGlow.position.y = deskPlane.position.y;
      deskGlow.rotation.y = deskPlane.rotation.y * 0.5;

      // Animate glow opacities
      characterGlowMaterial.opacity = 0.08 + Math.sin(time * 2) * 0.03;
      deskGlowMaterial.opacity = 0.05 + Math.sin(time * 1.5) * 0.02;

      // Animate screen glows (like flickering monitors)
      screenGlow1.intensity = 0.3 + Math.sin(time * 3) * 0.1;
      screenGlow2.intensity = 0.3 + Math.sin(time * 2.5 + 1) * 0.1;
      screenGlow3.intensity = 0.3 + Math.sin(time * 2.8 + 2) * 0.1;

      // Floating particles
      particlesMesh.rotation.y += 0.002;
      const positions = particlesMesh.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      // Main light animation
      mainLight.intensity = 0.8 + Math.sin(time * 1.5) * 0.2;

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.3) * 0.1;
      camera.position.y = 0.5 + Math.cos(time * 0.4) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      characterGeometry.dispose();
      characterMaterial.dispose();
      deskGeometry.dispose();
      deskMaterial.dispose();
      characterGlowGeometry.dispose();
      characterGlowMaterial.dispose();
      deskGlowGeometry.dispose();
      deskGlowMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      characterTexture.dispose();
      deskTexture.dispose();
      renderer.dispose();
    };
  }, [characterImageUrl, deskImageUrl]);

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Enhanced glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-3xl blur-2xl opacity-60"></div>
        
        {/* Three.js container */}
        <div 
          ref={mountRef} 
          className="relative"
          style={{ width: '400px', height: '500px' }}
        />
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-60 blur-sm animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full opacity-40 blur-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default Character;