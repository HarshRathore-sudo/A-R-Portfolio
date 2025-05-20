import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSpotify, FaEnvelope, FaLinkedin, FaCheckCircle, FaRandom, FaStepBackward, FaStepForward, FaPause, FaListUl, FaMobileAlt, FaExpand, FaSearch, FaWhatsapp, FaTimes } from 'react-icons/fa';

// Real Spotify verified badge SVG
const VerifiedBadge = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{marginLeft: 8, verticalAlign: 'middle'}}>
    <g>
      <path
        d="M12 2.25c.41 0 .81.21 1.03.56l1.38 2.1c.18.28.5.45.84.45h2.46c.59 0 1.07.48 1.07 1.07v2.46c0 .34.17.66.45.84l2.1 1.38c.35.22.56.62.56 1.03s-.21.81-.56 1.03l-2.1 1.38a1.07 1.07 0 0 0-.45.84v2.46c0 .59-.48 1.07-1.07 1.07h-2.46a1.07 1.07 0 0 0-.84.45l-1.38 2.1a1.07 1.07 0 0 1-1.03.56c-.41 0-.81-.21-1.03-.56l-1.38-2.1a1.07 1.07 0 0 0-.84-.45H5.25A1.07 1.07 0 0 1 4.18 16.5v-2.46a1.07 1.07 0 0 0-.45-.84l-2.1-1.38A1.07 1.07 0 0 1 1.07 12c0-.41.21-.81.56-1.03l2.1-1.38c.28-.18.45-.5.45-.84V5.25c0-.59.48-1.07 1.07-1.07h2.46c.34 0 .66-.17.84-.45l1.38-2.1A1.07 1.07 0 0 1 12 2.25z"
        fill="#1DA1F2"
      />
      <path
        d="M10.2 14.2l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.3 4.1-4.1a1 1 0 1 1 1.4 1.4l-4.8 4.8a1 1 0 0 1-1.4 0z"
        fill="#fff"
      />
    </g>
  </svg>
);

const profileImage = '/assets/profile.jpeg';
const spotifyProfile = 'https://open.spotify.com/user/31ajgbpqwxp4t5kvc33cly6ylqoe?si=54c518a8437c4dc2';

