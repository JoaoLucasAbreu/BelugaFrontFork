"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './webplayer.module.css';

const WebPlayerPage = () => {
  const [currentVideo, setCurrentVideo] = useState('/videos/aula_1.mp4'); // Exemplo de vídeo local

  const videos = [
    { id: '1', title: 'Aula 1', duration: '57sec', path: '/videos/aula_1.mp4' },
    { id: '2', title: 'Aula 2', duration: '87min', path: '/videos/aula_2.mp4' },
    { id: '3', title: 'Aula 3', duration: '123min', path: '/videos/aula_3.mp4' }
  ];

  const handleVideoChange = (path) => {
    setCurrentVideo(path);
  };

  return (
    <div className={styles.mainContent}>
      {/* Player fica à esquerda */}
      <div className={styles.playerWrapper}>
        <ReactPlayer url={currentVideo} width="100%" height="100%" controls />
      </div>

      {/* Lista de vídeos fica à direita */}
      <div className={styles.videoList}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={styles.videoItem}
            onClick={() => handleVideoChange(video.path)}
          >
            <span>{video.title}</span>
            <span>{video.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebPlayerPage;
