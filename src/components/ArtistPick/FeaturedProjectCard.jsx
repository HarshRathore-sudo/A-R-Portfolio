import React from 'react';
import styled from 'styled-components';

const FeaturedProjectSectionWrapper = styled.div`
  flex: 1;
  margin-left: 0;
  margin-top: 24px;
  width: 100%;
  @media (max-width: 900px) {
    margin-top: 24px;
    width: 100%;
  }
`;

const FeaturedProjectTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

const StyledFeaturedProjectCard = styled.a`
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
  text-decoration: none;
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

const FeaturedProjectImageBg = styled.img`
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

const FeaturedProjectOverlay = styled.div`
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

const FeaturedProjectContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;

const FeaturedProjectName = styled.div`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 800;
  transition: color 0.2s ease;
`;

const FeaturedProjectMeta = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
`;

function FeaturedProjectCard({
  title = "Cultural Institution Strategy",
  meta = "Artist Strategy | Digital + Live Ecosystem",
  image = "/assets/default/6.png",
  link = "https://shillong-chamber-choir-g-wh67dtr.gamma.site/"
}) {
  return (
    <FeaturedProjectSectionWrapper>
      <FeaturedProjectTitle>Featured Project</FeaturedProjectTitle>
      <StyledFeaturedProjectCard
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeaturedProjectImageBg
          src={image}
          alt={title}
        />
        <FeaturedProjectOverlay />
        <FeaturedProjectContent>
          <FeaturedProjectName className="card-title">{title}</FeaturedProjectName>
          <FeaturedProjectMeta>{meta}</FeaturedProjectMeta>
        </FeaturedProjectContent>
      </StyledFeaturedProjectCard>
    </FeaturedProjectSectionWrapper>
  );
}

export default FeaturedProjectCard;
