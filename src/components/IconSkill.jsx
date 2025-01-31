import { motion } from "motion/react";
const IconSkill = ({ children , name}) => {
  return (
    <motion.button
      className="flex justify-center w-full h-full gap-1 flex-col bg-azul-950 rounded-lg items-center p-1"
      whileHover={{ rotate: 10 }}
      whileTap={{ rotate: 180 }}
    >
      {children}
      <p className="text-blue-300">{name}</p>
    </motion.button>
  );
};

export default IconSkill;
