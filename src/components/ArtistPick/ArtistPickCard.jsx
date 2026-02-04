import React from 'react';
import styled from 'styled-components';

const ArtistPickSectionWrapper = styled.div`
  width: 100%;
  @media (max-width: 900px) {
    margin-top: 32px;
    width: 100%;
  }
`;

const ArtistPickTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

const StyledArtistPickCard = styled.div`
  background: #232323;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  position: relative;
  height: 180px;
  width: 100%;
  overflow: hidden;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
  }
  &:hover .card-title {
    color: #1db954;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const PickImageBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const PickImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 60%,
    rgba(0, 0, 0, 0.65) 100%
  );
  z-index: 1;
`;

const ArtistPickContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const PickSpeechBubble = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  background: #fff;
  color: #181818;
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 4px 14px 4px 4px;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const PickProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const PickDesc = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  transition: color 0.2s ease;
`;

const PickMeta = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
  margin-top: 4px;
`;

function ArtistPickCard({ artistPick, profileImage, onClick, onCardClick }) {
  return (
    <ArtistPickSectionWrapper onClick={onClick}>
      <ArtistPickTitle>Artist pick</ArtistPickTitle>
      <StyledArtistPickCard onClick={onCardClick}>
        <PickImageBg src={artistPick.image} alt="Artist Pick" />
        <PickImageOverlay />
        <ArtistPickContent>
          <PickSpeechBubble>
            <PickProfileImg src={profileImage} alt="Profile" />
            Watch Halla Bol
          </PickSpeechBubble>
          <PickDesc
            className="card-title"
            style={{ marginTop: 80, fontSize: "1.15rem", fontWeight: 800 }}
          >
            RR x Amit Trivedi
          </PickDesc>
          <PickMeta>Brand Activation</PickMeta>
        </ArtistPickContent>
      </StyledArtistPickCard>
    </ArtistPickSectionWrapper>
  );
}

export { ArtistPickSectionWrapper };
export default ArtistPickCard;
