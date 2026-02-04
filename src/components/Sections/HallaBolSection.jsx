import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaChevronDown } from 'react-icons/fa';

// Styled Components
const HallaBolHook = styled.div`
  font-size: 1.25rem;
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
  padding-left: 16px;
  border-left: 2px solid #1db954;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 24px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 55fr 40fr;
  gap: 24px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 16px;
    margin: 0 -20px 24px -20px;
    padding: 0 20px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const GalleryFrame = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }
`;

const VideoFrame = styled(GalleryFrame)`
  position: relative;
  aspect-ratio: 16/9;
  cursor: pointer;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s ease;
  &:hover {
    border-color: rgba(255, 255, 255, 0.15);
  }
  &:hover .play-btn {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoPlayBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  transition: all 0.3s ease;
  svg {
    color: #fff;
    font-size: 18px;
    margin-left: 2px;
  }
`;

const TweetFrame = styled(GalleryFrame)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TweetQuote = styled.blockquote`
  font-size: 1rem;
  color: #bbb;
  font-style: italic;
  line-height: 1.7;
  margin: 0 0 16px 0;
  padding: 0;
`;

const TweetMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TweetImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;

const TweetAttribution = styled.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.4;
  span {
    display: block;
    color: #888;
    margin-top: 2px;
  }
`;

const ScrollIndicator = styled.div`
  display: none;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ScrollDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) =>
        props.$active ? "#1db954" : "rgba(255,255,255,0.2)"};
  transition: background 0.2s ease;
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  padding: 24px 0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  &:hover {
    color: #1db954;
  }
  svg {
    transition: transform 0.3s ease;
    font-size: 0.7rem;
  }
  &.expanded svg {
    transform: rotate(180deg);
  }
`;

const ExpandableContent = styled.div`
  max-height: ${(props) => (props.$expanded ? "1200px" : "0")};
  overflow: hidden;
  opacity: ${(props) => (props.$expanded ? 1 : 0.8)};
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
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

function HallaBolSection({
    item,
    playingVideoId,
    setPlayingVideoId,
    expandedSections,
    setExpandedSections,
    galleryScrollIndex,
    setGalleryScrollIndex,
    onTweetImageClick,
}) {
    return (
        <>
            {/* Hook Line - The Headline */}
            {item.hookLine && <HallaBolHook>{item.hookLine}</HallaBolHook>}

            {/* Gallery Grid - Video & Tweet side by side */}
            <GalleryGrid
                onScroll={(e) => {
                    const scrollLeft = e.target.scrollLeft;
                    const itemWidth = e.target.firstChild?.offsetWidth || 1;
                    const index = Math.round(scrollLeft / itemWidth);
                    setGalleryScrollIndex(index);
                }}
            >
                {/* Video Frame */}
                <VideoFrame
                    onClick={() =>
                        setPlayingVideoId(
                            playingVideoId === item.videoId ? null : item.videoId
                        )
                    }
                >
                    {playingVideoId === item.videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                            title="Halla Bol - RR Anthem"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                            }}
                        />
                    ) : (
                        <>
                            <VideoThumbnail
                                src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                alt="Halla Bol Video"
                                onError={(e) => {
                                    e.target.src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                                }}
                            />
                            <VideoPlayBtn className="play-btn">
                                <FaPlay />
                            </VideoPlayBtn>
                        </>
                    )}
                </VideoFrame>

                {/* Tweet Frame */}
                <TweetFrame>
                    <TweetQuote>
                        "My first ever live show: best feeling ever.
                        <br />
                        My most recent live show: best feeling ever."
                    </TweetQuote>
                    <TweetMeta>
                        {item.tweetImage && (
                            <TweetImage
                                src={item.tweetImage}
                                alt="Amit Trivedi"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onTweetImageClick(item.tweetImage);
                                }}
                            />
                        )}
                        <TweetAttribution>
                            Amit Trivedi
                            <span>after Vivacity 2023</span>
                        </TweetAttribution>
                    </TweetMeta>
                </TweetFrame>
            </GalleryGrid>

            {/* Mobile Scroll Indicator */}
            <ScrollIndicator>
                <ScrollDot $active={galleryScrollIndex === 0} />
                <ScrollDot $active={galleryScrollIndex === 1} />
            </ScrollIndicator>

            {/* Expand Button */}
            <ExpandButton
                className={expandedSections[item.id] ? "expanded" : ""}
                onClick={() =>
                    setExpandedSections((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id],
                    }))
                }
            >
                {expandedSections[item.id] ? "Hide Details" : "See How I Did It"}
                <FaChevronDown />
            </ExpandButton>

            {/* Expandable Details */}
            <ExpandableContent $expanded={expandedSections[item.id]}>
                <SectionDetails
                    dangerouslySetInnerHTML={{ __html: item.details }}
                />
            </ExpandableContent>
        </>
    );
}

export default HallaBolSection;
