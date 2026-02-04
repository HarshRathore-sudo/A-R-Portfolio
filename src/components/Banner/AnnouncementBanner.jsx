import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const StyledAnnouncementBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #1db954 0%, #1ed760 100%);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  height: 40px;
  box-sizing: border-box;
  font-size: 0.95rem;
  font-weight: 600;
  z-index: 300;
  transform: translateY(${(props) => (props.$show ? "0" : "-100%")});
  transition: transform 0.3s ease;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px 40px 8px 12px;
    gap: 6px;
    height: 36px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const BannerNewBadge = styled.span`
  background: #000;
  color: #1db954;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const BannerLink = styled.span`
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const BannerClose = styled.button`
  background: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;
  position: absolute;
  right: 16px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 600px) {
    right: 8px;
  }
`;

function AnnouncementBanner({ show, onClick, onClose, title = "Cultural Institution Strategy" }) {
  return (
    <StyledAnnouncementBanner $show={show} onClick={onClick} style={{ cursor: 'pointer' }}>
      <BannerContent>
        <BannerNewBadge>New</BannerNewBadge>
        <span>{title}</span>
        <BannerLink>View →</BannerLink>
      </BannerContent>
      <BannerClose onClick={(e) => { e.stopPropagation(); onClose(); }}>
        <FaTimes size={14} />
      </BannerClose>
    </StyledAnnouncementBanner>
  );
}

export default AnnouncementBanner;
