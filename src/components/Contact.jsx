import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwvazzbo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleRetry = () => {
    setStatus('idle');
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef} aria-label="Contact section">
      <div className="container">
        <h2 className="section-title fade-in">Get In <span>Touch</span></h2>
        <p className="section-subtitle fade-in fade-in-delay-1">
          Have a project in mind? Let's work together
        </p>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info fade-in fade-in-delay-1">
            <h3 className="contact__info-heading">Let's build something amazing</h3>
            <p className="contact__info-text">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a React developer, a complete website, or API integration —
              I'd love to hear from you.
            </p>

            <div className="contact__methods">
              <a
                href="mailto:dharmnath3k@gmail.com"
                className="contact__method"
                aria-label="Send email to dharmnath3k@gmail.com"
              >
                <div className="contact__method-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">Email</span>
                  <span className="contact__method-value">dharmnath3k@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/919625048880"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__method contact__method--whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <div className="contact__method-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">WhatsApp</span>
                  <span className="contact__method-value">+91 9625048880</span>
                </div>
              </a>

              <a
                href="https://github.com/Dharmnath3k"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__method"
                aria-label="View GitHub profile"
              >
                <div className="contact__method-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">GitHub</span>
                  <span className="contact__method-value">github.com/Dharmnath3k</span>
                </div>
              </a>
            </div>

            <div className="contact__availability">
              <span className="contact__availability-dot" aria-hidden="true"></span>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrap fade-in fade-in-delay-2">
            {status === 'success' ? (
              <div className="contact__success" role="alert">
                <div className="contact__success-icon" aria-hidden="true">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setStatus('idle')}
                  aria-label="Send another message"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      disabled={status === 'sending'}
                    />
                    {errors.name && (
                      <span id="name-error" className="contact__error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      disabled={status === 'sending'}
                    />
                    {errors.email && (
                      <span id="email-error" className="contact__error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="contact__input"
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`contact__input contact__textarea${errors.message ? ' contact__input--error' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    disabled={status === 'sending'}
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="contact__error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'error' && (
                  <div className="contact__form-error" role="alert">
                    <span>Something went wrong. Please try again or email me directly.</span>
                    <button type="button" onClick={handleRetry} className="contact__retry-btn">
                      Retry
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                  aria-label={status === 'sending' ? 'Sending message...' : 'Send message'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
