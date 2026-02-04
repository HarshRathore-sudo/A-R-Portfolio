import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// Global Styles
import GlobalStyle from "./styles/GlobalStyles";

// Data
import {
  defaultPopular,
  refMap,
  artistPick,
  profileImage,
  spotifyProfile,
} from "./data/portfolioData";

// Components
import { StickyHeader, HeaderGradient } from "./components/Header";
import AnnouncementBanner from "./components/Banner/AnnouncementBanner";
import PopularSection from "./components/Popular/PopularSection";
import ArtistPickCard from "./components/ArtistPick/ArtistPickCard";
import FeaturedProjectCard from "./components/ArtistPick/FeaturedProjectCard";
import { ResumeSections } from "./components/Sections";
import VibeCard from "./components/VibeCard/VibeCard";
import FooterPlayer from "./components/FooterPlayer/FooterPlayer";
import {
  ProfileModal,
  VideoModal,
  TweetModal,
  WhatsNewModal,
} from "./components/Modals";

// Hooks
import useScrollTracking from "./hooks/useScrollTracking";

// Styled Components for layout
const MainSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  padding: 32px 24px 64px 60px;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 20px;
    gap: 32px;
  }
`;

const ArtistPickWrapper = styled.div`
  flex: 1.5;
  min-width: 350px;
  margin-left: 32px;
  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 32px;
    width: 100%;
    min-width: unset;
  }
