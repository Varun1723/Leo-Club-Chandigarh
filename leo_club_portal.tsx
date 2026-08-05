import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Info, FolderHeart, UserPlus, 
  RefreshCw, Mail, CheckCircle2, ChevronRight, 
  UploadCloud, CreditCard, ShieldCheck, HeartPulse, 
  Leaf, Eye, Utensils, Baby, ShieldAlert, ArrowRight,
  Users, Phone, Send, MapPin, LayoutDashboard, Sun, Moon,
  LogOut, IndianRupee
} from 'lucide-react';

const BRAND = {
  blue: '#00338D',
  yellow: '#EBB700',
  gray: '#55565A',
  lightGray: '#F6F8FB'
};

const FEES = {
  regular: 700,
  fellowship: 1100,
  generalRenewal: 650,
  boardRenewal: 1000
};

const ASSETS = {
  lionsEmblem: "/icons/lions-emblem.png",
  leoLogo: "/icons/leo-logo.png",
  causes: {
    diabetes: "/icons/cause-diabetes.png",
    environment: "/icons/cause-environment.png",
    hunger: "/icons/cause-hunger.png",
    vision: "/icons/cause-vision.png",
    childhoodCancer: "/icons/cause-childhood-cancer.png",
    disasterRelief: "/icons/cause-disaster-relief.png",
    youth: "/icons/cause-youth.png",
    humanitarianEfforts: "/icons/cause-humanitarian-efforts.png",
  },
};

/* =========================================================================
   COMPONENTS
   ========================================================================= */

const NavBar = ({ navigate, currentView, isDarkTheme, setIsDarkTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <nav className={`sticky top-0 z-50 border-b-4 border-[#EBB700] shadow-sm transition-colors duration-200 ${isDarkTheme ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('home')}>
          <div className="flex items-center gap-3 py-2" aria-label="Lions International and Leo Club logos">
            <img src={ASSETS.lionsEmblem} alt="Lions International emblem" className="w-11 h-11 object-contain" />
            <img src={ASSETS.leoLogo} alt="Leo Club emblem" className="w-11 h-11 object-contain" />
          </div>
          <div className="hidden sm:block border-l border-[#B3B2B1] pl-4">
            <h1 className={`font-bold text-lg leading-tight ${ isDarkTheme ? "text-white" : "text-[#00338D]"}`}>Leo Club Chandigarh Fortune</h1>
            <p className="text-xs text-[#55565A] font-medium tracking-[0.18em] uppercase">We Serve</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <button onClick={() => navigate('home')} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentView === 'home'
                ? isDarkTheme ? 'bg-[#00338D] text-white' : 'bg-blue-50 text-[#00338D]'
                : isDarkTheme ? 'text-white hover:bg-[#EBB700] hover:text-[#172033]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#00338D]'
            }`}>Home</button>
          <button onClick={() => navigate('projects')} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentView === 'projects'
                ? isDarkTheme ? 'bg-[#00338D] text-white' : 'bg-blue-50 text-[#00338D]'
                : isDarkTheme ? 'text-white hover:bg-[#EBB700] hover:text-[#172033]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#00338D]'
            }`}>Projects</button>
          <button onClick={() => navigate('contact')} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentView === 'contact'
                ? isDarkTheme ? 'bg-[#00338D] text-white' : 'bg-blue-50 text-[#00338D]'
                : isDarkTheme ? 'text-white hover:bg-[#EBB700] hover:text-[#172033]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#00338D]'
            }`}>Contact</button>
          
          <button 
            onClick={() => setIsDarkTheme(!isDarkTheme)} 
            aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'} 
            className={`ml-2 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isDarkTheme ? 'border-[#EBB700] text-[#EBB700] hover:bg-[#EBB700] hover:text-[#172033]' : 'border-[#55565A] text-[#00338D] hover:bg-[#00338D] hover:text-white'
            }`}
          >
            {isDarkTheme ? <Sun size={18} className="text-[#EBB700]" /> : <Moon size={18} />}
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          <button onClick={() => navigate('join')} className="ml-2 bg-[#00338D] text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-900 transition-all shadow-md shadow-blue-900/20 flex items-center gap-2">
            Join Leo <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-3">
          <button onClick={() => setIsDarkTheme(!isDarkTheme)} className={`w-9 h-9 rounded-full border flex items-center justify-center ${isDarkTheme ? 'border-[#EBB700]' : 'border-gray-300 text-gray-700'}`}>
            {isDarkTheme ? <Sun size={16} className="text-[#EBB700]" /> : <Moon size={16} />}
          </button>
          <button onClick={() => navigate('join')} className="bg-[#00338D] text-white px-4 py-2 rounded-full font-bold text-sm">Join</button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isDarkTheme ? 'text-white' : 'text-gray-600'}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMobileMenuOpen && (
      <div className={`md:hidden absolute w-full shadow-xl border-t ${isDarkTheme ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <button onClick={() => navigate('home')} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${isDarkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}>Home</button>
          <button onClick={() => navigate('projects')} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${isDarkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}>Projects & Causes</button>
          <button onClick={() => navigate('contact')} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${isDarkTheme ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}>Contact Us</button>
          <div className={`h-px w-full my-2 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
          <button onClick={() => navigate('admin-login')} className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl ${isDarkTheme ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}>Admin Portal</button>
        </div>
      </div>
    )}
  </nav>
);

