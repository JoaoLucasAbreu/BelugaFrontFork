"use client"; // Certifique-se de que o componente está no client-side

import React, { useState } from 'react';

// Função para gerar chaves aleatórias (sequências de números e letras)
const generateKey = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 16; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};

const KeyItem = ({ keyItem, onDelete, onToggleVisibility }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
      <span style={{ flexGrow: 1, color: '#fff' }}>
        {keyItem.visible ? keyItem.key : '••••••••••••••••'}
      </span>
      <button onClick={onToggleVisibility} style={{ marginRight: '10px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }}>
        {keyItem.visible ? '👁️' : '🙈'}
      </button>
      <button onClick={onDelete} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }}>
        🗑️
      </button>
    </div>
  );
};

export default function KeyManager() {
  const [keys, setKeys] = useState([
    { key: generateKey(), visible: false },
    { key: generateKey(), visible: false },
    { key: generateKey(), visible: false },
  ]);

  const addKey = () => {
    setKeys([...keys, { key: generateKey(), visible: false }]);
  };

  const deleteKey = (index) => {
    const newKeys = keys.filter((_, i) => i !== index);
    setKeys(newKeys);
  };

  const toggleVisibility = (index) => {
    const newKeys = keys.map((item, i) => 
      i === index ? { ...item, visible: !item.visible } : item
    );
    setKeys(newKeys);
  };

  return (
    <div style={{padding: '14px 0px'}}>
      <div style={{backgroundColor: '#182237' , padding: '20px', borderRadius: '10px'}}>
        
          <h1 style={{ marginBottom: '30px' , padding: '20px 2px'}}>Gerenciamento de Chaves</h1>
          {keys.map((keyItem, index) => (
            <KeyItem
              key={index}
              keyItem={keyItem}
              onDelete={() => deleteKey(index)}
              onToggleVisibility={() => toggleVisibility(index)}
            />
          ))}
          <button 
            onClick={addKey} 
            style={{ 
              padding: '10px 20px', 
              borderRadius: '8px', 
              backgroundColor: '#00d1b2', 
              border: 'none', 
              cursor: 'pointer', 
              color: '#fff', 
              marginTop: '20px' 
            }}
          >
            + Adicionar Chave De Acesso
          </button>
        </div>
    </div>
  );
}
