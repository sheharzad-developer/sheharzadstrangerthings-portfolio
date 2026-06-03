import { ImageResponse } from 'next/og';

export const alt = 'Sheharzad Salahuddin — Front-End Developer & Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          border: '14px solid #b01121',
        }}
      >
        <div style={{ display: 'flex', color: '#ef4444', fontSize: 26, letterSpacing: 8 }}>
          CLASSIFIED · PERSONNEL FILE
        </div>
        <div style={{ display: 'flex', fontSize: 82, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>
          Sheharzad Salahuddin
        </div>
        <div style={{ display: 'flex', fontSize: 38, color: '#f87171', marginTop: 14 }}>
          Front-End Developer · Software Engineer
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#9ca3af', marginTop: 30 }}>
          React · Vue · Next.js · Full-Stack · AI
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#6b7280', marginTop: 46 }}>
          sheharzad-portfolio.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
