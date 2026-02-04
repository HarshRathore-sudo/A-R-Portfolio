import React from 'react';
import styled from 'styled-components';

const VideoModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition:
    opacity 0.3s,
    visibility 0.3s;
`;

const VideoModalContent = styled.div`
  position: relative;
  background: #181818;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
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

function VideoModal({ show, videoId = "clIYzqDDyY4", onClose }) {
    return (
        <VideoModalOverlay
            $show={show}
            onClick={onClose}
            style={{ pointerEvents: show ? "auto" : "none" }}
        >
            <VideoModalContent onClick={(e) => e.stopPropagation()}>
                <VideoIframe
                    src={
                        show
                            ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
                            : undefined
                    }
                    title="Halla Bol - RR Anthem"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoModalContent>
        </VideoModalOverlay>
    );
}

export default VideoModal;
