import { footerData } from './footer'

export type FaqCategory =
  | 'General'
  | 'Pricing and engagement'
  | 'NGOs and donor reporting'
  | 'Tax and compliance'
  | 'Getting started'

export type FaqEntry = {
  id: string
  question: string
  answer: string
  category: FaqCategory
  serviceSlugs?: string[]
}

export const faqContactDetails = footerData.contact
// TODO: confirm with Pillar that the existing phone and email details are current.

export const faqs: FaqEntry[] = [
  {
    id: 'general-engagement-start',
    question: 'How does a new engagement begin?',
    answer: 'We start with a conversation about your organisation, current records and priorities. From there, we can outline a suitable scope and the information needed to get started.',
    // TODO: confirm with Pillar
    category: 'Getting started',
  },
  {
    id: 'general-first-meeting-records',
    question: 'What should I prepare before an introductory meeting?',
    answer: 'A brief overview of your organisation, recent financial information, current accounting tools and upcoming reporting needs is helpful. We will confirm any additional documents based on your situation.',
    // TODO: confirm with Pillar
    category: 'Getting started',
  },
  {
    id: 'general-fee-setting',
    question: 'How are your fees determined?',
    answer: 'Fees depend on the agreed scope, transaction volume, reporting complexity and level of support required. We discuss the proposed work and fee before an engagement begins.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
  },
  {
    id: 'general-monthly-support',
    question: 'Can support be arranged on an ongoing basis?',
    answer: 'Yes. Ongoing support can be scoped around recurring bookkeeping, payroll coordination, reporting or advisory needs. The specific deliverables and review cadence are agreed for each engagement.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
  },
  {
    id: 'general-ngo-support',
    question: 'Do you work with NGOs and donor-funded projects?',
    answer: 'The team supports NGOs and projects with grant-focused accounting, financial reporting and audit preparation. The work is tailored to the organisation’s funding agreements and internal processes.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
  },
  {
    id: 'general-fund-tracking',
    question: 'Can you help us track more than one grant or funding source?',
    answer: 'We can help set up or improve tracking so income and expenditure can be reviewed by project or funding source. The approach depends on your accounting system and reporting requirements.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
  },
  {
    id: 'general-tax-records',
    question: 'What records are useful for a tax compliance review?',
    answer: 'Useful records often include sales and purchase documentation, bank records, payroll information and prior filings. We will confirm the appropriate checklist for your entity and the specific review.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
  },
  {
    id: 'general-tax-guidance',
    question: 'Can you advise us when our tax position is unclear?',
    answer: 'We can review the information you provide, explain relevant considerations and outline practical next steps. Any advice should be based on verified facts and current requirements specific to your circumstances.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
  },
  {
    id: 'ngo-project-ledgers',
    question: 'How can project spending be tracked against a grant budget?',
    answer: 'We can help organise records by award, budget line or other agreed reporting dimensions, then review actual spending against the approved plan. The method should match the grant terms and your accounting system.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
    serviceSlugs: ['ngo-project-financial-management'],
  },
  {
    id: 'ngo-donor-reports',
    question: 'Can you help prepare financial reports for donors?',
    answer: 'Yes. Support can include reconciling project records, preparing agreed financial schedules and checking that reported figures can be traced to source documentation. The format and review process depend on each award.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
    serviceSlugs: ['ngo-project-financial-management'],
  },
  {
    id: 'ngo-multicurrency',
    question: 'How do you handle grants that involve more than one currency?',
    answer: 'We can help document the organisation’s agreed currency treatment and organise supporting records so project balances can be reviewed consistently. The reporting approach should be confirmed against the grant terms and accounting policy.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
    serviceSlugs: ['ngo-project-financial-management'],
  },
  {
    id: 'ngo-audit-preparation',
    question: 'What support is available before a donor audit?',
    answer: 'Preparation may include organising ledgers and supporting documents, reviewing reconciliations and compiling requested schedules. The exact work depends on the auditor’s request list and the project records available.',
    // TODO: confirm with Pillar
    category: 'NGOs and donor reporting',
    serviceSlugs: ['ngo-project-financial-management'],
  },
  {
    id: 'corporate-registration-support',
    question: 'How do I register my company?',
    answer: 'Support can include helping coordinate the information and documents needed for a registration process, along with related business setup administration. The required steps depend on the entity and should be confirmed before submission.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['business-registration-corporate-services'],
  },
  {
    id: 'corporate-registration-documents',
    question: 'What information should I gather for a registration enquiry?',
    answer: 'Start with the proposed business structure, ownership details, contact information and a summary of the planned activities. We will confirm the current document checklist for your intended registration.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['business-registration-corporate-services'],
  },
  {
    id: 'corporate-ongoing-records',
    question: 'Can you help maintain company records after setup?',
    answer: 'We can discuss ongoing company secretarial and record-keeping support as part of a defined engagement. The scope depends on the entity’s needs and the services requested.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
    serviceSlugs: ['business-registration-corporate-services'],
  },
  {
    id: 'corporate-tax-onboarding',
    question: 'Can business setup include tax and invoicing system onboarding?',
    answer: 'We can review your onboarding needs and help coordinate appropriate tax or invoicing system setup where included in the agreed scope. Requirements should be checked for your specific entity and current circumstances.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
    serviceSlugs: ['business-registration-corporate-services'],
  },
  {
    id: 'payroll-monthly-process',
    question: 'What is included in payroll support?',
    answer: 'Depending on the agreed scope, payroll support can include reviewing payroll inputs, preparing payroll calculations and payslips, and organising related reporting. The required checks and deliverables are confirmed during onboarding.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
    serviceSlugs: ['payroll-hr-administration'],
  },
  {
    id: 'payroll-inputs',
    question: 'What information is needed to process payroll?',
    answer: 'Common inputs include the current employee list, approved changes to pay or benefits, attendance or leave information where relevant, and any approved deductions. We will agree a secure process and checklist with your team.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['payroll-hr-administration'],
  },
  {
    id: 'payroll-statutory-review',
    question: 'Can you help review payroll-related statutory reporting?',
    answer: 'We can help organise payroll information and review agreed statutory reporting tasks as part of the engagement. Applicable requirements and calculations should be verified for the relevant period before processing.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
    serviceSlugs: ['payroll-hr-administration'],
  },
  {
    id: 'payroll-data-handling',
    question: 'How should sensitive payroll information be shared?',
    answer: 'We agree an appropriate document-sharing process with each client and limit requests to the information needed for the work. Please confirm the preferred secure channel with the team before sending employee records.',
    // TODO: confirm with Pillar
    category: 'General',
    serviceSlugs: ['payroll-hr-administration'],
  },
  {
    id: 'advisory-business-scope',
    question: 'What does business advisory support cover?',
    answer: 'Depending on your goals, advisory work may include reviewing financial information, planning scenarios, cash-flow forecasts or options for operational improvement. The scope is set after understanding your business priorities.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
    serviceSlugs: ['business-advisory-consultancy'],
  },
  {
    id: 'advisory-financial-models',
    question: 'Can you prepare a financial model for a growing business?',
    answer: 'We can discuss a model based on your available historical information, assumptions and planning questions. Projections are planning tools and should be updated as actual results and assumptions change.',
    // TODO: confirm with Pillar
    category: 'General',
    serviceSlugs: ['business-advisory-consultancy'],
  },
  {
    id: 'advisory-funding-materials',
    question: 'Can you help us prepare financial information for a funding discussion?',
    answer: 'Support may include organising financial data, reviewing forecast assumptions and preparing agreed schedules for discussion. Any materials should accurately reflect the information and assumptions supplied by your organisation.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['business-advisory-consultancy'],
  },
  {
    id: 'advisory-review-cadence',
    question: 'How often can we review business performance?',
    answer: 'Review meetings can be arranged at a cadence that fits the engagement and the availability of reliable management information. We can agree the reports and questions to cover during planning.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
    serviceSlugs: ['business-advisory-consultancy'],
  },
  {
    id: 'accounting-outsourced-scope',
    question: 'What does outsourced accounting support usually include?',
    answer: 'A tailored scope may include bookkeeping, reconciliations, management reporting and support with maintaining accounting records. The precise tasks, responsibilities and review cadence are agreed with each client.',
    // TODO: confirm with Pillar
    category: 'Pricing and engagement',
    serviceSlugs: ['accounting-financial-management'],
  },
  {
    id: 'accounting-software',
    question: 'Can you work with our existing accounting software?',
    answer: 'We can discuss the software you use and confirm whether it fits the work required. Support may include reviewing setup, improving workflows or coordinating a migration where appropriate.',
    // TODO: confirm with Pillar
    category: 'General',
    serviceSlugs: ['accounting-financial-management'],
  },
  {
    id: 'accounting-management-reports',
    question: 'What information can management accounts provide?',
    answer: 'Management reports can help summarise financial activity and highlight questions for business review. The format and measures should be agreed in advance and depend on the quality and detail of the underlying records.',
    // TODO: confirm with Pillar
    category: 'General',
    serviceSlugs: ['accounting-financial-management'],
  },
  {
    id: 'accounting-catch-up',
    question: 'Can you help bring behind-schedule bookkeeping up to date?',
    answer: 'We can first assess the records available, identify gaps and agree a catch-up scope. The time and work involved depend on the period, transaction volume and completeness of supporting documents.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['accounting-financial-management'],
  },
  {
    id: 'tax-return-support',
    question: 'Can you help prepare and review tax returns?',
    answer: 'We can discuss support with assembling records, reviewing calculations and preparing agreed filing information. The appropriate treatment should be checked against your circumstances and verified requirements before submission.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
    serviceSlugs: ['tax-advisory-compliance'],
  },
  {
    id: 'tax-etims-support',
    question: 'Can you help us understand our eTIMS setup?',
    answer: 'We can review how your invoicing process currently works and discuss suitable setup or support options. The correct configuration depends on your business activity, systems and current requirements.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
    serviceSlugs: ['tax-advisory-compliance'],
  },
  {
    id: 'tax-kra-query',
    question: 'I’m struggling with KRA. What should I do?',
    answer: 'Keep the notice and related records together, note any response instructions, and seek advice before replying if the matter is unclear. We can review the documents and discuss support for the response.',
    // TODO: confirm with Pillar
    category: 'Tax and compliance',
    serviceSlugs: ['tax-advisory-compliance'],
  },
  {
    id: 'tax-compliance-review',
    question: 'How does a tax compliance review work?',
    answer: 'A review typically begins by agreeing the scope and gathering relevant records. The team can then examine the available information, raise questions and discuss practical next steps based on verified facts.',
    // TODO: confirm with Pillar
    category: 'Getting started',
    serviceSlugs: ['tax-advisory-compliance'],
  },
]
