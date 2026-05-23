import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Coordenadas de las ubicaciones en el mapa de GTA V
// Formato: [x, y] basado en el sistema de coordenadas de gta-5-map.com
const ubicaciones = {
  'Rotonda de Grove Street': {
    coords: { x: -0.5, y: 0.5 },
    zoom: 16,
    label: 'Rotonda de Grove Street',
  },
  'Grove Street': {
    coords: { x: -0.3, y: 0.6 },
    zoom: 16,
    label: 'Grove Street',
  },
  'Forum Drive': {
    coords: { x: -0.1, y: 0.7 },
    zoom: 15,
    label: 'Forum Drive',
  },
  'Chamberlain Hills': {
    coords: { x: -0.4, y: 0.8 },
    zoom: 15,
    label: 'Chamberlain Hills',
  },
};

// Endpoint para obtener la URL del mapa de una ubicación
app.get('/api/mapa/:ubicacion', (req, res) => {
  const { ubicacion } = req.params;
  const ubicacionData = ubicaciones[ubicacion];

  if (!ubicacionData) {
    return res.status(404).json({
      error: 'Ubicación no encontrada',
      message: `No se encontró la ubicación: ${ubicacion}`,
    });
  }

  // Construimos la URL de gta-5-map.com con parámetros de ubicación
  const mapaUrl = `https://gta-5-map.com/?x=${ubicacionData.coords.x}&y=${ubicacionData.coords.y}&zoom=${ubicacionData.zoom}`;

  res.json({
    ubicacion,
    label: ubicacionData.label,
    mapaUrl,
    coords: ubicacionData.coords,
    zoom: ubicacionData.zoom,
  });
});

// Endpoint para listar todas las ubicaciones disponibles
app.get('/api/ubicaciones', (req, res) => {
  const lista = Object.entries(ubicaciones).map(([nombre, data]) => ({
    nombre,
    label: data.label,
    coords: data.coords,
    zoom: data.zoom,
  }));
  res.json(lista);
});

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`🌍 Servidor de mapas corriendo en http://localhost:${PORT}`);
  console.log(`📍 Endpoints:`);
  console.log(`   GET /api/ubicaciones - Listar todas las ubicaciones`);
  console.log(`   GET /api/mapa/:ubicacion - Obtener URL del mapa de una ubicación`);
});
