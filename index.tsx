import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Users, 
  Award, 
  ChevronRight, 
  Heart, 
  Globe, 
  BookOpen, 
  Menu,
  X,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowUpRight,
  ChevronUp,
  MessageSquare,
  Building,
  CheckCircle2,
  Send,
  Plus
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Modal = ({ isOpen, onClose, content }: { isOpen: boolean, onClose: () => void, content: any }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden p-10 lg:p-14"
        >
          <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-100 transition-colors">
            <X size={24} />
          </button>
          <div className="mb-8">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">{content.org}</span>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">{content.role}</h3>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Core Responsibilities</h4>
              <ul className="grid gap-3">
                {content.details && content.details.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-600 font-medium text-lg leading-snug">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Key Achievements</h4>
              <ul className="grid gap-3">
                {content.achievements && content.achievements.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-700 font-bold italic serif text-lg leading-snug">
                    <Award size={18} className="text-amber-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Philosophy', href: '#philosophy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
              J.D. <span className="text-blue-700">NSABIMANA</span>
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-blue-700 text-sm font-bold tracking-tight transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg active:scale-95"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden border-b border-slate-100 shadow-xl"
          >
            <div className="px-6 pt-6 pb-10 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-slate-800 border-b border-slate-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-full h-full">
      <div className="absolute top-0 right-0 w-full h-full bg-blue-50/30 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
        className="w-full h-full object-cover opacity-[0.05] grayscale" 
        alt="Institutional Leadership"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-800 text-xs font-black tracking-widest uppercase mb-10 border border-blue-100"
            >
              <Award size={14} className="text-blue-600" />
              Director | Education & Non-Profit Leadership
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl lg:text-[7.5rem] font-extrabold text-slate-900 mb-10 leading-[0.9] tracking-tighter"
            >
              Jean de Dieu <br />
              <span className="text-blue-700 italic serif font-medium">Nsabimana</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-slate-600 mb-14 leading-relaxed max-w-2xl font-light"
            >
              Strategic architect of educational reform and non-profit impact. Leading institutional growth and humanitarian initiatives with dignity at the core.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="#experience" 
                className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold shadow-2xl shadow-slate-300 hover:bg-blue-700 transition-all flex items-center gap-3 group"
              >
                View Experience
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-800 rounded-[2rem] font-bold hover:border-blue-700 hover:text-blue-700 transition-all shadow-sm"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="relative group mx-auto max-w-[280px]">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[4rem] blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="relative p-2.5 bg-white shadow-2xl rounded-[3rem] border border-slate-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                className="w-full aspect-[4/5] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                alt="Jean de Dieu Nsabimana Portrait"
              />
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
                <p className="text-slate-900 font-bold text-base leading-tight italic serif">Visionary Excellence.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className={`mb-20 ${centered ? 'text-center' : ''}`}
  >
    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight">{title}</h2>
    {subtitle && <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">{subtitle}</p>}
  </motion.div>
);

const About = () => (
  <section id="about" className="py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-lg mx-auto lg:mx-0"
        >
          <div className="aspect-[4/5] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1470" 
               className="w-full h-full object-cover grayscale" 
               alt="Collaboration and Strategic Leadership" 
             />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-blue-700 text-white p-10 rounded-[3rem] shadow-2xl hidden md:block z-20 max-w-xs border-8 border-white">
            <h4 className="text-xs font-black uppercase tracking-widest opacity-80 mb-3">Strategic Summary</h4>
            <p className="text-xl font-bold italic serif leading-tight">
              “Education is the foundation for national transformation.”
            </p>
          </div>
        </motion.div>
        
        <div className="lg:pl-8">
          <SectionHeading title="Impact & Leadership" />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 text-xl text-slate-600 leading-relaxed font-light"
          >
            <motion.p variants={fadeInUp}>
              I have dedicated my professional journey to fostering institutional growth and community empowerment through strategic educational leadership. My expertise spans across administration, humanitarian aid, and community development.
            </motion.p>
            <motion.p variants={fadeInUp}>
              With a firm commitment to girls’ education and institutional growth, I leverage policy understanding and people-centered leadership to create sustainable impact for international NGOs and foundations.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                <Users size={28} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">Community Focused</h5>
                <p className="text-base text-slate-500 leading-snug">Driven by national transformation and grassroots engagement.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                <CheckCircle2 size={28} className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                <h5 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">Institutional Lead</h5>
                <p className="text-base text-slate-500 leading-snug">Navigating complex NGO and educational governance frameworks.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const [selectedRole, setSelectedRole] = useState<any>(null);

  const experiences = [
    {
      role: "Director",
      org: "Girls’ Dignity for Nation",
      desc: "Leading strategic initiatives for girls' empowerment and national educational equity.",
      details: ["Strategy development for nationwide empowerment programs", "Partnership management with government and NGO stakeholders", "Advocacy for girl-child education policies"],
      achievements: ["Scaled institutional reach by 40% in two years", "Successfully lobbied for key educational access reforms"],
      current: true
    },
    {
      role: "Representative",
      org: "HowFar Foundation (Global Aid)",
      desc: "Representing Mark & Renée Maynard's humanitarian mission in community development.",
      details: ["Oversight of 501(c)(3) humanitarian projects", "Coordination of global aid distribution", "Community development program monitoring"],
      achievements: ["Successfully delivered vital aid to 5,000+ households", "Strengthened local infrastructure partnerships"],
      current: true
    },
    {
      role: "Principal",
      org: "Crimson Foundation, Inc.",
      desc: "Academic leadership and administrative governance of high-standard educational institutions.",
      details: ["Management of multi-disciplinary faculty and staff", "Academic standards implementation", "Budgetary and operational oversight"],
      achievements: ["Achieved 95% graduation rate", "Implemented institutional-wide digital literacy programs"],
      current: false
    },
    {
      role: "Deputy Head Teacher",
      org: "E.S Marie Adelaide",
      desc: "Curriculum oversight and student body management in a diverse educational environment.",
      details: ["Curriculum coordination and assessment", "Student welfare management", "Stakeholder communications"],
      achievements: ["Improved student performance by 20%", "Launched peer mentorship programs"],
      current: false
    },
    {
      role: "Country Director",
      org: "Esperance Education Institute",
      desc: "National operations management and partnership development with international stakeholders.",
      details: ["Operational leadership across national branches", "Stakeholder engagement and partnership building", "Strategy execution"],
      achievements: ["Established 3 new regional training centers", "Secured long-term funding from global partners"],
      current: false
    },
    {
      role: "Administrator",
      org: "Crimson Academy at Crimson Foundation, Inc.",
      desc: "Resource management and institutional policy implementation.",
      details: ["Administrative governance", "Policy development and adherence", "Logistics and staff support"],
      achievements: ["Optimized institutional resource allocation", "Reduced operational costs by 15%"],
      current: false
    },
    {
      role: "Science Teacher",
      org: "Kigali Islamic Secondary School",
      desc: "Classroom excellence and pedagogical development for secondary education.",
      details: ["High-impact science instruction", "Student mentorship", "Curriculum contribution"],
      achievements: ["Led students to national science competition wins", "Developed localized science lab manuals"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-40 opacity-[0.02] rotate-12 pointer-events-none">
        <Briefcase size={800} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading 
          title="Leadership Milestones" 
          subtitle="A lifetime of service across education, humanitarian aid, and non-profit administration."
        />
        
        <div className="grid lg:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`p-10 lg:p-12 rounded-[3.5rem] border transition-all relative overflow-hidden group ${exp.current ? 'bg-white border-blue-200 shadow-2xl shadow-blue-50' : 'bg-white/70 border-slate-100 shadow-sm hover:shadow-xl hover:bg-white'}`}
            >
              {exp.current && (
                <div className="absolute top-0 right-0 px-10 py-3 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-bl-[2.5rem] z-20">
                  Active Portfolio
                </div>
              )}
              <div className="mb-8 w-16 h-16 rounded-[1.5rem] bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tighter leading-tight">{exp.role}</h3>
              <h4 className="text-xl font-bold text-blue-700 mb-6 serif italic opacity-80">{exp.org}</h4>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-8">{exp.desc}</p>
              
              <button 
                onClick={() => setSelectedRole(exp)}
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-blue-700 transition-colors group/btn"
              >
                Read More 
                <Plus size={14} className="group-hover/btn:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedRole} 
        onClose={() => setSelectedRole(null)} 
        content={selectedRole || {}} 
      />
    </section>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Master of Education",
      field: "Planning & Management",
      school: "Mount Kenya University",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200"
    },
    {
      degree: "Public Management",
      field: "Community Organization",
      school: "University of Georgia",
      image: "https://images.unsplash.com/photo-1541339906194-e1620a96f11e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      degree: "Science with Education",
      field: "University Instruction",
      school: "University of Rwanda",
      image: "https://images.unsplash.com/photo-1523580494863-6f30312248f5?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section id="education" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Educational Foundation" centered subtitle="Advanced credentials from leading international institutions." />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[360px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={edu.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={edu.school} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-extrabold mb-1 tracking-tight leading-tight">{edu.degree}</h3>
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4">{edu.field}</p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white/80 text-base font-medium serif italic leading-tight">{edu.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Education Leadership",
      items: ["School Administration", "Teacher Mentorship", "Curriculum Design", "Pedagogical Strategy"]
    },
    {
      title: "NGO & Non-Profit",
      items: ["Humanitarian Coordination", "Grant Management", "Strategic Growth", "Donor Relations"]
    },
    {
      title: "Community & Civic",
      items: ["Civic Engagement", "Public Management", "Advocacy", "Social Organization"]
    },
    {
      title: "Institutional Governance",
      items: ["Policy Implementation", "Risk Assessment", "Staff Development", "Fiscal Oversight"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-slate-950 text-white relative">
      <div className="absolute inset-0 dotted-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading title="Expertise & Competencies" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-blue-400 font-black text-sm uppercase tracking-[0.4em] mb-10 pb-6 border-b border-white/10">{group.title}</h3>
              <ul className="space-y-6">
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-4 text-slate-300 font-medium group cursor-default">
                    <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-[2] transition-transform shadow-lg shadow-blue-500/50"></div>
                    <span className="text-xl group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => (
  <section id="philosophy" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-slate-900 rounded-[5rem] p-16 lg:p-24 text-white relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
          <Globe size={500} strokeWidth={1} />
        </div>
        
        <div className="max-w-4xl relative z-10">
          <SectionHeading title="Leadership Philosophy" subtitle="Built on dignity, equity, and access to education as a tool for national transformation." />
          
          <div className="grid gap-14 mt-16">
            {[
              { title: "Dignity & Equity", text: "Commitment to providing every girl and child with an environment that fosters total dignity and social equity.", icon: <Heart className="text-rose-400" /> },
              { title: "Sustainable Growth", text: "Focusing on community-led development that persists beyond intervention cycles.", icon: <Building className="text-blue-400" /> },
              { title: "National Impact", text: "Belief in education as the foundational tool for systemic national transformation and prosperity.", icon: <Award className="text-amber-400" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-10 group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-lg lg:text-xl leading-relaxed font-light">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Consultation', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Consultation', message: '' });
    }, 5000);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={28} />, color: 'from-[#0077b5] to-[#00a0dc]', handle: 'jdnsabimana', link: 'https://linkedin.com' },
    { name: 'Facebook', icon: <Facebook size={28} />, color: 'from-[#1877f2] to-[#3b5998]', handle: 'jean.nsabimana', link: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={28} />, color: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', handle: '@jd_nsabimana', link: 'https://instagram.com' },
    { name: 'Twitter / X', icon: <Twitter size={28} />, color: 'from-[#0f1419] to-[#333333]', handle: '@nsabimana_jd', link: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-50 overflow-hidden relative">
       <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-10 leading-[1.1] tracking-tighter">Connect for <br /><span className="serif italic text-blue-700 font-medium">Impact.</span></h2>
              <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-light max-w-lg">
                I am open to international collaboration, leadership roles, and impactful non-profit partnerships.
              </p>
              
              <div className="grid gap-12 mb-20">
                <div className="flex gap-8 group items-center">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center text-blue-700 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Direct Correspondence</p>
                    <a href="mailto:nsajean84@gmail.com" className="text-2xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
                      nsajean84@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-8 group items-center">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center text-slate-800 border border-slate-100 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Regional Operations</p>
                    <p className="text-2xl font-bold text-slate-900">Kigali, Rwanda <span className="text-slate-300 font-light ml-2">| East Africa</span></p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-10 border-t border-slate-200">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex items-center gap-5 p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={16} className="text-slate-300" />
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-tr ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{social.name}</p>
                      <p className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_rgba(0,0,0,0.06)] relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-100">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Message Received.</h3>
                <p className="text-xl text-slate-500 font-light mb-10 leading-relaxed">Thank you for reaching out. <br />I will review your inquiry and respond shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium text-lg" 
                      placeholder="Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium text-lg" 
                      placeholder="Email" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Inquiry Category</label>
                  <div className="relative">
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium text-lg appearance-none cursor-pointer"
                    >
                      <option>NGO Partnership</option>
                      <option>Educational Consulting</option>
                      <option>Humanitarian Advisory</option>
                      <option>Speaking Engagement</option>
                    </select>
                    <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ChevronRight size={18} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Detailed Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium text-lg resize-none" 
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-slate-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-4 active:scale-95 group"
                >
                  Initiate Connection
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ScrollTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-12 right-12 z-50 w-16 h-16 bg-slate-900 text-white rounded-3xl shadow-3xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90 border-4 border-white/10"
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-28">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tighter uppercase">JD. NSABIMANA</h2>
          <p className="text-slate-500 font-medium text-2xl mb-12 leading-relaxed font-light italic serif">
            “Transforming lives through institutional excellence and a commitment to girls’ dignity.”
          </p>
          <div className="flex flex-wrap gap-12 text-sm font-black uppercase tracking-[0.5em] text-slate-400">
            <a href="#about" className="hover:text-blue-700 transition-colors">Biography</a>
            <a href="#experience" className="hover:text-blue-700 transition-colors">Portfolio</a>
            <a href="#education" className="hover:text-blue-700 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm max-w-sm">
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Official Role</p>
          <p className="text-2xl font-bold text-slate-900 mb-3">Girls’ Dignity for Nation</p>
          <p className="text-blue-700 font-bold text-lg serif italic mb-6">Director</p>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
          </div>
        </div>
      </div>
      
      <div className="pt-16 border-t border-slate-200 text-center flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Nsabimana Portfolio &middot; Transformative Leadership
        </p>
        <div className="flex items-center gap-8">
           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Facebook size={20} /></a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="selection:bg-blue-100 selection:text-blue-700 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <PhilosophySection />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);