'use client'

import { HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaWandMagicSparkles } from 'react-icons/fa6'

export const ChatBox = () => {
  return (
    <div class="flex flex-col gap-2.5 bg-neutral-800 p-4 rounded-lg shadow-md">
      <HStack>
        <IconButton className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg">
          <FaWandMagicSparkles />
        </IconButton>
        <input
          class="p-2.5 rounded-md border-none outline-none bg-neutral-700 text-white"
          type="text"
          placeholder="Digite algo"
        />
      </HStack>

      <div class="h-48 p-2.5 bg-neutral-700 rounded-md overflow-y-auto text-neutral-300">
        <p>...</p>
      </div>
    </div>
  )
}
