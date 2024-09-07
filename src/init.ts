export function initializeApp(): Promise<void> {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.toString() === 'whatsapp=') {
      window.location.href = 'https://tinyurl.com/yonisimian-whatsapp'
    } else {
      resolve()
    }
  })
}
