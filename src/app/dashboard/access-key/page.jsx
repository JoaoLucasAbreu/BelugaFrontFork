'use client'

import { HStack, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { AddKeyButton } from '@/app/dashboard/access-key/add-key-button'
import { KeyManagerList } from '@/app/dashboard/access-key/key-manager-list'
import { getAllAccessKeysByUser } from '@/http/access-key'

export default function Page() {
  const { data, refetch } = useQuery({
    queryKey: ['access-keys'],
    queryFn: () =>
      getAllAccessKeysByUser('f66438cd-7098-4999-81cd-8c99a0989606'),
  })

  return (
    <div style={{ padding: '14px 0px' }}>
      <div
        className="bg-neutral-800"
        style={{
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <HStack justify="space-between" className="mb-3">
          <Text className="text-2xl font-semibold mb-5">
            Gerenciamento de Chaves
          </Text>
          <AddKeyButton refetch={refetch} />
        </HStack>

        <KeyManagerList AccessKeys={data ?? []} refetch={refetch} />
      </div>
    </div>
  )
}
