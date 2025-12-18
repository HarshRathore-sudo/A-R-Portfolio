import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSpotify, FaEnvelope, FaLinkedin, FaCheckCircle, FaRandom, FaStepBackward, FaStepForward, FaPause, FaListUl, FaMobileAlt, FaExpand, FaSearch, FaWhatsapp, FaTimes, FaPlay, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Reference map for different versions
const refMap = {
  "representMgmt": [
    {
      id: 'micCheck',
      cover: '/assets/represent-mgmt/1.png'
    },
    {
      id: 'roots',
      cover: '/assets/represent-mgmt/3.png'
    },
    {
      id: 'hustleTape',
      cover: '/assets/represent-mgmt/4.png'
    },
    {
      id: 'finalVerse',
      cover: '/assets/represent-mgmt/2.png'
    },
  ]
};
// Real Spotify verified badge SVG

const profileImage = '/assets/profile.jpeg';
const spotifyProfile = 'https://open.spotify.com/user/31ajgbpqwxp4t5kvc33cly6ylqoe?si=54c518a8437c4dc2';

// Default values for popular items
const defaultPopular = [
  {
    id: 'hallaBol',
    cover: '/assets/default/1.png',
    title: 'The Halla Bol Play',
    stat: 'RR x Amit Trivedi x Vivacity',
    duration: 'Brand Activation',
    section: 'halla-bol-section',
    videoId: 'clIYzqDDyY4',
    tweetImage: '/assets/amit-trivedi-tweet.jpg',
    hookLine: 'Turned a booking into a brand moment for Rajasthan Royals',
    details: `<strong>How I Turned a Booking Into a Brand Moment</strong><br><br>While negotiating Amit Trivedi's performance for Vivacity 2023, I found out he was creating the official Rajasthan Royals anthem called Halla Bol.<br><br><strong>The Pitch:</strong> I went to RR's team with an idea - why not reveal the anthem LIVE at our festival? Film the official music video during the performance with 6000+ fans as the backdrop.<br><br><strong>The Execution:</strong><br>- Coordinated between RR marketing, Amit Trivedi's management, and our production team<br>- Built a branded experience zone for RR at the venue<br>- Managed the live shoot logistics alongside the concert production<br>- Created a moment that gave RR authentic fan content, and gave our festival national visibility<br><br><em>This is what I do - spot opportunities others miss and execute them on the ground.</em>`
  },
  {
    id: 'festivalCommand',
    cover: '/assets/default/2.png',
    title: 'Festival Command',
    stat: '10+ Artists | Rs 30L+ Sponsorships',
    duration: 'Vivacity 2021-2023',
    section: 'festival-section',
    details: `<strong>Artist Relations and Live Production Lead</strong><br><br><strong>The Numbers:</strong><br>- 10+ artists booked across hip-hop, indie, EDM, and Bollywood<br>- Rs 5L to Rs 25L artist fee negotiations<br>- Rs 30L+ in sponsorships secured (Rajasthan Royals, Okinawa, Linc and more)<br>- 6000+ capacity multi-day festival<br><br><strong>What I Actually Did:</strong><br>- Negotiated contracts, technical riders, hospitality requirements<br>- Built relationships with booking agents and artist managers<br>- Coordinated sound, lighting, stage production teams<br>- Managed green room operations and artist experience<br>- Handled crisis management in real-time (power cuts, delayed flights, last-minute rider changes)<br><br><strong>Key Learning:</strong> Artists remember how you treat them, not just what you paid them. The green room experience, the attention to their rider, the respect for their time - that is what gets you callbacks.`
  },
  {
    id: 'developerEdge',
    cover: '/assets/default/3.png',
    title: 'The Developer Edge',
    stat: 'Tech x Music',
    duration: 'Competitive Advantage',
    section: 'developer-section',
    details: `<strong>Why a Software Developer in Music?</strong><br><br>Most people in music do not understand tech. Most techies do not understand music. I am the bridge.<br><br><strong>What I Bring:</strong><br>- Analyze streaming data and spot growth patterns others miss<br>- Build artist websites, EPKs, and digital experiences from scratch<br>- Understand how Spotify's algorithm actually works<br>- Automate marketing workflows that take others hours<br>- Bridge between creative teams and tech teams<br><br><strong>Perfect For:</strong> Digital-first labels, music tech startups, data-driven A&R teams, and anyone who needs someone who thinks in both code and culture.<br><br><em>In an industry going digital, being tech-native is not optional anymore.</em>`
  },
  {
    id: 'dolesMusic',
    cover: '/assets/default/4.png',
    title: 'Building at Doles Music',
    stat: 'Rs 22L+ Revenue | 3 Verticals',
    duration: '2024-Present',
    section: 'doles-section',
    details: `<strong>Music Business from the Inside</strong><br><br>Currently building the music business at Doles Music across three verticals:<br><br><strong>B2C Music Production (Rs 22L+ this year):</strong><br>- End-to-end music creation: lyrics, composition, BGM, mixing, mastering<br>- Meta ads targeting indie artists and aspiring musicians<br>- Average project value: Rs 40K<br><br><strong>B2B Sync and Production:</strong><br>- Approaching ad agencies and production houses for background scores<br>- Pitching to labels for co-production opportunities<br>- Building relationships in the advertising music space<br><br><strong>Custom Songs Vertical (New Launch):</strong><br>- Wedding songs, anniversary gifts, brand anthems<br>- Partnership pipeline with wedding planners and photographers<br>- Deals in progress<br><br><em>I am not just doing marketing - I am helping build a music business from scratch.</em>`
  }
];
const artistPick = {
  image: '/assets/viva-logo.jpeg',
  desc: 'Halla Bol - RR x Amit Trivedi',
  meta: 'The brand moment I created at Vivacity'
};


