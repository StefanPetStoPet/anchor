import { motion } from 'framer-motion';

export default function OrbitingCircles() {
  // Size of each circle
  const circleSize = 20;

  return (
    <motion.div
      aria-hidden="true"
      className="absolute top-[20%] md:top-2/8 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: 80, height: 80 }} // orbit container size
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 8,
      }}
    >
      {/* Left Circle */}
      <div
        className="rounded-full bg-blue-400 opacity-50"
        style={{
          width: circleSize,
          height: circleSize,
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: `translateY(-50%)`,
        }}
      />

      {/* Right Circle */}
      <div
        className="rounded-full bg-red-600 opacity-50"
        style={{
          width: circleSize,
          height: circleSize,
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: `translateY(-50%)`,
        }}
      />
    </motion.div>
  );
}