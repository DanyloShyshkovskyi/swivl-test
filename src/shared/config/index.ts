const getEnvVar = (key: string) => {
  return import.meta.env[key] || ''
}

export const ROOT =
  document.getElementById('react-root') || document.createElement('div')

export const API_URL = getEnvVar('VITE_APP_API_URL')

export const BASE_URL = getEnvVar('VITE_APP_BASE_URL')

export const GH_TOKEN = getEnvVar('VITE_APP_GH_TOKEN')
