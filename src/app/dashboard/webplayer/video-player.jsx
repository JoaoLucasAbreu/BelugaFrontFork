'use client'

import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = () => {
  return (
    <div class="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
      <ReactPlayer
        url={'/videos/aula_1.mp4'}
        width="100%"
        height="100%"
        controls
      />
    </div>
  )
}
