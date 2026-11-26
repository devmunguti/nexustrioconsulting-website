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
 * Nexus Trio Consulting - Client Acknowledgment / Auto-Responder Email
 *
 * Theme Colors:
 * - Navy Dark: #0a233c
 * - Navy Primary: #123b62
 * - Gold Accent: #d7ad30
 * - Light Background: #f4f6f9
 * - Slate Text: #2b2f36
 * - Muted: #637381
 */

export default function NexusTrioAcknowledgmentEmail({ inquiry = {} }) {
  const {
    name = 'Valued Client',
    email = 'client@example.com',
    service = 'Financial & Management Advisory',
    organization = 'Your Organization',
    message = 'Consultation request details.',
    preferredDate = '',
    preferredTime = '',
  } = inquiry;

  const websiteUrl = 'https://nexustrioconsultancy.co.ke';
  const supportEmail = 'nexustrioconsultancy@gmail.com';

  const fields = [
    ['Service Requested', service],
    organization ? ['Organisation', organization] : null,
    preferredDate ? ['Preferred Date', preferredDate] : null,
    preferredTime ? ['Preferred Time', preferredTime] : null,
    message ? ['Enquiry Summary', message] : null,
  ].filter(Boolean);

  return (
    <Html>
      <Head />
      <Preview>{`Thank you for contacting Nexus Trio Consulting (${service})`}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top Brand Header */}
          <Section style={headerSection}>
            <Img
              src="cid:nexus-icon"
              alt="Nexus Trio Consulting"
              width="58"
              height="58"
              style={iconLogo}
            />
            <Text style={eyebrow}>Nexus Trio Consulting</Text>
            <Heading style={headerTitle}>Enquiry Received</Heading>
            <Text style={headerSub}>
              We have received your message and will be in touch shortly.
            </Text>
          </Section>

          {/* Service Banner */}
          <Section style={serviceBanner}>
            <Text style={serviceBannerText}>
              Reference Service:{' '}
              <strong style={{ color: '#ffffff' }}>{service}</strong>
            </Text>
          </Section>

          {/* Main Body */}
          <Section style={contentSection}>
            <Heading as="h2" style={greetingTitle}>
              Dear {name},
            </Heading>
            <Text style={paragraph}>
              Thank you for reaching out to <strong>Nexus Trio Consulting</strong>. We have successfully received your enquiry and our consulting team is currently reviewing your request.
            </Text>
            <Text style={paragraph}>
              A senior advisor will contact you within <strong>24 business hours</strong> to discuss your objectives and outline how we can best support you.
            </Text>

            {/* Submission Summary Table */}
            <Text style={sectionTitle}>Summary of Your Enquiry</Text>
            <table style={detailsTable} cellPadding="0" cellSpacing="0">
              <tbody>
                {fields.map(([label, value], idx) => (
                  <tr
                    key={label}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                    }}
                  >
                    <td style={tableLabel}>{label}</td>
                    <td style={tableValue}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Need immediate assistance */}
            <Section style={infoBox}>
              <Text style={infoBoxTitle}>Need urgent assistance?</Text>
              <Text style={infoBoxText}>
                If your matter requires immediate attention, you can email us directly at{' '}
                <Link href={`mailto:${supportEmail}`} style={inlineLink}>
                  {supportEmail}
                </Link>
                .
              </Text>
            </Section>

            {/* Call to action */}
            <Section style={ctaContainer}>
              <Link href={websiteUrl} target="_blank" style={buttonPrimary}>
                Visit Nexus Trio Consulting
              </Link>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footerSection}>
            <Img
              src="cid:nexus-logo"
              alt="Nexus Trio Consulting"
              width="190"
              height="auto"
              style={landscapeLogo}
            />
            <Text style={footerTagline}>
              Financial, Tax &amp; Management Advisory Excellence
            </Text>
            <Text style={footerMeta}>
              Nairobi, Kenya &bull;{' '}
              <Link href={`mailto:${supportEmail}`} style={footerLink}>
                {supportEmail}
              </Link>
            </Text>
            <Text style={disclaimer}>
              This confirmation email was sent to {email} because an enquiry was submitted on our website. If you did not initiate this request, please disregard this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

NexusTrioAcknowledgmentEmail.PreviewProps = {
  inquiry: {
    name: 'Amina Otieno',
    email: 'amina@example.com',
    service: 'Tax Advisory & Compliance',
    organization: 'East Africa Growth Partners',
    message: 'We are requesting advice on our annual corporate tax filing and tax compliance review.',
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

const greetingTitle = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#0a233c',
  margin: '0 0 14px',
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#334155',
  margin: '0 0 14px',
};

const sectionTitle = {
  fontSize: '15px',
  fontWeight: '700',
  color: '#0a233c',
  margin: '22px 0 12px',
  borderBottom: '2px solid #f1f5f9',
  paddingBottom: '8px',
};

const detailsTable = {
  width: '100%',
  borderCollapse: 'collapse',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #e2e8f0',
  marginBottom: '20px',
};

const tableLabel = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#475569',
  width: '34%',
  borderBottom: '1px solid #e2e8f0',
  verticalAlign: 'top',
};

const tableValue = {
  padding: '10px 14px',
  fontSize: '13px',
  color: '#0f172a',
  borderBottom: '1px solid #e2e8f0',
};

const infoBox = {
  backgroundColor: '#f8fafc',
  borderLeft: '4px solid #d7ad30',
  padding: '12px 16px',
  borderRadius: '4px',
  margin: '20px 0',
};

const infoBoxTitle = {
  fontSize: '13px',
  fontWeight: '700',
  color: '#0a233c',
  margin: '0 0 4px',
};

const infoBoxText = {
  fontSize: '13px',
  color: '#475569',
  margin: '0',
  lineHeight: '18px',
};

const inlineLink = {
  color: '#123b62',
  textDecoration: 'underline',
  fontWeight: '600',
};

const ctaContainer = {
  textAlign: 'center',
  margin: '24px 0 12px',
};

const buttonPrimary = {
  display: 'inline-block',
  padding: '12px 24px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '700',
  textDecoration: 'none',
  backgroundColor: '#123b62',
  color: '#ffffff',
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '12px 32px 24px',
};

const footerSection = {
  backgroundColor: '#f8fafc',
  padding: '24px 32px 28px',
  textAlign: 'center',
  borderTop: '1px solid #e2e8f0',
};

const landscapeLogo = {
  margin: '0 auto 14px',
  display: 'block',
  maxWidth: '190px',
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
