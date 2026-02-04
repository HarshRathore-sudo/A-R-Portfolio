import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FaSpotify, FaEnvelope, FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa';

const StyledVibeCard = styled.div`
  max-width: 900px;
  margin: 72px auto 110px auto;
  padding: 64px 56px 56px 56px;
  background: linear-gradient(
    120deg,
    rgba(24, 24, 24, 0.92) 60%,
    rgba(30, 185, 84, 0.1) 100%
  );
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-shadow:
    0 8px 48px 0 rgba(30, 185, 84, 0.18),
    0 1.5px 16px 0 rgba(0, 0, 0, 0.13);
  border: 2.5px solid rgba(30, 185, 84, 0.22);
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 24px 16px;
    margin: 80px 16px 200px 16px;
    border-radius: 16px;
  }
`;

const VibeLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px 0 0;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

const VibeHeading = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #1db954;
  margin-bottom: 0;
  text-align: left;
  letter-spacing: 0.01em;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  @media (max-width: 800px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const VibeDesc = styled.div`
  color: #e0ffe0;
  font-size: 1.08rem;
  font-weight: 500;
  text-align: left;
  max-width: 600px;
  margin: 18px 0 0 0;
  opacity: 0.92;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 0.9rem;
    text-align: center;
    margin: 12px 0 0 0;
    line-height: 1.5;
  }
`;

const VibeContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
`;

const VibeContactBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: #1db954;
  font-weight: 700;
  border-radius: 999px;
  padding: 7px 0;
  font-size: 0.93rem;
  text-decoration: none;
  box-shadow: 0 1.5px 8px rgba(30, 185, 84, 0.08);
  border: 1.5px solid rgba(80, 255, 180, 0.1);
  min-width: 100px;
  flex: 1;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    transform 0.18s;
  &:hover {
    background: #1db954;
    color: #fff;
    box-shadow: 0 0 14px #1db95444;
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    width: 100%;
    min-width: unset;
    padding: 10px 0;
    font-size: 0.85rem;
    border-radius: 12px;
  }
`;

const VibeContactSpotifyBtn = styled(VibeContactBtn)`
  background: linear-gradient(90deg, #1db954 80%, #1db954cc 100%);
  color: #fff;
  font-weight: 800;
  border: 1.5px solid #1db95455;
  padding: 10px 24px;
  min-width: 180px;
  font-size: 1.08rem;
  white-space: nowrap;
  text-overflow: unset;
  overflow: visible;
  gap: 8px;
  align-items: center;
  &:hover {
    background: #1db954;
    color: #fff;
    box-shadow: 0 0 22px #1db954cc;
    transform: scale(1.08);
  }
  svg {
    transition: transform 0.18s;
  }
  &:hover svg {
    transform: scale(1.18) rotate(-10deg);
    filter: drop-shadow(0 0 8px #1db954cc);
  }
  @media (max-width: 800px) {
    grid-column: span 2;
    width: 100%;
    max-width: unset;
    white-space: normal;
    padding: 12px 0;
    font-size: 0.95rem;
    border-radius: 12px;
  }
`;

const VibeRight = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

const VibeRightRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const InspiredBy = styled.div`
  color: #b3ffc7;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  opacity: 0.85;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SpotifyWave = styled.div`
  display: flex;
  align-items: center;
  svg {
    display: block;
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const VibeCard = forwardRef(function VibeCard({ spotifyProfile, onDownloadCV }, ref) {
  return (
    <StyledVibeCard ref={ref}>
      <VibeLeft>
        <VibeHeading>Open to Opportunities</VibeHeading>
        <VibeDesc>
          Building my music industry career through B2B marketing at Doles Music.
          Open to artist marketing, artist operation, live touring, events, or label strategy roles.
          Let's connect!
        </VibeDesc>
        <VibeContactLinks>
          <VibeContactBtn
            href="mailto:harshrathore7514@gmail.com?subject=Let's%20Connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={18} /> Email
          </VibeContactBtn>
          <VibeContactBtn
            href="https://www.linkedin.com/in/rathoreharsh-o1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} /> LinkedIn
          </VibeContactBtn>
          <VibeContactBtn
            href="https://wa.me/919460150961?text=Hi%20Harsh!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </VibeContactBtn>
          <VibeContactBtn
            onClick={onDownloadCV}
            style={{ cursor: "pointer" }}
          >
            <FaDownload size={16} /> CV
          </VibeContactBtn>
          <VibeContactSpotifyBtn
            href={spotifyProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify size={20} color="#fff" />
            <span>Music Profile</span>
          </VibeContactSpotifyBtn>
        </VibeContactLinks>
      </VibeLeft>
      <VibeRight>
        <VibeRightRow>
          <FaSpotify size={48} color="#1db954" />
          <SpotifyWave>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="18"
                width="4"
                height="8"
                rx="2"
                fill="#1db954"
                opacity="0.7"
              >
                <animate
                  attributeName="height"
                  values="8;18;8"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values="18;8;18"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="11"
                y="14"
                width="4"
                height="12"
                rx="2"
                fill="#1db954"
                opacity="0.8"
              >
                <animate
                  attributeName="height"
                  values="12;22;12"
                  dur="1.1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values="14;2;14"
                  dur="1.1s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="19"
                y="20"
                width="4"
                height="6"
                rx="2"
                fill="#1db954"
                opacity="0.6"
              >
                <animate
                  attributeName="height"
                  values="6;16;6"
                  dur="1.3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values="20;10;20"
                  dur="1.3s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="27"
                y="16"
                width="4"
                height="10"
                rx="2"
                fill="#1db954"
                opacity="0.9"
              >
                <animate
                  attributeName="height"
                  values="10;20;10"
                  dur="1.05s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values="16;0;16"
                  dur="1.05s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </SpotifyWave>
          <InspiredBy>Inspired by Spotify</InspiredBy>
        </VibeRightRow>
      </VibeRight>
    </StyledVibeCard>
  );
});

export default VibeCard;
