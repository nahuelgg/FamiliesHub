import React from 'react';
import { Typography, Button, Space } from 'antd';
import {
  DownOutlined,
  PlayCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import LogoImage from '../components/LogoImage';

const { Title, Text, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  const scrollToHistoria = () => {
    const el = document.getElementById('historia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="graffiti-texture"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(26, 122, 26, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.95) 0%, #000 100%)
        `,
      }}
    >
      {/* Patrón de fondo estilo graffiti - cuadrícula pandillera */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(34, 197, 94, 0.15) 40px,
              rgba(34, 197, 94, 0.15) 41px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(34, 197, 94, 0.15) 40px,
              rgba(34, 197, 94, 0.15) 41px
            )
          `,
        }}
      />

      {/* Líneas decorativas laterales con glow */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: 'linear-gradient(180deg, transparent, #22c55e, transparent)',
          opacity: 0.4,
          boxShadow: '2px 0 20px rgba(34, 197, 94, 0.2)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: 'linear-gradient(180deg, transparent, #22c55e, transparent)',
          opacity: 0.4,
          boxShadow: '-2px 0 20px rgba(34, 197, 94, 0.2)',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: 900,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="animate-sprayFade"
          style={{
            margin: '0 auto 20px',
            maxWidth: 'min(220px, 50vw)',
            filter: 'drop-shadow(0 0 40px rgba(34, 197, 94, 0.6))',
          }}
        >
          <LogoImage
            src="/logo nuevo.png"
            width="100%"
            height="auto"
            style={{
              display: 'block',
              filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.5)) contrast(1.1)',
            }}
          />
        </div>

        {/* Etiqueta superior */}
        <div
          className="animate-fadeInUp spray-border"
          style={{
            display: 'inline-block',
            padding: '8px 24px',
            border: '2px solid rgba(34, 197, 94, 0.4)',
            marginBottom: 30,
            background: 'rgba(34, 197, 94, 0.08)',
            letterSpacing: 4,
          }}
        >
          <Text style={{ color: '#22c55e', fontSize: 13, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
            Grove Street • Rotonda de Grove Street
          </Text>
        </div>

        {/* Título principal con efecto neón pulsante */}
        <Title
          className="animate-neonPulse"
          style={{
            fontSize: 'clamp(32px, 8vw, 120px)',
            fontWeight: 900,
            fontFamily: "'Anton', 'Oswald', sans-serif",
            letterSpacing: 'clamp(4px, 1.5vw, 12px)',
            textTransform: 'uppercase',
            color: '#22c55e',
            margin: 0,
            lineHeight: 1,
            textShadow: `
              0 0 7px #22c55e,
              0 0 14px #22c55e,
              0 0 28px #22c55e,
              0 0 56px #1a7a1a,
              3px 3px 0 rgba(0,0,0,0.8),
              -1px -1px 0 rgba(34,197,94,0.3)
            `,
            WebkitTextStroke: '1px rgba(34, 197, 94, 0.2)',
          }}
        >
          F A M I L I E S
        </Title>

        {/* Subtítulo */}
        <Title
          className="animate-fadeInUp"
          level={2}
          style={{
            color: '#fff',
            fontSize: 'clamp(16px, 3vw, 34px)',
            fontWeight: 700,
            fontFamily: "'Archivo Black', 'Oswald', sans-serif",
            letterSpacing: 'clamp(4px, 1.5vw, 14px)',
            textTransform: 'uppercase',
            margin: '10px 0 30px',
            opacity: 0.9,
            textShadow: '0 0 20px rgba(34, 197, 94, 0.3), 2px 2px 0 rgba(0,0,0,0.5)',
          }}
        >
          El Legado Nunca Muere
        </Title>

        {/* Descripción */}
        <Paragraph
          className="animate-fadeInUp"
          style={{
            color: '#bbb',
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            maxWidth: 700,
            margin: '0 auto 40px',
            lineHeight: 1.8,
            letterSpacing: 2,
            textTransform: 'uppercase',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
          }}
        >
          En lo profundo de la Rotonda de Grove Street, donde el verde no es solo un color sino una identidad,
          nació una nueva generación decidida a mantener viva una historia que nunca debía olvidarse.
        </Paragraph>

        {/* Botones */}
        <Space size={16} className="animate-fadeInUp" style={{ marginBottom: 60 }}>
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleOutlined />}
            onClick={scrollToHistoria}
            style={{
              height: 52,
              padding: '0 36px',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
              border: '2px solid #22c55e',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0,0,0,0.5)',
              textTransform: 'uppercase',
            }}
          >
            Conoce Nuestra Historia
          </Button>
          <Button
            size="large"
            icon={<TeamOutlined />}
            onClick={() => {
              const el = document.getElementById('miembros');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              height: 52,
              padding: '0 36px',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              borderRadius: 4,
              border: '2px solid #22c55e',
              color: '#22c55e',
              textTransform: 'uppercase',
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.15)',
            }}
          >
            Nuestros Miembros
          </Button>
        </Space>

        {/* Indicador de scroll */}
        <div
          className="animate-float"
          style={{ cursor: 'pointer' }}
          onClick={scrollToHistoria}
        >
          <DownOutlined style={{ color: '#22c55e', fontSize: 28, opacity: 0.7, textShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
