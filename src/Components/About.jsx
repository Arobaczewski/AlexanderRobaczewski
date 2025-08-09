import { Code, Users, Target, Heart, CheckCircle, Award, Zap } from "lucide-react"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const About = () => {
    return (
        <section id="about" className="py-16 lg:py-24 relative">
            {/* Modern gradient overlay */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* Modern glass header card */}
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                    About Me
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                From tech sales to web development - turning 8+ years of customer-facing experience 
                                into code that makes a difference.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Story Section */}
                    <div className="space-y-8">
                        {/* Journey Card */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center drop-shadow-lg">
                                    <Target className="mr-3 text-teal-400 drop-shadow-lg" size={24} />
                                    My Journey
                                </h3>
                                <div className="space-y-4 text-gray-200 leading-relaxed">
                                    <p className="drop-shadow-md">
                                        After years of selling technology at AT&T and Verizon, I realized I loved 
                                        the tech but wanted to build solutions instead of just selling them. In 
                                        November 2023, I made the leap - quitting my management role to pursue development.
                                    </p>
                                    <p className="drop-shadow-md">
                                        The path wasn't linear. I explored cybersecurity, networking, and IT before 
                                        finding my true calling in March 2025 when I discovered coding through 
                                        Codecademy's full-stack program.
                                    </p>
                                    <p className="font-semibold text-teal-300 drop-shadow-lg">
                                        That moment when my first React component rendered? I knew I was home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Makes Me Different */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
                                <h4 className="text-xl font-semibold text-teal-300 mb-4 drop-shadow-lg">What Makes Me Different</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Users className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0 drop-shadow-lg" />
                                        <div className="text-gray-200 drop-shadow-md">
                                            <span className="font-semibold text-white">Real-world experience:</span> 8+ years of customer service 
                                            and team leadership means I understand user needs and business requirements.
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Zap className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0 drop-shadow-lg" />
                                        <div className="text-gray-200 drop-shadow-md">
                                            <span className="font-semibold text-white">Rapid learner:</span> Built production-quality React 
                                            applications within weeks of starting my coding journey.
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Heart className="w-5 h-5 text-teal-400 mr-3 mt-1 flex-shrink-0 drop-shadow-lg" />
                                        <div className="text-gray-200 drop-shadow-md">
                                            <span className="font-semibold text-white">Genuine passion:</span> I actively sought out coding 
                                            after trying other tech paths - this is exactly where I want to be.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Three.js Rotating Cube */}
                    <RotatingCube />
                </div>

                {/* Technical Skills */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="relative group inline-block">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
                                <h3 className="text-3xl font-bold text-teal-300 drop-shadow-lg">
                                    Technical Expertise
                                </h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend Skills */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">Frontend Development</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        React (Hooks, Context, Router)
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        JavaScript (ES6+)
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Tailwind CSS
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Responsive Design
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Tools & Integration */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">Tools & Integration</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Git & GitHub
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        RESTful APIs
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        EmailJS Integration
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Three.js (Learning)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Currently Learning */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">Currently Learning</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Node.js & Express
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        PostgreSQL
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Next.js
                                    </li>
                                    <li className="flex items-center hover:text-teal-200 transition-colors duration-200 text-gray-200 drop-shadow-md">
                                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2" />
                                        Full-Stack Architecture
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Employers Choose Me */}
                <div className="relative group mb-20">
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75"></div>
                    <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                        <h3 className="text-3xl font-bold text-teal-300 text-center mb-12 drop-shadow-lg">
                            Why Employers Choose Me
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Problem Solver */}
                            <div className="backdrop-blur-md bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-xl border border-teal-500/30 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-teal-200 ml-4 group-hover/card:text-teal-100 transition-colors duration-300 drop-shadow-lg">Problem Solver</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    I don't just code - I solve real business problems. My tip calculator saves my workplace 
                                    <span className="text-teal-200 font-semibold"> 45+ minutes daily</span>, proving I understand 
                                    how code impacts the bottom line.
                                </p>
                                <div className="text-sm font-semibold text-teal-300 opacity-80">
                                    Business Impact • Real Solutions • Measurable Results
                                </div>
                            </div>

                            {/* Fast Learner */}
                            <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/20 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-200 ml-4 group-hover/card:text-teal-200 transition-colors duration-300 drop-shadow-lg">Rapid Learner</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    <span className="text-teal-200 font-semibold">0 to production</span> in weeks, not months. 
                                    While others study theory, I build working applications. This portfolio site? 
                                    Built while learning React from scratch.
                                </p>
                                <div className="text-sm font-semibold text-gray-300 opacity-80">
                                    Self-Directed • Results-Oriented • Ship Fast
                                </div>
                            </div>

                            {/* Team Player */}
                            <div className="backdrop-blur-md bg-gradient-to-br from-blue-900/30 to-indigo-800/20 p-6 rounded-xl border border-blue-500/30 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-blue-200 ml-4 group-hover/card:text-teal-200 transition-colors duration-300 drop-shadow-lg">Team Ready</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    <span className="text-teal-200 font-semibold">8+ years</span> of customer service and team leadership 
                                    means I communicate clearly, handle feedback well, and understand that great code serves users, not egos.
                                </p>
                                <div className="text-sm font-semibold text-blue-300 opacity-80">
                                    Leadership • Communication • User-Focused
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12 text-center">
                            <div className="backdrop-blur-md bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-xl p-6 border border-teal-500/30 shadow-lg">
                                <p className="text-lg text-teal-100 mb-4 drop-shadow-lg">
                                    <span className="font-semibold text-white">Ready to contribute from day one. </span> 
                                    While others are still learning the basics, I'm already building solutions.
                                </p>
                                <p className="text-sm text-gray-200 drop-shadow-md">
                                    Looking for someone who combines technical skills with real-world experience? Let's talk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Touch */}
                <div className="text-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-3xl blur-xl opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-8 text-white shadow-2xl border border-white/20 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold mb-4 drop-shadow-lg">Beyond the Code</h4>
                            <p className="text-teal-50 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                                When I'm not coding, you'll find me watching the White Sox (over the Cubs), 
                                cheering for the Packers (over the Bears), or supporting Chelsea FC (Champions of the World). The teal theme of this site 
                                holds special meaning - it's my way of carrying forward the memory of someone 
                                important who inspired me to keep pushing forward, no matter the challenge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