const Footer = ({ navigate, isDarkTheme }) => (
  <footer className={`${isDarkTheme ? 'bg-black text-white' : 'bg-gray-50 text-[#172033]'} pt-16 pb-8 border-t-[6px] border-[#EBB700] transition-colors duration-200`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={ASSETS.leoLogo} alt="Leo Club emblem" className="w-10 h-10 object-contain" />
            <span className={`font-bold text-lg ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>Leo Club Chandigarh Fortune</span>
          </div>
          <p className={`text-sm leading-relaxed ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Affiliated with Lions Clubs International. Empowering youth to lead, serve, and inspire in Chandigarh and beyond.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Organization</h3>
          <ul className={`space-y-3 text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            <li><button onClick={() => navigate('home')} className={`transition-colors ${isDarkTheme ? 'hover:text-white' : 'hover:text-[#00338D]'}`}>About Us</button></li>
            <li><button onClick={() => navigate('projects')} className={`transition-colors ${isDarkTheme ? 'hover:text-white' : 'hover:text-[#00338D]'}`}>Global Causes</button></li>
            <li><button onClick={() => navigate('projects')} className={`transition-colors ${isDarkTheme ? 'hover:text-white' : 'hover:text-[#00338D]'}`}>Our Projects</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Membership</h3>
          <ul className={`space-y-3 text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            <li><button onClick={() => navigate('join')} className={`transition-colors ${isDarkTheme ? 'hover:text-white' : 'hover:text-[#00338D]'}`}>Join as New Member</button></li>
            <li><button onClick={() => navigate('contact')} className={`transition-colors ${isDarkTheme ? 'hover:text-white' : 'hover:text-[#00338D]'}`}>Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Contact</h3>
          <ul className={`space-y-3 text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            <li className="flex items-center gap-2"><Mail size={16} className={isDarkTheme ? '' : 'text-[#00338D]'} /> info@leochandigarh.org</li>
            <li className="flex items-center gap-2"><Phone size={16} className={isDarkTheme ? '' : 'text-[#00338D]'} /> +91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className={`pt-8 border-t text-center text-sm flex flex-col md:flex-row justify-between items-center ${isDarkTheme ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
        <p>© 2026 Leo Club Chandigarh Fortune. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-bold text-[#EBB700]">We Serve.</p>
      </div>
    </div>
  </footer>
);

const HomeView = ({ navigate, isDarkTheme }) => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className={`${isDarkTheme ? 'bg-black text-white' : 'bg-blue-50 text-[#172033]'} relative overflow-hidden transition-colors duration-200 border-b-4 border-[#EBB700]`}>
      <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${isDarkTheme ? 'from-[#00338D]' : 'from-blue-300'} via-transparent to-transparent`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="text-[#EBB700] font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
            <ShieldCheck size={18} /> Lions Clubs International
          </span>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>
            Serve. Lead.<br />
            <span className="text-[#EBB700]">Inspire.</span>
          </h1>
          <p className={`mt-4 text-xl max-w-2xl leading-relaxed ${isDarkTheme ? 'text-gray-200' : 'text-gray-700'}`}>
            We have more volunteers in more places than any other service organization in the world. Join Chandigarh's premier youth leadership movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => navigate('join')} className="bg-[#EBB700] text-white hover:bg-yellow-600 transition-colors px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 w-fit">
              Join the Club <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Global Causes Section */}
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${isDarkTheme ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="text-center mb-16">
        <h2 className={`text-3xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>Our Global Causes</h2>
        <div className="w-16 h-1.5 bg-[#EBB700] mx-auto rounded-full mb-6"></div>
        <p className={`max-w-2xl mx-auto text-lg ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Lions and Leos are united globally around the largest challenges facing humanity.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { name: "Vision", icon: ASSETS.causes.vision },
          { name: "Hunger", icon: ASSETS.causes.hunger },
          { name: "Diabetes", icon: ASSETS.causes.diabetes },
          { name: "Childhood Cancer", icon: ASSETS.causes.childhoodCancer },
          { name: "Environment", icon: ASSETS.causes.environment },
          { name: "Disaster Relief", icon: ASSETS.causes.disasterRelief },
          { name: "Youth", icon: ASSETS.causes.youth },
          { name: "Humanitarian Efforts", icon: ASSETS.causes.humanitarianEfforts }
        ].map((cause, idx) => (
          <div key={idx} className={`${isDarkTheme ? 'bg-[#1E1E1E] border-[#333] hover:border-[#EBB700]' : 'bg-white border-gray-200 hover:border-[#00338D] hover:shadow-md'} rounded-2xl p-6 border flex flex-col items-center text-center transition-all cursor-pointer`} onClick={() => navigate('projects')}>
            <img src={cause.icon} alt="" className="w-16 h-16 object-contain mb-4" />
            <h3 className={`font-bold ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>{cause.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsView = ({ navigate, isDarkTheme }) => (
  <div className="min-h-screen">
    <section className={`${isDarkTheme ? 'bg-black text-white' : 'bg-blue-50 text-[#172033]'} border-b-4 border-[#EBB700] relative overflow-hidden transition-colors duration-200`}>
      <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${isDarkTheme ? 'from-[#00338D]' : 'from-blue-300'} via-transparent to-transparent`}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p className="text-[#EBB700] font-bold tracking-[0.18em] uppercase text-sm mb-4">OUR INITIATIVES</p>
        <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>Projects & Causes</h1>
        <p className={`text-xl max-w-3xl leading-relaxed ${isDarkTheme ? 'text-gray-200' : 'text-gray-700'}`}>
          Explore the initiatives through which Leo Club Chandigarh Fortune creates lasting impact across our community. From humanitarian service and youth leadership to environmental sustainability and global causes, every project reflects our commitment to <span className="text-[#EBB700] font-semibold">We Serve.</span>
        </p>
      </div>
    </section>

    <section className={`${isDarkTheme ? 'bg-[#121212]' : 'bg-white'} py-16 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Updated Recent Projects Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>Recent & Upcoming Projects</h2>
          <div className="w-16 h-1.5 bg-[#EBB700] mx-auto rounded-full mb-8"></div>
          
          <div className="flex justify-center gap-3">
            <button className="bg-[#00338D] text-white px-6 py-2 rounded-full font-bold">All</button>
            <button className={`${isDarkTheme ? 'border-gray-500 text-white hover:bg-[#2A2A2A]' : 'border-gray-300 text-gray-600 hover:bg-gray-100'} border px-6 py-2 rounded-full font-bold transition-colors`}>Upcoming</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: "AUG 2026", status: "UPCOMING", title: "Blood Donation Camp", loc: "Chandigarh University Campus", color: "text-blue-500" },
            { date: "SEP 2026", status: "UPCOMING", title: "Tree Plantation Drive", loc: "Sector 42, Chandigarh", color: "text-green-500" },
            { date: "JUN 2026", status: "COMPLETED", title: "Free Eye Checkup", loc: "Sector 17 Community Hall", color: "text-purple-500" }
          ].map((proj, i) => (
            <div key={i} className={`${isDarkTheme ? 'bg-[#1E1E1E] border-[#333] hover:border-[#EBB700]' : 'bg-white border-gray-200 hover:border-[#00338D] hover:shadow-md'} rounded-2xl overflow-hidden border transition-all`}>
              <div className={`h-44 flex items-center justify-center ${isDarkTheme ? 'bg-[#2A2A2A]' : 'bg-blue-50'}`}>
                <FolderHeart className={isDarkTheme ? 'text-gray-500' : 'text-blue-200'} size={48} />
              </div>
              <div className="p-6">
                <div className="flex gap-2 text-xs font-bold mb-3">
                  <span className={proj.status === 'COMPLETED' && !isDarkTheme ? 'text-gray-500' : proj.color}>{proj.date}</span>
                  <span className={isDarkTheme ? 'text-gray-500' : 'text-gray-300'}>•</span>
                  <span className={proj.status === 'COMPLETED' ? 'text-green-600' : 'text-[#EBB700]'}>{proj.status}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>{proj.title}</h3>
                <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>{proj.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ContactView = ({ navigate, isDarkTheme }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#121212]' : 'bg-white'}`}>
      <section className={`${isDarkTheme ? 'bg-black text-white' : 'bg-blue-50 text-[#172033]'} border-b-4 border-[#EBB700] transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="font-sans text-[#EBB700] font-bold tracking-[0.18em] uppercase text-sm mb-4">Get in touch</p>
          <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-5 ${isDarkTheme ? 'text-white' : 'text-[#00338D]'}`}>Let’s serve together.</h1>
          <p className={`text-lg max-w-2xl ${isDarkTheme ? 'text-gray-200' : 'text-gray-700'}`}>Reach out for membership, service partnerships, project ideas or club information. We’ll connect you with the right member of our team.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <aside className="border-l-4 border-[#EBB700] pl-6 self-start">
          <h2 className={`text-2xl font-bold mb-5 ${isDarkTheme ? "text-white" : "text-[#00338D]"}`}>Leo Club Chandigarh Fortune</h2>
          <div className={`space-y-5 ${isDarkTheme ? 'text-gray-400' : 'text-[#55565A]'}`}>
            <p className="flex items-start gap-3"><Mail className="shrink-0 text-[#EBB700] mt-1" size={19} /><span><strong className={`font-sans block ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Email</strong>info@leochandigarh.org</span></p>
            <p className="flex items-start gap-3"><Phone className="shrink-0 text-[#EBB700] mt-1" size={19} /><span><strong className={`font-sans block ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Phone</strong>+91 98765 43210</span></p>
            <p className="flex items-start gap-3"><MapPin className="shrink-0 text-[#EBB700] mt-1" size={19} /><span><strong className={`font-sans block ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Serving</strong>Chandigarh and the surrounding community</span></p>
          </div>
          <div className={`mt-10 pt-7 border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
            <p className={isDarkTheme ? 'text-gray-500' : 'text-[#55565A]'}>For urgent, time-sensitive service requests, please call rather than using this form.</p>
          </div>
        </aside>

        <div 
          className={`border p-7 md:p-10 ${isDarkTheme ? 'bg-[#1E1E1E] border-[#333]' : 'bg-white border-gray-300'}`} 
          style={{ boxShadow: isDarkTheme ? '8px 8px 0 #EBB700' : '8px 8px 0 #00338D' }}
        >
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto text-[#EBB700] mb-5" size={52} />
              <h2 className={`text-3xl font-bold mb-3 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Thank you for reaching out.</h2>
              <p className={`max-w-md mx-auto ${isDarkTheme ? 'text-gray-400' : 'text-[#55565A]'}`}>Your message has been recorded. A club representative will respond soon.</p>
              <button onClick={() => setSubmitted(false)} className={`mt-8 px-6 py-3 font-bold transition-colors ${isDarkTheme ? 'bg-[#EBB700] text-black hover:bg-yellow-500' : 'bg-[#00338D] text-white hover:bg-[#172033]'}`}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><h2 className={`text-2xl font-bold ${isDarkTheme ? "text-white" : "text-[#172033]"}`}>Contact us</h2><p className={`mt-2 ${isDarkTheme ? 'text-gray-400' : 'text-[#55565A]'}`}>Fields marked with an asterisk are required.</p></div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Full name *</label><input required type="text" className={`w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBB700] ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} placeholder="Your name" /></div>
                <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Phone number *</label><input required type="tel" className={`w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBB700] ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} placeholder="+91" /></div>
              </div>
              <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Email address *</label><input required type="email" className={`w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBB700] ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} placeholder="name@example.com" /></div>
              <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>How can we help? *</label><select required defaultValue="" className={`w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBB700] ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}><option value="" disabled>Select a topic</option><option>Membership inquiry</option><option>Project or service partnership</option><option>Volunteer opportunity</option><option>General question</option></select></div>
              <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-200' : 'text-[#172033]'}`}>Message *</label><textarea required rows={5} className={`w-full border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EBB700] ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} placeholder="Tell us a little more about your inquiry." /></div>
              <button type="submit" className="w-full sm:w-auto bg-[#EBB700] text-[#172033] px-7 py-3.5 font-bold hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2">Send message <Send size={18} /></button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

const JoinView = ({ navigate, isDarkTheme }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');

  // Capped Dates: 9th August to 6th September
  const interviewDates = Array.from({ length: 29 }, (_, index) => {
    const date = new Date(2026, 7, 9 + index);
    return {
      value: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long' })
    };
  });

  // 8 PM to 10 PM slots (20:00 to 21:50) - 10 min each
  const interviewTimes = Array.from({ length: 12 }, (_, index) => {
    const minutes = 20 * 60 + index * 10; 
    const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
    const mins = String(minutes % 60).padStart(2, '0');
    return `${hours}:${mins}`;
  });

  const handleNext = () => {
    window.scrollTo(0, 0);
    setStep(s => s + 1);
  };
  
  const handleBack = () => {
    window.scrollTo(0, 0);
    setStep(s => s - 1);
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
      setStep(5);
    }, 1500);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkTheme ? 'bg-[#121212]' : 'bg-gray-50'}`}>
      
      {/* Inline Style for Smooth Animations */}
      <style>{`
        @keyframes slideFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .step-animation {
          animation: slideFadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {step < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-2">
              <span>Step {step} of 4</span>
              <button onClick={() => navigate('home')} className="text-[#EBB700] hover:underline font-bold">Cancel Application</button>
            </div>
            <div className={`w-full rounded-full h-2 ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div className="bg-[#EBB700] h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${(step/4)*100}%` }}></div>
            </div>
          </div>
        )}

        <div className={`rounded-3xl shadow-lg border overflow-hidden transition-all duration-300 ${isDarkTheme ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'}`}>
          
          {/* STEP 1: PERSONAL DETAILS */}
          {step === 1 && (
            <div className="p-8 md:p-10 step-animation">
              <h2 className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Personal Details</h2>
              <p className={`mb-8 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Tell us about yourself so we can begin your Leo membership application.</p>
              
              {/* Basic Information */}
              <div className="mb-10">
                <h3 className={`text-lg font-bold mb-5 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>First Name *</label><input required type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Middle Name</label><input type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Last Name *</label><input required type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Age *</label><input required min="12" max="30" type="number" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Date of Birth *</label><input required type="date" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Gender *</label>
                    <select required defaultValue="" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                      <option value="" disabled>Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Blood Group *</label>
                    <select required defaultValue="" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                      <option value="" disabled>Select blood group</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Are you a person of determination (person with disability)?</label>
                    <select defaultValue="No" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                      <option>Yes</option><option>No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Contact Number <span className="font-normal text-xs block">(Should be available on WhatsApp) *</span></label>
                    <input required type="tel" placeholder="+91" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Personal Email ID * <span className="font-normal text-xs block opacity-0">spacer</span></label>
                    <input required type="email" placeholder="name@example.com" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} />
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="mb-10">
                <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Location Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Current Address <span className="font-normal text-xs">(Please insert your complete Address) *</span></label>
                    <textarea required rows="2" placeholder="House No, Street, Landmark" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} />
                  </div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>City of Residence *</label><input required type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Pin Code *</label><input required pattern="[0-9]{6}" inputMode="numeric" placeholder="6-digit PIN" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="mb-8">
                <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Occupation *</label><input required type="text" placeholder="Student, Engineer, etc." className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                  <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Name of Institute/Organisation/Business *</label><input required type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button onClick={handleNext} className="w-full sm:w-auto bg-[#EBB700] text-[#172033] px-10 py-3.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-lg">
                  Continue to Documents
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DOCUMENTS AND MEMBERSHIP */}
          {step === 2 && (
            <div className="p-8 md:p-10 step-animation">
              <h2 className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Documents & References</h2>
              <p className={`mb-10 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Upload required documents and provide your emergency contact & reference.</p>
              
              {/* Documents */}
              <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>File Uploads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Upload Leo Omega Form *</label>
                  <input required type="file" accept=".pdf,image/*" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Upload Government ID <span className="font-normal text-xs">(Front & Back Scanned PDF) *</span></label>
                  <input required type="file" accept="application/pdf" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} />
                </div>
              </div>

              {/* Membership */}
              <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Membership Details</h3>
              <div className="mb-10">
                <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Select your choosen Membership Type *</label>
                <select required defaultValue="" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                  <option value="" disabled>Select membership type</option>
                  <option>Regular Membership (₹{FEES.regular})</option>
                  <option>Fellowship Membership (₹{FEES.fellowship})</option>
                </select>
              </div>

              {/* Emergency & Reference */}
              <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${isDarkTheme ? 'text-[#EBB700] border-gray-700' : 'text-[#00338D] border-gray-200'}`}>Emergency & Reference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Emergency Contact Person's Name *</label><input required type="text" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Emergency Contact Number *</label><input required type="tel" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
                <div>
                  <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Do you have an existing Leo Member as your reference? *</label>
                  <select defaultValue="No" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                    <option>Yes</option><option>No</option>
                  </select>
                </div>
                <div><label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Reference Person's Name</label><input type="text" placeholder="If Yes, provide name" className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`} /></div>
              </div>

              <div className="mt-8 flex justify-between gap-4">
                <button onClick={handleBack} className={`px-8 py-3.5 rounded-xl font-bold border transition-colors ${isDarkTheme ? 'text-gray-300 border-gray-700 hover:bg-gray-800' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}>Back</button>
                <button onClick={handleNext} className="flex-1 bg-[#EBB700] text-[#172033] px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-500 shadow-lg">Choose Interview Slot</button>
              </div>
            </div>
          )}

          {/* STEP 3: INTERVIEW SLOT */}
          {step === 3 && (
            <div className="p-8 md:p-10 step-animation">
              <h2 className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Choose your interview slot</h2>
              <p className={`mb-10 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Interviews are available from 9 August to 6 September, between 8:00 PM and 10:00 PM.</p>
              
              <label className={`block text-lg font-bold mb-3 ${isDarkTheme ? 'text-gray-200' : 'text-gray-800'}`}>Select Interview Date *</label>
              <select value={interviewDate} onChange={(e) => setInterviewDate(e.target.value)} className={`w-full border rounded-xl px-4 py-4 text-lg focus:ring-2 focus:ring-[#EBB700] outline-none mb-8 ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                <option value="">-- Choose a date --</option>
                {interviewDates.map((date) => <option key={date.value} value={date.value}>{date.label}</option>)}
              </select>
              
              <p className={`text-lg font-bold mb-4 ${isDarkTheme ? 'text-gray-200' : 'text-gray-800'}`}>Select Available Time *</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
                {interviewTimes.map((time) => (
                  <button 
                    key={time} 
                    type="button" 
                    onClick={() => setInterviewTime(time)} 
                    className={`border-2 rounded-xl px-3 py-4 font-bold text-lg transition-all ${
                      interviewTime === time 
                        ? 'bg-[#EBB700] text-[#172033] border-[#EBB700] shadow-md transform scale-105' 
                        : isDarkTheme 
                          ? 'border-gray-700 text-gray-300 hover:border-[#EBB700]' 
                          : 'border-gray-200 text-gray-700 hover:border-[#EBB700] bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-12 flex justify-between gap-4">
                <button onClick={handleBack} className={`px-8 py-3.5 rounded-xl font-bold border transition-colors ${isDarkTheme ? 'text-gray-300 border-gray-700 hover:bg-gray-800' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}>Back</button>
                <button disabled={!interviewDate || !interviewTime} onClick={handleNext} className={`flex-1 px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all ${interviewDate && interviewTime ? 'bg-[#EBB700] text-[#172033] hover:bg-yellow-500' : isDarkTheme ? 'bg-gray-800 text-gray-600 cursor-not-allowed shadow-none' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}`}>Review & Declare</button>
              </div>
            </div>
          )}

          {/* STEP 4: DECLARATION */}
          {step === 4 && (
            <div className="p-8 md:p-10 step-animation">
              <h2 className={`text-3xl font-bold mb-8 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Final Declaration</h2>
              
              <div className={`p-6 border rounded-2xl mb-8 ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700' : 'bg-yellow-50 border-yellow-200'}`}>
                <label className="flex items-start gap-4 cursor-pointer">
                  <input required type="checkbox" className="mt-1.5 w-6 h-6 accent-[#EBB700] cursor-pointer" />
                  <span className={`text-base font-medium leading-relaxed ${isDarkTheme ? 'text-gray-200' : 'text-gray-800'}`}>
                    As a member, Do you agree to comply with the constitution and bylaws of the Leo Club Programe (Chapter XXII | LEO50-O Omega Application | 03/20 EN - Photo/Video Authorization Form) and to abide by the rules and regulations set forth by the Club's Board.
                  </span>
                </label>
              </div>

              <div className="mt-10 flex justify-between gap-4">
                <button onClick={handleBack} disabled={isSubmitting} className={`px-8 py-3.5 rounded-xl font-bold border transition-colors ${isDarkTheme ? 'text-gray-300 border-gray-700 hover:bg-gray-800' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}>Back</button>
                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="flex-1 bg-[#EBB700] text-[#172033] px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting Application...</span>
                  ) : (
                    <>Submit Application <CheckCircle2 size={20} /></>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
            <div className="p-10 text-center py-20 step-animation">
              <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="text-green-600" size={56} />
              </div>
              <h2 className={`text-4xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Application Submitted!</h2>
              <p className={`text-lg mb-10 max-w-lg mx-auto leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                Thank you. Your interview is scheduled for <br/>
                <strong className={isDarkTheme ? 'text-[#EBB700]' : 'text-[#00338D]'}>{interviewDate}</strong> at <strong className={isDarkTheme ? 'text-[#EBB700]' : 'text-[#00338D]'}>{interviewTime}</strong>.<br/><br/>
                We will contact you on WhatsApp or email with the next steps.
              </p>
              <button onClick={() => navigate('home')} className="bg-[#EBB700] text-[#172033] px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 shadow-lg transition-transform hover:-translate-y-1">
                Return to Home
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const AdminLoginView = ({ navigate, isDarkTheme, setIsAdminLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAdminLoggedIn(true);
      navigate('admin');
    }, 1000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkTheme ? 'bg-[#121212]' : 'bg-gray-50'}`}>
      <div className={`w-full max-w-md rounded-3xl shadow-xl border p-8 sm:p-10 ${isDarkTheme ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="w-16 h-16 rounded-full bg-[#00338D] mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          L
        </div>
        <h1 className={`text-2xl font-bold text-center mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Admin Portal</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Leo Club Chandigarh Fortune</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
            />
          </div>
          <div>
            <label className={`block text-sm font-bold mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              type="password" required value={pwd} onChange={e => setPwd(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#EBB700] outline-none ${isDarkTheme ? 'bg-[#2A2A2A] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}
            />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#EBB700] text-[#172033] py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors mt-4">
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboardView = ({ navigate, isDarkTheme, setIsAdminLoggedIn }) => (
  <div className={`min-h-screen flex flex-col md:flex-row ${isDarkTheme ? 'bg-[#121212]' : 'bg-gray-50'}`}>
    {/* Sidebar */}
    <div className={`w-full md:w-64 border-r p-6 flex flex-col ${isDarkTheme ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-[#00338D] flex items-center justify-center text-white font-bold">L</div>
        <div>
          <h2 className={`font-bold leading-tight ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Admin</h2>
          <p className="text-xs text-green-500 font-bold">Online</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <button className={`w-full text-left px-4 py-3 font-bold rounded-xl flex items-center gap-3 ${isDarkTheme ? 'bg-[#2A2A2A] text-[#EBB700]' : 'bg-blue-50 text-[#00338D]'}`}>
          <LayoutDashboard size={18} /> Dashboard
        </button>
        <button className={`w-full text-left px-4 py-3 font-medium rounded-xl flex items-center gap-3 ${isDarkTheme ? 'text-gray-400 hover:bg-[#2A2A2A]' : 'text-gray-600 hover:bg-gray-50'}`}>
          <UserPlus size={18} /> Applications
        </button>
      </div>
      <button onClick={() => { setIsAdminLoggedIn(false); navigate('home'); }} className="mt-auto flex items-center gap-2 text-red-500 font-bold px-4 py-3 hover:bg-red-500/10 rounded-xl">
        <LogOut size={18} /> Sign Out
      </button>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6 md:p-10">
      <h1 className={`text-3xl font-bold mb-2 ${isDarkTheme ? 'text-white' : 'text-[#172033]'}`}>Overview</h1>
      <p className={isDarkTheme ? 'text-gray-400 mb-8' : 'text-gray-500 mb-8'}>Manage applications, payments, and club data.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Pending Applications', value: '18', color: 'text-blue-500' },
          { label: 'Pending Renewals', value: '12', color: 'text-indigo-500' },
          { label: 'UTRs to Verify', value: '7', color: 'text-orange-500' },
          { label: 'Active Members', value: '142', color: 'text-green-500' }
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border shadow-sm ${isDarkTheme ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'}`}>
            <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
            <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* =========================================================================
   MAIN APP RENDER
   ========================================================================= */

export default function LeoClubApp() {
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Handle browser back button (Hardware back button on mobile)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    // Set initial hash if none exists
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view) => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
    window.location.hash = view; // This will trigger handleHashChange and update currentView
  };

  return (
    <div className={isDarkTheme ? 'theme-dark min-h-screen' : 'theme-light min-h-screen'}>
      <NavBar 
        navigate={navigate} 
        currentView={currentView} 
        isDarkTheme={isDarkTheme} 
        setIsDarkTheme={setIsDarkTheme} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main>
        {currentView === 'home' && <HomeView navigate={navigate} isDarkTheme={isDarkTheme} />}
        {currentView === 'join' && <JoinView navigate={navigate} isDarkTheme={isDarkTheme} />}
        {currentView === 'projects' && <ProjectsView navigate={navigate} isDarkTheme={isDarkTheme} />}
        {currentView === 'contact' && <ContactView navigate={navigate} isDarkTheme={isDarkTheme} />}
        {currentView === 'admin-login' && <AdminLoginView navigate={navigate} isDarkTheme={isDarkTheme} setIsAdminLoggedIn={setIsAdminLoggedIn} />}
        {currentView === 'admin' && (isAdminLoggedIn ? <AdminDashboardView navigate={navigate} isDarkTheme={isDarkTheme} setIsAdminLoggedIn={setIsAdminLoggedIn} /> : <AdminLoginView navigate={navigate} isDarkTheme={isDarkTheme} setIsAdminLoggedIn={setIsAdminLoggedIn} />)}
      </main>

      <Footer navigate={navigate} isDarkTheme={isDarkTheme} />
    </div>
  );
}