const GlobalStyle = createGlobalStyle`
  body {
    background: #181818;
    margin: 0;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #fff;
  }
`;

const StickyHeader = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rgba(78, 44, 44, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 6px 32px;
  height: 60px;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(${props => props.$show ? '0' : '-100%'});
  @media (max-width: 768px) {
    padding: 6px 16px;
    gap: 12px;
  }
`;
const StickyProfile = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #232323;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
const StickyName = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 4px;
  }
`;
const StickySpotifyBtn = styled.a`
  background: #1db954cc;
  color: #181818;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-left: 12px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(30,185,84,0.13);
  &:hover { background: #fff; color: #1db954; box-shadow: 0 4px 16px #1db95433; }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
    margin-left: 8px;
  }
`;
const StickyFollowBtn = styled.button`
  background: #fff;
  color: #1db954;
  border: none;
  border-radius: 999px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 12px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover { background: #1db954; color: #fff; }
  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.9rem;
    margin-left: 8px;
  }
`;

const HeaderGradient = styled.div`
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
  align-items: flex-end;
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
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
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
    margin-top: 20px;
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
  box-shadow: 0 2px 8px rgba(30,185,84,0.13);
  margin-top: 18px;
  transition: background 0.2s, color 0.2s;
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
  transition: background 0.2s, color 0.2s;
  &:hover { background: #1db954; color: #fff; }
`;

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

const PopularSection = styled.div`
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
  background: ${({ $active }) => $active ? '#232323' : 'transparent'};
  &:hover {
    background: #232323;
  }
  @media (max-width: 600px) {
    padding: 8px 0;
    gap: 8px;
  }
`;

const PopNum = styled.div`
  width: 32px;
  text-align: right;
  font-size: 1rem;
  color: #b3b3b3;
  font-weight: 500;
  @media (max-width: 600px) {
    width: 24px;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const PopCover = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  margin: 0 18px;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin: 0;
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

const ArtistPickSection = styled.div`
  flex: 1;
  margin-left: 32px;
  @media (max-width: 900px) {
    margin-left: 0;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  z-index: 2;
`;
const PickProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
`;
const PickImageOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%);
  z-index: 1;
`;

const ArtistPickCard = styled.div`
  background: #232323;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  ${'' /* width: 100%; */}
  min-height: 220px;
  width: 100%;
  overflow: hidden;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.24);
  }
  @media (max-width: 768px) {
    height: 240px;
  }
  @media (max-width: 480px) {
    height: 200px;
  }
`;

const PickImageBg = styled.img`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
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

const PickDesc = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
`;

const PickMeta = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
  margin-top: 4px;
`;

const ResumeSections = styled.div`
  max-width: 900px;
  margin: 0 auto 120px auto;
  padding: 0 20px;
`;

