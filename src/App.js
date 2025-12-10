import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSpotify, FaEnvelope, FaLinkedin, FaCheckCircle, FaRandom, FaStepBackward, FaStepForward, FaPause, FaListUl, FaMobileAlt, FaExpand, FaSearch, FaWhatsapp, FaTimes } from 'react-icons/fa';

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
    id: 'currentRole',
    cover: '/assets/default/1.png',
    title: 'Studio Sessions (Current Work)',
    stat: 'Music Marketing & Strategy',
    duration: '2025 to Present',
    section: 'current-section',
    details: `<strong>Music Marketing at Doles Music</strong><br><br>
    • Working across marketing, partnerships, and new strategies<br>
    • Running campaigns and collaborations for indie and commercial artists<br>
    • Managing B2B partnerships and brand collaborations for music catalog<br>
    • Bringing ideas to life that move music forward<br>
 
    <em>Currently focused on indie/electronic crossover space. Learning what makes people hit play and what keeps them listening.</em>`
 
  },
  {
    id: 'liveExperience',
    cover: '/assets/default/2.png',
    title: 'Green Room Chronicles (Live Shows)',
    stat: '6000+ capacity events',
    duration: '2021 to 2023',
    section: 'live-section',
    details: `<strong>Artist Relations & Live Production at Vivacity</strong><br><br>
    • Booked and managed 15+ artists across multiple genres (₹5L to ₹15L fee range)<br>
    • Negotiated contracts, technical riders, and hospitality arrangements<br>
    • Built relationships with booking agents and artist managers<br>
    • Secured ₹30L+ in sponsorships from brands like Rajasthan Royals<br>
    • Coordinated with sound, lighting, and stage production teams<br>
    • Handled crisis management when things went wrong (and they always do)<br><br>

    <strong>Key Learning:</strong> Artists need more than just a stage and mic. Understanding their tech requirements, green room needs, and team dynamics builds real trust. This taught me how the live music business actually works.`
  },
  {
    id: 'techAdvantage',
    cover: '/assets/default/3.png',
    title: 'Code & Chords (Tech Skills)',
    stat: 'Music + Tech intersection',
    duration: 'Competitive advantage',
    section: 'tech-section',
    details: `<strong>Why Being a Developer Helps in Music</strong><br><br>
    • Can analyze streaming data and spot growth patterns others might miss<br>
    • Build artist websites, EPKs, and digital experiences from scratch<br>
    • Understand how Spotify's algorithm works and how to work with it<br>
    • Bridge between creative and technical teams effectively<br>
    • Automate marketing workflows that usually take hours<br>
    • Deep understanding of digital platforms changing the music industry<br><br>

    <strong>Perfect for:</strong> Digital first labels, music tech startups, data driven A&R teams, and streaming platforms that need someone who gets both music and code.`
  },
  {
    id: 'vision',
    cover: '/assets/default/4.png',
    title: 'Demo Tape (Future Plans)',
    stat: 'Next 2 years',
    duration: 'Industry goals',
    section: 'vision-section',
    details: `<strong>What I Bring From Day One:</strong><br><br>
    I'm hungry to learn and haven't been worn down by industry politics yet. I grew up with streaming, so understanding Spotify and Apple Music comes naturally to me. I've managed real budgets and know how P&L works from running events.<br><br>

    I believe in putting artists first, but I also understand this is a business that needs to make money. I'm ready for the grind: late nights at shows, early morning meetings, whatever it takes to get the job done.<br><br>

    Coming from outside the traditional music industry path means I see things differently. Sometimes that fresh perspective is exactly what's needed. I'm not trying to skip steps or fake my way in. Just ready to start at the bottom and work my way up by proving myself every day.`
  }
  // {
  //   id: 'crewLove',
  //   cover: 'https://images.unsplash.com/photo-1600880292089-90e6f9287ec6?w=800',
  //   title: 'Crew Love (Team & Vendor Management)',
  //   stat: 'Teams, vendors, volunteers',
  //   duration: '2021 – 2023',
  //   section: 'crew-love-section',
  //   details: `Led large student teams and external vendors to pull off high-stakes events. Built trust, stayed cool under pressure, and kept things on beat behind the scenes.`
  // }
];
const artistPick = {
  image: '/assets/viva-logo.jpeg',
  desc: 'Vivacity - Artist Relations Bootcamp',
  meta: 'Where I learned the live music business'
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
  background: ${({$active}) => $active ? '#232323' : 'transparent'};
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
  padding: 64px 0 32px 0;
  border-bottom: 1px solid #232323;
  scroll-margin-top: 120px;
  @media (max-width: 600px) {
    padding: 40px 0 24px 0;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  color: #1db954;
  margin-bottom: 12px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SectionSub = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SectionDetails = styled.div`
  color: #b3b3b3;
  font-size: 1.1rem;
  white-space: pre-line;
  strong {
    color: #fff;
    font-weight: 600;
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
      const active = offsets.findIndex((top, idx) => top > 80 && (idx === 0 || offsets[idx-1] <= 80));
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
          if (scrollY >= sectionTops[i] && scrollY < sectionTops[i+1]) {
            percent = (i + (scrollY - sectionTops[i]) / (sectionTops[i+1] - sectionTops[i])) / (total - 1);
            break;
          }
        }
        if (scrollY >= sectionTops[total-1]) percent = 1;
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
  const formatTime = s => `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;

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
            <div className="tagline">Music Marketing • Breaking Into A&R • Tech-Savvy</div>
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
          <ArtistPickCard onClick={() => {handleArtistPickClick(); setShowVideoModal(true);}}>
            <PickImageBg src={artistPick.image} alt="Artist Pick" />
            <PickImageOverlay />
            <ArtistPickContent>
              <PickSpeechBubble>
                <PickProfileImg src={profileImage} alt="Profile" />
                Tune in to Vivacity 23
              </PickSpeechBubble>
              <PickDesc style={{marginTop: 80, fontSize: '1.15rem', fontWeight: 800}}>Vivacity</PickDesc>
              <PickMeta>Album</PickMeta>
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
            <SectionDetails dangerouslySetInnerHTML={{ __html: item.details }} />
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
            <VibeContactBtn style={{padding: '10px 15px'}} href="https://wa.me/919460150961?text=Hi%20Harsh%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} /> WhatsApp
            </VibeContactBtn>
            <VibeContactSpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer">
              <FaSpotify size={22} color="#fff" style={{ flexShrink: 0}} />
              <span style={{fontSize: 14, whiteSpace: 'nowrap', flexShrink: 0}}>Music Profile</span>
            </VibeContactSpotifyBtn>
          </VibeContactLinks>
        </VibeLeft>
        <VibeRight>
          <VibeRightRow>
            <FaSpotify size={48} color="#1db954" />
            <SpotifyWave>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="18" width="4" height="8" rx="2" fill="#1db954" opacity="0.7">
                  <animate attributeName="height" values="8;18;8" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="18;8;18" dur="1.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="11" y="14" width="4" height="12" rx="2" fill="#1db954" opacity="0.8">
                  <animate attributeName="height" values="12;22;12" dur="1.1s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="14;2;14" dur="1.1s" repeatCount="indefinite"/>
                </rect>
                <rect x="19" y="20" width="4" height="6" rx="2" fill="#1db954" opacity="0.6">
                  <animate attributeName="height" values="6;16;6" dur="1.3s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="20;10;20" dur="1.3s" repeatCount="indefinite"/>
                </rect>
                <rect x="27" y="16" width="4" height="10" rx="2" fill="#1db954" opacity="0.9">
                  <animate attributeName="height" values="10;20;10" dur="1.05s" repeatCount="indefinite"/>
                  <animate attributeName="y" values="16;0;16" dur="1.05s" repeatCount="indefinite"/>
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
        style={{pointerEvents: showVideoModal ? 'auto' : 'none'}}
      >
        <VideoModalContent onClick={e => e.stopPropagation()}>
          <VideoIframe
            src={showVideoModal ? "https://www.youtube.com/embed/E64TKUqgi_4?autoplay=1" : undefined}
            title="Vivacity 23 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoModalContent>
      </VideoModalOverlay>
    </>
  );
}

export default App; 