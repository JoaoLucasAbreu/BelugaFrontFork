'use client'

import 'prismjs/themes/prism-tomorrow.css' // Tema para o código

import { Text } from '@chakra-ui/react'
import Prism from 'prismjs'
import React, { useEffect, useState } from 'react'

const CopyBlock = ({ title, description, url, content }) => {
  const [copied, setCopied] = useState(false)

  // Realça o código usando Prism
  useEffect(() => {
    Prism.highlightAll()
  }, [content])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div
      style={{
        padding: '18px',
        marginBottom: '20px',
        borderRadius: '8px',
        backgroundColor: '#1E1E1E',
      }}
    >
      <Text className="text-xl font-semibold mb-5">
        <span className="text-green-500">[POST]</span> - {title}
      </Text>

      <div
        style={{
          fontSize: '15px',
          borderRadius: '6px',
          marginBottom: '15px',
        }}
        className="text-neutral-300"
      >
        {description}
      </div>

      <div className="bg-neutral-800 rounded-lg p-3 text-sm mb-3 text-neutral-300">
        {url}
      </div>

      <pre
        className="language-javascript"
        style={{
          padding: '8px',
          borderRadius: '4px',
          backgroundColor: 'rgb(38,38,38)',
          color: '#FFFFFF',
        }}
      >
        <code className="language-javascript">{content}</code>
      </pre>

      <button
        onClick={copyToClipboard}
        className="rounded-lg text-neutral-200"
        style={{
          padding: '8px 16px',
          backgroundColor: 'transparent',
          border: '1px solid #333',
          cursor: 'pointer',
          marginTop: '8px',
        }}
      >
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}

export default function UsersPage() {
  return (
    <div style={{ padding: '14px 0px' }}>
      <div className="bg-neutral-800 p-9 rounded-lg">
        <Text className="text-2xl font-semibold mb-5">Documentação - API</Text>

        <CopyBlock
          title="Traduzir Vídeo Novo"
          description="Este endpoint permite que o usuário faça o upload de um novo vídeo para a plataforma, onde será processado e preparado para tradução. Ele recebe o arquivo de vídeo, armazena-o e inicia as etapas iniciais de preparação, tornando-o acessível para o processo de tradução automatizada."
          content={`https://beluga-api.azurewebsites.net/api/translate" \\
  -H "Authorization: Bearer $BELUGA_ACCESS_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F file="@/path/to/file/german.m4a" \\
  -F model="whisper-1" \\
`}
          url="https://beluga-api.azurewebsites.net/api/translate"
        />

        <CopyBlock
          title="Chat com Assistente"
          description="Este endpoint ativa o chat assistente para um vídeo específico, oferecendo uma interface interativa onde o usuário pode conversar com um assistente virtual especializado no conteúdo do vídeo. O chat é configurado para responder a perguntas e auxiliar o usuário com informações relevantes sobre o vídeo."
          content={`https://beluga-api.azurewebsites.net/api/assistant" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $BELUGA_ACCESS_KEY" \\
  -H "OpenAI-Beta: assistants=v2" \\
  -d '{
    "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
    "name": "Math Tutor",
    "tools": [{"type": "code_interpreter"}],
    "model": "gpt-4o"
  }'`}
          url="https://beluga-api.azurewebsites.net/api/assistant"
        />
      </div>
    </div>
  )
}
