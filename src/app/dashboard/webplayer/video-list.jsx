'use client'

import { Badge, Box, HStack, IconButton, Spacer } from '@chakra-ui/react'
import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import React from 'react'
import { FaCheck, FaPlay, FaPlus } from 'react-icons/fa'
import { FaRegCircleDot } from 'react-icons/fa6'
import { IoMdDownload } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/components/ui/accordion'
import { getFlagByLanguageCode } from '@/utils/enum/flags'

export const VideoList = ({ videos, setVideoTranslation, setAssistant }) => {
  //
  // const handleVideoChange = (path) => {
  //   setCurrentVideo(path)
  // }

  console.log('uploader', videos)

  return (
    <>
      {videos.map((video, index) => (
        <AccordionRoot key={index} collapsible defaultValue={['b']}>
          <AccordionItem key={index}>
            <Box
              position="relative"
              className="flex items-center mt-2.5 p-2.5 bg-neutral-700 rounded-md mb-1 text-neutral-300"
            >
              <AccordionItemTrigger indicatorPlacement="start">
                <HStack justifyContent="space-between" w="100%" spacing={0}>
                  <span>{video.originalName}</span>
                  <span className="text-2xl">
                    {getFlagByLanguageCode(video.originalLanguage)}
                  </span>
                  <span>
                    {/* {format( */}
                    {/*  utcToZonedTime( */}
                    {/*    parseISO(video.created), */}
                    {/*    Intl.DateTimeFormat().resolvedOptions().timeZone, */}
                    {/*  ), */}
                    {/*  'dd/MM/yyyy HH:mm', */}
                    {/* )} */}
                    {video.created}
                  </span>
                  <IconButton className="bg-cyan-900 text-cyan-200 p-5 pt-7 pb-7 rounded-lg">
                    <FaPlus className="h-3.5" />
                  </IconButton>
                </HStack>
              </AccordionItemTrigger>
            </Box>
            {video.translations?.map((translation, tIndex) => (
              <AccordionItemContent key={tIndex}>
                <Box
                  position="relative"
                  justifyContent="space-between"
                  className="flex items-center mt-0.5 py-2 px-2.5 bg-neutral-700 rounded-md mb-1 text-neutral-300"
                >
                  <span className="text-2xl">
                    {getFlagByLanguageCode(translation.language)}
                  </span>
                  <ProgressBadge status={translation.status} />
                  <span>{translation.created}</span>

                  <HStack>
                    <IconButton className="bg-cyan-900 text-cyan-200 p-5 pt-7 pb-7 rounded-lg">
                      <IoMdDownload className="h-5" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setVideoTranslation(translation.translationUrl)
                        setAssistant(video.assistantExternalId)
                      }}
                      className="bg-cyan-900 text-cyan-200 p-5 pt-7 pb-7 rounded-lg"
                    >
                      <FaPlay className="h-3.5" />
                    </IconButton>
                  </HStack>
                </Box>
              </AccordionItemContent>
            ))}
          </AccordionItem>
        </AccordionRoot>
      ))}
      {/* {videosMock.map((video) => ( */}
      {/*  <div */}
      {/*    key={video.id} */}
      {/*    className="flex items-center mt-2.5 p-2.5 bg-neutral-700 rounded-md mb-1 text-neutral-300" */}
      {/*    // onClick={() => handleVideoChange(video.path)} */}
      {/*  > */}
      {/*    <span className={styles.videoCode}>{video.id}</span> */}
      {/*    <span className={styles.videoTitle}>{video.title}</span> */}
      {/*    <span className={styles.videoDuration}>{video.duration}</span> */}

      {/*    <span className={styles.videoLanguage}>{video.language}</span> */}
      {/*    <IconButton className="bg-cyan-900 text-cyan-200 p-5 pt-7 pb-7 rounded-lg"> */}
      {/*      <FaPlus className="h-3.5" /> */}
      {/*    </IconButton> */}
      {/*  </div> */}
      {/* ))} */}
    </>
  )
}

const ProgressBadge = ({ status }) => {
  if (status === 'STARTED') {
    return (
      <Badge p={2} colorPalette="yellow">
        <FaRegCircleDot />
        EM TRADUÇÃO
      </Badge>
    )
  } else if (status === 'COMPLETED') {
    return (
      <Badge p={2} colorPalette="green">
        <FaCheck />
        TRADUZIDO
      </Badge>
    )
  } else if (status === 'FAILED') {
    return (
      <Badge p={2} colorPalette="red">
        <IoClose />
        FALHA
      </Badge>
    )
  }
}
