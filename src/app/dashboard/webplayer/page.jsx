'use client'

import { Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import { ChatBox } from '@/app/dashboard/webplayer/chatbox'
import { VideoList } from '@/app/dashboard/webplayer/video-list'
import { VideoPlayer } from '@/app/dashboard/webplayer/video-player'
import { DialogTitle } from '@/components/ui/dialog'
import { getAllVideosByUser } from '@/http/video'

import { VideoUploaderModal } from './video-uploader-modal'

export default function Page() {
  const [videoTranslation, setVideoTranslation] = useState(null)
  const [assistant, setAssistant] = useState(null)
  const [videoList, setVideoList] = useState([])

  const { data, refetch } = useQuery({
    queryKey: ['videos'],
    queryFn: () => getAllVideosByUser('f66438cd-7098-4999-81cd-8c99a0989606'),
  })

  const [openModal, setOpenModal] = useState(false)

  // useEffect(() => console.log(videoTranslation), [videoTranslation])
  // useEffect(() => console.log(assistant), [assistant])

  return (
    <>
      <div className="flex mt-5 gap-5 h-screen box-border">
        <div className="flex flex-col gap-[15px] w-2/5">
          <VideoPlayer />
          <ChatBox />
        </div>
        <div className="w-3/5 p-4 gap-2.5 bg-neutral-800 rounded-lg shadow-md">
          <Text className="text-2xl font-semibold mb-5">Meus vídeos</Text>
          <button
            onClick={() => setOpenModal(true)}
            className="block my-2.5 px-5 py-4 rounded-lg bg-cyan-900 text-cyan-200 border-none cursor-pointer"
          >
            + Traduzir Vídeo
          </button>
          <VideoList
            videos={data ?? []}
            setVideoTranslation={setVideoTranslation}
            setAssistant={setAssistant}
          />
        </div>
      </div>
      <VideoUploaderModal
        open={openModal}
        setOpen={setOpenModal}
        refecth={refetch}
      />
    </>
  )
}
