import PageShell from '../components/layout/PageShell'
import PageMetadata from '../components/layout/PageMetadata'
import TypedHeading from '../components/ui/TypedHeading'
import { useEnquiryDialog } from '../components/ui/EnquiryDialogContext'
import { teamMembers } from '../data/team'
import './Team.css'

function Team() {
  const { openEnquiry } = useEnquiryDialog()

  return (
    <div className="nx-team-page">
      <PageShell active="Team" hideHero>
        <PageMetadata
          title="Our Team | Nexus Trio Consulting"
          description="Meet the people behind Nexus Trio Consulting and explore the team members already featured on our website."
        />
        <section className="nx-team-intro">
          <div className="container">
            <TypedHeading>Meet the team</TypedHeading>
            <p>Meet the people behind Nexus Trio Consulting.</p>
          </div>
        </section>

        <section className="nx-team-list" aria-label="Nexus Trio team members">
          <div className="container nx-team-list__grid">
            {teamMembers.map((member) => {
              const firstName = member.name.split(' ')[0]
              const displayName = `${member.credentials ? `${member.credentials} ` : ''}${member.name}${member.postNominals ? `, ${member.postNominals}` : ''}`

              return (
                <article className="nx-team-card" key={member.name}>
                  <img
                    className="nx-team-card__photo"
                    src={member.photoPath}
                    alt={`Portrait of ${displayName}`}
                    width="500"
                    height="625"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="nx-team-card__content">
                    <h2>{displayName}</h2>
                    {member.role && <p className="nx-team-card__role">{member.role}</p>}
                    {member.bio && <p className="nx-team-card__bio">{member.bio}</p>}
                    <button
                      className="nx-team-card__button"
                      type="button"
                      onClick={(event) => openEnquiry(`Talk to ${firstName}`, event.currentTarget)}
                    >
                      Talk to {firstName}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="nx-team-cta">
          <div className="container">
            <p>Not sure who to talk to? Send us a message and we will connect you with the right person.</p>
            <button type="button" onClick={(event) => openEnquiry('Team enquiry', event.currentTarget)}>
              Send us a message
            </button>
          </div>
        </section>
      </PageShell>
    </div>
  )
}

export default Team
