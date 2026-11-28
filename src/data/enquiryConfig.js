export const WHATSAPP_NUMBER = '254705249035'

export function getEnquiryMessage(enquiry) {
  return `Hello, I would like help with: ${enquiry}. Please contact me.`
}

export function getEnquiryWhatsAppUrl(enquiry) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getEnquiryMessage(enquiry))}`
}
