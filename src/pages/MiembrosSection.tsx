import React from 'react';
import { Typography, Divider, Row, Col, Card, Tag, Space, Progress } from 'antd';
import {
  CrownOutlined,
  StarOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  ThunderboltOutlined,
  FireOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface Miembro {
  nombre: string;
  rango: string;
  icon: React.ReactNode;
  color: string;
  lealtad: number;
  habilidades: string[];
  desc: string;
}

const miembros: Miembro[] = [
  {
    nombre: 'CJ',
    rango: 'Leyenda',
    icon: <CrownOutlined />,
    color: '#22c55e',
    lealtad: 100,
    habilidades: ['Liderazgo', 'Estrategia', 'Combate'],
    desc: 'El que empezó todo. Su legado sigue vivo en cada esquina de Grove Street.',
  },
  {
    nombre: 'Sweet',
    rango: 'Líder',
    icon: <StarOutlined />,
    color: '#16a34a',
    lealtad: 98,
    habilidades: ['Liderazgo', 'Lealtad', 'Organización'],
    desc: 'La hermanita. La mente fría que mantiene unida a la familia.',
  },
  {
    nombre: 'Ryder',
    rango: 'Soldado',
    icon: <SafetyCertificateOutlined />,
    color: '#15803d',
    lealtad: 85,
    habilidades: ['Combate', 'Armas', 'Infiltración'],
    desc: 'Siempre listo para la acción. Leal hasta el final.',
  },
  {
    nombre: 'Big Smoke',
    rango: 'Capitán',
    icon: <FireOutlined />,
    color: '#1a7a1a',
    lealtad: 75,
    habilidades: ['Negocios', 'Recursos', 'Logística'],
    desc: 'El que mueve los hilos. Sin él, la maquinaria no funciona.',
  },
  {
    nombre: 'Cesar',
    rango: 'Aliado',
    icon: <ThunderboltOutlined />,
    color: '#22c55e',
    lealtad: 90,
    habilidades: ['Conducción', 'Inteligencia', 'Conexiones'],
    desc: 'Aliado de la familia. Su lealtad trasciende las fronteras.',
  },
  {
    nombre: 'Kendl',
    rango: 'Consejera',
    icon: <UserOutlined />,
    color: '#16a34a',
    lealtad: 95,
    habilidades: ['Diplomacia', 'Visión', 'Estrategia'],
    desc: 'La voz de la razón. Su visión mantiene el rumbo de la familia.',
  },
];

const MiembrosSection: React.FC = () => {
  return (
    <section
      id="miembros"
      className="graffiti-texture"
      style={{
        padding: '100px 40px',
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(26, 122, 26, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #050505 0%, #0a0a0a 100%)
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
              La Familia
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
            MIEMBROS DESTACADOS
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
          <Text style={{ color: '#999', fontSize: 15, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>
            Cada miembro es una pieza fundamental en esta familia. Conoce a los nuestros.
          </Text>
        </div>

        {/* Grid de miembros */}
        <Row gutter={[24, 24]}>
          {miembros.map((miembro, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                className="animate-fadeInUp"
                hoverable
                style={{
                  background: 'rgba(13, 13, 13, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: 8,
                  height: '100%',
                  transition: 'all 0.3s',
                  overflow: 'hidden',
                }}
                styles={{
                  body: { padding: 0 },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = miembro.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${miembro.color}30`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Header con gradiente */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${miembro.color}25, transparent)`,
                    padding: '30px 24px 20px',
                    borderBottom: `2px solid ${miembro.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, #1a7a1a, ${miembro.color})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                      color: '#000',
                      flexShrink: 0,
                      boxShadow: `0 0 20px ${miembro.color}40`,
                      border: '2px solid rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    {miembro.icon}
                  </div>
                  <div>
                    <Title
                      level={4}
                      style={{
                        color: '#fff',
                        fontFamily: "'Anton', 'Oswald', sans-serif",
                        letterSpacing: 3,
                        margin: 0,
                        fontSize: 22,
                      }}
                    >
                      {miembro.nombre}
                    </Title>
                    <Tag
                      color={miembro.color}
                      style={{
                        marginTop: 4,
                        borderRadius: 2,
                        border: 'none',
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: 1,
                        fontWeight: 600,
                      }}
                    >
                      {miembro.rango}
                    </Tag>
                  </div>
                </div>

                {/* Cuerpo */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <Text style={{ color: '#aaa', fontSize: 14, lineHeight: 1.6, display: 'block', marginBottom: 16, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                    {miembro.desc}
                  </Text>

                  {/* Barra de lealtad */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <Text style={{ color: '#888', fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>Lealtad</Text>
                      <Text style={{ color: miembro.color, fontSize: 12, fontWeight: 600, fontFamily: "'Oswald', sans-serif" }}>{miembro.lealtad}%</Text>
                    </div>
                    <Progress
                      percent={miembro.lealtad}
                      showInfo={false}
                      strokeColor={miembro.color}
                      trailColor="#222"
                      size="small"
                    />
                  </div>

                  {/* Habilidades */}
                  <Space wrap size={[6, 6]}>
                    {miembro.habilidades.map((hab, i) => (
                      <Tag
                        key={i}
                        style={{
                          background: `${miembro.color}15`,
                          border: `1px solid ${miembro.color}30`,
                          color: miembro.color,
                          borderRadius: 2,
                          fontSize: 11,
                          fontFamily: "'Oswald', sans-serif",
                          letterSpacing: 1,
                          fontWeight: 600,
                        }}
                      >
                        {hab}
                      </Tag>
                    ))}
                  </Space>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default MiembrosSection;
