import React from 'react';
import styled from 'styled-components';
import { FaSpotify, FaDownload } from 'react-icons/fa';

const StyledHeaderGradient = styled.div`
  width: 100vw;
  min-height: 340px;
  background: linear-gradient(180deg, #4e2c2c 0%, #181818 100%);
  display: flex;
  align-items: flex-end;
  padding: 0 0 40px 0;
  position: relative;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  padding-left: 60px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    gap: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 6px solid #181818;
  background: #232323;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    margin-top: 80px;
  }
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    font-size: 3.5rem;
    margin: 0;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 1.1;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 768px) {
      font-size: 2.2rem;
      flex-direction: row;
      gap: 8px;
      justify-content: center;
    }
  }
  .verified {
    display: flex;
    align-items: center;
  }
  .tagline {
    font-size: 1.1rem;
    color: #e0ffe0;
    font-weight: 500;
    margin-top: 4px;
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
  > div {
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 8px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 24px;
    justify-items: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;



const StatNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1db954 0%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  color: #b3b3b3;
  font-weight: 500;
  text-transform: lowercase;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;



const SpotifyBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #1db954;
  color: #181818;
  font-weight: 600;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(30, 185, 84, 0.13);
  margin-top: 18px;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #fff;
    color: #1db954;
  }
`;

const BigFollowBtn = styled.button`
  background: #fff;
  color: #1db954;
  border: none;
  border-radius: 999px;
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 18px;
  margin-top: 18px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #1db954;
    color: #fff;
  }
`;

const DownloadCVBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-left: 12px;
  margin-top: 18px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #1db954;
    color: #1db954;
  }
  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 0.9rem;
    margin-left: 8px;
  }
`;

function HeaderGradient({
  profileImage,
  spotifyProfile,
  onProfileClick,
  onDownloadCV,
  onFollowClick,
}) {
  return (
    <StyledHeaderGradient>
      <HeaderContent>
        <ProfileImage
          src={profileImage}
          alt="Harsh Rathore"
          onClick={onProfileClick}
        />
        <NameBlock>
          <h1>Harsh Rathore</h1>
          <div className="tagline">
            Music Business | Artist Operations | Live Events & Digital Support
          </div>
          <StatsRow>
            <StatItem>
              <StatNumber>₹22L+</StatNumber>
              <StatLabel>revenue at Dole's Music</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>₹30L+</StatNumber>
              <StatLabel>sponsorships secured</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel>artists booked</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>6000+</StatNumber>
              <StatLabel>festival capacity</StatLabel>
            </StatItem>
          </StatsRow>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SpotifyBtn
              href={spotifyProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={22} /> Open on Spotify
            </SpotifyBtn>
            <DownloadCVBtn
              onClick={onDownloadCV}
              style={{ cursor: "pointer" }}
            >
              <FaDownload size={16} /> Download CV
            </DownloadCVBtn>
            <BigFollowBtn onClick={onFollowClick}>Connect</BigFollowBtn>
          </div>
        </NameBlock>
      </HeaderContent>
    </StyledHeaderGradient>
  );
}

export default HeaderGradient;
