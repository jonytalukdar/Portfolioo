import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Comment, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`app__flex ${classNames}`}
      >
        <Comment />
      </motion.div>
    );
  };

export default MotionWrap;
