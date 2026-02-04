import React from 'react';
import styled from 'styled-components';
import {
  FaCheckCircle,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaListUl,
  FaMobileAlt,
  FaExpand,
  FaSearch,
} from 'react-icons/fa';

const StyledFooterPlayer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #181818;
  border-top: 1px solid #232323;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 10px 32px;
  /* iOS safe area support */
  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
  height: 68px;
  z-index: 100;
  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.12);
  @media (max-width: 768px) {
    padding: 8px 16px;
    padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px));
    height: auto;
    min-height: 60px;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 320px;
  @media (max-width: 768px) {
    min-width: unset;
    flex: 1;
    gap: 12px;
    max-width: calc(100% - 40px);
  }
`;

const PlayerCover = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const PlayerText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    min-width: 0;
    flex: 1;
  }
`;

const PlayerTitle = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    &:hover {
      overflow: visible;
      position: relative;
      z-index: 101;
      background: #181818;
      padding: 4px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

const PlayerSub = styled.div`
  color: #b3b3b3;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    &:hover {
      overflow: visible;
      position: relative;
      z-index: 101;
      background: #181818;
      padding: 4px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

const PlayerCheck = styled(FaCheckCircle)`
  color: #1db954;
  margin-left: 8px;
`;

const PlayerCenter = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    margin-top: 8px;
  }
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 4px;
  height: 28px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PlayerButton = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  font-size: 1.15rem;
  font-weight: 400;
  cursor: pointer;
  padding: 0 8px;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.2s,
    transform 0.2s;
  &:hover {
    color: #1db954;
    transform: scale(1.15);
  }
`;

const PlayerPlayButton = styled(PlayerButton)`
  color: #1db954;
  font-size: 1.25rem;
  height: 28px;
  width: 28px;
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  &:hover {
    color: #fff;
    background: none;
  }
`;

const PlayerProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 700px;
  max-width: 70vw;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const PlayerTime = styled.div`
  color: #e0ffe0;
  font-size: 0.8rem;
  min-width: 44px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
`;

const PlayerBar = styled.div`
  flex: 1;
  height: 4px;
  background: #333;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const PlayerBarProgress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(90deg, #1db954 0%, #fff 100%);
  border-radius: 3px;
  height: 100%;
`;

const PlayerRight = styled.div`
  min-width: 320px;
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PlayerVolumeBar = styled.div`
  width: 90px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  position: relative;
`;

const PlayerVolumeProgress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  border-radius: 2px;
  height: 100%;
  width: 60%;
`;

function FooterPlayer({ activeItem, scrollPercent, formatTime, totalSeconds, currentSeconds }) {
  return (
    <StyledFooterPlayer>
      <PlayerInfo>
        <PlayerCover
          src={activeItem.cover}
          alt={activeItem.title}
        />
        <PlayerText>
          <PlayerTitle>Experience Timeline</PlayerTitle>
          <PlayerSub>Scroll to navigate</PlayerSub>
        </PlayerText>
        <PlayerCheck size={18} />
      </PlayerInfo>
      <PlayerCenter>
        <PlayerControls>
          <PlayerButton>
            <FaRandom />
          </PlayerButton>
          <PlayerButton>
            <FaStepBackward />
          </PlayerButton>
          <PlayerPlayButton>
            <FaPause />
          </PlayerPlayButton>
          <PlayerButton>
            <FaStepForward />
          </PlayerButton>
        </PlayerControls>
        <PlayerProgressRow>
          <PlayerTime>{formatTime(currentSeconds)}</PlayerTime>
          <PlayerBar>
            <PlayerBarProgress
              style={{ width: `${Math.round(scrollPercent * 100)}%` }}
            />
          </PlayerBar>
          <PlayerTime>{formatTime(totalSeconds)}</PlayerTime>
        </PlayerProgressRow>
      </PlayerCenter>
      <PlayerRight>
        <FaListUl />
        <FaSearch />
        <FaMobileAlt />
        <PlayerVolumeBar>
          <PlayerVolumeProgress />
        </PlayerVolumeBar>
        <FaExpand />
      </PlayerRight>
    </StyledFooterPlayer>
  );
}

export default FooterPlayer;
