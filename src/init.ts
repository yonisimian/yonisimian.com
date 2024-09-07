import { WhatsAppURL } from './data/globals'

export function initializeApp(): Promise<void> {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.toString() === 'whatsapp=') {
      window.location.href = WhatsAppURL
    } else {
      resolve()
    }
  })
}
