import React from 'react';
import styled from 'styled-components';
import { FaSpotify, FaDownload } from 'react-icons/fa';

const StyledStickyHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(78, 44, 44, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 6px 32px;
  height: 60px;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(${(props) => (props.$show ? "0" : "-100%")});
  @media (max-width: 768px) {
    padding: 6px 12px;
    gap: 8px;
    height: 56px;
  }
`;

const StickyProfile = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #232323;
  cursor: pointer;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;

const StickyName = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    gap: 4px;
  }
`;

const StickySpotifyBtn = styled.a`
  background: #1db954cc;
  color: #181818;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(30, 185, 84, 0.13);
  &:hover {
    background: #fff;
    color: #1db954;
    box-shadow: 0 4px 16px #1db95433;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StickyFollowBtn = styled.button`
  background: #fff;
  color: #1db954;
  border: none;
  border-radius: 999px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #1db954;
    color: #fff;
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const StickyDownloadBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #1db954;
    color: #1db954;
  }
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8rem;
    gap: 4px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media (max-width: 768px) {
    gap: 6px;
  }
`;

function StickyHeader({
  show,
  showBanner,
  profileImage,
  spotifyProfile,
  onProfileClick,
  onDownloadCV,
  onFollowClick,
}) {
  // Calculate banner height based on screen width
  const getBannerHeight = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 600) {
      return '36px';
    }
    return '40px';
  };

  return (
    <StyledStickyHeader $show={show} style={{ top: showBanner ? getBannerHeight() : '0' }}>
      <StickyProfile
        src={profileImage}
        alt="Harsh Rathore"
        onClick={onProfileClick}
      />
      <StickyName>Harsh Rathore</StickyName>
      <StickySpotifyBtn
        href={spotifyProfile}
        target="_blank"
        rel="noopener noreferrer"
        title="Open on Spotify"
      >
        <FaSpotify size={20} />
      </StickySpotifyBtn>
      <ButtonGroup>
        <StickyDownloadBtn
          onClick={onDownloadCV}
          title="Download CV"
          style={{ cursor: "pointer" }}
        >
          <FaDownload size={14} /> CV
        </StickyDownloadBtn>
        <StickyFollowBtn onClick={onFollowClick}>Connect</StickyFollowBtn>
      </ButtonGroup>
    </StyledStickyHeader>
  );
}

export default StickyHeader;
