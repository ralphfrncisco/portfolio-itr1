import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import profileImage from '../assets/images/profile-image.webp';

// ─── Constants ────────────────────────────────────────────────────────────────

const BIO_TEXT =
  "I am currently working on small projects that helps small businesses by transitioning from manual tasks into efficient, scalable solutions.";

const CONTACT_ITEMS = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    content: <p className="text-sm text-white">ralphfrncisco@gmail.com</p>,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    content: <p className="text-sm text-white">Valenzuela City, Philippines</p>,
  },
  {
    icon: <i className="fa-brands fa-linkedin text-lg" />,
    label: 'LinkedIn',
    content: (
      <a
        href="https://www.linkedin.com/in/ralphfrancisco/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-white hover:underline"
      >
        ralphfrancisco <ExternalLink className="w-4 h-4" />
      </a>
    ),
  },
  {
    icon: <i className="fa-brands fa-github text-lg" />,
    label: 'GitHub',
    content: (
      <a
        href="https://github.com/ralphfrncisco"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-white hover:underline"
      >
        ralphfrncisco <ExternalLink className="w-4 h-4" />
      </a>
    ),
  },
];

const FORM_FIELDS = [
  { label: 'Full Name',  name: 'from_name', type: 'text',  placeholder: 'John Doe' },
  { label: 'Email',     name: 'reply_to',  type: 'email', placeholder: 'john@example.com' },
  { label: 'Subject',   name: 'subject',   type: 'text',  placeholder: 'eg. Project Collaboration' },
];

const INPUT_CLASS =
  'mt-1 w-full text-sm text-slate-200 px-3 h-9 rounded-xl border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all';

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContactItem({ icon, label, content }) {
  return (
    <div className="flex items-center gap-5">
      <div className="text-emerald-400 bg-emerald-600/10 p-2.5 rounded-xl">{icon}</div>
      <div>
        <small className="text-xs text-white/80">{label}</small>
        {content}
      </div>
    </div>
  );
}

function TypewriterBio({ text, isStarted }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isStarted || index >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 35);
    return () => clearTimeout(t);
  }, [index, isStarted, text]);

  return (
    <p className="text-sm leading-snug w-[320px] md:w-[430px] text-white/90 normal-text mt-4 py-4 px-5 bg-white/6 rounded-b-3xl rounded-tr-3xl rounded-tl-xs min-h-[90px]">
      {displayed}
      {isStarted && (
        <span className="inline-block w-[1px] h-[15px] mt-[-5px] bg-emerald-500 ml-1 animate-pulse align-middle" />
      )}
    </p>
  );
}

function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID  = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY  = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        formRef.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => setIsSubmitting(false));
  };

  const submitIcon = isSubmitting ? (
    <Loader2 className="w-4 h-4 animate-spin" />
  ) : isSent ? (
    <CheckCircle2 className="w-4 h-4" />
  ) : (
    <Send className="w-4 h-4" />
  );

  const submitLabel = isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message';

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-4 normal-text text-white/80">
      {FORM_FIELDS.map(({ label, name, type, placeholder }) => (
        <div key={name}>
          <label className="text-sm">{label}</label>
          <input
            type={type}
            name={name}
            required
            placeholder={placeholder}
            className={INPUT_CLASS}
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="3"
          className="mt-1 w-full text-slate-200 px-4 py-3 rounded-xl border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSent}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-white normal-text text-sm rounded-xl transition-all duration-300 cursor-pointer ${
          isSent ? 'bg-emerald-500' : 'bg-emerald-600/90 hover:bg-emerald-700 active:scale-[0.98]'
        }`}
      >
        {submitIcon}
        {submitLabel}
      </button>
    </form>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function Contact() {
  const sectionRef = useRef(null);
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsTypingStarted(true); },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact">
      <div
        ref={sectionRef}
        className="w-full py-20 px-2 bg-gradient-to-tr from-[#0D0D0D] to-[#0A0A0A] space-y-10 lg:space-y-15"
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="text-3xl font-bold text-white">
            Let's Get in <span className="text-emerald-500">Touch!</span>
          </h1>
          <p className="text-[9pt] md:text-sm text-white/70 mt-1 normal-text max-w-[370px] md:max-w-3xl">
            I'm open to new opportunities and collaborations. Feel free to reach out for any inquiries.
          </p>
        </div>

        {/* Body */}
        <div className="flex items-center justify-center flex-col lg:flex-row gap-10 lg:gap-5">

          {/* Left — Profile + Contact details */}
          <div className="order-2 lg:order-1 pl-10 md:pl-7 px-6 py-6 pb-0 lg:pb-25">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="flex items-center justify-center w-full">
                <img
                  src={profileImage}
                  alt="profile"
                  className="flex-shrink-0 w-30 h-30 rounded-xl shadow-md shadow-[#1e1e1e]/50"
                />
              </div>

              <div className="flex flex-col items-start">
                <div className="flex flex-col items-center md:items-start justify-between w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">Ralph Francisco</h3>
                    {/* Online indicator */}
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                  <span className="text-xs text-white/90 font-light font-mono">Full-Stack Developer</span>
                </div>

                <TypewriterBio text={BIO_TEXT} isStarted={isTypingStarted} />
              </div>
            </div>

            {/* Contact details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
              {CONTACT_ITEMS.map(({ label, icon, content }) => (
                <ContactItem key={label} icon={icon} label={label} content={content} />
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="order-1 lg:order-2 w-full max-w-lg py-4 px-6 rounded-2xl border border-white/10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;