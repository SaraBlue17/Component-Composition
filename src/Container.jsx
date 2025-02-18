import React, { useState } from 'react';

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ backgroundColor: 'white', border: '2px solid red', padding: '10px' }}>
      <h2 style={{ cursor: 'pointer' }} onClick={handleToggle}>
        {title}
      </h2>
      <div className={!collapsed ? "container-content" : "container-content-hidden"}>{children}</div>
    </div>
  );
}
