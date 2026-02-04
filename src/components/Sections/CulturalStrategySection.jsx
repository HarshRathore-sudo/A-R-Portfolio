import React from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';

const SectionDetails = styled.div`
  color: #a0a0a0;
  font-size: 1rem;
  white-space: pre-line;
  line-height: 1.8;
  strong {
    color: #fff;
    font-weight: 600;
  }
  em {
    color: #888;
    font-style: normal;
    border-left: 2px solid #333;
    padding-left: 12px;
    display: block;
    margin-top: 16px;
  }
`;

const CaseStudyLink = styled.a`
  display: block;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;
  text-decoration: none;
  max-width: 400px;
  
  &:hover .case-study-text {
    color: #1db954;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const CaseStudyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
`;

const CaseStudyOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
`;

function CulturalStrategySection({ item }) {
    return (
        <>
            <CaseStudyLink
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CaseStudyImage
                    src={item.thumbnailImage || item.cover}
                    alt={item.title}
                />
                <CaseStudyOverlay className="case-study-text">
                    <FaLink size={14} /> View Case Study →
                </CaseStudyOverlay>
            </CaseStudyLink>
            <SectionDetails
                dangerouslySetInnerHTML={{ __html: item.details }}
            />
        </>
    );
}

export default CulturalStrategySection;

