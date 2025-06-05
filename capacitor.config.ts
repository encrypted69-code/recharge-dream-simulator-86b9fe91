
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.rechargedreamsimulator',
  appName: 'recharge-dream-simulator',
  webDir: 'dist',
  server: {
    url: 'https://45ffc75a-6f09-4cd8-91df-328222b03734.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;
