import React from 'react';
import { Typography, Divider, Row, Col, Card } from 'antd';
import {
  BookOutlined,
  FireOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  TeamOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  WarningOutlined,
  StarOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const HistoriaAmpliada: React.FC = () => {
  return (
    <section
      id="historia-ampliada"
      className="page-bg graffiti-texture"
      style={{
        padding: '100px 40px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* ===== ENCABEZADO ===== */}
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
              El Cuaderno de la Families
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
            LA HISTORIA VIVA
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
            Cada esquina tiene memoria, y cada miembro del barrio sabe que no está
            ahí por casualidad… está ahí por legado.
          </Paragraph>
        </div>

        {/* ===== CAPÍTULO 1: EL CUADERNO ===== */}
        <div className="animate-fadeInUp" style={{ marginBottom: 80 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 30,
              borderLeft: '4px solid #22c55e',
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                color: '#000',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
              }}
            >
              <BookOutlined />
            </div>
            <Title
              level={2}
              style={{
                fontFamily: "'Anton', 'Oswald', sans-serif",
                letterSpacing: 4,
                color: '#22c55e',
                margin: 0,
                textShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
              }}
            >
              EL CUADERNO DE LA FAMILIES
            </Title>
          </div>

          <Card
            style={{
              background: 'rgba(10, 10, 10, 0.95)',
              border: '2px solid rgba(34, 197, 94, 0.2)',
              borderRadius: 4,
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.08)',
            }}
            styles={{ body: { padding: '30px' } }}
          >
            <Paragraph
              style={{
                color: '#ccc',
                fontSize: 15,
                lineHeight: 2,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: '#22c55e', fontWeight: 700 }}>Cenicero</Text>, perdido entre el humo y el viaje de la hierba, recuerda el talento que tenía pa' los graffitis. Ahí nomás decide sacar su cuaderno de bocetos y empieza a rayar y bocetear todo lo que pasó después de la última charla con <Text style={{ color: '#22c55e', fontWeight: 700 }}>K</Text> y con <Text style={{ color: '#22c55e', fontWeight: 700 }}>LocDog</Text>…
            </Paragraph>
            <Paragraph
              style={{
                color: '#bbb',
                fontSize: 15,
                lineHeight: 2,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: 1,
              }}
            >
              Mientras la pieza se llenaba de humo y el ambiente estaba re pesado, <Text style={{ color: '#22c55e', fontWeight: 700 }}>Cenicero</Text> dejaba caer toda la locura y los pensamientos en cada trazo, como un verdadero soldado de la calle marcando historia en papel.
            </Paragraph>
          </Card>
        </div>

        {/* ===== CAPÍTULO 2: UNA SEMANA DESPUÉS ===== */}
        <div className="animate-fadeInUp" style={{ marginBottom: 80 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 30,
              borderLeft: '4px solid #1a7a1a',
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: 'linear-gradient(135deg, #0f4d13, #1a7a1a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                color: '#000',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                boxShadow: '0 0 20px rgba(26, 122, 26, 0.4)',
              }}
            >
              <FireOutlined />
            </div>
            <Title
              level={2}
              style={{
                fontFamily: "'Anton', 'Oswald', sans-serif",
                letterSpacing: 4,
                color: '#1a7a1a',
                margin: 0,
                textShadow: '0 0 15px rgba(26, 122, 26, 0.3)',
              }}
            >
              LUEGO DE UNA SEMANA...
            </Title>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                }}
                styles={{ body: { padding: '24px' } }}
              >
                <Paragraph
                  style={{
                    color: '#bbb',
                    fontSize: 14,
                    lineHeight: 2,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  Era otra noche pesada en el hood. La casa estaba completamente llena de humo mientras <Text style={{ color: '#22c55e', fontWeight: 700 }}>Cenicero</Text> se hundía en el sofá, quemando hierba sin parar. El olor del porro se había adueñado de todo el lugar y apenas dejaba ver la televisión que seguía prendida al frente suyo.
                </Paragraph>
                <Paragraph
                  style={{
                    color: '#bbb',
                    fontSize: 14,
                    lineHeight: 2,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  Sus ojos estaban completamente achinados de tanto fumar; cada tanto soltaba una carcajada mirando una serie cómica de la ciudad, y entre risa y risa le agarraba una tos seca que retumbaba en la sala.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                }}
                styles={{ body: { padding: '24px' } }}
              >
                <Paragraph
                  style={{
                    color: '#bbb',
                    fontSize: 14,
                    lineHeight: 2,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  La música sonaba bajito desde una radio vieja tirada en la esquina, mientras afuera se escuchaban motores pasando por el barrio y uno que otro negro gritando desde la calle. Era una noche tranquila para las <Text style={{ color: '#22c55e', fontWeight: 700 }}>Families</Text>… o al menos eso parecía.
                </Paragraph>
                <Paragraph
                  style={{
                    color: '#bbb',
                    fontSize: 14,
                    lineHeight: 2,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: 1,
                  }}
                >
                  En medio de la locura que le pegaba la hierba, <Text style={{ color: '#22c55e', fontWeight: 700 }}>Cenicero</Text> volteó la cabeza y vio, tirado al lado del sofá, el mismo cuaderno de bocetos que había usado la semana pasada. El negro se quedó mirándolo unos segundos, sonriendo como si mil recuerdos le estuvieran cruzando la cabeza al mismo tiempo. Entonces se inclinó, lo agarró y lo abrió lentamente.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* ===== CAPÍTULO 3: EL CONTENIDO DEL CUADERNO ===== */}
        <div className="animate-fadeInUp" style={{ marginBottom: 80 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 30,
              borderLeft: '4px solid #22c55e',
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                color: '#000',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
              }}
            >
              <StarOutlined />
            </div>
            <Title
              level={2}
              style={{
                fontFamily: "'Anton', 'Oswald', sans-serif",
                letterSpacing: 4,
                color: '#22c55e',
                margin: 0,
                textShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
              }}
            >
              LO QUE PLASMÓ EL CUADERNO
            </Title>
          </div>

          <Paragraph
            style={{
              color: '#bbb',
              fontSize: 15,
              lineHeight: 2,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: 1,
              marginBottom: 30,
              padding: '20px',
              background: 'rgba(34, 197, 94, 0.03)',
              borderLeft: '3px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            Con los dedos todavía temblando por el humo y la mente completamente volada, empezó a dibujar y bocetear todo lo que había pasado durante la semana en el barrio. Cada página se llenaba de rayones, nombres, símbolos y escenas de la calle.
          </Paragraph>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <TeamOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    CHARLAS EN EL HOOD
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  Anotó aquellas charlas entre colegas en el hood, donde los negros hablaban de respeto, negocios y problemas que se venían acercando.
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <EnvironmentOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    REUNIONES DEL NORTE
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  También dejó marcadas las reuniones con unos tipos del norte de la ciudad, sujetos que parecían venir con plata y propuestas para futuros movimientos entre las calles.
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <ThunderboltOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    RODANDO POR LA CIUDAD
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  Entre humo y humo, siguió dibujando las vueltas por la ciudad en los vehículos de la pandilla, simplemente rodando para pasar el rato, mirando cómo se movía la noche mientras sonaban temas de rap viejo en los parlantes.
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <HeartOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    NUEVOS SOLDADOS
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  Después plasmó la llegada de nuevos negros al barrio, jóvenes buscando ganarse un lugar dentro de las Families y demostrar que tenían corazón para representar los colores.
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <SafetyOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    GRAFFITIS Y TERRITORIO
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  Las páginas también se mancharon con escenas de noches saliendo a pintar graffitis, dejando la marca de la pandilla en paredes y callejones, reclamando territorio como siempre lo hacía la calle.
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card
                hoverable
                style={{
                  background: 'rgba(10, 10, 10, 0.95)',
                  border: '2px solid rgba(34, 197, 94, 0.15)',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                }}
                styles={{ body: { padding: '24px' } }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: '#000',
                      clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <WarningOutlined />
                  </div>
                  <Title level={4} style={{ color: '#22c55e', fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 2, margin: 0, fontSize: 16 }}>
                    GOLPES RÁPIDOS
                  </Title>
                </div>
                <Text style={{ color: '#999', fontSize: 13, lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>
                  Y entre toda esa locura, también quedaron anotados algunos golpes rápidos: robos a gente distraída y el momento exacto en el que se llevaron una camioneta mientras la ciudad dormía sin enterarse de nada.
                </Text>
              </Card>
            </Col>
          </Row>
        </div>

        {/* ===== CAPÍTULO 4: EL LEGADO ===== */}
        <div className="animate-fadeInUp" style={{ marginBottom: 80 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 30,
              borderLeft: '4px solid #22c55e',
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: 'linear-gradient(135deg, #1a7a1a, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                color: '#000',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
              }}
            >
              <HeartOutlined />
            </div>
            <Title
              level={2}
              style={{
                fontFamily: "'Anton', 'Oswald', sans-serif",
                letterSpacing: 4,
                color: '#22c55e',
                margin: 0,
                textShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
              }}
            >
              EL LEGADO SIGUE VIVO
            </Title>
          </div>

          <Card
            style={{
              background: 'rgba(10, 10, 10, 0.95)',
              border: '2px solid rgba(34, 197, 94, 0.2)',
              borderRadius: 4,
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.08)',
            }}
            styles={{ body: { padding: '30px' } }}
          >
            <Paragraph
              style={{
                color: '#ccc',
                fontSize: 15,
                lineHeight: 2,
                fontFamily: "'Oswald', sans-serif",
                letterSpacing: 1,
              }}
            >
              <Text style={{ color: '#22c55e', fontWeight: 700 }}>Cenicero</Text> seguía escribiendo y dibujando sin parar, completamente perdido en el humo y los recuerdos de la semana. Porque para él, aquel cuaderno no era solo papel… era prácticamente la historia viva de las <Text style={{ color: '#22c55e', fontWeight: 700 }}>Families</Text>.
            </Paragraph>
          </Card>
        </div>

        {/* ===== EPÍLOGO ===== */}
        <div
          className="animate-fadeInUp green-glow"
          style={{
            textAlign: 'center',
            padding: '50px 40px',
            border: '2px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 4,
            background: 'rgba(34, 197, 94, 0.05)',
            marginBottom: 40,
          }}
        >
          <BookOutlined style={{ color: '#22c55e', fontSize: 40, marginBottom: 16, textShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }} />
          <Title
            level={3}
            style={{
              fontFamily: "'Anton', 'Oswald', sans-serif",
              letterSpacing: 5,
              color: '#22c55e',
              marginBottom: 16,
              textShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
            }}
          >
            CONTINUARÁ...
          </Title>
          <Paragraph
            style={{
              color: '#22c55e',
              fontSize: 'clamp(14px, 1.8vw, 20px)',
              fontStyle: 'italic',
              maxWidth: 700,
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

export default HistoriaAmpliada;
