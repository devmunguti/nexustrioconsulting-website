import { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={['faq-accordion__item', className].filter(Boolean).join(' ')}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header className="faq-accordion__header">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={['faq-accordion__trigger', className].filter(Boolean).join(' ')}
      {...props}
    />
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={['faq-accordion__content', className].filter(Boolean).join(' ')}
    {...props}
  >
    <div className="faq-accordion__content-inner">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'