// Three.js Rotating Cube Component
const RotatingCube = () => {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create cube geometry
    const geometry = new THREE.BoxGeometry(2.0, 2.0, 2.0);
    
    // Create materials for each face with teal gradients
    const materials = [
      // Right face - Teal gradient
      new THREE.MeshPhongMaterial({ 
        color: 0x14b8a6,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      }),
      // Left face - Darker teal
      new THREE.MeshPhongMaterial({ 
        color: 0x0d9488,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      }),
      // Top face - Lighter teal
      new THREE.MeshPhongMaterial({ 
        color: 0x2dd4bf,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      }),
      // Bottom face - Deep teal
      new THREE.MeshPhongMaterial({ 
        color: 0x0f766e,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      }),
      // Front face - Bright teal
      new THREE.MeshPhongMaterial({ 
        color: 0x5eead4,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      }),
      // Back face - Medium teal
      new THREE.MeshPhongMaterial({ 
        color: 0x14b8a6,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      })
    ];

    // Create cube with materials
    const cube = new THREE.Mesh(geometry, materials);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Add coding icon to the center of the cube
    const iconGeometry = new THREE.PlaneGeometry(1.2, 1.2);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Clear the canvas first
    context.clearRect(0, 0, 256, 256);
    
    // Draw a coding icon (brackets with forward slash)
    context.fillStyle = '#ffffff';
    context.font = 'bold 120px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.shadowColor = '#000000';
    context.shadowBlur = 4;
    context.fillText('</>', 128, 128);
    
    const iconTexture = new THREE.CanvasTexture(canvas);
    iconTexture.needsUpdate = true;
    
    const iconMaterial = new THREE.MeshBasicMaterial({ 
      map: iconTexture, 
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide,
      alphaTest: 0.1
    });
    
    // Create icons on all 6 faces
    const icon1 = new THREE.Mesh(iconGeometry, iconMaterial);
    icon1.position.set(0, 0, 1.1); // Front face
    cube.add(icon1);
    
    const icon2 = new THREE.Mesh(iconGeometry, iconMaterial.clone());
    icon2.position.set(0, 0, -1.1); // Back face
    icon2.rotation.y = Math.PI;
    cube.add(icon2);
    
    const icon3 = new THREE.Mesh(iconGeometry, iconMaterial.clone());
    icon3.position.set(1.1, 0, 0); // Right face
    icon3.rotation.y = Math.PI / 2;
    cube.add(icon3);
    
    const icon4 = new THREE.Mesh(iconGeometry, iconMaterial.clone());
    icon4.position.set(-1.1, 0, 0); // Left face
    icon4.rotation.y = -Math.PI / 2;
    cube.add(icon4);
    
    const icon5 = new THREE.Mesh(iconGeometry, iconMaterial.clone());
    icon5.position.set(0, 1.1, 0); // Top face
    icon5.rotation.x = -Math.PI / 2;
    cube.add(icon5);
    
    const icon6 = new THREE.Mesh(iconGeometry, iconMaterial.clone());
    icon6.position.set(0, -1.1, 0); // Bottom face
    icon6.rotation.x = Math.PI / 2;
    cube.add(icon6);

    // Add wireframe overlay for tech aesthetic
    const wireframeGeometry = new THREE.EdgesGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.3 
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    cube.add(wireframe);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Add point light for extra glow
    const pointLight = new THREE.PointLight(0x14b8a6, 1, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Add particles around the cube
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
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

      // Rotate cube continuously
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.003;

      // Add mouse interaction
      cube.rotation.x += mouseY * 0.02;
      cube.rotation.y += mouseX * 0.02;

      // Animate particles
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.002;

      // Pulse the point light
      pointLight.intensity = 1 + Math.sin(time * 2) * 0.3;

      // Slight camera movement for dynamic feel
      camera.position.x = Math.sin(time * 0.5) * 0.1;
      camera.position.y = Math.cos(time * 0.3) * 0.1;
      camera.lookAt(scene.position);

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
      geometry.dispose();
      materials.forEach(material => material.dispose());
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      iconGeometry.dispose();
      iconMaterial.dispose();
      iconTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Enhanced glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-3xl blur-2xl opacity-60"></div>
        
        {/* Three.js container - completely clean, no styling */}
        <div 
          ref={mountRef} 
          style={{ width: '400px', height: '400px' }}
        />
        
        {/* Enhanced decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-70 blur-sm animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full opacity-50 blur-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default About