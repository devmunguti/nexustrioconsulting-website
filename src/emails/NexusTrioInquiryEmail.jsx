import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from 'react-email';

/**
 * Nexus Trio Consulting - Inquiry Notification Email Template
 *
 * Theme Colors:
 * - Navy Dark: #0a233c
 * - Navy Primary: #123b62
 * - Navy Light: #1b4f82
 * - Gold Accent: #d7ad30
 * - Gold Hover / Text: #c19924
 * - Background Light: #f4f6f9
 * - Slate / Text: #2b2f36
 * - Muted: #637381
 */

export default function NexusTrioInquiryEmail({ inquiry = {} }) {
  const {
    type = 'contact',
    name = 'Amina Otieno',
    email = 'amina@example.com',
    phone = '+254 700 000 000',
    organization = 'East Africa Holdings',
    service = 'Tax Advisory & Compliance',
    message = 'We are seeking expert guidance on our upcoming corporate restructuring and tax compliance obligations for the next fiscal year.',
    turnover = 'KES 50M - 100M',
    preferredDate = '2026-12-05',
    preferredTime = '10:00 AM EAT',
  } = inquiry;

  const subject = `Website enquiry: ${service} - ${name}`;
  const replyHref = `mailto:${email}`;
  const cleanPhone = (phone || '').replace(/\D/g, '');
  const hasInternationalPhone = /^[1-9]\d{7,14}$/.test(cleanPhone);
  const whatsappHref = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${name}, I'm following up on your enquiry with Nexus Trio Consulting regarding ${service}.`)}`
    : '';

  const fields = [
    ['Enquirer Name', name],
    ['Email Address', email],
    ['Phone Number', phone],
    ['Organisation / Company', organization],
    ['Service Requested', service],
    ['Enquiry Details', message],
    ['Annual Turnover / Grant Portfolio', turnover],
    ['Preferred Consultation Date', preferredDate],
    ['Preferred Consultation Time', preferredTime],
    ['Source Form', type ? type.toUpperCase() : 'WEBSITE'],
  ].filter(([, val]) => Boolean(val));

  return (
    <Html>
      <Head />
      <Preview>{`New Enquiry: ${service} from ${name}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top Brand Header */}
          <Section style={headerSection}>
            <Img
              src="cid:nexus-icon"
              alt="Nexus Trio Consulting Mark"
              width="58"
              height="58"
              style={iconLogo}
            />
            <Text style={eyebrow}>Nexus Trio Consulting</Text>
            <Heading style={headerTitle}>New Website Enquiry</Heading>
            <Text style={headerSub}>
              A prospective client has submitted an inquiry through the website
            </Text>
          </Section>

          {/* Service Banner */}
          <Section style={serviceBanner}>
            <Text style={serviceBannerText}>
              Service Requested:{' '}
              <strong style={{ color: '#ffffff' }}>{service}</strong>
            </Text>
          </Section>

          {/* Main Card Content */}
          <Section style={contentSection}>
            <Text style={sectionTitle}>Client &amp; Enquiry Details</Text>

            <table style={detailsTable} cellPadding="0" cellSpacing="0">
              <tbody>
                {fields.map(([label, value], idx) => (
                  <tr
                    key={label}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9fafb',
                    }}
                  >
                    <td style={tableLabel}>{label}</td>
                    <td style={tableValue}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Quick Actions Header */}
            <Text style={actionsHeader}>Quick Actions</Text>
            <Text style={actionsHelp}>
              Contact the client directly via email, phone, or WhatsApp:
            </Text>

            {/* Action Buttons */}
            <Section style={actionsContainer}>
              <Link href={replyHref} style={buttonEmail}>
                ✉ Reply by Email
              </Link>
              {hasInternationalPhone && (
                <>
                  <Link href={`tel:+${cleanPhone}`} style={buttonPhone}>
                    📞 Call Enquirer
                  </Link>
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    style={buttonWhatsApp}
                  >
                    💬 WhatsApp Enquirer
                  </Link>
                </>
              )}
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Bottom Footer Section */}
          <Section style={footerSection}>
            <Img
              src="cid:nexus-logo"
              alt="Nexus Trio Consulting Landscape Logo"
              width="200"
              height="auto"
              style={landscapeLogo}
            />
            <Text style={footerTagline}>
              Financial, Tax &amp; Management Advisory Excellence
            </Text>
            <Text style={footerMeta}>
              Nairobi, Kenya &bull;{' '}
              <Link
                href="mailto:info@nexustrioconsultancy.co.ke"
                style={footerLink}
              >
                nexustrioconsultancy.co.ke
              </Link>
            </Text>
            <Text style={disclaimer}>
              This notification was generated automatically from the Nexus Trio
              Consulting website booking and enquiry system. Please handle client
              information in compliance with relevant data protection policies.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

NexusTrioInquiryEmail.PreviewProps = {
  inquiry: {
    type: 'consultation',
    name: 'Amina Otieno',
    email: 'amina@example.com',
    phone: '+254700000000',
    organization: 'East Africa Growth Partners',
    service: 'Financial & Management Advisory',
    message: 'We are seeking advisory support for grant auditing and strategic financial governance.',
    turnover: 'KES 50M - 100M',
    preferredDate: '2026-12-05',
    preferredTime: '10:00 AM EAT',
  },
};

/* Styles */
const main = {
  backgroundColor: '#f4f6f9',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  margin: '0',
  padding: '32px 12px',
};

const container = {
  maxWidth: '620px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(10, 35, 60, 0.08)',
  border: '1px solid #e2e8f0',
};

const headerSection = {
  backgroundColor: '#0a233c',
  padding: '32px 24px 28px',
  textAlign: 'center',
};

const iconLogo = {
  margin: '0 auto 12px',
  display: 'block',
  borderRadius: '50%',
  border: '2px solid #d7ad30',
  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
};

const eyebrow = {
  color: '#d7ad30',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '1.8px',
  textTransform: 'uppercase',
  margin: '0 0 6px',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '22px',
  fontWeight: '700',
  margin: '0 0 6px',
};

const headerSub = {
  color: '#cbd5e1',
  fontSize: '13px',
  margin: '0',
};

const serviceBanner = {
  backgroundColor: '#123b62',
  padding: '12px 24px',
  borderBottom: '3px solid #d7ad30',
  textAlign: 'center',
};

const serviceBannerText = {
  color: '#f3e8bc',
  fontSize: '14px',
  margin: '0',
};

const contentSection = {
  padding: '28px 32px 20px',
};

const sectionTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0a233c',
  margin: '0 0 16px',
  borderBottom: '2px solid #f1f5f9',
  paddingBottom: '8px',
};

const detailsTable = {
  width: '100%',
  borderCollapse: 'collapse',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #e2e8f0',
};

const tableLabel = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#475569',
  width: '36%',
  borderBottom: '1px solid #e2e8f0',
  verticalAlign: 'top',
};

const tableValue = {
  padding: '10px 14px',
  fontSize: '13px',
  color: '#0f172a',
  borderBottom: '1px solid #e2e8f0',
  wordBreak: 'break-word',
};

const actionsHeader = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#0a233c',
  marginTop: '28px',
  marginBottom: '4px',
};

const actionsHelp = {
  fontSize: '12px',
  color: '#64748b',
  margin: '0 0 14px',
};

const actionsContainer = {
  textAlign: 'left',
  margin: '0 0 10px',
};

const buttonBase = {
  display: 'inline-block',
  padding: '10px 18px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '700',
  textDecoration: 'none',
  marginRight: '8px',
  marginBottom: '8px',
};

const buttonEmail = {
  ...buttonBase,
  backgroundColor: '#123b62',
  color: '#ffffff',
};

const buttonPhone = {
  ...buttonBase,
  backgroundColor: '#d7ad30',
  color: '#0a233c',
};

const buttonWhatsApp = {
  ...buttonBase,
  backgroundColor: '#168b52',
  color: '#ffffff',
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '12px 32px 24px',
};

const footerSection = {
  backgroundColor: '#f8fafc',
  padding: '24px 32px 30px',
  textAlign: 'center',
  borderTop: '1px solid #e2e8f0',
};

const landscapeLogo = {
  margin: '0 auto 14px',
  display: 'block',
  maxWidth: '220px',
};

const footerTagline = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#123b62',
  margin: '0 0 4px',
};

const footerMeta = {
  fontSize: '12px',
  color: '#64748b',
  margin: '0 0 12px',
};

const footerLink = {
  color: '#123b62',
  textDecoration: 'underline',
};

const disclaimer = {
  fontSize: '11px',
  color: '#94a3b8',
  lineHeight: '16px',
  margin: '0',
};
