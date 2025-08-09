import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarfieldBackground = () => {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Black background as fallback
    mountRef.current.appendChild(renderer.domElement);

    // ONLY nebula background - no other geometry
    const textureLoader = new THREE.TextureLoader();
    const nebulaGeometry = new THREE.PlaneGeometry(3000, 3000); // Massive plane
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      map: textureLoader.load('/nebula.jpg'),
      transparent: false, // No transparency to avoid blending issues
      opacity: 1.0
    });
    
    const nebulaPlane = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebulaPlane.position.set(0, 0, -600); // Very far back
    scene.add(nebulaPlane);

    // ONLY white rotating stars - no other geometry
    const stars = [];
    
    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8 + Math.random() * 0.2
      });
      
      const star = new THREE.Mesh(geometry, material);
      
      // Controlled positioning - keep away from camera
      star.position.x = (Math.random() - 0.5) * 100;
      star.position.y = (Math.random() - 0.5) * 100;
      star.position.z = (Math.random() - 0.5) * 60 - 30; // Between z=-60 and z=0
      
      star.userData = {
        originalX: star.position.x,
        originalY: star.position.y,
        originalZ: star.position.z,
        parallaxSpeed: Math.random() * 0.5 + 0.2,
        rotationSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.01 + 0.005,
        driftSpeed: Math.random() * 0.008 + 0.003
      };
      
      scene.add(star);
      stars.push(star);
    }

    // Animation variables
    let frameCount = 0;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      frameCount++;
      time += 0.016;

      // ONLY animate stars - no nebula animation
      stars.forEach((star, index) => {
        // Rotation
        star.rotation.x += star.userData.rotationSpeed;
        star.rotation.y += star.userData.rotationSpeed * 0.8;
        star.rotation.z += star.userData.rotationSpeed * 0.6;
        
        // Position with scroll parallax
        star.position.y = star.userData.originalY + scrollY * star.userData.parallaxSpeed;
        
        // Gentle floating
        star.position.x = star.userData.originalX + 
          Math.sin(time * star.userData.floatSpeed + index * 0.1) * 3 +
          mouseX * star.userData.parallaxSpeed * 2;
          
        star.position.z = star.userData.originalZ + 
          Math.cos(time * star.userData.driftSpeed + index * 0.15) * 2 +
          mouseY * star.userData.parallaxSpeed * 1;
        
        // Pulsing
        const pulse = 0.8 + Math.sin(time * 2 + star.userData.pulseOffset) * 0.3;
        const breathe = 1 + Math.sin(time * 0.5 + index * 0.1) * 0.15;
        star.scale.setScalar(pulse * breathe);
        
        // Strict boundaries to prevent stars from coming too close
        if (star.position.z > -5) {
          star.position.z = -45;
          star.userData.originalZ = -45;
        }
        if (star.position.z < -70) {
          star.position.z = -15;
          star.userData.originalZ = -15;
        }
        
        // Reset scroll boundaries
        if (star.position.y > 70) {
          star.position.y = -70;
          star.userData.originalY = -70;
        } else if (star.position.y < -70) {
          star.position.y = 70;
          star.userData.originalY = 70;
        }
        
        // X boundaries
        if (Math.abs(star.position.x) > 70) {
          star.position.x = star.userData.originalX;
        }
      });

      // Gentle camera movement
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Event handlers
    const handleScroll = () => {
      scrollY = window.pageYOffset * 0.01;
    };

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Start
    animate();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up ONLY the geometry we created
      stars.forEach(star => {
        star.geometry.dispose();
        star.material.dispose();
      });
      
      nebulaPlane.geometry.dispose();
      nebulaPlane.material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default StarfieldBackground;