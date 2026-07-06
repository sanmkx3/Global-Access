import { useState, useEffect } from "react";
import {
  Eye,
  Shield,
  Zap,
  Globe,
  Users,
  Layers,
  Wrench,
  Hammer,
  Building,
   CheckCircle ,
   Award,
    ShieldCheck, 
    Mail,
    Phone,
    MapPin,
  Paintbrush,

  ScanSearch,
}  from "lucide-react";
import logo  from "./assets/logo.jpeg";
import heroImg from "./assets/Industrial-Rope-Access-Trade-Association.jpg";
import glassimg from "./assets/glass.png";
import confinedworkspace from "./assets/confinedworkspace.png";
import industrialinspections from "./assets/industrialinspections.png";
import installtion from "./assets/installtion.png";
import manpowerRecruitment from "./assets/Manpower-Recruitment-1.png";
import paintingandcoating from "./assets/paintingand coating.png";
import rigging from "./assets/rigging.png";
import weldingandfabrication from "./assets/weldingandfabrication.png";
import weldingandmechnaics from "./assets/weldingandmechnaics.png";
import oip from "./assets/insulation3.png";
import ropeaccess from "./assets/ropeaccessmanagement.png";

import rig1 from "./assets/rig1.png";
import paint1 from "./assets/industrialpainiting.png";
import rope1 from "./assets/ropeaccessmaintain.png"
import inspect1 from "./assets/inspect1.png"

import about1 from "./assets/about1.png";
import about2 from "./assets/about2.png";
import fast from "./assets/fast.png";
import irata from "./assets/irata.png";
import scaffolding from "./assets/scaffolding.png";

