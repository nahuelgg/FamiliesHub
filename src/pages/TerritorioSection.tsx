import React from 'react';
import { Typography, Divider, Row, Col, Card, Statistic } from 'antd';
import {
  EnvironmentOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useAppDispatch } from '../store/hooks';
import { abrirModalMapa } from '../store/mapaSlice';

const { Title, Text, Paragraph } = Typography;

const zonas = [
  {
    nombre: 'Rotonda de Grove Street',
    desc: 'El corazón de la familia. Donde todo comenzó y donde siempre volvemos.',
    color: '#22c55e',
    icon: <HomeOutlined />,
  },
  {
    nombre: 'Grove Street',
    desc: 'La calle sagrada. El símbolo de nuestro legado y nuestra fuerza.',
    color: '#16a34a',
    icon: <EnvironmentOutlined />,
  },
  {
    nombre: 'Forum Drive',
    desc: 'Punto estratégico de vigilancia. Controlamos los accesos desde el este.',
    color: '#22c55e',
    icon: <EnvironmentOutlined />,
  },
  {
    nombre: 'Chamberlain Hills',
    desc: 'Territorio aliado. Mantenemos presencia para asegurar la lealtad de la zona.',
    color: '#22c55e',
    icon: <EnvironmentOutlined />,
  },
];

const stats = [
  { label: 'Territorios', value: '6', icon: <EnvironmentOutlined /> },
  { label: 'Miembros Activos', value: '30', icon: <TeamOutlined /> },
  { label: 'Años de Legado', value: '+20', icon: <ThunderboltOutlined /> },
  { label: 'Tasa de Lealtad', value: '94%', icon: <SafetyOutlined /> },
];

const TerritorioSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const abrirMapa = (nombre: string) => {
    const zona = zonas.find((z) => z.nombre === nombre);
    if (zona) {
      dispatch(
        abrirModalMapa({
          nombre: zona.nombre,
          label: zona.nombre,
          coords: { x: 0, y: 0 },
          zoom: 15,
        })
      );
    }
  };

  return (
    <section
      id="territorio"
      className="graffiti-texture"
      style={{
        padding: '100px 40px',
        background: `
          radial-gradient(ellipse at 30% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 30%, rgba(26, 122, 26, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
        `,
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div
            className="animate-fadeInUp spray-border"
            style={{
              display: 'inline-block',
              padding: '6px 20px',
              border: '2px solid rgba(34, 197, 94, 0.4)',
              marginBottom: 20,
              background: 'rgba(34, 197, 94, 0.08)',
              letterSpacing: 4,
            }}
          >
            <Text style={{ color: '#22c55e', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 600 }}>
              Nuestro Territorio
            </Text>
          </div>
          <Title
            className="animate-fadeInUp"
            style={{
              fontFamily: "'Anton', 'Oswald', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              letterSpacing: 6,
              color: '#22c55e',
              margin: 0,
              textShadow: '0 0 20px rgba(34, 197, 94, 0.3), 2px 2px 0 rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px rgba(34, 197, 94, 0.15)',
            }}
          >
            ROTONDA DE GROVE STREET
          </Title>
          <Divider
            style={{
              borderColor: '#22c55e',
              borderWidth: 2,
              width: 80,
              minWidth: 80,
              margin: '20px auto',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
            }}
          />
          <Paragraph
            className="animate-fadeInUp"
            style={{
              color: '#999',
              fontSize: 15,
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.8,
              letterSpacing: 2,
              fontFamily: "'Oswald', sans-serif",
              textTransform: 'uppercase',
            }}
          >
            Cada esquina tiene memoria. Cada calle es nuestra. Este es nuestro hogar, nuestro legado, nuestra guerra.
          </Paragraph>
        </div>

        {/* Stats */}
        <Row gutter={[16, 16]} style={{ marginBottom: 60 }}>
          {stats.map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <Card
                className="animate-fadeInUp"
                style={{
                  background: 'rgba(13, 13, 13, 0.9)',
                  border: '2px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: 8,
                  textAlign: 'center',
                }}
                styles={{
                  body: { padding: '24px 16px' },
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    color: '#22c55e',
                    marginBottom: 8,
                    textShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
                  }}
                >
                  {stat.icon}
                </div>
                <Statistic
                  value={stat.value}
                  valueStyle={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: 700,
                    fontFamily: "'Anton', 'Oswald', sans-serif",
                    letterSpacing: 2,
                    textShadow: '0 0 10px rgba(34, 197, 94, 0.2)',
                  }}
                />
                <Text style={{ color: '#888', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                  {stat.label}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Zonas */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Title
            level={2}
            className="animate-fadeInUp"
            style={{
              fontFamily: "'Anton', 'Oswald', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              letterSpacing: 5,
              color: '#22c55e',
              marginBottom: 16,
              textShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
            }}
          >
            ZONAS DE CONTROL
          </Title>
          <Divider
            style={{
              borderColor: '#22c55e',
              borderWidth: 2,
              width: 60,
              minWidth: 60,
              margin: '0 auto 40px',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
            }}
          />
        </div>

        <Row gutter={[24, 24]}>
          {zonas.map((zona, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                className="animate-fadeInUp"
                hoverable
                style={{
                  background: 'rgba(13, 13, 13, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: 8,
                  height: '100%',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onClick={() => abrirMapa(zona.nombre)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = zona.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${zona.color}30`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, #1a7a1a, ${zona.color})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 30,
                      color: '#000',
                      margin: '0 auto 16px',
                      boxShadow: `0 0 25px ${zona.color}40`,
                      border: '2px solid rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    {zona.icon}
                  </div>
                  <Title
                    level={4}
                    style={{
                      color: '#fff',
                      fontFamily: "'Anton', 'Oswald', sans-serif",
                      letterSpacing: 3,
                      marginBottom: 8,
                    }}
                  >
                    {zona.nombre}
                  </Title>
                  <Paragraph style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, padding: '0 8px', fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                    {zona.desc}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mapa conceptual */}
        <div
          className="animate-fadeInUp green-glow"
          style={{
            marginTop: 80,
            padding: '40px',
            border: '2px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 8,
            background: 'rgba(34, 197, 94, 0.05)',
            textAlign: 'center',
          }}
        >
          <EnvironmentOutlined style={{ color: '#22c55e', fontSize: 44, marginBottom: 16, textShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }} />
          <Title
            level={3}
            style={{
              color: '#22c55e',
              fontFamily: "'Anton', 'Oswald', sans-serif",
              letterSpacing: 4,
              marginBottom: 12,
              textShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
            }}
          >
            MAPA DEL TERRITORIO
          </Title>
          <Paragraph
            style={{
              color: '#999',
              fontSize: 14,
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.8,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Los Santos es nuestro campo de batalla. Desde la Rotonda de Grove Street hasta Grove Street,
            cada pulgada de este territorio se defiende con sangre, sudor y lealtad.
            Los Ballas quieren lo que es nuestro, pero mientras haya verde en las calles,
            esto seguirá siendo FAMILIES.
          </Paragraph>
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              justifyContent: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            {['Rotonda de Grove Street', 'Grove Street', 'Forum Drive', 'Chamberlain Hills'].map((z) => (
              <div
                key={z}
                onClick={() => abrirMapa(z)}
                style={{
                  padding: '10px 20px',
                  border: '2px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: 4,
                  background: 'rgba(34, 197, 94, 0.08)',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(34, 197, 94, 0.2)';
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(34, 197, 94, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Text style={{ color: '#22c55e', fontSize: 13, fontWeight: 600, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>{z}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerritorioSection;