`;

function App() {
  const [popular, setPopular] = useState(defaultPopular);
  const [sectionRefs, setSectionRefs] = useState([]);
  const vibeCardRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [tweetModalImage, setTweetModalImage] = useState(null);
  const [galleryScrollIndex, setGalleryScrollIndex] = useState(0);

  // Recent Work Showcase states
  const [showWhatsNewModal, setShowWhatsNewModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Get the featured project data (Cultural Institution Strategy)
  const featuredProject = defaultPopular.find(
    (item) => item.id === "culturalStrategy"
  );

  // Use scroll tracking hook
  const { activeIdx, scrollPercent, showSticky } =
    useScrollTracking(sectionRefs);

  // Check localStorage and show modal/banner on first visit
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWhatsNewModal");

    if (!hasSeenModal) {
      // Small delay for better UX
      setTimeout(() => setShowWhatsNewModal(true), 500);
    }

    setShowBanner(true);
  }, []);

  // Handle modal dismiss
  const handleWhatsNewModalClose = () => {
    setShowWhatsNewModal(false);
    localStorage.setItem("hasSeenWhatsNewModal", "true");
  };

  // Handle modal CTA click
  const handleWhatsNewCTA = () => {
    handleWhatsNewModalClose();
    // Find the index of culturalStrategy in popular
    const idx = popular.findIndex((item) => item.id === "culturalStrategy");
    if (idx !== -1 && sectionRefs[idx]?.current) {
      setTimeout(() => {
        sectionRefs[idx].current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Handle banner dismiss
  const handleBannerClose = () => {
    setShowBanner(false);
    localStorage.setItem("hasDismissedBanner", "true");
  };

  // Handle banner link click - scrolls to section
  const handleBannerClick = () => {
    const idx = popular.findIndex((item) => item.id === "culturalStrategy");
    if (idx !== -1 && sectionRefs[idx]?.current) {
      sectionRefs[idx].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Initialize section refs
  useEffect(() => {
    setSectionRefs(popular.map(() => React.createRef()));
  }, [popular]);

  // Handle URL parameters and update popular items
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get("ref");

    if (refParam && refMap[refParam]) {
      // Create a map of the reference items by their id for easy lookup
      const refItemsMap = refMap[refParam].reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      // Merge reference items with default items
      const updatedPopular = defaultPopular.map((item) => {
        // If the item exists in the reference map, merge it with the default item
        const refItem = refItemsMap[item.id];
        if (refItem) {
          return {
            ...item, // Keep all default properties
            cover: refItem.cover, // Override only the cover
          };
        }
        return item;
      });

      setPopular(updatedPopular);
    }
  }, []);

  // Scroll to section on click
  const handleRowClick = (idx) => {
    if (sectionRefs[idx]?.current) {
      const element = sectionRefs[idx].current;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle artist pick click
  const handleArtistPickClick = () => {
    // Find the index of the Vivacity section (hustleTape)
    const vivacityIndex = popular.findIndex((item) => item.id === "hustleTape");
    if (vivacityIndex !== -1) {
      handleRowClick(vivacityIndex);
    }
  };

  // Scroll to vibe card section
  const handleFollowClick = () => {
    if (vibeCardRef.current) {
      vibeCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate time for progress bar (0:00 to 4:11)
  const totalSeconds = 4 * 60 + 11;
  const currentSeconds = Math.round(scrollPercent * totalSeconds);
  const formatTime = (s) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle CV download
  const handleDownloadCV = (e) => {
    if (e) e.preventDefault();
    const link = document.createElement("a");
    link.href = "/assets/Harsh_Rathore_CV.pdf";
    link.setAttribute("download", "Harsh_Rathore_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle tweet image click
  const handleTweetImageClick = (image) => {
    setTweetModalImage(image);
    setShowTweetModal(true);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
        if (showWhatsNewModal) {
          handleWhatsNewModalClose();
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showWhatsNewModal]);

  return (
    <>
      <GlobalStyle />

      {/* Announcement Banner */}
      <AnnouncementBanner
        show={showBanner}
        onClick={handleBannerClick}
        onClose={handleBannerClose}
      />

      {/* Sticky Header */}
      <StickyHeader
        show={showSticky}
        showBanner={showBanner}
        profileImage={profileImage}
        spotifyProfile={spotifyProfile}
        onProfileClick={handleProfileClick}
        onDownloadCV={handleDownloadCV}
        onFollowClick={handleFollowClick}
      />

      {/* Header Gradient */}
      <HeaderGradient
        profileImage={profileImage}
        spotifyProfile={spotifyProfile}
        onProfileClick={handleProfileClick}
        onDownloadCV={handleDownloadCV}
        onFollowClick={handleFollowClick}
      />

      {/* Main Section */}
      <MainSection>
        <PopularSection
          popular={popular}
          activeIdx={activeIdx}
          onRowClick={handleRowClick}
        />
        <ArtistPickWrapper>
          <ArtistPickCard
            artistPick={artistPick}
            profileImage={profileImage}
            onClick={handleArtistPickClick}
            onCardClick={() => {
              handleArtistPickClick();
              setShowVideoModal(true);
            }}
          />
          <FeaturedProjectCard />
        </ArtistPickWrapper>
      </MainSection>

      {/* Resume Sections */}
      <ResumeSections
        popular={popular}
        sectionRefs={sectionRefs}
        playingVideoId={playingVideoId}
        setPlayingVideoId={setPlayingVideoId}
        expandedSections={expandedSections}
        setExpandedSections={setExpandedSections}
        galleryScrollIndex={galleryScrollIndex}
        setGalleryScrollIndex={setGalleryScrollIndex}
        onTweetImageClick={handleTweetImageClick}
      />

      {/* Vibe Card (Contact Section) */}
      <VibeCard
        ref={vibeCardRef}
        spotifyProfile={spotifyProfile}
        onDownloadCV={handleDownloadCV}
      />

      {/* Footer Player */}
      <FooterPlayer
        activeItem={popular[activeIdx]}
        scrollPercent={scrollPercent}
        formatTime={formatTime}
        totalSeconds={totalSeconds}
        currentSeconds={currentSeconds}
      />

      {/* Modals */}
      <ProfileModal
        show={showModal}
        profileImage={profileImage}
        onClose={handleCloseModal}
      />

      <VideoModal
        show={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      <TweetModal
        show={showTweetModal}
        image={tweetModalImage}
        onClose={() => setShowTweetModal(false)}
      />

      <WhatsNewModal
        show={showWhatsNewModal}
        featuredProject={featuredProject}
        onClose={handleWhatsNewModalClose}
        onCTA={handleWhatsNewCTA}
      />
    </>
  );
}

export default App;