const popular = [
  {
    id: 'micCheck',
    cover: '/assets/4.png',
    title: 'Mic Check (Overview)',
    stat: 'Intro',
    duration: ' ',
    section: 'mic-check-section',
    details: `I'm Harsh Rathore — currently working as a software developer, but with roots (and heart) in the world of artist and event management.

My journey into management began in college, where I served as the fest convener. I led teams, handled budgets, booked artists, and helped brands like <strong>Rajasthan Royals</strong>, <strong>Okinawa</strong>, and <strong>Linc</strong> create campaigns that actually made sense for the crowd. It was part creative, part chaos — and I loved every second of it.

For the past 1.5 years, I've been in tech, where I've built systems, solved problems under pressure, and learned how to stay calm when things break five minutes before launch. Turns out, that's pretty handy off-stage too.

Now, I'm looking to shift back into the space I've always felt at home in. I enjoy being the one who makes things run — the organiser, the communicator, the person who handles 12 things at once and still has a backup plan (and a charger).

Simply put: I'm built for management — grounded, quick on my feet, and ready to bring creative visions to life without the drama (unless it's part of the act).`
  },
  {
    id: 'roots',
    cover: '/assets/3.png',
    title: 'Roots (Education & Background)',
    stat: 'Where it all started',
    duration: 'Up to 2022',
    section: 'roots-section',
    details: `
      My foundation blends technical education with a passion for creativity and real-world execution. While academics sharpened my problem-solving mindset, it was the hustle behind college fests that gave me a crash course in management, leadership, and people skills.<br><br>
      <strong>🎓 Education:</strong><br>
      • Completed my 12th from <strong>The Sacred Heart Convent School</strong> in Sri Ganganagar, Rajasthan.<br>
      • Pursuing B.Tech in <strong>Computer Science Engineering</strong> from <strong>The LNM Institute of Information Technology (LNMIIT)</strong>, Jaipur (Batch of 2020–2024).
    `
  },
  {
    id: 'hustleTape',
    cover: '/assets/1.png',
    title: 'The Hustle Tape (Experience)',
    stat: 'Vivacity + Fretron grind',
    duration: '2021 – Present',
    section: 'hustle-tape-section',
    details: `
      <strong>🎤 Vivacity – Fest Convener</strong><br>
      • Led the overall planning and execution of Vivacity — one of Rajasthan's biggest college cultural fests.<br>
      • Spearheaded the sponsorship and marketing team, securing <strong>INR 30 lakhs+</strong> in sponsorships — making it one of the most well-funded editions of the fest.<br>
      • Built and managed a team of <strong>100+ students</strong> across production, promotions, hospitality, and logistics.<br>
      • Managed budgeting, timelines, artist coordination, and show execution — from concept to curtain call.<br>
      • Partnered with high-profile brands like <strong>Rajasthan Royals</strong> and <strong>Okinawa</strong> to create impactful on-ground brand activations and marketing campaigns.<br>
      • Balanced creative energy with structured problem-solving — responding in real time to unexpected challenges while keeping the experience seamless for <strong>6,000+ attendees</strong>.<br><br>
  
      <strong>💻 Fretron Pvt. Ltd. – Frontend Developer Intern</strong><br>
      • Developed and optimized UI components using modern frontend frameworks.<br>
      • Worked under tight deadlines to troubleshoot and ship production-ready features.<br>
      • Collaborated closely with cross-functional teams to deliver clean, scalable, and maintainable code — gaining hands-on experience in a fast-paced tech environment.
    `
  },
  {
    id: 'finalVerse',
    cover: '/assets/5.png', // Mic drop vibes
    title: 'Final Verse (Why Hire Me)',
    stat: 'The pitch',
    duration: 'Now Streaming',
    section: 'final-verse-section',
    details: `
      Every artist drops a final verse that sticks. Consider this mine.<br><br>
      I bring a blend of creative chaos and structured execution. I've led 100+ people, handled lakhs in budgets, locked in headline acts, and delivered high-stakes events — all while staying chill enough to make Plan B look like Plan A.<br><br>
      I'm also a software developer — which means I don't just think fast, I build fast. I know how to troubleshoot when things break (on stage *or* in prod), how to keep a team together when it's all on fire, and how to keep clients, artists, and collaborators in sync.<br><br>
      Why hire me?<br>
      Because I'm the person who:<br>
      • Actually enjoys solving problems.<br>
      • Knows when to take the lead, and when to take the fall.<br>
      • Makes the vibe work — for the team, the artist, and the brand.<br><br>
      TL;DR: I'm not just "interested" in this role — I'm built for it. I've done it before. I've missed it. Now I'm back — with better playlists and better backup plans.
    `
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
  desc: 'Vivacity 2023',
  meta: 'Posted by Harsh Rathore'
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
  transform: translateY(${props => props.show ? '0' : '-100%'});
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
      flex-direction: column;
      gap: 4px;
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
  background: ${({active}) => active ? '#232323' : 'transparent'};
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
  min-height: 220px;
  overflow: hidden;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.24);
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
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  transform: ${props => props.show ? 'scale(1)' : 'scale(0.9)'};
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
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
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
  const sectionRefs = useRef(popular.map(() => React.createRef()));
  const vibeCardRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Scroll to section on click
  const handleRowClick = idx => {
    const element = sectionRefs.current[idx].current;
    const offset = 20;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
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
      const offsets = sectionRefs.current.map(ref => ref.current.getBoundingClientRect().top);
      const active = offsets.findIndex((top, idx) => top > 80 && (idx === 0 || offsets[idx-1] <= 80));
      if (active === -1) {
        setActiveIdx(offsets.length - 1);
      } else {
        setActiveIdx(Math.max(0, active - 1));
      }
      // Progress bar: percent through resume sections
      const total = sectionRefs.current.length;
      let percent = 0;
      if (total > 1) {
        const sectionTops = sectionRefs.current.map(ref => ref.current.getBoundingClientRect().top + window.scrollY);
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
  }, []);

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
      <StickyHeader show={showSticky}>
        <StickyProfile src={profileImage} alt="Harsh Rathore" onClick={handleProfileClick} />
        <StickyName>
          Harsh Rathore <span className="verified"><VerifiedBadge /></span>
        </StickyName>
        <StickySpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer" title="Open on Spotify">
          <FaSpotify size={20} />
        </StickySpotifyBtn>
        <StickyFollowBtn onClick={handleFollowClick}>Follow</StickyFollowBtn>
      </StickyHeader>
      <HeaderGradient>
        <HeaderContent>
          <ProfileImage src={profileImage} alt="Harsh Rathore" onClick={handleProfileClick} />
          <NameBlock>
            <h1>
              Harsh Rathore
              <span className="verified"><VerifiedBadge /></span>
            </h1>
            {/* <div className="tagline">{tagline}</div> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SpotifyBtn href={spotifyProfile} target="_blank" rel="noopener noreferrer">
                <FaSpotify size={22} /> Open on Spotify
              </SpotifyBtn>
              <BigFollowBtn onClick={handleFollowClick}>Follow</BigFollowBtn>
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
                active={activeIdx === idx}
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
          <ResumeSection ref={sectionRefs.current[idx]} id={item.section} key={item.id}>
            <SectionHeader>{item.title}</SectionHeader>
            <SectionSub>{item.stat} &middot; {item.duration}</SectionSub>
            <SectionDetails dangerouslySetInnerHTML={{ __html: item.details }} />
          </ResumeSection>
        ))}
      </ResumeSections>
      <VibeCard ref={vibeCardRef}>
        <VibeLeft>
          <VibeHeading>Let's Connect & Vibe!</VibeHeading>
          <VibeDesc>
            Into music, madness, or making cool things happen? Same. Whether it's curating shows, building campaigns, or trading playlists—I'm always up for a good collab.
            Got a project? An idea? A wild vision?
            Slide into my inbox—let's make it loud.
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
              <span style={{fontSize: 14, whiteSpace: 'nowrap', flexShrink: 0}}>For Intense Vibing</span>
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
            <PlayerTitle>{popular[activeIdx].title}</PlayerTitle>
            <PlayerSub>{popular[activeIdx].stat}</PlayerSub>
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
      
      <ModalOverlay show={showModal} onClick={handleCloseModal}>
        <ModalContent show={showModal} onClick={e => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal}>
            <FaTimes />
          </CloseButton>
          <ModalImage src={profileImage} alt="Harsh Rathore" />
        </ModalContent>
      </ModalOverlay>

      {/* Floating YouTube Video Modal */}
      <VideoModalOverlay show={showVideoModal}
        onClick={() => setShowVideoModal(false)}
        style={{pointerEvents: showVideoModal ? 'auto' : 'none'}}
      >
        <VideoModalContent onClick={e => e.stopPropagation()}>
          {/* <VideoModalActions>
            <VideoModalButton onClick={() => window.open('https://www.youtube.com/watch?v=E64TKUqgi_4', '_blank')}>Full Screen</VideoModalButton>
            <VideoModalButton onClick={() => setShowVideoModal(false)}>Close</VideoModalButton>
          </VideoModalActions> */}
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