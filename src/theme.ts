import type { ThemeConfig } from 'antd';

export const familiesTheme: ThemeConfig = {
  token: {
    colorPrimary: '#22c55e',
    colorSuccess: '#22c55e',
    colorWarning: '#eab308',
    colorError: '#ef4444',
    colorInfo: '#1a7a1a',
    colorBgBase: '#050505',
    colorTextBase: '#e5e5e5',
    borderRadius: 4,
    fontFamily: "'Oswald', 'Anton', 'Bebas Neue', 'Archivo Black', sans-serif",
  },
  components: {
    Layout: {
      headerBg: '#000000',
      bodyBg: '#050505',
      footerBg: '#000000',
    },
    Button: {
      colorPrimary: '#22c55e',
      colorPrimaryHover: '#4ade80',
      colorPrimaryActive: '#16a34a',
      defaultBg: 'transparent',
      defaultBorderColor: '#22c55e',
      defaultColor: '#22c55e',
      borderRadius: 4,
      fontWeightStrong: 700,
    },
    Card: {
      colorBgContainer: '#0d0d0d',
      colorBorderSecondary: '#22c55e25',
    },
    Typography: {
      colorTextHeading: '#22c55e',
      colorText: '#e5e5e5',
      colorTextSecondary: '#a3a3a3',
    },
    Menu: {
      colorItemBg: 'transparent',
      colorItemText: '#e5e5e5',
      colorItemTextHover: '#22c55e',
      colorItemTextSelected: '#22c55e',
      colorItemBgHover: '#22c55e15',
      colorItemBgSelected: '#22c55e25',
    },
    Divider: {
      colorSplit: '#22c55e40',
    },
    Tag: {
      colorBgContainer: '#22c55e20',
      colorText: '#22c55e',
    },
    Input: {
      colorBgContainer: '#111111',
      colorBorder: '#333333',
      colorText: '#e5e5e5',
      colorTextPlaceholder: '#666666',
    },
    Modal: {
      colorBgContainer: '#0d0d0d',
      colorBgElevated: '#0d0d0d',
    },
    Drawer: {
      colorBgContainer: '#050505',
    },
  },
};
