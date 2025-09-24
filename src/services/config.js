// services/config.js
const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
  debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
  mockApi: import.meta.env.VITE_MOCK_API === 'true',
  appName: import.meta.env.VITE_APP_NAME,
};

export default config;
