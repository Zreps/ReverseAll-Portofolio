import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram ,faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';


export default function ContactMe() {
  const form = useRef();
  const recaptchaRef = useRef(); 
  const [isLoading, setIsLoading] = useState(false);
const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);

  
  const captchaToken = recaptchaRef.current.getValue();

  if (!captchaToken) {
    alert('Tolong centang CAPTCHA terlebih dahulu!');
    setIsLoading(false);
    return;
  }

  
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  emailjs
    .sendForm(
      SERVICE_ID,    
      TEMPLATE_ID,   
      form.current, 
      {
        publicKey: PUBLIC_KEY, 
        'g-recaptcha-response': captchaToken 
      }
    )
    .then(
      () => {
        alert('Email berhasil dikirim dengan aman!');
        form.current.reset();
        recaptchaRef.current.reset();
      },
      (error) => {
        alert('Gagal mengirim email: ' + error.text);
      }
    )
    .finally(() => {
      setIsLoading(false);
    });
};


  return (
    <section className="contact-container w-full min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-between gap-8" id="contact">
      <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl text-black">Hubungi Saya</h2>
    <form ref={form} className="flex flex-col gap-4" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" name="from_name" required />
      
      <label>Email</label>
      <input type="email" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" name="from_email" required />
      
      <label>Message</label>
      <textarea className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white" name="message" required />

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      />
      
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>

    <h3 className="text-lg font-semibold text-slate-800">Temukan saya di:</h3>
    <div className="contact-info flex flex-row gap-4 items-center justify-center">
    <div className="tiktok">
      <a href="https://www.tiktok.com/@reverseall.dev" target="_blank" rel="noopener noreferrer">
        <font color='black'><FontAwesomeIcon icon={faTiktok} size="2x" />  TikTok</font>
      </a>
    </div>
    <div className="instagram">
      <a href="https://www.instagram.com/ritzxyz08/" target="_blank" rel="noopener noreferrer">
        <font color='purple'><FontAwesomeIcon icon={faInstagram} size="2x" />  Instagram</font>
      </a>
    </div>
    <div className="youtube">
      <a href="https://www.youtube.com/@Repyonima" target="_blank" rel="noopener noreferrer">
        <font color='red'><FontAwesomeIcon icon={faYoutube} size="2x" />  YouTube</font>
      </a>
    </div>
    <div className="github">
      <a href="https://github.com/Zreps" target="_blank" rel="noopener noreferrer">
        <font color='black'><FontAwesomeIcon icon={faGithub} size="2x" />  GitHub</font>
      </a>
      </div>
    </div>
    <footer className="footer w-full bg-gray-200 p-4 text-center ">
      <font color='black'>© 2026 Reps | ReverseAll. All rights reserved.</font>
    </footer>
    </section>
  );
};
