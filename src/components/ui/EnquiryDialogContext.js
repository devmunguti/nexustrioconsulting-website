import { createContext, useContext } from 'react'

export const EnquiryDialogContext = createContext(null)

export function useEnquiryDialog() {
  const context = useContext(EnquiryDialogContext)
  if (!context) throw new Error('useEnquiryDialog must be used within EnquiryDialogProvider.')
  return context
}
