import { useContent } from "../../hooks/useContent";

function Contact() {
  const { contact } = useContent();
  const { email, linkedin, github, contactTitle } = contact;

  return (
    <section className="content-section">
      <h2 className="section-title">{contactTitle}</h2>
      <div className="contact-grid" style={{ marginBottom: 30 }}>
        <a className="clickable-card" href={`mailto:${email}`}>
        <div className="contact-card">
          <div className="contact-icon" aria-label="Email" title="Email">
            <svg role="img" viewBox="0 0 24 24" width="36" height="36" fill="#000" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h3>{contact.emailTitle}</h3>
          <p style={{ color: '#C0C0C0', margin: '10px 0' }}>{email}</p>
          <p style={{ color: '#1E90FF' }}>STATUS: {contact.active}</p>
        </div>
        </a>
        <a className="clickable-card" href={linkedin} target="_blank" rel="noopener noreferrer">
        <div className="contact-card">
          <div className="contact-icon" aria-label="LinkedIn" title="LinkedIn">
            <svg role="img" viewBox="0 0 24 24" width="36" height="36" fill="#000" aria-hidden="true">
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7.114 20.452H3.559V9h3.555v11.452zM5.337 7.433a2.067 2.067 0 1 1 0-4.135 2.067 2.067 0 0 1 0 4.135zM20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.6 0 4.268 2.371 4.268 5.455v6.288z"/>
            </svg>
          </div>
          <h3>{contact.linkedinTitle}</h3>
          <p style={{ color: '#C0C0C0', margin: '10px 0' }}>{linkedin}</p>
          <p style={{ color: '#1E90FF' }}>STATUS: {contact.verified}</p>
        </div>
        </a>
        <a className="clickable-card" href={github} target="_blank" rel="noopener noreferrer">
        <div className="contact-card">
          <div className="contact-icon" aria-label="GitHub" title="GitHub">
            <svg role="img" viewBox="0 0 24 24" width="36" height="36" fill="#000" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.205 11.387c.6.111.82-.261.82-.58 0-.286-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.756-1.335-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.004 0c2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.289 0 .322.217.697.825.579A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <h3>{contact.githubTitle}</h3>
          <p style={{ color: '#C0C0C0', margin: '10px 0' }}>{github}</p>
          <p style={{ color: '#1E90FF' }}>STATUS: {contact.public}</p>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;