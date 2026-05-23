import React from 'react';
import { Typography, Divider, Row, Col, Card } from 'antd';
import {
  BookOutlined,
  HeartOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  TeamOutlined,
  FireOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const milestones = [
  {
    year: 'Los Inicios',
    icon: <FireOutlined />,
    content: 'En lo profundo de la Rotonda de Grove Street, donde el verde no es solo un color sino una identidad, nació una nueva generación decidida a mantener viva una historia que nunca debía olvidarse.',
    color: '#22c55e',
  },
  {
    year: 'El Legado de CJ',
    icon: <HeartOutlined />,
    content: 'CJ regresó a Los Santos y cambió el rumbo de Grove Street para siempre. Demostró que la unión, la cabeza fría y la lealtad podían vencer incluso en un mundo lleno de traición.',
    color: '#1a7a1a',
  },
  {
    year: 'Resurgimiento',
    icon: <ThunderboltOutlined />,
    content: 'Hoy, en la Rotonda de Grove Street, ese legado sigue más vivo que nunca. Los pibes del barrio crecieron escuchando esas historias. Aprendieron que no se trata de buscar problemas, sino de saber enfrentarlos cuando llegan.',
    color: '#22c55e',
  },
  {
    year: 'Código y Disciplina',
    icon: <SafetyOutlined />,
    content: 'La Rotonda de Grove Street no es la misma de antes. Ahora hay disciplina. Hay códigos. Hay una mentalidad distinta. Ya no son solo soldados de calle… son herederos de una historia.',
    color: '#1a7a1a',
  },
  {
    year: 'La Guerra Continúa',
    icon: <TeamOutlined />,
    content: 'Los Ballas siguen ahí. Nunca desaparecieron del todo. Se reagruparon, crecieron en las sombras, esperando el momento para recuperar territorio. La guerra nunca terminó… solo se pausó.',
    color: '#22c55e',
  },
];

const values = [
  {
    icon: <HeartOutlined />,
    title: 'Lealtad',
    desc: 'La lealtad es nuestro pilar fundamental. Por encima de todo, estamos unidos como familia.',
  },
  {
    icon: <SafetyOutlined />,
    title: 'Respeto',
    desc: 'El respeto se gana en las calles. Cada acción tiene consecuencias y cada palabra pesa.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Unión',
    desc: 'Somos más que una pandilla. Somos una familia. Y la familia nunca se abandona.',
  },
  {
    icon: <FireOutlined />,
    title: 'Legado',
    desc: 'Honramos lo que CJ empezó. Cada pelea que ganamos, cada esquina que defendemos, es por él.',
  },
];

const HistoriaSection: React.FC = () => {
  return (
    <section
      id="historia"
      className="page-bg graffiti-texture"
      style={{
        padding: '100px 40px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
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
              Nuestra Historia
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
            EL LEGADO DE GROVE STREET
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
              fontSize: 16,
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.8,
              letterSpacing: 2,
              fontFamily: "'Oswald', sans-serif",
              textTransform: 'uppercase',
            }}
          >
            "ʜɪꜱᴛᴏʀɪᴀ" — Cada esquina tiene memoria, y cada miembro del barrio sabe que no está
            ahí por casualidad… está ahí por legado.
          </Paragraph>
        </div>

        {/* Hitos de la Historia - Estilo expediente pandillero */}
        <div className="animate-fadeInUp" style={{ marginBottom: 100 }}>
          <Row gutter={[24, 24]}>
            {milestones.map((m, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card
                  hoverable
                  style={{
                    background: 'rgba(10, 10, 10, 0.95)',
                    border: `2px solid ${m.color}30`,
                    borderRadius: 4,
                    height: '100%',
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  styles={{
                    body: { padding: 0 },
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = m.color;
                    e.currentTarget.style.boxShadow = `0 0 25px ${m.color}25`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${m.color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Barra superior de color */}
                  <div
                    style={{
                      height: 4,
                      background: `linear-gradient(90deg, ${m.color}, transparent)`,
                      boxShadow: `0 0 15px ${m.color}50`,
                    }}
                  />
                  <div style={{ padding: '24px' }}>
                    {/* Header con icono cuadrado (estilo sello/gang) */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          background: `linear-gradient(135deg, #1a7a1a, ${m.color})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 20,
                          color: '#000',
                          clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                          boxShadow: `0 0 15px ${m.color}40`,
                        }}
                      >
                        {m.icon}
                      </div>
                      <Title
                        level={4}
                        style={{
                          color: m.color,
                          fontFamily: "'Anton', 'Oswald', sans-serif",
                          letterSpacing: 3,
                          margin: 0,
                          fontSize: 18,
                          textShadow: `0 0 10px ${m.color}30`,
                        }}
                      >
                        {m.year}
                      </Title>
                    </div>
                    <Text style={{ color: '#bbb', fontSize: 13, lineHeight: 1.7, fontFamily: "'Oswald', sans-serif", letterSpacing: 1, display: 'block' }}>
                      {m.content}
                    </Text>
                    {/* Número de hito */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 12,
                        fontSize: 48,
                        fontWeight: 900,
                        color: `${m.color}08`,
                        fontFamily: "'Anton', sans-serif",
                        lineHeight: 1,
                        pointerEvents: 'none',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Valores */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Title
            className="animate-fadeInUp"
            level={2}
            style={{
              fontFamily: "'Anton', 'Oswald', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              letterSpacing: 5,
              color: '#22c55e',
              marginBottom: 16,
              textShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
            }}
          >
            NUESTROS VALORES
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
          {values.map((v, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card
                className="animate-fadeInUp"
                hoverable
                style={{
                  background: 'rgba(13, 13, 13, 0.9)',
                  border: '2px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: 8,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{
                  body: { padding: '30px 20px' },
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    color: '#000',
                    margin: '0 auto 16px',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
                    border: '2px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  {v.icon}
                </div>
                <Title
                  level={4}
                  style={{
                    color: '#22c55e',
                    fontFamily: "'Anton', 'Oswald', sans-serif",
                    letterSpacing: 3,
                    marginBottom: 8,
                  }}
                >
                  {v.title}
                </Title>
                <Text style={{ color: '#999', fontSize: 14, lineHeight: 1.6, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  {v.desc}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Cita final */}
        <div
          className="animate-fadeInUp green-glow"
          style={{
            textAlign: 'center',
            marginTop: 80,
            padding: '40px',
            border: '2px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 8,
            background: 'rgba(34, 197, 94, 0.05)',
          }}
        >
          <BookOutlined style={{ color: '#22c55e', fontSize: 36, marginBottom: 16, textShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }} />
          <Paragraph
            style={{
              color: '#22c55e',
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontStyle: 'italic',
              maxWidth: 800,
              margin: '0 auto',
              lineHeight: 1.8,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 2,
              textShadow: '0 0 10px rgba(34, 197, 94, 0.2)',
            }}
          >
            "Seguiremos firmes. Como nos enseñaron. Como él lo hizo. Y uno por uno… los Ballas van a caer."
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
