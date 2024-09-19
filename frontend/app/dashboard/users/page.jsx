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
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={copyToClipboard}>
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
