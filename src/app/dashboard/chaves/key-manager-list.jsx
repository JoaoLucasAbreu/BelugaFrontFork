'use client'

import React, { useEffect, useState } from 'react'

import { getAllAccessKeysByUser } from '@/http/access-key'

// Função para gerar chaves aleatórias (sequências de números e letras)
const generateKey = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let key = ''
  for (let i = 0; i < 16; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return key
}

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
      <span style={{ flexGrow: 1, color: '#fff' }}>
        {keyItem.visible ? keyItem.key : '••••••••••••••••'}
      </span>
      <button
        onClick={onToggleVisibility}
        style={{
          marginRight: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        {keyItem.visible ? '👁️' : '🙈'}
      </button>
      <button
        onClick={onDelete}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        🗑️
      </button>
    </div>
  )
}

export function KeyManagerList({ AccessKeys }) {
  const [keys, setKeys] = useState(
    AccessKeys.map((k) => ({ ...k, visible: false })) ?? [],
  )

  useEffect(() => {
    setKeys(AccessKeys.map((k) => ({ ...k, visible: false })) ?? [])
  }, [AccessKeys])

  // const fetchKeys = async () => {
  //   const result = await getAllAccessKeysByUser(
  //     'f66438cd-7098-4999-81cd-8c99a0989606',
  //   )
  //   setKeys(result.result || []) // Supondo que `result.result` contenha as chaves
  // }
  //
  // fetchKeys()

  // const addKey = () => {
  //   setKeys([...keys, { key: generateKey(), visible: false }])
  // }
  //
  // const deleteKey = (index) => {
  //   const newKeys = keys.filter((_, i) => i !== index)
  //   setKeys(newKeys)
  // }

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
          // onDelete={() => deleteKey(index)}
          onToggleVisibility={() => toggleVisibility(index)}
        />
      ))}
    </>
  )
}
