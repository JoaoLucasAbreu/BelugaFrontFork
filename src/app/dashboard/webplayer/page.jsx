'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import { ChatBox } from '@/app/dashboard/webplayer/chatbox'
import { VideoList } from '@/app/dashboard/webplayer/video-list'
import { VideoPlayer } from '@/app/dashboard/webplayer/video-player'
import styles from '@/app/dashboard/webplayer/webplayer.module.css'
import { getAllVideosByUser } from '@/http/video'

import { VideoUploaderModal } from './video-uploader-modal'

export default function Page() {
  const { data } = useQuery({
    queryKey: ['videos'],
    queryFn: () => getAllVideosByUser('f66438cd-7098-4999-81cd-8c99a0989606'),
  })

  const [openModal, setOpenModal] = useState(false)

  console.log(data)

  return (
    <>
      <div class="flex mt-5  gap-5 h-screen box-border">
        <div className={styles.leftSection}>
          <VideoPlayer />
          <ChatBox />
        </div>
        <div class="w-1/2 p-4 gap-2.5 bg-neutral-800 rounded-lg shadow-md">
          <h3>Meus Vídeos</h3>
          <button
            onClick={() => setOpenModal(true)}
            className="block my-2.5 px-5 py-4 rounded-lg bg-cyan-900 text-cyan-200 border-none cursor-pointer"
          >
            + Traduzir Vídeo
          </button>
          <VideoList />
        </div>
      </div>
      <VideoUploaderModal open={openModal} setOpen={setOpenModal} />
    </>
  )

  // return (
  //   <div style={{ padding: '14px 0px' }}>
  //     <div
  //       className="bg-neutral-800"
  //       style={{
  //         padding: '20px',
  //         borderRadius: '10px',
  //       }}
  //     >
  //       <HStack justify="space-between">
  //         <h1 style={{ marginBottom: '30px', padding: '20px 2px' }}>
  //           Gerenciamento de Chaves
  //         </h1>
  //       </HStack>
  //     </div>
  //   </div>
  // )
}
