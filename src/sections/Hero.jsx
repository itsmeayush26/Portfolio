// import { Canvas, useFrame } from "@react-three/fiber";
// import HeroText from "../components/HeroText";
// import ParallaxBackground from "../components/ParallaxBackground";
// import { Float } from "@react-three/drei";
// import { useMediaQuery } from "react-responsive";
// import { easing } from "maath";
// import { Suspense } from "react";
// import Loader from "../components/Loader";
// import {Astronaut} from "../components/Astronaut"


// const Hero = () => {
//   const isMobile = useMediaQuery({ maxWidth: 853 });
//   return (
//     <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
//       <HeroText />
//       <ParallaxBackground />
//       <figure
//         className="absolute inset-0"
//         style={{ width: "100vw", height: "100vh" }}
//       >
//         <Canvas camera={{ position: [0, 1, 3] }}>
//           <Suspense fallback={<Loader />}>
//             <Float>
//               <Astronaut
//                 scale={isMobile && 0.23}
//                 position={isMobile && [0, -1.5, 0]}
//               />
//             </Float>
//             <Rig />
//           </Suspense>
//         </Canvas>
//       </figure>
//     </section>
//   );
// };

// function Rig() {
//   return useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
// }

// export default Hero;


import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen overflow-hidden c-space  px-4 pt-20 md:pt-0">
      {/* Left side text */}
      <div className="text-center md:text-left md:mr-10">
        <HeroText />
      </div>

      {/* Right side circular photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center mb-10 md:mb-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative rounded-full p-3"
        >
          {/* Glow / Frame effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse"></div>

          {/* Outer circular frame */}
          <div className="relative rounded-full p-2 bg-gradient-to-tr from-indigo-600 to-pink-600 shadow-2xl shadow-purple-500/50">
            <img
              src="/assets/ayu.jpg"
              alt="Ayush"
              className="rounded-full w-110 h-110 md:w-100 md:h-100 object-cover border-4 border-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
;
