"use client";  // Adiciona essa linha para garantir que o componente seja Client-Side

import React, { useState } from 'react';

const CopyBlock = ({ title, content }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '20px', borderRadius: '8px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ADD8E6', marginBottom: '12px' }}>{title}</h3>
      <p>{content}</p>
      <button 
        onClick={copyToClipboard} 
        style={{ 
          padding: '8px 16px', 
          borderRadius: '20px', 
          backgroundColor: 'transparent', 
          border: '1px solid #333', 
          cursor: 'pointer', 
          color: '#ADD8E6' 
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default function UsersPage() {
  return (
    <div>
      <h1 style={{ marginBottom: '40px' }}>Documentação</h1>
      <CopyBlock title="Block 1" content="This is the content of block 1" />
      <CopyBlock title="Block 2" content="This is the content of block 2" />
      <CopyBlock title="Block 3" content="This is the content of block 3" />
      <CopyBlock title="Block 4" content="This is the content of block 4" />
      <CopyBlock title="Block 5" content="This is the content of block 5" />
      <CopyBlock title="Block 6" content="This is the content of block 6" />
    </div>
  );
}
