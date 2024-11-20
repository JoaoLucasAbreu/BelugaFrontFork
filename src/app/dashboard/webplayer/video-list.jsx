'use client'

import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

import styles from './webplayer.module.css'

export const VideoList = () => {
  const videos = [
    {
      id: '1',
      title: 'aula_1.mp4',
      duration: '44min',
      path: '/videos/aula_1.mp4',
      language: '🇩🇪',
    },
    {
      id: '2',
      title: 'aula_2.mp4',
      duration: '87min',
      path: '/videos/aula_2.mp4',
      language: '🇬🇧',
    },
    {
      id: '3',
      title: 'aula_3.mp4',
      duration: '123min',
      path: '/videos/aula_3.mp4',
      language: '🇯🇵',
    },
  ]
  //
  // const handleVideoChange = (path) => {
  //   setCurrentVideo(path)
  // }

  return (
    <>
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex items-center mt-2.5 p-2.5 bg-neutral-700 rounded-md mb-1 text-neutral-300"
          // onClick={() => handleVideoChange(video.path)}
        >
          <span className={styles.videoCode}>{video.id}</span>
          <span className={styles.videoTitle}>{video.title}</span>
          <span className={styles.videoDuration}>{video.duration}</span>

          <span className={styles.videoLanguage}>{video.language}</span>
          <IconButton className="bg-cyan-900 text-cyan-200 p-5 pt-7 pb-7 rounded-lg">
            <FaPlay className="h-3.5" />
          </IconButton>
        </div>
      ))}
    </>
  )
}
