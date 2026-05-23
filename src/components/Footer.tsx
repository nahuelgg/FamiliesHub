import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import {
  EnvironmentOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import LogoImage from './LogoImage';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter
      style={{
        background: '#000000',
        borderTop: '2px solid rgba(34, 197, 94, 0.3)',
        padding: '60px 40px 30px',
        boxShadow: '0 -4px 20px rgba(34, 197, 94, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 40,
        }}
      >
        {/* Columna 1 - Marca */}
        <div>
          <Space align="center" style={{ marginBottom: 16 }}>
            <LogoImage
              src="/logo nuevo.png"
              width={44}
              height={44}
              style={{
                borderRadius: '50%',
                border: '2px solid rgba(34, 197, 94, 0.4)',
                boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
              }}
            />
            <Text
              style={{
                color: '#22c55e',
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "'Anton', 'Oswald', sans-serif",
                letterSpacing: 4,
                textShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
              }}
            >
              FAMILIES
            </Text>
          </Space>
          <Text style={{ color: '#888', fontSize: 14, display: 'block', marginBottom: 8, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>
            Rotonda de Grove Street • Grove Street
          </Text>
          <Text style={{ color: '#666', fontSize: 13, lineHeight: 1.6, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
            "Seguiremos firmes. Como nos enseñaron. Como él lo hizo."
          </Text>
        </div>

        {/* Columna 2 - Enlaces */}
        <div>
          <Title level={5} style={{ color: '#22c55e', marginBottom: 16, fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 3, textShadow: '0 0 10px rgba(34, 197, 94, 0.2)' }}>
            NAVEGACIÓN
          </Title>
          <Space direction="vertical" size={8}>
            {['Inicio', 'Historia', 'El Cuaderno', 'Miembros', 'Territorio'].map((item) => (
              <a
                key={item}
                href={`#${item === 'El Cuaderno' ? 'historia-ampliada' : item.toLowerCase()}`}
                style={{
                  color: '#888',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s',
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: 2,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                {item}
              </a>
            ))}
          </Space>
        </div>

        {/* Columna 3 - Contacto */}
        <div>
          <Title level={5} style={{ color: '#22c55e', marginBottom: 16, fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 3, textShadow: '0 0 10px rgba(34, 197, 94, 0.2)' }}>
            TERRITORIO
          </Title>
          <Space direction="vertical" size={8}>
            <Space>
              <EnvironmentOutlined style={{ color: '#22c55e', textShadow: '0 0 8px rgba(34, 197, 94, 0.4)' }} />
              <Text style={{ color: '#888', fontSize: 14, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>Rotonda de Grove Street, Los Santos</Text>
            </Space>
            <Text style={{ color: '#666', fontSize: 13, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
              "El verde no es solo un color, es una identidad"
            </Text>
          </Space>
        </div>

        {/* Columna 4 - Redes */}
        <div>
          <Title level={5} style={{ color: '#22c55e', marginBottom: 16, fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 3, textShadow: '0 0 10px rgba(34, 197, 94, 0.2)' }}>
            SÍGUENOS
          </Title>
          <Space size={16}>
            {[
              { icon: <InstagramOutlined />, label: 'Instagram', href: 'https://www.instagram.com/families.hub/' },
              { icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              ), label: 'TikTok', href: 'https://www.tiktok.com/@familiesgrovestreet' },
              { icon: <span style={{ fontWeight: 900, fontSize: 18, fontFamily: 'Arial' }}>K</span>, label: 'Kick', href: 'https://kick.com/familiesgrove' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '2px solid rgba(34, 197, 94, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22c55e',
                  fontSize: 20,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#22c55e';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#22c55e';
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.1)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </Space>
        </div>
      </div>

      <Divider style={{ borderColor: 'rgba(34, 197, 94, 0.2)', margin: '30px 0 20px' }} />

      <div style={{ textAlign: 'center' }}>
        <Text style={{ color: '#555', fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>
          © {new Date().getFullYear()} F A M I L I E S • Grove Street. Todos los derechos reservados.
        </Text>
        <br />
        <Text style={{ color: '#444', fontSize: 11, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
          "Y mientras haya alguien vistiendo de verde... El legado nunca va a morir."
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
