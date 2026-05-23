import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space, Typography } from 'antd';
import {
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  HistoryOutlined,
  SafetyOutlined,
  CloseOutlined,
  BookOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import LogoImage from './LogoImage';

const { Header } = Layout;
const { Text } = Typography;

const navItems = [
  { key: 'inicio', label: 'Inicio', icon: <HomeOutlined /> },
  { key: 'historia', label: 'Historia', icon: <HistoryOutlined /> },
  { key: 'historia-ampliada', label: 'El Cuaderno', icon: <BookOutlined /> },
  { key: 'miembros', label: 'Miembros', icon: <TeamOutlined /> },
  { key: 'territorio', label: 'Territorio', icon: <SafetyOutlined /> },
  { key: 'foro', label: 'Foro', icon: <GlobalOutlined />, external: true },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.key);
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: string) => {
    if (key === 'foro') {
      window.open('https://foro.gtahub.gg/topic/60815/families?_=1778617665574', '_blank');
      setDrawerOpen(false);
      return;
    }
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: scrolled ? 64 : 80,
        background: scrolled
          ? 'rgba(0, 0, 0, 0.97)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '2px solid rgba(34, 197, 94, 0.3)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(34, 197, 94, 0.1)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          cursor: 'pointer',
        }}
        onClick={() => handleNavClick('inicio')}
      >
        <LogoImage
          src="/logo nuevo.png"
          width={40}
          height={40}
          style={{
            borderRadius: '50%',
            border: '2px solid rgba(34, 197, 94, 0.4)',
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <Text
            style={{
              color: '#22c55e',
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "'Anton', 'Oswald', sans-serif",
              letterSpacing: 4,
              margin: 0,
              textShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
            }}
          >
            FAMILIES
          </Text>
          <Text
            style={{
              color: '#666',
              fontSize: 10,
              letterSpacing: 5,
              textTransform: 'uppercase',
              margin: 0,
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            Grove Street
          </Text>
        </div>
      </div>

      {/* Desktop Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={[activeSection]}
        onClick={({ key }) => handleNavClick(key)}
        items={navItems.map((item) => ({
          key: item.key,
          label: item.label,
          icon: item.icon,
        }))}
        style={{
          background: 'transparent',
          borderBottom: 'none',
          minWidth: 400,
          justifyContent: 'flex-end',
          flex: 1,
          display: 'flex',
          fontFamily: "'Oswald', sans-serif",
          letterSpacing: 2,
          fontSize: 14,
          fontWeight: 600,
        }}
        className="desktop-menu"
      />

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={drawerOpen ? <CloseOutlined /> : <MenuOutlined />}
        onClick={() => setDrawerOpen(!drawerOpen)}
        style={{
          color: '#22c55e',
          fontSize: 20,
          display: 'none',
        }}
        className="mobile-menu-btn"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={
          <Space>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
                color: '#000',
                fontFamily: "'Anton', sans-serif",
              }}
            >
              F
            </div>
            <Text style={{ color: '#22c55e', fontWeight: 700, fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 3, fontSize: 18 }}>
              FAMILIES
            </Text>
          </Space>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={280}
        styles={{
          header: {
            borderBottom: '2px solid rgba(34, 197, 94, 0.3)',
          },
          body: {
            padding: 0,
          },
        }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[activeSection]}
          onClick={({ key }) => handleNavClick(key)}
          items={navItems.map((item) => ({
            key: item.key,
            label: item.label,
            icon: item.icon,
          }))}
          style={{
            background: 'transparent',
            borderRight: 'none',
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: 2,
            fontSize: 14,
            fontWeight: 600,
          }}
        />
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </Header>
  );
};

export default Navbar;
