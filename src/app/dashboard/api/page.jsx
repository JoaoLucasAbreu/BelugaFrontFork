"use client";

import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Tema para o código

const CopyBlock = ({ title, description, content }) => {
  const [copied, setCopied] = useState(false);

  // Realça o código usando Prism
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '18px', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#1E1E1E' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ADD8E6', marginBottom: '12px' }}>{title}</h3>
      
      <div style={{
        fontSize: '15px',
        color: '#D3D3D3',
        backgroundColor: '#2C2C2C',
        padding: '12px',
        borderRadius: '6px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        marginBottom: '12px'
      }}>
        {description}
      </div>

      <pre className="language-javascript" style={{ padding: '8px', borderRadius: '4px', backgroundColor: '#282C34', color: '#FFFFFF' }}>
        <code className="language-javascript">{content}</code>
      </pre>
      
      <button
        onClick={copyToClipboard}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: copied ? '#4CAF50' : 'transparent',
          border: '1px solid #333',
          cursor: 'pointer',
          color: '#ADD8E6',
          marginTop: '8px'
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default function UsersPage() {
  return (
    <div style={{ padding: '14px 0px' }}>
      <div style={{ backgroundColor: '#182237', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ marginBottom: '30px', padding: '20px 2px', color: '#ADD8E6' }}>Documentação - API</h1>

        <CopyBlock 
          title="Endpoint Post - Upload de Vídeo Novo" 
          description="Este endpoint permite que o usuário faça o upload de um novo vídeo para a plataforma, onde será processado e preparado para tradução. Ele recebe o arquivo de vídeo, armazena-o e inicia as etapas iniciais de preparação, tornando-o acessível para o processo de tradução automatizada."
          content={`from openai import OpenAI
client = OpenAI()

audio_file= open("/path/to/file/audio.mp3", "rb")
transcription = client.audio.transcriptions.create(
  model="whisper-1", 
  file=audio_file
)
print(transcription.text)`}  
        />

        <CopyBlock 
          title="Endpoint Post - Requisição de Tradução"
          description="Este endpoint permite a recuperação de um vídeo previamente carregado, utilizando seu ID exclusivo. Com este recurso, o usuário pode acessar diretamente vídeos armazenados na plataforma, facilitando a visualização e outras operações relacionadas ao conteúdo específico."
          content="console.log('Este é o conteúdo do bloco 2');" 
        />

        <CopyBlock 
          title="Endpoint Post - Chat com Assistente" 
          description="Este endpoint ativa o chat assistente para um vídeo específico, oferecendo uma interface interativa onde o usuário pode conversar com um assistente virtual especializado no conteúdo do vídeo. O chat é configurado para responder a perguntas e auxiliar o usuário com informações relevantes sobre o vídeo."
          content="console.log('Este é o conteúdo do bloco 3');" 
        />
      </div>
    </div>
  );
}
