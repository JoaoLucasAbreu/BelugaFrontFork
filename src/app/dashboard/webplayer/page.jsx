'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { ChatBox } from '@/app/dashboard/webplayer/chatbox'
import { VideoList } from '@/app/dashboard/webplayer/video-list'
import { VideoPlayer } from '@/app/dashboard/webplayer/video-player'
import styles from '@/app/dashboard/webplayer/webplayer.module.css'
import { getAllVideosByUser } from '@/http/video'

export default function Page() {
  const { data } = useQuery({
    queryKey: ['videos'],
    queryFn: () => getAllVideosByUser('f66438cd-7098-4999-81cd-8c99a0989606'),
  })

  console.log(data)

  return (
    <div class="flex mt-5  gap-5 h-screen box-border">
      <div className={styles.leftSection}>
        <VideoPlayer />
        <ChatBox />
      </div>
      <VideoList />
    </div>
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
