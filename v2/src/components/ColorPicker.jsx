import { useState, useRef, useEffect } from 'react';
import { SCHEMES } from '../constants/schemes';

export function ColorPicker({ currentScheme, onSchemeChange }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const colors = [
    { id: 'purple-pink', name: 'Púrpura', colors: [SCHEMES['purple-pink'].a, SCHEMES['purple-pink'].b] },
    { id: 'blue-cyan', name: 'Azul', colors: [SCHEMES['blue-cyan'].a, SCHEMES['blue-cyan'].b] },
    { id: 'emerald-teal', name: 'Esmeralda', colors: [SCHEMES['emerald-teal'].a, SCHEMES['emerald-teal'].b] },
    { id: 'orange-red', name: 'Naranja', colors: [SCHEMES['orange-red'].a, SCHEMES['orange-red'].b] }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [open]);

  return (
    <div style={{ position: 'relative' }}>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.07)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.03)',
          transition: 'all 0.2s',
          fontSize: '24px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.06)';
          e.target.style.borderColor = 'rgba(255,255,255,0.13)';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.03)';
          e.target.style.borderColor = 'rgba(255,255,255,0.07)';
          e.target.style.transform = 'translateY(0)';
        }}
        title="Cambiar color"
      >
        🎨
      </button>

      {open && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '32px',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '14px',
            padding: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 1001,
            minWidth: '180px'
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Colores
          </div>
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => {
                onSchemeChange(color.id);
                setOpen(false);
              }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${currentScheme === color.id ? color.colors[0] : 'rgba(255,255,255,0.07)'}`,
                padding: '12px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.08)';
                e.target.style.borderColor = color.colors[0];
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.04)';
                e.target.style.borderColor = currentScheme === color.id ? color.colors[0] : 'rgba(255,255,255,0.07)';
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                {color.colors.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      background: c,
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                {color.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