import reactsvg from "./assets/react.svg";
import { Settings } from "lucide-react";
import { HardHat } from "lucide-react";
function useRoute() {
  const [page, setPage] = useState(window.location.hash.replace("#", "") || "home");
  useEffect(() => {
    const onHash = () => setPage(window.location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return page;
}

function navigate(page) {
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Global Access Logo with Globe + Orange accent
function GlobalAccessLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe outer circle */}
      <circle cx="60" cy="60" r="54" fill="#1e3a5f" stroke="#0066FF" strokeWidth="2" />
      
      {/* Continents/Globe pattern */}
      <path d="M 50 35 Q 55 40 60 35 Q 65 40 70 35" fill="none" stroke="#fff" strokeWidth="2" />
      <ellipse cx="60" cy="55" rx="18" ry="8" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M 40 70 Q 50 75 60 70 Q 70 75 80 70" fill="none" stroke="#fff" strokeWidth="2" />
      
      {/* Highlight accent lines */}
      <line x1="75" y1="30" x2="85" y2="40" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="50" x2="95" y2="50" stroke="#0066FF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { min-height: 100%; width: 100%; scroll-behavior: smooth; }
  body { font-family: 'Inter', sans-serif; background: #f8f9fb; color: #1e3a5f; }
  button, input, textarea { font: inherit; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }

:root {
  --nav-height: 100px;
}

@media (max-width: 768px) {
  :root {
    --nav-height: 90px;
  }
}

  /* Color scheme: Navy blue #1e3a5f, Blue #0066FF */
  .page-shell { width: 100%; overflow-x: hidden; }
  
  .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 999; background: rgba(255,255,255,0.95); box-shadow: 0 2px 16px rgba(30,58,95,0.08); }
  .navbar.scrolled { box-shadow: 0 4px 24px rgba(30,58,95,0.12); }
  .navbar-inner { margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 27px 24px; }
  .logo-btn { display: flex; align-items: center; gap: 12px; border: none; background: transparent; cursor: pointer; padding: 0; }
  .logo-text { display: grid; line-height: 1.1; text-align: left;   gap: 4px;  }
  .logo-main { font-weight: 800; font-size: 18px; color: #1e3a5f; }
  .logo-sub { font-size: 12px; letter-spacing: 0.22em;  color: #0066FF; font-weight: 1000; }
  
  .nav-desktop { display: flex; align-items: center; gap: 4; }
  .nav-link { cursor: pointer; color: #4a5f7f; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; padding: 10px 16px; border-radius: 6px; transition: all 0.2s; }
  .nav-link:hover { color: #0066FF; background: rgba(0,102,255,0.08); }
  .nav-link.active { color: #fff; background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,102,255,0.3); font-weight: 700; }
  
  .mobile-nav { display: none; border: 1px solid #e0e8f0; background: #fff; border-radius: 8px; width: 48px; height: 48px; cursor: pointer; font-size: 16px; flex-direction: column; gap: 6px; padding: 12px; }
  .mobile-nav span { width: 100%; height: 2px; background: #1e3a5f; border-radius: 2px; display: block; }
  
  .mobile-menu { background: #fff; border-top: 1px solid #e0e8f0; padding: 12px 16px; max-height: 60vh; overflow-y: auto; }
  .mobile-menu-item { padding: 12px 0; font-weight: 700; color: #4a5f7f; cursor: pointer; border-bottom: 1px solid #f2f4f8; font-size: 14px; }
  .mobile-menu-item.active { color: #0066FF; }

  /* Hero section */
  .hero-panel { position: relative; min-height: 60vh; display: flex; align-items: center; justify-content: center; padding: 110px 24px 80px; background: linear-gradient(rgba(30, 58, 95, 0.3), rgba(30, 58, 95, 0.3)), url(${heroImg}) center/cover no-repeat; overflow: hidden; }
  .hero-grid { position: relative; z-index: 2; display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; max-width: 1200px; margin: 0 auto; }
  
  .hero-tag { display: inline-flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #060606; margin-bottom: 24px; }
  .hero-h1 { font-size: clamp(32px, 5vw, 68px); line-height: 1.08; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 24px; font-weight: 800; }
  .hero-p { max-width: 560px; font-size: 16px; line-height: 1.9; color: rgba(255,255,255,0.88); margin-bottom: 36px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
  
  .btn-primary { display: inline-flex; align-items: center; justify-content: center; background: #0066FF; color: #fff; border: none; border-radius: 8px; padding: 14px 28px; font-weight: 700; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; box-shadow: 0 12px 32px rgba(0,102,255,0.28); transition: all 0.25s; cursor: pointer; white-space: nowrap; }
  .btn-primary:hover { background: #0052cc; transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,102,255,0.35); }
  
  .btn-secondary { display: inline-flex; align-items: center; justify-content: center; background: transparent; color: #fff; border: 2px solid #fff; border-radius: 8px; padding: 12px 28px; font-weight: 700; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; transition: all 0.25s; cursor: pointer; white-space: nowrap; }
  .btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-3px); }
  
  .hero-image { position: relative; width: 100%; max-width: 480px; display: flex; align-items: center; justify-content: center; }
  .hero-img-wrapper { position: relative; width: 100%; aspect-ratio: 4/5; border-radius: 20px; overflow: hidden; box-shadow: 0 32px 80px rgba(30,58,95,0.3); }
  .hero-img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
  
  /* Content sections */
  .content-shell { padding: 80px 24px; max-width: 1200px; margin: 0 auto; }
  .section-header { margin: 0 auto 48px; max-width: 780px; text-align: center; }
  .section-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0066FF; margin-bottom: 12px; display: inline-block; }
  .section-title { font-size: clamp(28px, 4vw, 48px); line-height: 1.1; margin-bottom: 16px; letter-spacing: -0.02em; color: #1e3a5f; font-weight: 800; }
  .section-subtitle { font-size: 15px; line-height: 1.8; color: #4a5f7f; max-width: 800px; margin: 0 auto; }
  
  .grid-4 { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
  
  /* Horizontal Scroll Container */
  .services-scroll-container { 
    width: 100%; 
    overflow-x: auto; 
    overflow-y: hidden; 
  padding: 10px 0;   /* smaller clean spacing */
  margin: 0;         /* FIX: no negative margin */
    scroll-behavior: smooth;
  }
  
  .services-scroll-container::-webkit-scrollbar { height: 8px; }
  .services-scroll-container::-webkit-scrollbar-track { background: #f0f4fa; }
  .services-scroll-container::-webkit-scrollbar-thumb { background: #0066FF; border-radius: 4px; }
  
  .services-scroll-wrapper { 
    display: flex; 
    gap: 24px; 
    padding: 20px 0;
    width: fit-content;
    animation: scrollLeftRight 60s linear infinite;
  }
  
  .services-scroll-wrapper.direction-right {
    animation: scrollRightLeft 60s linear infinite;
  }
  
  @keyframes scrollLeftRight {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes scrollRightLeft {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  .service-card { 
    background: #fff; 
    border: 1px solid #e8ecf4; 
    border-radius: 14px; 
    overflow: hidden; 
    box-shadow: 0 6px 20px rgba(30,58,95,0.06); 
    transition: all 0.28s;
     width: 20vw;        /* responsive width */
  min-width: 280px;   /* prevents too small */
  max-width: 340px;   /* prevents too large */
    flex-shrink: 0;
  }
  .service-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(30,58,95,0.1); border-color: #0066FF; }
  .service-card-img { width: 100%; height: 280px; background: linear-gradient(135deg, #e8ecf4, #f0f4fc); }
  .service-card-img img { width: 100%; height: 100%; object-fit: cover; }
  .service-card-content { padding: 24px; }
  .service-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 10px; background: rgba(0,102,255,0.12); color: #0066FF; margin-bottom: 14px; }
  .service-title { font-size: 16px; font-weight: 700; color: #1e3a5f; margin-bottom: 10px; }
  .service-desc { font-size: 14px; line-height: 1.7; color: #4a5f7f; }
  
  .feature-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 32px; align-items: center; margin-bottom: 60px; }
  .feature-text h3 { font-size: 24px; font-weight: 800; color: #1e3a5f; margin-bottom: 14px; }
  .feature-text p { font-size: 14px; line-height: 1.8; color: #4a5f7f; margin-bottom: 10px; }
  
  .img-grid-2 { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; }
  .img-wrapper { position: relative; width: 100%; aspect-ratio: 1; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(30,58,95,0.12); }
  .img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
  
  .banner-cta { background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); color: #fff; border-radius: 14px; padding: 48px 40px; margin: 60px 0; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 28px; box-shadow: 0 14px 40px rgba(0,102,255,0.2); }
  .banner-text p { font-size: 14px; line-height: 1.7; }
  .banner-btn { background: #fff; color: #0066FF; border: none; border-radius: 8px; padding: 14px 28px; font-weight: 700; font-size: 13px; text-transform: uppercase; cursor: pointer; transition: all 0.25s; white-space: nowrap; }
  .banner-btn:hover { transform: scale(1.04); }
  
  /* Contact */
  .contact-grid { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 32px; align-items: stretch; justify-content: center; }
  .form-card, .contact-info-card { background: #fff; border: 1px solid #e8ecf4; border-radius: 20px; padding: 36px; box-shadow: 0 24px 60px rgba(30,58,95,0.08); }
  .form-card { min-height: 460px; display: flex; flex-direction: column; justify-content: space-between; }
  .contact-card-header { margin-bottom: 28px; }
  .contact-card-title { font-size: 22px; margin-bottom: 10px; }
  .contact-card-copy { color: #4a5f7f; line-height: 1.8; }
  .form-input { width: 100%; border: 1px solid #dbe3f0; border-radius: 14px; padding: 16px 18px; margin-bottom: 18px; background: #fafbff; color: #1e3a5f; font-size: 14px; transition: all 0.2s; }
  .form-input:focus { outline: none; border-color: #0066FF; background: #fff; box-shadow: 0 0 0 3px rgba(0,102,255,0.12); }
  .form-note { display: block; font-size: 13px; color: #6b7a95; margin-bottom: 20px; }
  .form-status { font-size: 13px; margin-bottom: 18px; color: #d04444; }
  .contact-info-card { padding: 34px; display: grid; gap: 22px; }
  .contact-info-card strong { font-weight: 700; }
  .info-item { display: flex; align-items: cen; gap: 16px; margin-bottom: 16px; }
  .info-icon { width: 48px; height: 48px; display: grid; place-items: center; background: rgba(0,102,255,0.12); border-radius: 12px; color: #0066FF; flex-shrink: 0; }
  .info-text strong { display: block; font-weight: 700; color: #1e3a5f; margin-bottom: 6px; font-size: 14px; }
  .info-text { font-size: 14px; color: #4a5f7f; line-height: 1.7; }
  .info-text a { color: #0066FF; font-weight: 600; }
  .contact-highlight { display: inline-flex; align-items: center; justify-content: center; padding: 12px 18px; border-radius: 999px; background: rgba(0,102,255,0.08); color: #0066FF; font-size: 13px; font-weight: 700; width: fit-content; margin-bottom: 12px; }
  .contact-support { font-size: 15px; font-weight: 700; color: #1e3a5f; margin-bottom: 8px; }
  .contact-support-subtitle { font-size: 14px; color: #4a5f7f; line-height: 1.78; }
  
  .footer-panel { background: #1e3a5f; color: rgba(255,255,255,0.8); padding: 54px 24px 24px; }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px; margin-bottom: 42px; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.12); }
  .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  .footer-title { font-size: 15px; font-weight: 700; color: #fff; }
  .footer-copy { font-size: 13px; line-height: 1.8; color: rgba(255,255,255,0.7); max-width: 560px; }
  .footer-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 14px; }
  .footer-link { font-size: 12px; color: rgba(255,255,255,0.6); cursor: pointer; transition: color 0.2s; }
  .footer-link:hover { color: #0066FF; }
  .footer-copyright { text-align: center; font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 20px; }

  @media (max-width: 1024px) {
    .hero-grid, .contact-grid, .footer-grid, .feature-grid { grid-template-columns: 1fr; }
    .hero-panel { padding: 90px 24px 70px; min-height: 48vh; }
    .content-shell { padding: 70px 16px; }
    .banner-cta { grid-template-columns: 1fr; padding: 36px 28px; gap: 20px; }
    .grid-3 { grid-template-columns: repeat(2,1fr); }
    .navbar-inner { padding: 14px 16px; gap: 16px; }
    .logo-main { font-size: 14px; }
    .logo-sub { font-size: 9px; }
    .service-card { min-width: 300px; }
  }
  
  @media (max-width: 768px) {
    .nav-desktop { display: none !important; }
    .mobile-nav { display: flex !important; align-items: center; justify-content: center; flex-direction: column; gap: 5px; }
    
    /* Navbar mobile */
    @media (max-width: 768px) {

  .navbar-inner {
    height: 100px;
    padding: 0 16px;
  }

}
    .logo-btn { gap: 8px; }
    .logo-main { font-size: 23px; }
    .logo-sub { font-size: 16px; }
    
    /* Hero mobile */
    .hero-panel { padding: 60px 16px 30px; min-height: 54vh; }
    .hero-grid { padding: 0 0; gap: 24px; }
    .hero-copy { margin-left: 0 !important; }
    .hero-h1 { font-size: 28px; margin-bottom: 16px; }
    .hero-p { font-size: 14px; margin-bottom: 24px; line-height: 1.8; }
    .hero-tag { font-size: 10px; margin-bottom: 16px; gap: 6px; }
    .hero-actions { gap: 10px; }
    .btn-primary, .btn-secondary { padding: 12px 20px; font-size: 12px; }
    
    /* Content mobile */
    .content-shell { padding: 60px 14px; }
    .section-header { margin-bottom: 36px; }
    .section-title { font-size: 24px; margin-bottom: 12px; }
    .section-subtitle { font-size: 14px; }
    .section-tag { font-size: 10px; }
    
    /* Grids mobile */
    .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; gap: 16px; }
    .img-grid-2 { grid-template-columns: 1fr; gap: 12px; }
    
    /* Cards mobile */
 .service-card {
    width: 280px;        /* FIXED width */
    min-width: 180px;    /* keep consistency */
    flex-shrink: 0;
    border-radius: 12px;
  }

  .services-scroll-wrapper {
    gap: 12px;           /* tighter spacing */
  }

  .service-card-img {
    height: 150px;       /* slightly smaller image */
  }
}
    .service-card-img { height: 180px; }
    .service-card-content { padding: 18px; }
    .service-icon { width: 40px; height: 40px; }
    .service-title { font-size: 14px; }
    .service-desc { font-size: 13px; }
    
    /* Feature grid mobile */
    .feature-grid { gap: 20px; margin-bottom: 40px; }
    .feature-text h3 { font-size: 20px; }
    .feature-text p { font-size: 13px; }
    
    /* Banner mobile */
    .banner-cta { padding: 28px 18px; margin: 40px 0; border-radius: 12px; }
    .banner-text p { font-size: 13px; }
    .banner-btn { padding: 12px 20px; font-size: 12px; }
    
    /* Form mobile */
    .contact-grid { gap: 20px; }
    .form-card { padding: 24px; border-radius: 12px; }
    .form-input { padding: 12px 14px; margin-bottom: 14px; font-size: 16px; }
    .form-input::placeholder { font-size: 14px; }
    
    /* Contact info mobile */
    .contact-info-card { padding: 20px; margin-bottom: 16px; border-radius: 12px; }
    .info-item { gap: 12px; margin-bottom: 12px; }
    .info-text { font-size: 12px; }
    .info-text strong { font-size: 13px; }
    
    /* Footer mobile */
    .footer-panel { padding: 42px 14px 18px; }
    .footer-grid { gap: 24px; margin-bottom: 30px; }
    .footer-logo { gap: 10px; margin-bottom: 12px; }
    .footer-title { font-size: 14px; }
    .footer-copy { font-size: 12px; }
    .footer-links { gap: 12px; margin-top: 12px; }
    .footer-link { font-size: 11px; }
    .footer-copyright { font-size: 10px; margin-top: 16px; }
  }

  @media (max-width: 480px) {
    .hero-panel { padding: 50px 14px 20px; min-height: 51vh; }
    .hero-grid { gap: 16px; }
    .hero-h1 { font-size: 22px; }
    .hero-p { font-size: 13px; }
    .content-shell { padding: 50px 12px; }
    .section-title { font-size: 20px; }
    .section-subtitle { font-size: 13px; }
    .banner-cta { padding: 20px 14px; margin: 30px 0; }
    .form-card { padding: 18px; }
    .footer-panel { padding: 36px 12px 14px; }
  }
`;

function Navbar({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Services", page: "services" },
    { label: "Safety", page: "safety" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* <button className="logo-btn" onClick={() => { navigate("home"); setMenuOpen(false); }}>
          <GlobalAccessLogo size={50} />
          <div className="logo-text">
            <span className="logo-main">Arrow Access</span>
         
            
            <span className="logo-sub">Technical Services</span>
          </div>
        </button> */}
<button
  className="logo-btn"
  onClick={() => {
    navigate("home");
    setMenuOpen(false);
  }}
>
  <img
    src={logo}
    alt="Arrow Access Logo"
    style={{
      width: "90px",   // Increase or decrease as needed
      height: "60px",
      objectFit: "contain",
      display: "block",
      flexShrink: 0,
    }}
  />

  <div className="logo-text">
    <span className="logo-main">Arrow Access</span>
    <span className="logo-sub">Technical Services</span>
  </div>
</button>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <span key={link.page} className={`nav-link${currentPage === link.page ? " active" : ""}`} onClick={() => navigate(link.page)}>
              {link.label}
            </span>
          ))}
        </nav>

        <button className="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <div key={link.page} className={`mobile-menu-item${currentPage === link.page ? " active" : ""}`} onClick={() => { navigate(link.page); setMenuOpen(false); }}>
              {link.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-panel">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-tag">
            <ShieldCheck size={16} />
            Industrial Rope Access Excellence
          </div>
          <h1 className="hero-h1">Safe, Reliable, Professional Rope Access Solutions.</h1>
          <p className="hero-p">
            Industrial, commercial, and offshore access services delivered with IRATA-certified expertise. No scaffolding required  minimize costs and downtime with engineered rope access.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("services")}>Our Services</button>
            <button className="btn-secondary" onClick={() => navigate("contact")}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: "Rope Access Maintenance",
    img: rope1,
    desc: "Routine and corrective maintenance on buildings, structures, and equipment using engineered rope access techniques.",
  },
  {
    title: "Industrial Painting",
    img: paint1,
    desc: "High-performance painting and coating services for facades, tanks, chimneys, and industrial structures.",
  },
  {
    title: "Inspection Services",
    img: inspect1,
    desc: "Precis rope access inspections for facades, tanks, piping, and structural assessment with documentation.",
  },
  {
    title: "Rigging & Lifting Operations",
    img: rig1,
    desc: "Safe rigging and specialized lifting operations on complex industrial sites and high-rise structures.",
  },
];

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <HeroSection />

      <section className="content-shell">
        <div style={{ marginBottom: 60 }}>
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Rope Access for Industrial Excellence</h2>
            <p className="section-subtitle">We deliver safe, cost-effective access solutions with minimal disruption and world-class technical expertise.</p>
          </div>

          {/* <div className="grid-3">
            {[
              {
                icon: <CheckCircle size={24} />,
                title: "No Scaffolding Required",
                desc: "Rope access eliminates the need for costly, time-consuming scaffolding setup and removal.",
              },
              {
                icon: <Shield size={24} />,
                title: "Safety-Certified Teams",
                desc: "IRATA-certified technicians with rigorous training in high-access work and rescue procedures.",
              },
              {
                icon: <Award size={24} />,
                title: "Fast Deployment",
                desc: "Rapid mobilization and execution reduce project timelines and operational downtime.",
              },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#fff", border: "1px solid #e8ecf4", borderRadius: 14, padding: 24, boxShadow: "0 6px 20px rgba(30,58,95,0.06)" }}>
                <div style={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 10, background: "rgb(161, 216, 246)", color: "#0e93f1", marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4a5f7f" }}>{item.desc}</p>
              </div>
            ))}
          </div> */}
 <div className="grid-3">
  {[
    {
      image: scaffolding,
      title: "No Scaffolding Required",
      desc: "Rope access eliminates the need for costly, time-consuming scaffolding setup and removal.",
    },
    {
      image: irata,
      title: "Safety-Certified Teams",
      desc: "IRATA-certified technicians with rigorous training in high-access work and rescue procedures.",
    },
    {
      image: fast,
      title: "Fast Deployment",
      desc: "Rapid mobilization and execution reduce project timelines and operational downtime.",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      style={{
        background: "#fff",
        border: "1px solid #e8ecf4",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(30,58,95,0.06)",
      }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Content */}
      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#1e3a5f",
            marginBottom: "10px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            color: "#4a5f7f",
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>

        <div style={{ marginBottom: 60 }}>
          <div className="section-header">
            <span className="section-tag">Service Portfolio</span>
            <h2 className="section-title">Access Solutions Built on Expertise</h2>
          </div>
          <div className="services-scroll-container">
            <div className="services-scroll-wrapper">
              {[...SERVICES, ...SERVICES].map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-card-img">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="service-card-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="banner-cta">
          <div>
            <p style={{ fontSize: 14, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 8, opacity: 0.9 }}>Ready to streamline your access work?</p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Request a Free Consultation Today</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>Our team will assess your project and deliver practical solutions tailored to your needs.</p>
          </div>
          <button className="banner-btn" onClick={() => navigate("contact")}>Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="content-shell" id="about">
      <div className="feature-grid">
        <div>
          <span className="section-tag">About Arrow Access</span>
          <h2 className="section-title" style={{ marginBottom: 24 }}>We Deliver Safe Work at Height</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4a5f7f", marginBottom: 14 }}>
            Arrow Access Technical Services is a leader in rope access operations, providing industrial-grade inspections, maintenance, repairs, and specialized access work across commercial, industrial, and offshore environments.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4a5f7f" }}>
            Our technicians combine years of field experience with rigorous IRATA-aligned training to execute work safely, efficiently, and to the highest professional standards.
          </p>
        </div>
        <div className="img-grid-2">
          <div className="img-wrapper">
            <img src={about1} alt="Rope access team executing maintenance work" />
          </div>
          <div className="img-wrapper">
            <img src={about2} alt="Safety-certified rope access operation" />
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginBottom: 36 }}>
        <h2 className="section-title">What We Stand For</h2>
      </div>
      <div className="grid-3">
        {[
          { icon: ShieldCheck, title: "Safety First", desc: "Every operation is planned around risk control, redundant safety systems, and continuous monitoring." },
          { icon: Users, title: "Certified Expertise", desc: "Our teams are IRATA-trained, professionally certified, and committed to ongoing skill development." },
          { icon: Award, title: "Professional Excellence", desc: "We deliver work on schedule, to specification, and with the attention to detail clients expect." },
        ].map((item, idx) => (
          <div key={idx} style={{ background: "#fff", border: "1px solid #e8ecf4", borderRadius: 14, padding: 24 }}>
            <div style={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 10, background: "rgb(161, 216, 246)", color: "#0e93f1", marginBottom: 14 }}>
              <item.icon size={24} />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f", marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4a5f7f" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// function ServicesPage() {
//   return (
//     <section className="content-shell" id="services">
//       <div className="section-header">
//         <span className="section-tag">Service Portfolio</span>
//         <h2 className="section-title">Comprehensive Access Solutions</h2>
//         <p className="section-subtitle">From industrial inspections to commercial work and offshore operations, we provide full-spectrum rope access services.</p>
//       </div>

//   <div className="grid-3">
//   {[
//     { 
//       icon: Wrench, 
//       title: "Rope Access Maintenance", 
//       desc: "Efficient maintenance services for buildings and industrial structures using advanced rope access techniques, reducing downtime and eliminating the need for scaffolding." 
//     },
//     { 
//       icon: Hammer, 
//       title: "Welding & Fabrication", 
//       desc: "Specialized welding and fabrication services performed at height with precision, ensuring structural strength and compliance with industry standards." 
//     },
//     { 
//       icon: Layers, 
//       title: "Insulation Services", 
//       desc: "Professional insulation installation and maintenance for pipelines, tanks, and industrial systems to improve efficiency and durability." 
//     },
//     { 
//       icon: Settings, 
//       title: "Welding & Mechanical Work", 
//       desc: "Comprehensive mechanical and welding solutions including repairs, installations, and modifications in complex access environments." 
//     },
//     { 
//       icon: Shield, 
//       title: "Confined Space Work", 
//       desc: "Safe execution of operations in confined and hazardous spaces with trained personnel, proper equipment, and strict safety compliance." 
//     },
//     { 
//       icon: Users, 
//       title: "Manpower Resourcing", 
//       desc: "Provision of skilled and certified technicians for industrial, commercial, and offshore projects based on client requirements." 
//     },
//     { 
//       icon: Building, 
//       title: "Installation Works", 
//       desc: "Professional installation of industrial components, systems, and structures at height using efficient rope access methods." 
//     },
//     { 
//       icon: Eye, 
//       title: "Facade & Glass Cleaning", 
//       desc: "High-quality cleaning of building facades and glass surfaces ensuring safety, clarity, and a professional finish." 
//     },
//     { 
//       icon: ScanSearch, 
//       title: "Industrial Inspection Services", 
//       desc: "Detailed inspection of structures, pipelines, and equipment with accurate reporting to ensure safety and compliance." 
//     },
//     { 
//       icon: Paintbrush, 
//       title: "Painting & Coating Services", 
//       desc: "Protective painting and coating solutions for industrial and commercial structures to enhance durability and corrosion resistance." 
//     },
//     { 
//       icon: HardHat, 
//       title: "Rigging & Lifting Operations", 
//       desc: "Safe and controlled rigging and lifting services for heavy equipment and materials in complex and high-risk environments." 
//     },
//   ].map((item, idx) => (
//     <div 
//       key={idx} 
//       style={{ 
//         background: "#fff", 
//         border: "1px solid #e8ecf4", 
//         borderRadius: 14, 
//         padding: 24, 
//         boxShadow: "0 6px 20px rgba(30,58,95,0.06)" 
//       }}
//     >
//       <div 
//         style={{ 
//           width: 44, 
//           height: 44, 
//           display: "grid", 
//           placeItems: "center", 
//           borderRadius: 10, 
//           background: "rgb(161, 216, 246)", 
//           color: "#0e93f1", 
//           marginBottom: 14 
//         }}
//       >
//         <item.icon size={26} />
//       </div>

//       <h3 
//         style={{ 
//           fontSize: 16, 
//           fontWeight: 700, 
//           color: "#1e3a5f", 
//           marginBottom: 10 
//         }}
//       >
//         {item.title}
//       </h3>

//       <p 
//         style={{ 
//           fontSize: 14, 
//           lineHeight: 1.7, 
//           color: "#4a5f7f" 
//         }}
//       >
//         {item.desc}
//       </p>
//     </div>
//   ))}
// </div>
//     </section>
//   );
// }


function ServicesPage() {
  const services = [
    {
      title: "Rope Access Maintenance",
      img: ropeaccess,
      desc: "Efficient maintenance services for buildings and industrial structures using advanced rope access techniques."
    },
    {
      title: "Welding & Fabrication",
      img: weldingandfabrication,
      desc: "Specialized welding and fabrication services performed at height with precision."
    },
    {
      title: "Insulation Services",
      img: oip,
      desc: "Professional insulation installation and maintenance for pipelines and systems."
    },
    {
      title: "Welding & Mechanical Work",
      img: weldingandmechnaics,
      desc: "Comprehensive mechanical and welding solutions in complex environments."
    },
    {
      title: "Confined Space Work",
      img: confinedworkspace,
      desc: "Safe execution of operations in confined and hazardous spaces."
    },
    {
      title: "Manpower Resourcing",
      img: manpowerRecruitment,
      desc: "Provision of skilled and certified technicians for projects."
    },
    {
      title: "Installation Works",
      img: installtion,
      desc: "Professional installation of industrial systems at height."
    },
    {
      title: "Facade & Glass Cleaning",
      img: glassimg,
      desc: "High-quality facade and glass cleaning services."
    },
    {
      title: "Industrial Inspection Services",
      img: industrialinspections,
      desc: "Detailed inspection of structures and pipelines."
    },
    {
      title: "Painting & Coating Services",
      img: paintingandcoating,
      desc: "Protective painting and coating solutions."
    },
    {
      title: "Rigging & Lifting Operations",
      img: rigging,
      desc: "Safe rigging and lifting services for heavy equipment."
    }
  ];

  return (
    <section className="content-shell" id="services">
      <div className="section-header">
        <span className="section-tag">Service Portfolio</span>
        <h2 className="section-title">Comprehensive Access Solutions</h2>
        <p className="section-subtitle">
          From industrial inspections to commercial work and offshore operations, we provide full-spectrum rope access services.
        </p>
      </div>

      <div className="grid-3">
        {services.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))"
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                padding: "20px",
                color: "#fff",
                zIndex: 2
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "6px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.5",
                  opacity: 0.9
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SafetyPage() {
  return (
    <section className="content-shell" id="safety">
      <div className="section-header">
        <span className="section-tag">Safety Standards</span>
        <h2 className="section-title">Safety-Driven Operations</h2>
        <p className="section-subtitle">We adhere to stringent rope access safety protocols, international standards, and continuous risk management on every assignment.</p>
      </div>

      <div className="grid-3" style={{ marginBottom: 40 }}>
        {[
          { 
            icon: ShieldCheck, 
            title: "Certified Equipment", 
            desc: "All harnesses, ropes, anchors, and rigging hardware are certified, inspected regularly, and maintained to industry best practices." 
          },
          { 
            icon: CheckCircle, 
            title: "Procedure Control", 
            desc: "Work execution follows strict permits, site-specific procedures, documented risk assessments, and clear communication protocols." 
          },
          { 
            icon: Eye, 
            title: "Continuous Monitoring", 
            desc: "Supervision, spotters, and real-time hazard observation ensure safety is maintained throughout every work phase." 
          },
          { 
            icon: Award, 
            title: "Training & Certification", 
            desc: "Our technicians hold current IRATA certifications, rescue training, and site-specific safety qualifications updated regularly." 
          },
          { 
            icon: Shield, 
            title: "Rescue Planning", 
            desc: "Every project includes detailed rescue procedures, backup systems, medical response protocols, and emergency management plans." 
          },
          { 
            icon: Users, 
            title: "Team Safety Culture", 
            desc: "Safety is embedded in every decision - from planning through execution. We prioritize crew welfare and incident prevention always." 
          },
        ].map((item, idx) => (
          <div key={idx} style={{ background: "#fff", border: "1px solid #e8ecf4", borderRadius: 14, padding: 24 }}>
            <div style={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 10, background: "rgb(161, 216, 246)", color: "#0e93f1", marginBottom: 14 }}>
              <item.icon size={26} />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f", marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4a5f7f" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields before submitting.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="content-shell" id="contact">
      <div className="section-header" style={{ marginBottom: 40 }}>
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Connect With Our Team</h2>
        <p className="section-subtitle">Send us your project details and we will respond with tailored solutions and a comprehensive estimate.</p>
      </div>

     
     

        <div className="contact-info-card">
          <div className="contact-highlight">Need assistance?</div>
          <div>
            <div className="contact-support">Get a fast response</div>
            <p className="contact-support-subtitle">If you prefer, contact our team directly by phone or email for urgent rope access consultations.</p>
          </div>
          <div style={{ display: "grid", gap: 18 }}>
            <div className="info-item">
              <div className="info-icon"><Mail size={18} /></div>
              <div className="info-text">
                <strong>Email</strong>
                <a href="mailto:arrowaccess@gmail.com">arrowaccess@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone size={18} /></div>
              <div className="info-text">
                <strong>Phone</strong>
                +91 77087 76821
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={18} /></div>
              <div className="info-text">
                <strong>Office</strong>
                18th cross, Shanmuganagar, U.K.T.Malai,<br />Trichy - 620102
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-panel">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            {/* <div className="footer-logo">
              <GlobalAccessLogo size={40} />
              <div>
                <div className="footer-title" style={{fontSize: "14px"}}>Arrow Access<br />Technical Services</div>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Professional Rope Access</div>
              </div>
            </div> */}
            <div className="footer-logo">
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      border: "1px solid #acc8f3", // Outline color
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "#fffefe",
      flexShrink: 0,
    }}
  >
    <img
      src={logo}
      alt="Arrow Access Logo"
      style={{
        width: "36px",
        height: "36px",
        objectFit: "contain",
      }}
    />
  </div>

  <div>
    <div className="footer-title" style={{ fontSize: "14px" }}>
      Arrow Access
      <br />
      Technical Services
    </div>

    <div
      style={{
        fontSize: 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)",
        marginTop: 3,
      }}
    >
      Professional Rope Access
    </div>
  </div>
</div>
            <p className="footer-copy">
              Trusted provider of industrial rope access services for inspection, maintenance, repair, and offshore operations. Built on certified training, rigorous safety protocols, and professional excellence.
            </p>
          </div>
          <div>
            <div className="footer-title">Quick Links</div>
            <div className="footer-links">
              {["Home", "About Us", "Services", "Safety", "Contact"].map((label) => (
                <span key={label} className="footer-link" onClick={() => navigate(label.toLowerCase().replace(/\s+/g, ""))}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          � 2026 Arrow Access Technical Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const page = useRoute();

  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "safety":
        return <SafetyPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="page-shell">
      <style>{GLOBAL_CSS}</style>
      <Navbar currentPage={page} />
      <main style={{ paddingTop: "var(--nav-height)" }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
