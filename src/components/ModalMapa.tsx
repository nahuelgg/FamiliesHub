import React from 'react';
import { Modal, Typography, Space, Image, Row, Col } from 'antd';
import { EnvironmentOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../store/hooks.ts';
import { cerrarModalMapa } from '../store/mapaSlice.ts';

const { Title, Text } = Typography;

// Mapeo de imágenes por locación
const imagenesLocaciones: Record<string, { img1: string; img2: string; label: string }> = {
  'Rotonda de Grove Street': {
    img1: '/rotonda.png',
    img2: '/rotonda2.png',
    label: 'ROTONDA DE GROVE STREET',
  },
  'Grove Street': {
    img1: '/general.png',
    img2: '/general2.png',
    label: 'GROVE STREET',
  },
  'Forum Drive': {
    img1: '/general.png',
    img2: '/general2.png',
    label: 'FORUM DRIVE',
  },
  'Chamberlain Hills': {
    img1: '/chamber.png',
    img2: '/chamber2.png',
    label: 'CHAMBERLAIN HILLS',
  },
};

const ModalMapa: React.FC = () => {
  const dispatch = useAppDispatch();
  const { modalVisible, ubicacionSeleccionada } = useAppSelector(
    (state) => state.mapa
  );

  const handleClose = () => {
    dispatch(cerrarModalMapa());
  };

  const imagenes = ubicacionSeleccionada
    ? imagenesLocaciones[ubicacionSeleccionada.nombre]
    : null;

  return (
    <Modal
      open={modalVisible}
      onCancel={handleClose}
      width={900}
      style={{ top: 20 }}
      closeIcon={
        <CloseOutlined style={{ color: '#22c55e', fontSize: 18 }} />
      }
      title={
        <Space>
          <EnvironmentOutlined style={{ color: '#22c55e', fontSize: 22 }} />
          <Title level={4} style={{ color: '#22c55e', margin: 0, fontFamily: "'Anton', 'Oswald', sans-serif", letterSpacing: 3 }}>
            {imagenes?.label || 'MAPA DEL TERRITORIO'}
          </Title>
        </Space>
      }
      footer={null}
    >
      <div
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 70%),
            linear-gradient(180deg, #0d0d0d 0%, #050505 100%)
          `,
          border: '2px solid rgba(34, 197, 94, 0.2)',
          borderRadius: 4,
          padding: 24,
          position: 'relative',
        }}
      >
        {/* Decoración esquinas estilo mapa */}
        <div style={{
          position: 'absolute', top: -1, left: -1,
          width: 20, height: 20,
          borderTop: '3px solid #22c55e',
          borderLeft: '3px solid #22c55e',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute', top: -1, right: -1,
          width: 20, height: 20,
          borderTop: '3px solid #22c55e',
          borderRight: '3px solid #22c55e',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute', bottom: -1, left: -1,
          width: 20, height: 20,
          borderBottom: '3px solid #22c55e',
          borderLeft: '3px solid #22c55e',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute', bottom: -1, right: -1,
          width: 20, height: 20,
          borderBottom: '3px solid #22c55e',
          borderRight: '3px solid #22c55e',
          opacity: 0.6,
        }} />

        {imagenes ? (
          <>
            {/* Encabezado de la locación */}
            <div style={{
              textAlign: 'center',
              marginBottom: 20,
              padding: '12px 20px',
              border: '2px solid rgba(34, 197, 94, 0.3)',
              background: 'rgba(34, 197, 94, 0.06)',
              display: 'inline-block',
              width: '100%',
            }}>
              <Text style={{
                color: '#22c55e',
                fontSize: 14,
                letterSpacing: 4,
                fontWeight: 600,
                fontFamily: "'Anton', 'Oswald', sans-serif",
                textShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
              }}>
                📍 {ubicacionSeleccionada?.label?.toUpperCase()}
              </Text>
            </div>

            {/* Grid de 2 fotos */}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <div style={{
                  border: '2px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: '#000',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)',
                }}>
                  <Image
                    src={imagenes.img1}
                    alt={`${ubicacionSeleccionada?.label} - Vista 1`}
                    style={{ width: '100%', display: 'block' }}
                    preview={{ mask: '🔍 Ampliar' }}
                    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderTop: '1px solid rgba(34, 197, 94, 0.15)',
                  }}>
                    <Text style={{ color: '#888', fontSize: 11, letterSpacing: 2, fontFamily: "'Oswald', sans-serif" }}>
                      📸 Modo Mapa
                    </Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{
                  border: '2px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: '#000',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)',
                }}>
                  <Image
                    src={imagenes.img2}
                    alt={`${ubicacionSeleccionada?.label} - Vista 2`}
                    style={{ width: '100%', display: 'block' }}
                    preview={{ mask: '🔍 Ampliar' }}
                    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderTop: '1px solid rgba(34, 197, 94, 0.15)',
                  }}>
                    <Text style={{ color: '#888', fontSize: 11, letterSpacing: 2, fontFamily: "'Oswald', sans-serif" }}>
                      📸 Modo Real
                    </Text>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Info de la zona */}
            <div style={{
              marginTop: 20,
              padding: '16px 20px',
              border: '1px solid rgba(34, 197, 94, 0.15)',
              borderRadius: 4,
              background: 'rgba(34, 197, 94, 0.03)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
            }}>
              <Space>
                <EnvironmentOutlined style={{ color: '#22c55e', fontSize: 14 }} />
                <Text style={{ color: '#aaa', fontFamily: "'Oswald', sans-serif", letterSpacing: 1, fontSize: 13 }}>
                  {ubicacionSeleccionada?.label}
                </Text>
              </Space>
            </div>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 400,
              gap: 16,
              padding: 40,
              textAlign: 'center',
            }}
          >
            <EnvironmentOutlined style={{ color: 'rgba(34, 197, 94, 0.3)', fontSize: 64 }} />
            <Text style={{ color: '#555', fontFamily: "'Oswald', sans-serif", letterSpacing: 2, fontSize: 14 }}>
              Selecciona una ubicación para ver las imágenes
            </Text>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalMapa;
