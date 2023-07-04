import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../Modal/Modal';

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  border-bottom: 1px solid #eee;
`;

const Page = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9c27b0;
  color: #9c27b0;
  margin: 0.25rem auto;
  cursor: pointer;
  &:hover {
    background: #9c27b0;
    color: #eee;
  }
`;

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [a, setA] = useState(null);
  const openModal = (_) => {
    setModalVisible((prevStatte) => !prevStatte);
  };
  return (
    <div>
      <Title>Modal</Title>
      <Page>
        <p>
          Simple <i>Modal</i> with React and Framer-Motion.
        </p>
        <Button onClick={openModal}>Open Modal</Button>
        <Modal
          isToggled={modalVisible}
          setToggled={openModal}
          data={{
            title: 'Hi',
            message: `We use cookies to collect and analyze information on site performance and usage, to provide social media features and to enhance and customize content and advertisements.`,
          }}
        />
      </Page>
    </div>
  );
};

export { Button };
