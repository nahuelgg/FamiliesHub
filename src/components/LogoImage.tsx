import React, { useState } from 'react';

interface LogoImageProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LogoImage: React.FC<LogoImageProps> = ({
  src = '/logo nuevo.png',
  width = 40,
  height = 40,
  alt = 'Logo Families',
  className,
  style,
}) => {
  const [failed, setFailed] = useState(false);

  const fallbackStyle: React.CSSProperties = {
    width,
    height,
    minWidth: typeof width === 'number' ? width : undefined,
    minHeight: typeof height === 'number' ? height : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1a1a, #0f4d13)',
    borderRadius: '50%',
    color: '#e5e5e5',
    fontWeight: 800,
    fontSize: typeof width === 'number' ? Math.max(16, width / 2.5) : 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    boxShadow: '0 0 14px rgba(34, 197, 94, 0.25)',
    ...style,
  };

  if (failed) {
    return (
      <div className={className} style={fallbackStyle}>
        F
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={{ width, height, objectFit: 'cover', ...style }}
      onError={() => setFailed(true)}
    />
  );
};

export default LogoImage;
