import React from 'react';
import styled from 'styled-components';
import HallaBolSection from './HallaBolSection';
import CulturalStrategySection from './CulturalStrategySection';

const ResumeSectionsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto 120px auto;
  padding: 0 20px;
`;

const StyledResumeSection = styled.section`
  padding: 72px 0 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  scroll-margin-top: 100px;
  @media (max-width: 600px) {
    padding: 48px 0 40px 0;
  }
`;

const SectionHeader = styled.h2`
  font-size: 1.75rem;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 700;
  letter-spacing: -0.02em;
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const SectionSub = styled.div`
  color: #1db954;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

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

function ResumeSections({
    popular,
    sectionRefs,
    playingVideoId,
    setPlayingVideoId,
    expandedSections,
    setExpandedSections,
    galleryScrollIndex,
    setGalleryScrollIndex,
    onTweetImageClick,
}) {
    return (
        <ResumeSectionsWrapper>
            {popular.map((item, idx) => (
                <StyledResumeSection ref={sectionRefs[idx]} id={item.section} key={item.id}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '9px' }}>
                        <SectionHeader style={{ margin: 0 }}>{item.title}</SectionHeader>
                    </div>
                    <SectionSub>
                        {item.stat} &middot; {item.duration}
                    </SectionSub>

                    {/* Enhanced Halla Bol Section - Gallery Layout */}
                    {item.id === "hallaBol" && item.videoId ? (
                        <HallaBolSection
                            item={item}
                            playingVideoId={playingVideoId}
                            setPlayingVideoId={setPlayingVideoId}
                            expandedSections={expandedSections}
                            setExpandedSections={setExpandedSections}
                            galleryScrollIndex={galleryScrollIndex}
                            setGalleryScrollIndex={setGalleryScrollIndex}
                            onTweetImageClick={onTweetImageClick}
                        />
                    ) : item.id === "culturalStrategy" && item.externalLink ? (
                        /* Cultural Strategy Section - Thumbnail with View Link */
                        <CulturalStrategySection item={item} />
                    ) : (
                        /* Standard Section Rendering */
                        <SectionDetails
                            dangerouslySetInnerHTML={{ __html: item.details }}
                        />
                    )}
                </StyledResumeSection>
            ))}
        </ResumeSectionsWrapper>
    );
}

export default ResumeSections;
