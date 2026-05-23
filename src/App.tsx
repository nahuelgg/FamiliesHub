import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, Layout } from 'antd';
import { familiesTheme } from './theme';
import { store } from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import HistoriaSection from './pages/HistoriaSection';
import HistoriaAmpliada from './pages/HistoriaAmpliada';
import MiembrosSection from './pages/MiembrosSection';
import TerritorioSection from './pages/TerritorioSection';
import ModalMapa from './components/ModalMapa';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={familiesTheme}>
        <Layout style={{ minHeight: '100vh', background: '#0a0a0a' }}>
          <Navbar />
          <Content>
            <HeroSection />
            <HistoriaSection />
            <HistoriaAmpliada />
            <MiembrosSection />
            <TerritorioSection />
          </Content>
          <Footer />
          <ModalMapa />
        </Layout>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