const ResumeSection = styled.section`
  padding: 72px 0 56px 0;
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

// ============================================
// HALLA BOL SECTION - Gallery Canvas Design
// ============================================

// The main hook line - appears as headline above the gallery
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

// Gallery container - holds video and tweet side by side
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

// Individual gallery frame - thin border, clean
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

// Video frame with subtle inset shadow
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

// Tweet frame - text content with image
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

// Mobile scroll indicator dots
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
  background: ${props => props.$active ? '#1db954' : 'rgba(255,255,255,0.2)'};
  transition: background 0.2s ease;
`;

// Expand button - visible but elegant
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
    // background: rgba(30, 185, 84, 0.08);
  }
  svg {
    transition: transform 0.3s ease;
    font-size: 0.7rem;
  }
  &.expanded svg {
    transform: rotate(180deg);
  }
`;

// Expandable content container
const ExpandableContent = styled.div`
  max-height: ${props => props.$expanded ? '1200px' : '0'};
  overflow: hidden;
  opacity: ${props => props.$expanded ? 1 : 0.8};
  transition: max-height 0.4s ease, opacity 0.3s ease;
`;

const SectionFadeIn = styled.div`
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const VibeCard = styled.div`
  max-width: 900px;
  margin: 72px auto 110px auto;
  padding: 64px 56px 56px 56px;
  background: linear-gradient(120deg, rgba(24,24,24,0.92) 60%, rgba(30,185,84,0.10) 100%);
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-shadow: 0 8px 48px 0 rgba(30,185,84,0.18), 0 1.5px 16px 0 rgba(0,0,0,0.13);
  border: 2.5px solid rgba(30,185,84,0.22);
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 32px 20px;
    margin: 40px 20px 140px 20px;
    border-radius: 20px;
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
  color: #1DB954;
  margin-bottom: 0;
  text-align: left;
  letter-spacing: 0.01em;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;
const VibeDesc = styled.div`
  color: #e0ffe0;
  font-size: 1.08rem;
  font-weight: 500;
  text-align: left;
  max-width: 600px; // Increase this value
  min-width: 400px; // Optionally set a min-width
  margin: 18px 0 0 0;
  opacity: 0.92;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
`;
const VibeContactLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;
const VibeContactBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255,255,255,0.07);
  color: #1db954;
  font-weight: 700;
  border-radius: 999px;
  padding: 7px 0;
  font-size: 0.93rem;
  text-decoration: none;
  box-shadow: 0 1.5px 8px rgba(30,185,84,0.08);
  border: 1.5px solid rgba(80,255,180,0.10);
  min-width: 100px;
  flex: 1;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s;
  &:hover {
    background: #1db954;
    color: #fff;
    box-shadow: 0 0 14px #1db95444;
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    width: 100%;
    min-width: unset;
    padding: 12px 0;
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
    width: 100%;
    max-width: unset;
    white-space: normal;
  }
`;
const VibeRight = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    margin-top: 32px;
    min-height: 120px;
    justify-content: center;
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
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
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

const FooterPlayer = styled.div`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  background: #181818;
  border-top: 1px solid #232323;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px 10px 32px;
  height: 68px;
  z-index: 100;
  box-shadow: 0 -2px 16px rgba(0,0,0,0.12);
  @media (max-width: 768px) {
    padding: 8px 16px;
    height: auto;
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
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  transition: color 0.2s, transform 0.2s;
  &:hover { color: #1db954; transform: scale(1.15); }
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
  left: 0; top: 0; bottom: 0;
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
  left: 0; top: 0; bottom: 0;
  background: #fff;
  border-radius: 2px;
  height: 100%;
  width: 60%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  transform: ${props => props.$show ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;
`;

const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

// Floating Video Modal styles (move outside App)
const VideoModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
`;
const VideoModalContent = styled.div`
  position: relative;
  background: #181818;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  padding: 0;
  max-width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const VideoIframe = styled.iframe`
  width: 70vw;
  height: 40vw;
  max-width: 800px;
  max-height: 450px;
  min-width: 320px;
  min-height: 180px;
  border: none;
  background: #000;
  @media (max-width: 600px) {
    width: 90vw;
    height: 50vw;
    min-width: 0;
    min-height: 0;
  }
`;


