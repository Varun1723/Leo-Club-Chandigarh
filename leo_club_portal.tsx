import React, { useState } from 'react';
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

// Public assets are served from /public by Vite. Keep any new logo or cause-icon paths here.
const ASSETS = {
  lionsEmblem: '/icons/lions-emblem.png',
  leoLogo: '/icons/leo-logo.png',
  causes: {
    childhoodCancer: '/icons/cause-childhood-cancer.png',
    diabetes: '/icons/cause-diabetes.png',
    disasterRelief: '/icons/cause-disaster-relief.png',
    environment: '/icons/cause-environment.png',
    humanitarianEfforts: '/icons/cause-humanitarian-efforts.png',
    hunger: '/icons/cause-hunger.png',
    vision: '/icons/cause-vision.png',
    youth: '/icons/cause-youth.png'
  }
};

export default function LeoClubApp() {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Helper to change views and scroll to top
  const navigate = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavBar = () => (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-[#EBB700] shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('home')}>
            <div className="flex items-center gap-3 py-2" aria-label="Lions International and Leo Club logos">
              <img src={ASSETS.lionsEmblem} alt="Lions International emblem" className="w-11 h-11 object-contain" />
              <img src={ASSETS.leoLogo} alt="Leo Club emblem" className="w-11 h-11 object-contain" />
            </div>
            <div className="hidden sm:block border-l border-[#B3B2B1] pl-4">
              <h1 className="font-bold text-[#00338D] text-lg leading-tight">Leo Club Chandigarh Fortune</h1>
              <p className="text-xs text-[#55565A] font-medium tracking-[0.18em] uppercase">We Serve</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <button onClick={() => navigate('home')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentView === 'home' ? 'text-[#00338D] bg-blue-50' : 'text-gray-600 hover:text-[#00338D] hover:bg-gray-50'}`}>Home</button>
            <button onClick={() => navigate('projects')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentView === 'projects' ? 'text-[#00338D] bg-blue-50' : 'text-gray-600 hover:text-[#00338D] hover:bg-gray-50'}`}>Projects</button>
            <button onClick={() => navigate('contact')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentView === 'contact' ? 'text-[#00338D] bg-blue-50' : 'text-gray-600 hover:text-[#00338D] hover:bg-gray-50'}`}>Contact</button>
            
            <button 
              onClick={() => setIsDarkTheme(!isDarkTheme)} 
              aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'} 
              className="ml-2 w-10 h-10 rounded-full border border-[#55565A] text-[#00338D] hover:bg-[#00338D] hover:text-white transition-colors flex items-center justify-center"
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
            <button 
              onClick={() => setIsDarkTheme(!isDarkTheme)} 
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
            >
              {isDarkTheme ? <Sun size={16} className="text-[#EBB700]" /> : <Moon size={16} />}
            </button>
            <button onClick={() => navigate('join')} className="bg-[#00338D] text-white px-4 py-2 rounded-full font-bold text-sm">
              Join
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button onClick={() => navigate('home')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Home</button>
            <button onClick={() => navigate('projects')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Projects & Causes</button>
            <button onClick={() => navigate('contact')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl">Contact Us</button>
            <div className="h-px w-full bg-gray-100 my-2"></div>
            <button onClick={() => navigate('admin-login')} className="block w-full text-left px-4 py-3 text-base font-medium text-gray-500 hover:bg-gray-50 rounded-xl">Admin Portal</button>
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-black text-white pt-16 pb-8 border-t-[6px] border-[#EBB700] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <img src={ASSETS.leoLogo} alt="Leo Club emblem" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg">Leo Club Chandigarh Fortune</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Affiliated with Lions Clubs International. Empowering youth to lead, serve, and inspire in Chandigarh and beyond.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Organization</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => navigate('home')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('projects')} className="hover:text-white transition-colors">Global Causes</button></li>
              <li><button onClick={() => navigate('projects')} className="hover:text-white transition-colors">Our Projects</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Membership</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => navigate('join')} className="hover:text-white transition-colors">Join as New Member</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#EBB700]">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info@leochandigarh.org</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Leo Club Chandigarh Fortune. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-bold text-[#EBB700]">We Serve.</p>
        </div>
      </div>
    </footer>
  );

  const HomeView = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`${isDarkTheme ? 'bg-black text-white' : 'bg-[#00338D] text-white'} relative overflow-hidden transition-colors duration-200`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00338D] via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#EBB700] font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
              <ShieldCheck size={18} /> Lions Clubs International
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Serve. Lead. <span className="text-[#EBB700]">Inspire.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We have more volunteers in more places than any other service organization in the world. Join Chandigarh's premier youth leadership movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('join')} className="bg-[#EBB700] text-[#172033] px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
                Join the Club <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Causes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#172033] mb-4">Our Global Causes</h2>
          <div className="w-16 h-1.5 bg-[#EBB700] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Lions and Leos are united globally around the largest challenges facing humanity.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "Diabetes", icon: ASSETS.causes.diabetes },
            { name: "Environment", icon: ASSETS.causes.environment },
            { name: "Hunger", icon: ASSETS.causes.hunger },
            { name: "Vision", icon: ASSETS.causes.vision },
            { name: "Childhood Cancer", icon: ASSETS.causes.childhoodCancer }
          ].map((cause, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('projects')}>
              <img src={cause.icon} alt="" className="w-16 h-16 object-contain mb-4" />
              <h3 className="font-bold text-[#172033]">{cause.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const JoinView = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');

    const interviewDates = Array.from({ length: 29 }, (_, index) => {
      const date = new Date(2026, 7, 9 + index);
      return {
        value: date.toISOString().slice(0, 10),
        label: date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long' })
      };
    });
    const interviewTimes = Array.from({ length: 12 }, (_, index) => {
      const minutes = 8 * 60 + index * 10;
      const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
      const mins = String(minutes % 60).padStart(2, '0');
      return `${hours}:${mins}`;
    });

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);
    
    const handleSubmit = () => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(5);
      }, 1500);
    };

    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-2">
                <span>Step {step} of 4</span>
                <button onClick={() => navigate('home')} className="text-[#00338D] hover:underline">Cancel</button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#00338D] h-2 rounded-full transition-all duration-300" style={{ width: `${(step/4)*100}%` }}></div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            {step === 1 && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-2">Your details</h2>
                <p className="text-gray-600 mb-7">Tell us about yourself so we can begin your Leo membership application.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Middle Name</label><input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Contact Number *</label><input required type="tel" placeholder="+91 98765 43210" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Personal Email ID *</label><input required type="email" placeholder="name@example.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Age *</label><input required min="12" max="30" type="number" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth *</label><input required type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Gender *</label><select required defaultValue="" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#00338D] outline-none"><option value="" disabled>Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Blood Group *</label><select required defaultValue="" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#00338D] outline-none"><option value="" disabled>Select blood group</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Person with disability?</label><select defaultValue="No" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#00338D] outline-none"><option>Yes</option><option>No</option></select></div>
                  <div className="md:col-span-2"><label className="block text-sm font-bold text-gray-700 mb-2">Current Address *</label><textarea required rows="3" placeholder="Please enter your complete address" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">City of Residence *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">PIN Code *</label><input required pattern="[0-9]{6}" inputMode="numeric" placeholder="6-digit PIN" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Occupation *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Institute / Organisation / Business *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" /></div>
                </div>
                <div className="mt-8 flex justify-end"><button onClick={handleNext} className="w-full sm:w-auto bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-colors">Continue to interview slot</button></div>
              </div>
            )}

            {step === 2 && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-2">Choose your interview slot</h2>
                <p className="text-gray-600 mb-7">Interviews are available from 9 August to 6 September, between 8:00 AM and 10:00 AM in 10-minute slots.</p>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interview Date *</label>
                <select value={interviewDate} onChange={(event) => setInterviewDate(event.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-[#00338D] outline-none mb-7"><option value="">Select a date</option>{interviewDates.map((date) => <option key={date.value} value={date.value}>{date.label}</option>)}</select>
                <p className="text-sm font-bold text-gray-700 mb-3">Available time *</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">{interviewTimes.map((time) => <button key={time} type="button" onClick={() => setInterviewTime(time)} className={`border rounded-xl px-3 py-3 font-bold transition-colors ${interviewTime === time ? 'bg-[#00338D] text-white border-[#00338D]' : 'border-gray-300 text-gray-700 hover:border-[#00338D]'}`}>{time}</button>)}</div>
                <div className="mt-8 flex justify-between gap-4"><button onClick={handleBack} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50">Back</button><button disabled={!interviewDate || !interviewTime} onClick={handleNext} className={`flex-1 px-8 py-3.5 rounded-xl font-bold ${interviewDate && interviewTime ? 'bg-[#00338D] text-white hover:bg-blue-900' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>Continue</button></div>
              </div>
            )}

            {step === 3 && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-2">Documents and membership</h2>
                <p className="text-gray-600 mb-7">Upload the requested documents and complete the remaining application information.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Upload Leo Omega Form *</label><input required type="file" accept=".pdf,image/*" className="w-full border border-gray-300 rounded-xl px-4 py-3" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Aadhaar Card - front & back scanned PDF *</label><input required type="file" accept="application/pdf" className="w-full border border-gray-300 rounded-xl px-4 py-3" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Chosen Membership Type *</label><select required defaultValue="" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"><option value="" disabled>Select membership type</option><option>Regular Membership</option><option>Fellowship Membership</option></select></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Emergency Contact Person's Name *</label><input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Emergency Contact Number *</label><input required type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3" /></div>
                  <div><label className="block text-sm font-bold text-gray-700 mb-2">Existing Leo member as reference? *</label><select defaultValue="No" className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"><option>Yes</option><option>No</option></select></div>
                  <div className="md:col-span-2"><label className="block text-sm font-bold text-gray-700 mb-2">Reference Person's Name</label><input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3" placeholder="Required if you selected Yes above" /></div>
                </div>
                <div className="mt-8 flex justify-between gap-4"><button onClick={handleBack} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50">Back</button><button onClick={handleNext} className="flex-1 bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900">Review application</button></div>
              </div>
            )}

            {step === 4 && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-6">Final declaration</h2>
                <label className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl bg-gray-50 cursor-pointer"><input required type="checkbox" className="mt-1 w-5 h-5 accent-[#00338D]" /><span className="text-sm font-medium text-gray-700">As a member, I agree to comply with the Constitution and By-Laws of the Leo Club Program (Chapter XXII | LEO50-O Omega Application | 03/20 EN - Photo/Video Authorization Form) and to abide by the rules and regulations set forth by the Club's Board.</span></label>
                <p className="mt-5 text-sm text-gray-600">Payment collection and verification are not part of this application stage.</p>
                <div className="mt-8 flex justify-between gap-4"><button onClick={handleBack} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50">Back</button><button onClick={handleSubmit} className="flex-1 bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900">Submit application</button></div>
              </div>
            )}

            {step === 5 && (
              <div className="p-10 text-center py-16"><div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="text-green-600" size={48} /></div><h2 className="text-3xl font-bold text-[#172033] mb-4">Application submitted!</h2><p className="text-gray-600 mb-8 max-w-md mx-auto">Thank you. Your interview is scheduled for <strong>{interviewDate}</strong> at <strong>{interviewTime}</strong>. We will contact you on WhatsApp or email with the next steps.</p><button onClick={() => navigate('home')} className="bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900">Return to Home</button></div>
            )}

            {false && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-6">Choose Membership Type</h2>
                <div className="space-y-4">
                  <div 
                    onClick={() => setPlan('regular')}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${plan === 'regular' ? 'border-[#00338D] bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-[#172033]">Regular Membership</h3>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${plan === 'regular' ? 'border-[#00338D]' : 'border-gray-300'}`}>
                        {plan === 'regular' && <div className="w-3 h-3 bg-[#00338D] rounded-full"></div>}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Standard annual membership with full voting rights and access to all club events.</p>
                    <p className="font-extrabold text-2xl text-[#00338D]">₹{FEES.regular}</p>
                  </div>

                  <div 
                    onClick={() => setPlan('fellowship')}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${plan === 'fellowship' ? 'border-[#00338D] bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-[#172033]">Fellowship Membership</h3>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${plan === 'fellowship' ? 'border-[#00338D]' : 'border-gray-300'}`}>
                        {plan === 'fellowship' && <div className="w-3 h-3 bg-[#00338D] rounded-full"></div>}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Includes standard membership plus an additional contribution to the club's fellowship fund.</p>
                    <p className="font-extrabold text-2xl text-[#00338D]">₹{FEES.fellowship}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={handleNext} className="bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-colors w-full sm:w-auto">
                    Continue to Details
                  </button>
                </div>
              </div>
            )}

            {false && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-6">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" placeholder="+91 98765 43210" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">College / Institute / Occupation *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00338D] outline-none" placeholder="e.g. Chandigarh University" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Upload Aadhaar / ID Proof (Optional but recommended)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50">
                      <UploadCloud className="text-gray-400 mb-2" size={32} />
                      <p className="text-sm font-semibold text-[#00338D]">Click to upload document</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between gap-4">
                  <button onClick={handleBack} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors">Back</button>
                  <button onClick={handleNext} className="flex-1 bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-colors">Continue to Payment</button>
                </div>
              </div>
            )}

            {false && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-2">Complete Payment</h2>
                <p className="text-gray-600 mb-8">Scan the QR code to pay the exact amount using any UPI app (GPay, PhonePe, Paytm).</p>
                
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col items-center text-center mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                    <div className="w-40 h-40 border-4 border-[#00338D] rounded-lg flex items-center justify-center bg-gray-50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAzMzhkIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMwMDMzOGQiLz48L3N2Zz4=')] opacity-20"></div>
                      <span className="font-bold text-[#00338D] z-10 bg-white px-2 py-1 rounded">CLUB QR</span>
                    </div>
                  </div>
                  <p className="font-medium text-gray-500 uppercase tracking-wide text-xs mb-1">Amount to Pay</p>
                  <p className="text-4xl font-extrabold text-[#00338D]">₹{plan === 'regular' ? FEES.regular : FEES.fellowship}</p>
                  <p className="font-semibold text-[#172033] mt-2">Leo Club Chandigarh Fortune</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 text-yellow-800 text-sm">
                    <ShieldAlert className="shrink-0 text-[#EBB700]" size={20} />
                    <p>After paying, find the <strong>12-digit UTR</strong> or <strong>Transaction Reference Number</strong> in your app and enter it below for verification.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">12-Digit UTR Number *</label>
                    <input 
                      type="text" 
                      value={utr}
                      onChange={(e) => setUtr(e.target.value.replace(/\D/g, '').slice(0, 12))}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-4 text-xl tracking-widest font-mono focus:border-[#00338D] outline-none text-center" 
                      placeholder="XXXX XXXX XXXX" 
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between gap-4">
                  <button onClick={handleBack} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors">Back</button>
                  <button 
                    onClick={handleNext} 
                    disabled={utr.length < 12}
                    className={`flex-1 px-8 py-3.5 rounded-xl font-bold transition-colors ${utr.length === 12 ? 'bg-[#00338D] text-white hover:bg-blue-900' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Verify & Continue
                  </button>
                </div>
              </div>
            )}

            {false && (
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#172033] mb-6">Final Declaration</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="text-[#00338D] shrink-0" size={20} />
                    <p>I confirm that the information I have provided is accurate and truthful.</p>
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="text-[#00338D] shrink-0" size={20} />
                    <p>I understand that payment and membership approval are subject to verification by the club treasurer.</p>
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="text-[#00338D] shrink-0" size={20} />
                    <p>I agree to follow the Club Constitution, By-Laws, and Board Policies of Lions Clubs International.</p>
                  </div>
                </div>

                <label className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl bg-gray-50 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-[#00338D]" />
                  <span className="text-sm font-medium text-gray-700">I have read and agree to the Club Constitution, By-Laws, Board Policies and Photo/Video Authorization terms.</span>
                </label>

                <div className="mt-8 flex justify-between gap-4">
                  <button onClick={handleBack} disabled={isSubmitting} className="px-6 py-3.5 rounded-xl font-bold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors">Back</button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="flex-1 bg-[#EBB700] text-[#172033] px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting Securely...</span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </div>
            )}

            {false && (
              <div className="p-10 text-center py-16">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600" size={48} />
                </div>
                <h2 className="text-3xl font-bold text-[#172033] mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your application and UTR (<span className="font-mono bg-gray-100 px-2 py-1 rounded">{utr}</span>) have been received securely. The treasurer will verify the payment, and you will receive an email shortly to schedule your introductory interview.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 inline-block mb-8 border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Application ID</p>
                  <p className="text-lg font-bold text-[#00338D]">LCCF-2026-00482</p>
                </div>
                <div>
                  <button onClick={() => navigate('home')} className="bg-[#00338D] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-colors">
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ProjectsView = () => (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#172033] mb-2">Projects & Causes</h1>
        <p className="text-gray-600 mb-10 text-lg">See how we serve our community through dedicated initiatives.</p>

        <h2 className="text-xl font-bold text-[#00338D] mb-6 border-b border-gray-200 pb-2">Our Core Focus Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {[
            { name: "Vision", icon: ASSETS.causes.vision },
            { name: "Hunger", icon: ASSETS.causes.hunger },
            { name: "Diabetes", icon: ASSETS.causes.diabetes },
            { name: "Childhood Cancer", icon: ASSETS.causes.childhoodCancer },
            { name: "Environment", icon: ASSETS.causes.environment },
            { name: "Disaster Relief", icon: ASSETS.causes.disasterRelief },
            { name: "Youth", icon: ASSETS.causes.youth },
            { name: "Humanitarian Efforts", icon: ASSETS.causes.humanitarianEfforts }
          ].map((cause, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center gap-3">
              <img src={cause.icon} alt="" className="w-12 h-12 object-contain" />
              <span className="text-xs font-bold text-gray-700">{cause.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
          <h2 className="text-xl font-bold text-[#00338D]">Recent & Upcoming Projects</h2>
          <div className="flex gap-2">
            <button className="bg-[#00338D] text-white px-4 py-1.5 rounded-full text-sm font-bold">All</button>
            <button className="bg-white text-gray-600 border border-gray-200 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-50">Upcoming</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: "AUG 2026", status: "UPCOMING", title: "Blood Donation Camp", loc: "Chandigarh University Campus", color: "text-blue-600" },
            { date: "SEP 2026", status: "UPCOMING", title: "Tree Plantation Drive", loc: "Sector 42, Chandigarh", color: "text-green-600" },
            { date: "JUN 2026", status: "COMPLETED", title: "Free Eye Checkup", loc: "Sector 17 Community Hall", color: "text-purple-600" }
          ].map((proj, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <FolderHeart className="text-gray-300" size={48} />
              </div>
              <div className="p-6">
                <div className="flex gap-2 text-xs font-bold mb-2">
                  <span className={proj.status === 'COMPLETED' ? 'text-gray-500' : proj.color}>{proj.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className={proj.status === 'COMPLETED' ? 'text-green-600' : 'text-[#EBB700]'}>{proj.status}</span>
                </div>
                <h3 className="font-bold text-lg text-[#172033] mb-1">{proj.title}</h3>
                <p className="text-gray-500 text-sm">{proj.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactView = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };

    return (
      <div className="min-h-screen">
        <section className="bg-black text-white border-b-4 border-[#EBB700] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <p className="font-sans text-[#EBB700] font-bold tracking-[0.18em] uppercase text-sm mb-4">Get in touch</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">Let’s serve together.</h1>
            <p className="text-lg text-gray-200 max-w-2xl">Reach out for membership, service partnerships, project ideas or club information. We’ll connect you with the right member of our team.</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <aside className="border-l-4 border-[#EBB700] pl-6 self-start">
            <h2 className="text-2xl font-bold text-[#00338D] mb-5">Leo Club Chandigarh Fortune</h2>
            <div className="space-y-5 text-[#55565A]">
              <p className="flex items-start gap-3"><Mail className="shrink-0 text-[#00338D] mt-1" size={19} /><span><strong className="font-sans text-[#172033] block">Email</strong>info@leochandigarh.org</span></p>
              <p className="flex items-start gap-3"><Phone className="shrink-0 text-[#00338D] mt-1" size={19} /><span><strong className="font-sans text-[#172033] block">Phone</strong>+91 98765 43210</span></p>
              <p className="flex items-start gap-3"><MapPin className="shrink-0 text-[#00338D] mt-1" size={19} /><span><strong className="font-sans text-[#172033] block">Serving</strong>Chandigarh and the surrounding community</span></p>
            </div>
            <div className="mt-10 pt-7 border-t border-[#B3B2B1]">
              <p className="text-[#55565A]">For urgent, time-sensitive service requests, please call rather than using this form.</p>
            </div>
          </aside>

          <div className="border border-[#B3B2B1] bg-white p-7 md:p-10 shadow-[8px_8px_0_\#00338D]">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto text-[#00338D] mb-5" size={52} />
                <h2 className="text-3xl font-bold text-[#172033] mb-3">Thank you for reaching out.</h2>
                <p className="text-[#55565A] max-w-md mx-auto">Your message has been recorded. A club representative will respond soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 bg-[#00338D] text-white px-6 py-3 font-bold hover:bg-[#172033] transition-colors">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><h2 className="text-2xl font-bold text-[#172033]">Contact us</h2><p className="text-[#55565A] mt-2">Fields marked with an asterisk are required.</p></div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-bold text-[#172033] mb-2">Full name *</label><input required type="text" className="w-full border border-[#55565A] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00338D]" placeholder="Your name" /></div>
                  <div><label className="block text-sm font-bold text-[#172033] mb-2">Phone number *</label><input required type="tel" className="w-full border border-[#55565A] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00338D]" placeholder="+91" /></div>
                </div>
                <div><label className="block text-sm font-bold text-[#172033] mb-2">Email address *</label><input required type="email" className="w-full border border-[#55565A] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00338D]" placeholder="name@example.com" /></div>
                <div><label className="block text-sm font-bold text-[#172033] mb-2">How can we help? *</label><select required defaultValue="" className="w-full border border-[#55565A] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00338D]"><option value="" disabled>Select a topic</option><option>Membership inquiry</option><option>Project or service partnership</option><option>Volunteer opportunity</option><option>General question</option></select></div>
                <div><label className="block text-sm font-bold text-[#172033] mb-2">Message *</label><textarea required rows={5} className="w-full border border-[#55565A] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00338D]" placeholder="Tell us a little more about your inquiry." /></div>
                <button type="submit" className="w-full sm:w-auto bg-[#EBB700] text-black px-7 py-3.5 font-bold hover:bg-[#00338D] hover:text-white transition-colors inline-flex items-center justify-center gap-2">Send message <Send size={18} /></button>
              </form>
            )}
          </div>
        </section>
      </div>
    );
  };

  const AdminLoginView = () => {
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
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
          <div className="w-16 h-16 rounded-full bg-[#00338D] mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            L
          </div>
          <h1 className="text-2xl font-bold text-center text-[#172033] mb-2">Admin Portal</h1>
          <p className="text-center text-gray-500 text-sm mb-8">Leo Club Chandigarh Fortune</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                type="email" required value={email} onChange={e=>setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#00338D] outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input 
                type="password" required value={pwd} onChange={e=>setPwd(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-[#00338D] outline-none" 
              />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[#00338D] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors mt-4">
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const AdminDashboardView = () => (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#00338D] flex items-center justify-center text-white font-bold">L</div>
          <div>
            <h2 className="font-bold text-[#172033] leading-tight">Admin</h2>
            <p className="text-xs text-green-600 font-bold">Online</p>
          </div>
        </div>
        <div className="space-y-2 flex-1">
          <button className="w-full text-left px-4 py-3 bg-blue-50 text-[#00338D] font-bold rounded-xl flex items-center gap-3">
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-medium rounded-xl flex items-center gap-3">
            <UserPlus size={18} /> Applications
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-medium rounded-xl flex items-center gap-3">
            <RefreshCw size={18} /> Renewals
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 font-medium rounded-xl flex items-center gap-3">
            <IndianRupee size={18} /> UTR Verifications
          </button>
        </div>
        <button onClick={() => { setIsAdminLoggedIn(false); navigate('home'); }} className="mt-auto flex items-center gap-2 text-red-600 font-bold px-4 py-3 hover:bg-red-50 rounded-xl">
          <LogOut size={18} /> Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-bold text-[#172033] mb-2">Overview</h1>
        <p className="text-gray-500 mb-8">Manage applications, payments, and club data.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Pending Applications', value: '18', color: 'text-blue-600' },
            { label: 'Pending Renewals', value: '12', color: 'text-indigo-600' },
            { label: 'UTRs to Verify', value: '7', color: 'text-orange-500' },
            { label: 'Active Members', value: '142', color: 'text-green-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</p>
              <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#172033] mb-4">Action Needed</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-gray-100">
            {[
              { id: 'LCCF-2026-00482', name: 'Varun Thakur', type: 'New Application', status: 'Payment Verify', utr: '123456789012' },
              { id: 'LCCF-R-2026-00219', name: 'Priya Nair', type: 'Renewal', status: 'Review Needed', utr: '987654321098' }
            ].map((item, i) => (
              <div key={i} className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-gray-50">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-[#172033]">{item.name}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-gray-100 text-gray-600">{item.id}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.type} • UTR: {item.utr}</p>
                </div>
                <div>
                  <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-bold text-sm w-full sm:w-auto">
                    {item.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={isDarkTheme ? 'theme-dark min-h-screen' : 'theme-light min-h-screen'}>
      <NavBar />
      
      <main>
        {currentView === 'home' && <HomeView />}
        {currentView === 'join' && <JoinView />}
        {currentView === 'projects' && <ProjectsView />}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'admin-login' && <AdminLoginView />}
        {currentView === 'admin' && (isAdminLoggedIn ? <AdminDashboardView /> : <AdminLoginView />)}
      </main>

      <Footer />
    </div>
  );
}
