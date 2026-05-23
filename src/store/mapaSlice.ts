import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ============================================
// Tipos
// ============================================
export interface UbicacionInfo {
  nombre: string;
  label: string;
  coords: { x: number; y: number };
  zoom: number;
}

export interface MapaState {
  modalVisible: boolean;
  ubicacionSeleccionada: UbicacionInfo | null;
}

const initialState: MapaState = {
  modalVisible: false,
  ubicacionSeleccionada: null,
};

// ============================================
// Slice
// ============================================
const mapaSlice = createSlice({
  name: 'mapa',
  initialState,
  reducers: {
    abrirModalMapa: (state, action: PayloadAction<UbicacionInfo>) => {
      state.ubicacionSeleccionada = action.payload;
      state.modalVisible = true;
    },
    cerrarModalMapa: (state) => {
      state.modalVisible = false;
      state.ubicacionSeleccionada = null;
    },
  },
});

export const { abrirModalMapa, cerrarModalMapa } = mapaSlice.actions;
export default mapaSlice.reducer;
