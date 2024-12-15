import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FiMonitor, FiLayers, FiUsers, FiShield } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import App from '../assets/images/app-dev.png';
import Web from '../assets/images/web-dev.png';
import Pos from '../assets/images/pos.png';

const FloatingServer = () => {
  const serverRef = useRef();
  const orbitRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    serverRef.current.rotation.y = t * 0.5;
    serverRef.current.position.y = Math.sin(t) * 0.2;

    orbitRef.current.rotation.y = t * 0.3;
    orbitRef.current.rotation.x = t * 0.2;
  });

  return (
    <group>
      {/* Main Server */}
      <group ref={serverRef}>
        <Box args={[1, 2, 0.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Server Details */}
        <Box args={[0.8, 0.1, 0.4]} position={[0, 0.5, 0.1]}>
          <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
        </Box>
      </group>

      {/* Orbiting Elements */}
      <group ref={orbitRef}>
        {[0, 120, 240].map((angle, i) => (
          <Sphere
            key={i}
            args={[0.1]}
            position={[
              Math.cos((angle * Math.PI) / 180) * 2,
              Math.sin((angle * Math.PI) / 180) * 2,
              0
            ]}
          >
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
          </Sphere>
        ))}
      </group>
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} enablePan={false} />

      <Environment preset="city" />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <FloatingServer />
    </Canvas>
  );
};

const HeroContent = () => {
  const handleGetStarted = useCallback(() => {
    console.log('Get Started clicked');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:max-w-xl"
    >
      <motion.h1
      
        className="text-2xl md:text-5xl font-bold mb-0 text-[#005880]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      ><br/><br/><br/>
        Future of Mobile,Web,POS

        <motion.span
          className="block text-black text-3xl md:text-3xl mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
           Solutions in Sri Lanka
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-1xl mb-8 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enhance your online presence with our professional services, offering budget-friendly
        custom-made apps, responsive web designs, and POS systems designed to meet your
        business requirements.
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05, x: 10 }}
          whileTap={{ scale: 0.95 }}
          className="group bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full
                   transition duration-300 text-lg font-semibold flex items-center gap-2"
          onClick={handleGetStarted}
        >
          Get Started
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowRight className="inline-block" />
          </motion.span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgb(0, 0, 0)', color: '#ffffff' }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-white hover:bg-white hover:text-blue-900 text-[#005880] '
                   px-8 py-3 rounded-full transition duration-300 text-lg font-semibold"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const HeroImages = () => {
  const constraintsRef = useRef(null);

  const images = [
    {
      src: Web,
      alt: 'Web Development',
      className: 'absolute top-0 right-0 w-64 h-48 rounded-lg shadow-xl'
    },
    {
      src: App,
      alt: 'Mobile Development',
      className: 'absolute top-1/4 right-1/4 w-56 h-40 rounded-lg shadow-xl'
    },
    {
      src: Pos,
      alt: 'POS System',
      className: 'absolute bottom-0 right-1/3 w-48 h-36 rounded-lg shadow-xl'
    }
  ];

  return (
    <motion.div
      ref={constraintsRef}
      className="relative h-[600px] w-full hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={image.className}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: [-1, 1, -1], transition: { duration: 0.3 } }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-lg"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20
                     rounded-lg backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity
                     duration-300 flex items-center justify-center"
          >
            <span className="text-white font-semibold text-lg">{image.alt}</span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Modern Technology",
      description: "Built with the latest and most powerful technologies available."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Tailored solutions to meet the specific needs of your business."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "User-Centered Design",
      description: "Designed with user experience as the primary focus."
    },
    {  
      icon: <FiShield className="w-8 h-8" />,
      title: "Secure Systems",
      description: "Ensuring security and reliability for your applications."
    }
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-0">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (  
    <section className="relative h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-8 lg:px-16">
      <div className="z-10">
        <HeroContent />
        <Features />
      </div>
      <div className="relative w-full lg:w-1/2 h-full">
        <HeroImages />
      </div>
      <div className="absolute inset-0">
        <Scene />
      </div>
    </section>
  );
};

export default Hero;
