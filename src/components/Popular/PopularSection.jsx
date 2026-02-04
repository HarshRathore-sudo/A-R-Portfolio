import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const StyledPopularSection = styled.div`
  flex: 2;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const PopularTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 18px;
`;

const PopularList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PopularRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-radius: 8px;
  transition: background 0.2s;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#232323" : "transparent")};
  &:hover {
    background: #232323;
  }
  &:hover .play-overlay {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  @media (max-width: 600px) {
    padding: 8px 0;
    gap: 8px;
  }
`;

const PopNumWrapper = styled.div`
  width: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 24px;
  }
`;

const PopNum = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #b3b3b3;
  font-weight: 500;
  transition: opacity 0.2s ease;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 10;
  pointer-events: none;
`;

const CoverWrapper = styled.div`
  position: relative;
  margin: 0 18px;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const PopCover = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.7);
  }
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const PopTitle = styled.div`
  flex: 2;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  @media (max-width: 600px) {
    flex: 1;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function PopularSection({ popular, activeIdx, onRowClick }) {
  return (
    <StyledPopularSection>
      <PopularTitle>Popular</PopularTitle>
      <PopularList>
        {popular.map((item, idx) => (
          <PopularRow
            key={item.id}
            $active={activeIdx === idx}
            onClick={() => onRowClick(idx)}
          >
            <PopNumWrapper>
              <PopNum className="pop-num">{idx + 1}</PopNum>
            </PopNumWrapper>
            <CoverWrapper>
              <PopCover src={item.cover} alt={item.title} />
              <PlayOverlay className="play-overlay">
                <FaPlay />
              </PlayOverlay>
            </CoverWrapper>
            <PopTitle>{item.title}</PopTitle>
          </PopularRow>
        ))}
      </PopularList>
    </StyledPopularSection>
  );
}

export default PopularSection;

