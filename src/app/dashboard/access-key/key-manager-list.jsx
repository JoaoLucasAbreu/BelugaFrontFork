'use client'

import { IconButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaRobot } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { deleteAccessKey } from '@/http/access-key'

const KeyItem = ({ keyItem, onDelete, onToggleVisibility }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '10px',
      }}
    >
      <span className="font-semibold" style={{ flexGrow: 1, color: '#fff' }}>
        {keyItem.visible ? keyItem.key : '••••••••••••••••'}
      </span>
      {keyItem.visible ? (
        <IconButton
          onClick={onToggleVisibility}
          className="bg-teal-900 text-teal-200 mr-2 p-3  rounded-md"
        >
          <FaEye />
        </IconButton>
      ) : (
        <IconButton
          onClick={onToggleVisibility}
          className="bg-teal-900 text-teal-200 mr-2 p-3  rounded-md"
        >
          <FaEyeSlash />
        </IconButton>
      )}

      <IconButton
        onClick={onDelete}
        className="bg-teal-900 text-teal-200 mr-2 p-3  rounded-md"
      >
        <MdDelete />
      </IconButton>
    </div>
  )
}

export function KeyManagerList({ AccessKeys, refetch }) {
  const [keys, setKeys] = useState(
    AccessKeys.map((k) => ({ ...k, visible: false })) ?? [],
  )

  useEffect(() => {
    setKeys(AccessKeys.map((k) => ({ ...k, visible: false })) ?? [])
  }, [AccessKeys])

  const onDelete = async (id) => {
    try {
      await deleteAccessKey(id)
      refetch()
    } catch (error) {
      alert('Erro de rede: ' + error.message)
    }
  }

  const toggleVisibility = (index) => {
    const newKeys = keys.map((item, i) =>
      i === index ? { ...item, visible: !item.visible } : item,
    )
    setKeys(newKeys)
  }

  return (
    <>
      {keys.map((keyItem, index) => (
        <KeyItem
          key={index}
          keyItem={keyItem}
          onDelete={() => onDelete(keyItem.id)}
          onToggleVisibility={() => toggleVisibility(index)}
        />
      ))}
    </>
  )
}
