import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Button } from '../App/App';

const ModalDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 380px;
  height: auto;
  padding: 1rem;
  border: 1px solid #aaa;
  background: #fff;
`;

const BackDrop = styled(motion.div)`
  background: #aaaaaa2e;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

export default ({ isToggled, setToggled, data, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <BackDrop />
          <ModalDiv
            initial={{ y: 10, x: '-50%', opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <h1>{data.title}</h1>
            <p>{data.message}</p>
            {children}
            <Button onClick={setToggled}>Close</Button>
          </ModalDiv>
        </>
      )}
    </AnimatePresence>
  );
};
