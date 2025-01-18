import { motion } from "framer-motion";
import { useState } from "react";

const NewSideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="bg-red-400 h-screen"
      style={{ width: isOpen ? "225px" : "40px" }}
    >
      <button onClick={() => setIsOpen((prev) => !prev)}>Click Here</button>
    </motion.div>
  );
};

export default NewSideNavBar;
