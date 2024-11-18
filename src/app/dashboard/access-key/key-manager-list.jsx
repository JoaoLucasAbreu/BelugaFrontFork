'use client'

import React, { useEffect, useState } from 'react'

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
