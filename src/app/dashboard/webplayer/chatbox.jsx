'use client'

import { Avatar, HStack, Icon, IconButton, Spinner } from '@chakra-ui/react'
import { useAssistant } from 'ai/react'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaRobot } from 'react-icons/fa'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { IoMdPerson } from 'react-icons/io'

import { ScrollArea } from '@/components/ui/scroll-area'

export const ChatBox = ({ assistantId }) => {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: `/api/assistant/${assistantId}` })

  return (
    <div class="flex flex-col gap-2.5 bg-neutral-800 p-4 rounded-lg shadow-md">
      <ScrollArea className="bg-neutral-700 rounded-lg shadow-md h-80 overflow-scroll-auto">
        <div className="m-3 text-neutral-300 text-md">
          {messages.map((m) => (
            <div key={m.id} className="flex gap-2 mb-5">
              {m.role === 'assistant' && (
                <IconButton className="bg-teal-900 text-teal-200 mr-2 p-5 pt-7 pb-7 rounded-full">
                  <FaRobot />
                </IconButton>
              )}
              {m.role === 'user' && (
                <IconButton className="bg-neutral-500 text-neutral-200 mr-2 p-5 pt-7 pb-7 rounded-full">
                  <IoMdPerson />
                </IconButton>
              )}

              {m.role !== 'data' && <span>{m.content}</span>}

              {m.role === 'data' && (
                <>
                  {m.data.description}
                  <br />
                  <pre className={'bg-gray-200'}>
                    {JSON.stringify(m.data, null, 2)}
                  </pre>
                </>
              )}
            </div>
          ))}

          {status === 'in_progress' && <div />}
        </div>
      </ScrollArea>

      <HStack>
        <IconButton
          className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg"
          onClick={submitMessage}
          disabled={status !== 'awaiting_message' || assistantId === null}
        >
          <FaWandMagicSparkles />
        </IconButton>

        <input
          disabled={status !== 'awaiting_message' || assistantId === null}
          className="p-2.5 w-full rounded-md border-none outline-none bg-neutral-700 text-white"
          value={input}
          placeholder="Digite algo..."
          onChange={handleInputChange}
        />
      </HStack>
    </div>
  )
  // return (
  //   <div class="flex flex-col gap-2.5 bg-neutral-800 p-4 rounded-lg shadow-md">
  //     <HStack>
  //       <IconButton className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg">
  //         <FaWandMagicSparkles />
  //       </IconButton>
  //       <input
  //         className="p-2.5 rounded-md border-none outline-none bg-neutral-700 text-white"
  //         type="text"
  //         placeholder="Digite algo"
  //       />
  //     </HStack>
  //
  //     <div class="h-48 p-2.5 bg-neutral-700 rounded-md overflow-y-auto text-neutral-300">
  //       <p>...</p>
  //     </div>
  //   </div>
  // )
}
