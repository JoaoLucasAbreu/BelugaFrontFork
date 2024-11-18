import React from 'react'
import { useForm } from 'react-hook-form'
import { FiArrowUpRight } from 'react-icons/fi'

import { Button } from '@/components/ui/button'
import { addAccessKey } from '@/http/access-key'

export function AddKeyButton({ refetch }) {
  const { handleSubmit } = useForm()

  const onSubmit = async () => {
    try {
      await addAccessKey('f66438cd-7098-4999-81cd-8c99a0989606')
      refetch()
    } catch (error) {
      alert('Erro de rede: ' + error.message)
    }
  }

  return (
    <Button
      className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg"
      onClick={handleSubmit(onSubmit)}
    >
      + Adicionar chave
      <FiArrowUpRight />
    </Button>
  )
}
