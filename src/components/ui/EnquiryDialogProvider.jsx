import { useCallback, useEffect, useRef, useState } from 'react'
import { EnquiryDialogContext } from './EnquiryDialogContext'
import EnquiryDialog from './EnquiryDialog'

export function EnquiryDialogProvider({ children }) {
  const [enquiry, setEnquiry] = useState(null)
  const returnFocusRef = useRef(null)

  const openEnquiry = useCallback((service, triggerElement = document.activeElement) => {
    returnFocusRef.current = triggerElement
    setEnquiry(service)
  }, [])

  const closeEnquiry = useCallback(() => setEnquiry(null), [])

  useEffect(() => {
    const handleConsultationLink = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (!(event.target instanceof Element)) return

      const link = event.target.closest('a[href="#/consultation"]')
      if (!link) return

      event.preventDefault()
      const focusTarget = link.closest('.mobile-menu')
        ? document.querySelector('.menu-button')
        : link
      openEnquiry('Consultation', focusTarget)
    }

    document.addEventListener('click', handleConsultationLink)
    return () => document.removeEventListener('click', handleConsultationLink)
  }, [openEnquiry])

  return (
    <EnquiryDialogContext.Provider value={{ isOpen: Boolean(enquiry), openEnquiry }}>
      {children}
      {enquiry && (
        <EnquiryDialog
          service={enquiry}
          onClose={closeEnquiry}
          returnFocusRef={returnFocusRef}
        />
      )}
    </EnquiryDialogContext.Provider>
  )
}
