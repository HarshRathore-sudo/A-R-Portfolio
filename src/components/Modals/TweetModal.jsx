import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  transform: ${(props) => (props.$show ? "scale(1)" : "scale(0.9)")};
  transition: transform 0.3s ease;
`;

const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

function TweetModal({ show, image, onClose }) {
    return (
        <ModalOverlay $show={show} onClick={onClose}>
            <ModalContent $show={show} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <FaTimes />
                </CloseButton>
                {image && <ModalImage src={image} alt="Amit Trivedi Tweet" />}
            </ModalContent>
        </ModalOverlay>
    );
}

export default TweetModal;
