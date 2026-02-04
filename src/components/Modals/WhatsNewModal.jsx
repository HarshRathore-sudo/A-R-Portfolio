import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const WhatsNewOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 400;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  pointer-events: ${(props) => (props.$show ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const StyledWhatsNewModal = styled.div`
  background: #282828;
  border-radius: 16px;
  max-width: 420px;
  width: 90%;
  padding: 24px;
  position: relative;
  transform: ${(props) => (props.$show ? "scale(1)" : "scale(0.95)")};
  transition: transform 0.3s ease;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
`;

const WhatsNewClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const WhatsNewThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    height: 160px;
  }
`;

const WhatsNewTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const WhatsNewStat = styled.div`
  color: #1db954;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 16px;
`;

const WhatsNewHeading = styled.div`
  color: #b3b3b3;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const WhatsNewDesc = styled.p`
  color: #b3b3b3;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
`;

const WhatsNewButton = styled.button`
  width: 100%;
  background: #1db954;
  color: #000;
  border: none;
  border-radius: 999px;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  &:hover {
    transform: scale(1.02);
    background: #1ed760;
  }
`;

function WhatsNewModal({ show, featuredProject, onClose, onCTA }) {
    if (!featuredProject) return null;

    return (
        <WhatsNewOverlay $show={show} onClick={onClose}>
            <StyledWhatsNewModal $show={show} onClick={(e) => e.stopPropagation()}>
                <WhatsNewClose onClick={onClose}>
                    <FaTimes size={16} />
                </WhatsNewClose>
                <WhatsNewHeading>What's New</WhatsNewHeading>
                <WhatsNewThumbnail
                    src={featuredProject.thumbnailImage || featuredProject.cover}
                    alt={featuredProject.title}
                />
                <WhatsNewTitle>{featuredProject.title}</WhatsNewTitle>
                <WhatsNewStat>{featuredProject.stat}</WhatsNewStat>
                <WhatsNewDesc>
                    A full-stack strategy project for a legacy Indian vocal ensemble, covering digital performance, collaborations, live productions, and long-term IP development.
                </WhatsNewDesc>
                <WhatsNewButton onClick={onCTA}>
                    Check it out →
                </WhatsNewButton>
            </StyledWhatsNewModal>
        </WhatsNewOverlay>
    );
}

export default WhatsNewModal;