function App() {
  const [popular, setPopular] = useState(defaultPopular);
  const [sectionRefs, setSectionRefs] = useState([]);
  const vibeCardRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [showTweetModal, setShowTweetModal] = useState(false);
  const [tweetModalImage, setTweetModalImage] = useState(null);
  const [galleryScrollIndex, setGalleryScrollIndex] = useState(0);

  // Initialize section refs
  useEffect(() => {
    setSectionRefs(popular.map(() => React.createRef()));
  }, [popular]);

  // Handle URL parameters and update popular items
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');

    if (refParam && refMap[refParam]) {
      // Create a map of the reference items by their id for easy lookup
      const refItemsMap = refMap[refParam].reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      // Merge reference items with default items
      const updatedPopular = defaultPopular.map(item => {
        // If the item exists in the reference map, merge it with the default item
        const refItem = refItemsMap[item.id];
        if (refItem) {
          return {
            ...item,  // Keep all default properties
            cover: refItem.cover  // Override only the cover
          };
        }
        return item;
      });

      setPopular(updatedPopular);
    }
  }, []);

  // Scroll to section on click
  const handleRowClick = idx => {
    if (sectionRefs[idx]?.current) {
      const element = sectionRefs[idx].current;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle artist pick click
  const handleArtistPickClick = () => {
    // Find the index of the Vivacity section (hustleTape)
    const vivacityIndex = popular.findIndex(item => item.id === 'hustleTape');
    if (vivacityIndex !== -1) {
      handleRowClick(vivacityIndex);
    }
  };

  // Scroll to vibe card section
  const handleFollowClick = () => {
    if (vibeCardRef.current) {
      vibeCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync active row, progress bar, and sticky header with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRefs.length === 0) return;

      const offsets = sectionRefs.map(ref => ref.current?.getBoundingClientRect().top ?? Infinity);
      const active = offsets.findIndex((top, idx) => top > 80 && (idx === 0 || offsets[idx - 1] <= 80));
      if (active === -1) {
        setActiveIdx(offsets.length - 1);
      } else {
        setActiveIdx(Math.max(0, active - 1));
      }

      // Progress bar: percent through resume sections
      const total = sectionRefs.length;
      let percent = 0;
      if (total > 1) {
        const sectionTops = sectionRefs.map(ref => ref.current?.getBoundingClientRect().top ?? 0);
        const scrollY = window.scrollY + 100;
        for (let i = 0; i < total - 1; i++) {
          if (scrollY >= sectionTops[i] && scrollY < sectionTops[i + 1]) {
            percent = (i + (scrollY - sectionTops[i]) / (sectionTops[i + 1] - sectionTops[i])) / (total - 1);
            break;
          }
        }
        if (scrollY >= sectionTops[total - 1]) percent = 1;
      }
      setScrollPercent(percent);

      // Sticky header - adjusted threshold to 180px
      setShowSticky(window.scrollY > 180);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  // Calculate time for progress bar (0:00 to 4:11)
  const totalSeconds = 4 * 60 + 11;
  const currentSeconds = Math.round(scrollPercent * totalSeconds);
  const formatTime = s => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StickyHeader $show={showSticky}>
        <StickyProfile src={profileImage} alt="Harsh Rathore" onClick={handleProfileClick} />
        <StickyName>
          Harsh Rathore
        </StickyName>
        <StickySpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer" title="Open on Spotify">
          <FaSpotify size={20} />
        </StickySpotifyBtn>
        <StickyFollowBtn onClick={handleFollowClick}>Connect</StickyFollowBtn>
      </StickyHeader>
      <HeaderGradient>
        <HeaderContent>
          <ProfileImage src={profileImage} alt="Harsh Rathore" onClick={handleProfileClick} />
          <NameBlock>
            <h1>
              Harsh Rathore
            </h1>
            <div className="tagline">Music Business | Artist Operations | Tech-Native</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer">
                <FaSpotify size={22} /> Open on Spotify
              </SpotifyBtn>
              <BigFollowBtn onClick={handleFollowClick}>Connect</BigFollowBtn>
            </div>
          </NameBlock>
        </HeaderContent>
      </HeaderGradient>
      <MainSection>
        <PopularSection>
          <PopularTitle>Popular</PopularTitle>
          <PopularList>
            {popular.map((item, idx) => (
              <PopularRow
                key={item.id}
                $active={activeIdx === idx}
                onClick={() => handleRowClick(idx)}
              >
                <PopNum>{idx + 1}</PopNum>
                <PopCover src={item.cover} alt={item.title} />
                <PopTitle>{item.title}</PopTitle>
              </PopularRow>
            ))}
          </PopularList>
        </PopularSection>
        <ArtistPickSection onClick={handleArtistPickClick}>
          <ArtistPickTitle>Artist pick</ArtistPickTitle>
          <ArtistPickCard onClick={() => { handleArtistPickClick(); setShowVideoModal(true); }}>
            <PickImageBg src={artistPick.image} alt="Artist Pick" />
            <PickImageOverlay />
            <ArtistPickContent>
              <PickSpeechBubble>
                <PickProfileImg src={profileImage} alt="Profile" />
                Watch Halla Bol
              </PickSpeechBubble>
              <PickDesc style={{ marginTop: 80, fontSize: '1.15rem', fontWeight: 800 }}>RR x Amit Trivedi</PickDesc>
              <PickMeta>Brand Activation</PickMeta>
            </ArtistPickContent>
          </ArtistPickCard>
        </ArtistPickSection>
      </MainSection>
      <ResumeSections>
        {popular.map((item, idx) => (
          <ResumeSection
            ref={sectionRefs[idx]}
            id={item.section}
            key={item.id}
          >
            <SectionHeader>{item.title}</SectionHeader>
            <SectionSub>{item.stat} &middot; {item.duration}</SectionSub>

            {/* Enhanced Halla Bol Section - Gallery Layout */}
            {item.id === 'hallaBol' && item.videoId ? (
              <>
                {/* Hook Line - The Headline */}
                {item.hookLine && (
                  <HallaBolHook>{item.hookLine}</HallaBolHook>
                )}

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
                    onClick={() => setPlayingVideoId(playingVideoId === item.videoId ? null : item.videoId)}
                  >
                    {playingVideoId === item.videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                        title="Halla Bol - RR Anthem"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%', border: 'none' }}
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
                      "My first ever live show: best feeling ever.<br />
                      My most recent live show: best feeling ever."
                    </TweetQuote>
                    <TweetMeta>
                      {item.tweetImage && (
                        <TweetImage
                          src={item.tweetImage}
                          alt="Amit Trivedi"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTweetModalImage(item.tweetImage);
                            setShowTweetModal(true);
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
                  className={expandedSections[item.id] ? 'expanded' : ''}
                  onClick={() => setExpandedSections(prev => ({
                    ...prev,
                    [item.id]: !prev[item.id]
                  }))}
                >
                  {expandedSections[item.id] ? 'Hide Details' : 'See How I Did It'}
                  <FaChevronDown />
                </ExpandButton>

                {/* Expandable Details */}
                <ExpandableContent $expanded={expandedSections[item.id]}>
                  <SectionDetails dangerouslySetInnerHTML={{ __html: item.details }} />
                </ExpandableContent>
              </>
            ) : (
              /* Standard Section Rendering */
              <SectionDetails dangerouslySetInnerHTML={{ __html: item.details }} />
            )}
          </ResumeSection>
        ))}
      </ResumeSections>
      <VibeCard ref={vibeCardRef}>
        <VibeLeft>
          <VibeHeading>Open to Music Opportunities</VibeHeading>
          <VibeDesc>
            Currently building my music industry career through B2B marketing at Doles Music.
            Open to opportunities in artist marketing, label digital strategy, or music tech.
            Got a role that needs someone who understands both artists and algorithms? Let's connect.
          </VibeDesc>
          <VibeContactLinks>
            <VibeContactBtn
              href="mailto:harshrathore7514@gmail.com?subject=Let's%20Connect%20-%20Portfolio%20Inquiry&body=Hi%20Harsh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0A%0ABest%20regards%2C"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={20} /> Email
            </VibeContactBtn>
            <VibeContactBtn href="https://www.linkedin.com/in/rathoreharsh-o1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUDuNIhi8S%2FmKFnXanotECA%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} /> LinkedIn
            </VibeContactBtn>
            <VibeContactBtn style={{ padding: '10px 15px' }} href="https://wa.me/919460150961?text=Hi%20Harsh%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} /> WhatsApp
            </VibeContactBtn>
            <VibeContactSpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer">
              <FaSpotify size={22} color="#fff" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 14, whiteSpace: 'nowrap', flexShrink: 0 }}>Music Profile</span>
            </VibeContactSpotifyBtn>
          </VibeContactLinks>
        </VibeLeft>
        <VibeRight>
          <VibeRightRow>
            <FaSpotify size={48} color="#1db954" />
            <SpotifyWave>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="18" width="4" height="8" rx="2" fill="#1db954" opacity="0.7">
                  <animate attributeName="height" values="8;18;8" dur="1.2s" repeatCount="indefinite" />
                  <animate attributeName="y" values="18;8;18" dur="1.2s" repeatCount="indefinite" />
                </rect>
                <rect x="11" y="14" width="4" height="12" rx="2" fill="#1db954" opacity="0.8">
                  <animate attributeName="height" values="12;22;12" dur="1.1s" repeatCount="indefinite" />
                  <animate attributeName="y" values="14;2;14" dur="1.1s" repeatCount="indefinite" />
                </rect>
                <rect x="19" y="20" width="4" height="6" rx="2" fill="#1db954" opacity="0.6">
                  <animate attributeName="height" values="6;16;6" dur="1.3s" repeatCount="indefinite" />
                  <animate attributeName="y" values="20;10;20" dur="1.3s" repeatCount="indefinite" />
                </rect>
                <rect x="27" y="16" width="4" height="10" rx="2" fill="#1db954" opacity="0.9">
                  <animate attributeName="height" values="10;20;10" dur="1.05s" repeatCount="indefinite" />
                  <animate attributeName="y" values="16;0;16" dur="1.05s" repeatCount="indefinite" />
                </rect>
              </svg>
            </SpotifyWave>
            <InspiredBy>Inspired by Spotify</InspiredBy>
          </VibeRightRow>
        </VibeRight>
      </VibeCard>
      <FooterPlayer>
        <PlayerInfo>
          <PlayerCover src={popular[activeIdx].cover} alt={popular[activeIdx].title} />
          <PlayerText>
            <PlayerTitle>Experience Timeline</PlayerTitle>
            <PlayerSub>Scroll to navigate</PlayerSub>
          </PlayerText>
          <PlayerCheck size={18} />
        </PlayerInfo>
        <PlayerCenter>
          <PlayerControls>
            <PlayerButton><FaRandom /></PlayerButton>
            <PlayerButton><FaStepBackward /></PlayerButton>
            <PlayerPlayButton><FaPause /></PlayerPlayButton>
            <PlayerButton><FaStepForward /></PlayerButton>
          </PlayerControls>
          <PlayerProgressRow>
            <PlayerTime>{formatTime(currentSeconds)}</PlayerTime>
            <PlayerBar>
              <PlayerBarProgress style={{ width: `${Math.round(scrollPercent * 100)}%` }} />
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
      </FooterPlayer>

      <ModalOverlay $show={showModal} onClick={handleCloseModal}>
        <ModalContent $show={showModal} onClick={e => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal}>
            <FaTimes />
          </CloseButton>
          <ModalImage src={profileImage} alt="Harsh Rathore" />
        </ModalContent>
      </ModalOverlay>

      {/* Floating YouTube Video Modal */}
      <VideoModalOverlay
        $show={showVideoModal}
        onClick={() => setShowVideoModal(false)}
        style={{ pointerEvents: showVideoModal ? 'auto' : 'none' }}
      >
        <VideoModalContent onClick={e => e.stopPropagation()}>
          <VideoIframe
            src={showVideoModal ? "https://www.youtube.com/embed/clIYzqDDyY4?autoplay=1" : undefined}
            title="Halla Bol - RR Anthem"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoModalContent>
      </VideoModalOverlay>

      {/* Tweet Image Modal */}
      <ModalOverlay
        $show={showTweetModal}
        onClick={() => setShowTweetModal(false)}
      >
        <ModalContent $show={showTweetModal} onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => setShowTweetModal(false)}>
            <FaTimes />
          </CloseButton>
          {tweetModalImage && (
            <ModalImage src={tweetModalImage} alt="Amit Trivedi Tweet" />
          )}
        </ModalContent>
      </ModalOverlay>
    </>
  );
}

export default App; 