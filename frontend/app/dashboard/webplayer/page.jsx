"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './webplayer.module.css';

const WebPlayerPage = () => {
  const [currentVideo, setCurrentVideo] = useState('/videos/aula_1.mp4'); // Exemplo de vídeo local

  const videos = [
    { id: '1', title: 'aula_1.mp4', duration: '44min', path: '/videos/aula_1.mp4', language: '🇩🇪' },
    { id: '2', title: 'aula_2.mp4', duration: '87min', path: '/videos/aula_2.mp4', language: '🇬🇧' },
    { id: '3', title: 'aula_3.mp4', duration: '123min', path: '/videos/aula_3.mp4', language: '🇯🇵' }
  ];

  const handleVideoChange = (path) => {
    setCurrentVideo(path);
  };

  return (
    <div className={styles.container}>
      {/* Player e Chat */}
      <div className={styles.leftSection}>
        <div className={styles.playerWrapper}>
          <ReactPlayer url={currentVideo} width="100%" height="100%" controls />
        </div>
        
        {/* Caixa de Entrada e Chat */}
        <div className={styles.chatSection}>
          <input className={styles.chatInput} type="text" placeholder="Digite algo" />
          <div className={styles.chatBox}>
            <p>...</p>
          </div>
        </div>
      </div>

      {/* Lista de Vídeos */}
      <div className={styles.rightSection}>
        <h3>Meus Vídeos</h3>
        <button className={styles.translateButton}>+ Traduzir Vídeo</button>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoItem} onClick={() => handleVideoChange(video.path)}>
            <span className={styles.videoCode}>{video.id}</span>
            <span className={styles.videoTitle}>{video.title}</span>
            <span className={styles.videoDuration}>{video.duration}</span>
            <span className={styles.videoLanguage}>{video.language}</span>
            <button className={styles.addButton}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebPlayerPage;
