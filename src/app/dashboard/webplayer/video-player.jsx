'use client'

import React from 'react'
import { FaVideoSlash } from 'react-icons/fa'
import ReactPlayer from 'react-player'

import { EmptyState } from '@/components/ui/empty-state'

export const VideoPlayer = ({ video }) => {
  console.log(video)

  return (
    <div className="relative w-full bg-neutral-800 text-neutral-400 p-4 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
      {video === null ? (
        <EmptyState
          icon={<FaVideoSlash />}
          title="Vídeo não selecionado"
          description="Selecione um vídeo para exibição"
        />
      ) : (
        <ReactPlayer url={video} width="100%" height="100%" controls />
      )}
    </div>
  )
}
