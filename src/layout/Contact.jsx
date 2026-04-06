import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, ExternalLink, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
import profileImage from '../assets/images/profile-image.jpg';

function Contact() {
  const fullText = "I am currently working on small projects that helps small businesses by transitioning from manual tasks into efficient, scalable solutions.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const sectionRef = useRef(null);

  // Form State
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // 1. Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTypingStarted(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Typing effect logic
  useEffect(() => {
    if (isTypingStarted && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 35); 
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, isTypingStarted]);

  // 3. Email Submission Logic
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: Replace these strings with your actual EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        setIsSubmitting(false);
        formRef.current.reset(); // Clear the form
        
        // Reset the "Sent" status after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact">
      <div ref={sectionRef} className="w-full py-20 px-2 bg-gradient-to-tr from-[#0D0D0D] to-[#0A0A0A] space-y-10 lg:space-y-15">
        
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h1 className="text-3xl font-bold text-white">Let's Get in <span className="text-emerald-500">Touch!</span></h1>
          
          <p className="text-[9pt] md:text-sm text-white/70 mt-1 normal-text text-md max-w-[370px] md:max-w-3xl">
            I'm open to new opportunities and collaborations. Feel free to reach out to me for any inquiries.
          </p>
        </div>

        <div className="flex items-center justify-center flex-col lg:flex-row gap-10 lg:gap-5">
          <div className="order-2 lg:order-1 pl-10 md:pl-7 px-6 py-6 pb-0 lg:pb-25">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="flex items-center justify-center w-full">
                <img src={profileImage} className="flex flex-shrink-0 w-30 h-30 rounded-xl shadow-md shadow-[#1e1e1e]/50" alt="profile"/>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex flex-col items-center md:items-start justify-between w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">Ralph Francisco</h3>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-white/90 font-light font-mono">Full-Stack Developer</span>
                  </div>
                </div>

                <p className="text-sm leading-snug w-[320px] md:w-[430px] text-white/90 normal-text mt-4 py-4 px-5 bg-white/6 rounded-b-3xl rounded-tr-3xl rounded-tl-xs min-h-[100px]">
                  {displayedText}
                  {isTypingStarted && (
                    <span className="inline-block w-[1px] h-[15px] mt-[-5px] bg-emerald-500 ml-1 animate-pulse align-middle"></span>
                  )}
                </p>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
              <div className="flex items-center gap-5">
                <div className="text-emerald-400 bg-emerald-600/10 p-2.5 rounded-xl"><Mail className="w-5 h-5"/></div>
                <div>
                  <small className="text-xs text-white/80">Email</small>
                  <p className="text-sm text-white">ralphfrncisco@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-emerald-400 bg-emerald-600/10 p-2 pt-2.5 px-2.5 rounded-xl"><i className="fa-brands fa-linkedin text-lg"></i></div>
                <div>
                  <small className="text-xs text-white/80">LinkedIn</small><br />
                  <a href="https://www.linkedin.com/in/ralphfrancisco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white hover:underline">ralphfrancisco <ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-emerald-400 bg-emerald-600/10 p-2.5 rounded-xl"><MapPin className="w-5 h-5"/></div>
                <div>
                  <small className="text-xs text-white/80">Location</small>
                  <p className="text-sm text-white">Valenzuela City, Philippines</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-emerald-400 bg-emerald-600/10 p-2 pt-2.5 px-2.5 rounded-xl"><i className="fa-brands fa-github text-lg"></i></div>
                <div>
                  <small className="text-xs text-white/80">GitHub</small><br />
                  <a href="https://github.com/ralphfrncisco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white hover:underline">ralphfrncisco <ExternalLink className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2 w-full max-w-lg py-4 px-6 rounded-lg border border-white/10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 normal-text text-white/80">
              <div>
                <label className="text-sm">Full Name</label>
                <input 
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full text-sm text-slate-200 px-3 h-9 rounded-lg border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input 
                  type="email"
                  name="reply_to"
                  required
                  placeholder="john@example.com"
                  className="mt-1 w-full text-sm text-slate-200 px-3 h-9 rounded-lg border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm">Subject</label>
                <input 
                  type="text"
                  name="subject"
                  required
                  placeholder="eg. Project Collaboration"
                  className="mt-1 w-full text-sm text-slate-200 px-3 h-9 rounded-lg border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

               <div>
                  <label htmlFor="message" className="text-sm">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows="3" 
                    className="mt-1 w-full text-slate-200 px-4 py-3 rounded-lg border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none" 
                  />
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSent}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-white normal-text text-sm rounded-lg transition-all duration-300 cursor-pointer ${
                    isSent 
                      ? 'bg-emerald-500' 
                      : 'bg-emerald-600/90 hover:bg-emerald-700 active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isSent ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : isSent ? "Message Sent!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;