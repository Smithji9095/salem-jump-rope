/* Salem Jump Rope site scripts */

'use strict';

/* ============================================================
   Site content
   ============================================================ */

let data = {

  siteSettings: {
    siteTitle: 'Salem Jump Rope | Youth Jump Rope Team',
    metaDescription: 'Salem Jump Rope is a Christian faith based youth performance jump rope team building character, leadership, faith, fitness, and community impact.',
    ogDescription: 'Youth jump rope team offering clinics, tryouts, performances, and fitness programs in Salem.',
    heroEyebrow: 'Jump. Lead. Impact.',
    heroTitleLine1: 'JUMP WITH',
    heroTitleAccent: 'PURPOSE.',
    heroSubtitle: 'Building character, strengthening faith, and developing leaders through the sport of jump rope.',
    missionText: 'We exist to build character, strengthen faith, and develop leaders through the sport of jump rope, empowering athletes to jump with purpose, lead with integrity, impact their communities, and honor God in all they do.',
    homeStats: [
      { number: '3 to 12', label: 'Grade Range' },
      { number: '2x', label: 'Weekly Practices' },
      { number: 'A.C.E.', label: 'Highest Honor' },
      { number: '2026', label: 'Salem Launch' }
    ],
    springClinicTitle: 'Spring Clinic',
    springClinicDate: 'Dates to be announced by the coaching staff',
    springClinicTimeLocation: 'Time and location to be announced',
    springClinicDescription: 'Seasonal skill-building clinic focused on fundamentals, confidence, teamwork, and performance preparation.',
    fallClinicTitle: 'Mini Fall Clinic 2026',
    fallClinicDate: 'Monday, August 31 & Tuesday, September 1',
    fallClinicTimeLocation: '3:30 PM to 4:45 PM | River Oaks Community Church',
    fallClinicDescription: 'Cost: $5. Open to any student in 3rd through 12th grade who is interested in trying out for the team or simply getting better at jump rope.',
    tryoutDate: 'Thursday, September 10, 2026',
    tryoutTimeLocation: '3:30 PM to 4:45 PM | College Park Baptist Church',
    contactEmail: 'Email to be added after domain is secured',
    contactPhone: 'Phone number to be added',
    contactServiceArea: 'Salem and surrounding communities',
    contactResponseTime: 'We typically respond within 48 hours',
    facebookUrl: '',
    instagramUrl: '',
    youtubeUrl: '',
    storeNoticeTitle: 'Online Store To Be Added',
    storeNoticeText: 'Online ordering and payments will be handled through Square or another approved payment provider. Sign up below to be notified when the store goes live.'
  },

  coaches: [
    {
      name: 'Coach Tiffany Carroll',
      role: 'Founder / Head Coach',
      photo: 'Images/coaches/tiffany-carroll.jpg',
      bio: 'Coach Carroll graduated from East Carolina University in 2008 with a degree in Exercise and Sport Science with a concentration in Physical Education. Her jump rope journey began through school teams and grew into a passion for helping students develop skill, confidence, character, leadership, and lasting friendships.',
      experience: 'Physical education teacher, school jump rope coach, Salem Jump Rope founder',
      focus: '"Jump rope is an opportunity to build character, leadership, friendship, and positive impact."'
    },
    {
      name: 'Coach David Carroll',
      role: 'Conditioning Coach',
      photo: 'Images/coaches/david-carroll.jpg',
      bio: 'Coach David brings a lifelong love of sports and a service minded background as a police officer, state law enforcement ranger, firefighter engineer, and EMT. He coaches alongside Coach Tiffany and helps athletes grow in strength, coordination, creativity, confidence, and teamwork.',
      experience: 'NASM CERTIFIED PERSONAL TRAINER, Nutrition Coach & Youth Exercise Specialist',
      focus: '"Hard work, teamwork, and having fun can shape healthy, confident young people."'
    },
    {
      name: 'Coach Olivia',
      role: 'Assistant Coach',
      photo: null,
      bio: 'Coach Olivia joined the coaching family during the COA SKIP ITS season and supports athletes as they grow in skill, confidence, and team culture.',
      experience: 'Assistant coach with COA SKIP ITS and Salem Jump Rope',
      focus: '"Encouragement helps athletes attempt hard things with confidence."'
    },
    {
      name: 'Coach David Ashey',
      role: 'Coach / Mentorship Support',
      photo: null,
      bio: 'Coach David Ashey joined the coaching family in 2025 and helped support the development of the mentorship program.',
      experience: 'Coaching family member and mentorship program support',
      focus: '"Strong teams are built when older athletes invest in younger athletes."'
    },
    {
      name: 'Reese',
      role: 'Student Mentor / Performance Leader',
      photo: null,
      bio: 'Reese has been jump roping since age five and has been in the sport for ten years. She joined Apex Skip Its at age eight, jumped for her school team, and has mentored younger athletes for the past three years.',
      experience: '10 years in jump rope, Apex Skip Its, school team, 3 years mentoring',
      focus: '"Double Dutch, performance, teaching, and sharing the love of jump rope with others."'
    }
  ],

  captains: [],

  aces: [
    { name: 'Future ACE Athlete', year: 'To Be Added', category: 'Achieving Christlike Excellence' },
    { name: 'Future ACE Athlete', year: 'To Be Added', category: 'Skill Mastery' },
    { name: 'Future ACE Athlete', year: 'To Be Added', category: 'Mentorship & Service' },
    { name: 'Future ACE Athlete', year: 'To Be Added', category: 'Leadership & Character' }
  ],

  timeline: [
    {
      year: '2008',
      title: 'Coach Tiffany Begins Teaching',
      desc: 'Coach Carroll graduates from East Carolina University and begins teaching elementary physical education, where she is introduced to school jump rope teams and the larger world of the sport.'
    },
    {
      year: '2008 to 2017',
      title: 'School Teams and Coaching Roots',
      desc: 'While teaching in public elementary school, Coach Tiffany coaches jump rope teams for 4th and 5th graders and builds the foundation for her coaching philosophy.'
    },
    {
      year: '2017 to 2023',
      title: 'Driveway Practice and Community Clubs',
      desc: 'As a stay at home mom, Coach Tiffany keeps jumping with her own children and helps lead small community jump rope clubs.'
    },
    {
      year: '2024',
      title: 'COA SKIP ITS Formed',
      desc: 'Coach Tiffany begins teaching PE at Cathedral Oak Academy. COA SKIP ITS forms as a school performance team for students in grades 3 through 10, and Coach Olivia joins as assistant coach.'
    },
    {
      year: '2025',
      title: 'Mentorship Program Developed',
      desc: 'Coach David Ashey joins the coaching family and the mentorship program is developed to help older athletes invest in younger teammates.'
    },
    {
      year: '2026',
      title: 'Salem Jump Rope Established',
      desc: 'Coach David Carroll joins as the conditioning coach to assist Salem Jump Rope as a performance based jump rope team built around faith, skill, character, and leadership.'
    }
  ],

  sponsorLevels: [
    {
      level: 'Ace Sponsor',
      amount: '$550+',
      tagline: 'Leading the way',
      cls: 'gold-rope',
      icon: '🥇',
      perks: [
        'Large logo on website',
        'Featured sponsor spotlight on social media throughout the year',
        'Logo on spring and fall clinic shirts',
        'Recognition at all community team shows',
        'Team photo',
        'Complimentary private jump rope performance for your organization',
        'Listed as a sponsor on all promo materials'
      ]
    },
    {
      level: 'King Sponsor',
      amount: '$400',
      tagline: 'Strength through leadership',
      cls: 'team',
      icon: '🏆',
      perks: [
        'Logo on website',
        'Social media recognition',
        'Logo on team shirts',
        'Recognition at performances',
        'Team photo'
      ]
    },
    {
      level: 'Queen Sponsor',
      amount: '$250',
      tagline: 'Serving with excellence',
      cls: 'clinic',
      icon: '👑',
      perks: [
        'Name/logo on website',
        'One social media sponsor spotlight',
        'Recognition at performances',
        'Team photo'
      ]
    },
    {
      level: 'Jack Sponsor',
      amount: '$150',
      tagline: 'Growing future leaders',
      cls: 'community',
      icon: '⭐',
      perks: [
        'Name on website',
        'One social media recognition'
      ]
    },
    {
      level: 'Friend Sponsor',
      amount: '$50',
      tagline: 'Every gift helps',
      cls: 'community',
      icon: '🤝',
      perks: [
        'Name included as friend on website',
        'Signed thank you card'
      ]
    }
  ],

  currentSponsors: [
    {
      name: '1018 Mobile Detailing',
      level: 'ACE Sponsor',
      logo: 'Images/1018 Detailing Logo.png',
      description: '1018 Mobile Detailing is proud to support Salem Jump Rope as an ACE level sponsor. The company brings professional mobile detailing service directly to customers with clean results, reliable communication, and care for every vehicle.',
      website: ''
    }
  ],

  mentorValues: [
    { icon: '👑', title: 'Leadership', desc: 'Mentors model responsibility, service, coachability, and Christlike leadership at practices and team events.' },
    { icon: '✅', title: 'Accountability', desc: 'Mentors are trained by coaches and held to high standards of conduct, consistency, and encouragement.' },
    { icon: '💪', title: 'Confidence', desc: 'Younger athletes receive one on one skill support and encouragement so they can attempt hard things with courage.' },
    { icon: '🌱', title: 'Service', desc: 'Mentorship teaches older athletes to invest in someone else\'s growth and continue the cycle of encouragement.' },
    { icon: '🤝', title: 'Teamwork', desc: 'Every athlete is reminded that the team is stronger when everyone feels valued, supported, and included.' }
  ],

  tryoutSkills: [
    'Single bounce in rhythm',
    'Double bounce in rhythm',
    '360 turn',
    '180 turn',
    'Criss cross, open, cross, repeat',
    'Double unders, as many as possible',
    'Jump 10x your age on single bounce, or as many as you can',
    'Completed tryout form',
    'Parade routine for bonus points',
    'Any additional skills you want to show'
  ],

  tutorials: [
    { name: 'Basic Bounce', difficulty: 'beginner', desc: 'The foundation of all jump rope skills. Master your timing and rhythm with this entry level technique.' },
    { name: 'Alternate Foot Step', difficulty: 'beginner', desc: 'Jump rope like you\'re running in place. Improves coordination and foot speed.' },
    { name: 'Side Swing', difficulty: 'beginner', desc: 'A foundational trick that adds style and sets up more complex combinations.' },
    { name: 'Criss Cross', difficulty: 'intermediate', desc: 'Cross your arms in front and jump through. This is a classic crowd pleaser skill.' },
    { name: 'Double Under', difficulty: 'intermediate', desc: 'Two rotations of the rope for every one jump. Builds power, timing, and coordination.' },
    { name: 'Speed Step', difficulty: 'intermediate', desc: 'Fast paced alternating foot jumps. Great for speed and endurance development.' },
    { name: 'Double Dutch Entry', difficulty: 'advanced', desc: 'Master the timing to enter two turning ropes. This is one of the most exciting skills in the sport.' },
    { name: 'Partner Skills', difficulty: 'advanced', desc: 'Synchronized partner jumping requiring communication, rhythm, and trust.' }
  ],

  workouts: [
    {
      level: 'Beginner',
      title: 'First Jump Workout',
      warmup: '5 min dynamic stretching, arm circles, jog in place',
      skills: '3 min basic bounce, 3 min alternate foot, rest 30 sec between',
      conditioning: '4 rounds: 30 sec jump, 30 sec rest',
      cooldown: '5 min static stretch, deep breathing'
    },
    {
      level: 'Intermediate',
      title: 'Skill Builder Session',
      warmup: '5 min jump activation: basic bounce, side swings',
      skills: 'Criss cross practice 5 min, double under attempts 5 min',
      conditioning: '5 rounds: 45 sec jump, 15 sec rest + 2 min speed steps',
      cooldown: '5 min partner stretch, skill reflection'
    },
    {
      level: 'Advanced',
      title: 'Power & Speed Session',
      warmup: '6 min full warmup circuit: jump, shuffle, side swings',
      skills: 'Double unders 8 min, Double Dutch timing 10 min',
      conditioning: 'Tabata: 8 rounds 20 sec max speed / 10 sec rest',
      cooldown: '6 min deep stretch, breathing exercises'
    },
    {
      level: 'Team Conditioning',
      title: 'Team Endurance Builder',
      warmup: '8 min team warmup: group jump in, sync drills',
      skills: 'Group routine practice, Double Dutch rotations',
      conditioning: '3 rounds of: 90 sec team jump relay, 30 sec recovery',
      cooldown: '8 min team stretch circle, debrief'
    }
  ],

  programs: [
    { icon: '📋', name: 'Beginner Skill Checklist', desc: 'A printable checklist of all beginner skills with space to track progress.' },
    { icon: '📅', name: 'Clinic Practice Plan', desc: '4-day clinic schedule with coaching notes and drill breakdowns.' },
    { icon: '💪', name: 'Team Conditioning Plan', desc: 'Seasonal conditioning program used by the Salem Jump Rope team.' },
    { icon: '🎯', name: 'Tryout Prep List', desc: 'A step by step guide for athletes preparing for Salem Jump Rope tryouts.' },
    { icon: '🪢', name: 'Double Dutch Basics', desc: 'Visual guide to Double Dutch turning, entry, and basic combinations.' }
  ],

  fitnessCards: [
    { title: '10 Min Beginner Jump Rope Workout', duration: '10 Minutes', level: 'Beginner', desc: 'Perfect for first timers or warmup sessions. Basic bounce intervals with rest periods designed to build the jump rope habit.' },
    { title: '20 Min Conditioning Workout', duration: '20 Minutes', level: 'Intermediate', desc: 'A full conditioning session combining speed steps, double unders, and basic tricks with timed intervals.' },
    { title: 'Speed & Agility Workout', duration: '25 Minutes', level: 'Advanced', desc: 'High intensity agility training using jump rope drills that build foot speed, reaction time, and athletic coordination.' },
    { title: 'Family Jump Challenge', duration: '15 Minutes', level: 'All Levels', desc: 'A fun family friendly workout designed for all ages. Rotate through basic skills together. No experience required.' },
    { title: 'Team Endurance Builder', duration: '30 Minutes', level: 'Advanced or Team', desc: 'Long form endurance conditioning designed for competitive athletes. Builds cardiovascular base and mental toughness.' }
  ],

  eventTypes: [
    { icon: '🏫', title: 'School Performance', desc: 'Assemblies, pep rallies, and school demos' },
    { icon: '⛪', title: 'Church Event', desc: 'Youth groups, community days, celebrations' },
    { icon: '🎉', title: 'Community Event', desc: 'Festivals, fairs, and neighborhood gatherings' },
    { icon: '🏀', title: 'Halftime Show', desc: 'Basketball, football, and sporting event entertainment' },
    { icon: '🏕️', title: 'Camp or After School', desc: 'Day camps, summer programs, enrichment activities' },
    { icon: '💪', title: 'Fitness Demo', desc: 'Wellness fairs, health events, school PE days' },
    { icon: '🎈', title: 'Private Event', desc: 'Birthdays, corporate events, private celebrations' }
  ],

  products: [
    { icon: '👕', image: 'Images/merch/salem-jump-rope-shirt-logo.jpg', name: 'Team Shirt', desc: 'Official Salem Jump Rope performance shirt. Black and gold.', price: '$25.00' },
    { icon: '🧥', name: 'Team Hoodie', desc: 'Heavyweight zip hoodie with embroidered Salem Jump Rope logo.', price: '$55.00' },
    { icon: '🪢', name: 'Speed Jump Rope', desc: 'Lightweight speed rope used by our coaching staff and athletes.', price: '$18.00' },
    { icon: '🗂️', name: 'Sticker Pack', desc: 'Set of 5 Salem Jump Rope vinyl stickers. Perfect for water bottles and gear.', price: '$8.00' },
    { icon: '👕', name: 'Clinic Shirt', desc: 'Exclusive shirt given to clinic participants. Also available separately.', price: '$22.00' },
    { icon: '💧', name: 'Water Bottle', desc: 'Insulated stainless steel bottle with Salem Jump Rope branding. 32oz.', price: '$28.00' }
  ],

  faq: [
    {
      q: 'How do I register for a clinic?',
      a: 'Use the Clinic Interest Form on our Clinic page to express your interest. A team representative will follow up with registration details, dates, and any fees involved.'
    },
    {
      q: 'What age groups can try out for the team?',
      a: 'Salem Jump Rope tryouts are open to boys and girls in grades 3 through 12.'
    },
    {
      q: 'Do kids need prior jump rope experience to attend a clinic?',
      a: 'No! Clinics are open to all experience levels, including complete beginners. Our coaching staff works with each student at their level.'
    },
    {
      q: 'How can we book Salem Jump Rope for our event?',
      a: 'Use the Performance Request Form on our Book Us page. We perform at schools, churches, community events, halftime shows, camps, and more. A team representative will follow up within 5 business days.'
    },
    {
      q: 'Is there a cost to try out?',
      a: 'Tryout interest is free to express through our online form. Any associated fees for the tryout session or team participation will be communicated directly by the coaching staff.'
    },
    {
      q: 'When is the store opening?',
      a: 'The Salem Jump Rope online store will open later. Sign up for notifications on the Store page and we will let you know when gear is available.'
    },
    {
      q: 'How can my business sponsor the team?',
      a: 'We have multiple sponsorship levels available: Ace Sponsor, King Sponsor, Queen Sponsor, Jack Sponsor, and Friend Sponsor. Fill out the Sponsorship Interest Form on our Sponsorship page and we\'ll be in touch.'
    },
    {
      q: 'Where do clinics and practices take place?',
      a: 'The Mini Fall Clinic is scheduled for River Oaks Community Church, and the September 10, 2026 tryout is scheduled for College Park Baptist Church. Practice locations and any changes will be confirmed by the coaching staff.'
    }
  ],

  chatbotTopics: [
    {
      label: 'Clinic Info',
      response: 'The Mini Fall Clinic is scheduled for Monday, August 31 and Tuesday, September 1, 2026 from 3:30 PM to 4:45 PM at River Oaks Community Church. It is open to students in 3rd through 12th grade who are interested in tryouts or skill growth.'
    },
    {
      label: 'Tryout Info',
      response: 'Tryouts are scheduled for Thursday, September 10, 2026 from 3:30 PM to 4:45 PM at College Park Baptist Church. They are open to boys and girls in grades 3 through 12. No payment is collected online.'
    },
    {
      label: 'Contact the Team',
      response: 'The team email will be added after the domain is secured. You can also fill out the Contact form on our Contact page and we typically respond within 48 hours.'
    },
    {
      label: 'Book a Performance',
      response: 'We perform at schools, churches, halftime shows, community events, camps, and more! Visit our Book Us page and fill out the Performance Request Form. We\'ll follow up within 5 business days.'
    },
    {
      label: 'Sponsorship',
      response: 'Sponsorship is a great way to support local youth while getting visibility for your business. Levels include Ace, King, Queen, Jack, and Friend sponsors. 1018 Mobile Detailing is featured as an ACE sponsor.'
    },
    {
      label: 'Store / Merch',
      response: 'Our online store will open later. Sign up for notifications on the Store page and we will let you know when Salem Jump Rope gear is available for purchase.'
    },
    {
      label: 'Team Access',
      response: 'Team Access can use one shared team username and password after the site is hosted. The password should be set through the website host, not inside the public page files.'
    }
  ]

};

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el && typeof value === 'string') el.textContent = value;
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el && typeof value === 'string') el.setAttribute('content', value);
}

async function loadCmsContent() {
  try {
    const response = await fetch('content/site.json', { cache: 'no-cache' });
    if (!response.ok) return;

    const cmsData = await response.json();
    if (!cmsData || typeof cmsData !== 'object') return;

    data = {
      ...data,
      ...cmsData,
      siteSettings: {
        ...data.siteSettings,
        ...(cmsData.siteSettings || {})
      }
    };
  } catch (err) {
    console.warn('CMS content not loaded; using built-in site content.', err);
  }
}

function applyCmsContent() {
  const settings = data.siteSettings || {};

  if (settings.siteTitle) document.title = settings.siteTitle;
  setMeta('meta[name="description"]', settings.metaDescription);
  setMeta('meta[property="og:title"]', settings.siteTitle);
  setMeta('meta[property="og:description"]', settings.ogDescription || settings.metaDescription);

  setText('.hero-eyebrow', settings.heroEyebrow);
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && (settings.heroTitleLine1 || settings.heroTitleAccent)) {
    heroTitle.innerHTML = `${escapeHTML(settings.heroTitleLine1 || '')}<br><span class="gold">${escapeHTML(settings.heroTitleAccent || '')}</span>`;
  }
  setText('.hero-subtitle', settings.heroSubtitle);
  setText('.mission-text', settings.missionText);

  if (Array.isArray(settings.homeStats)) {
    document.querySelectorAll('.stats-bar .stat-item').forEach((item, index) => {
      const stat = settings.homeStats[index];
      if (!stat) return;
      const num = item.querySelector('.stat-num');
      const label = item.querySelector('.stat-label');
      if (num) num.textContent = stat.number || '';
      if (label) label.textContent = stat.label || '';
    });
  }

  setText('#page-clinic .clinic-card.spring h2', settings.springClinicTitle);
  setText('#page-clinic .clinic-card.spring .clinic-date', settings.springClinicDate ? `📅 ${settings.springClinicDate}` : '');
  setText('#page-clinic .clinic-card.spring .clinic-time', settings.springClinicTimeLocation ? `⏰ ${settings.springClinicTimeLocation}` : '');
  setText('#page-clinic .clinic-card.spring p:nth-of-type(3)', settings.springClinicDescription);
  setText('#page-clinic .clinic-card.fall h2', settings.fallClinicTitle);
  setText('#page-clinic .clinic-card.fall .clinic-date', settings.fallClinicDate ? `📅 ${settings.fallClinicDate}` : '');
  setText('#page-clinic .clinic-card.fall .clinic-time', settings.fallClinicTimeLocation ? `⏰ ${settings.fallClinicTimeLocation}` : '');
  setText('#page-clinic .clinic-card.fall p:nth-of-type(3)', settings.fallClinicDescription);

  setText('#page-tryout .col-text .clinic-date', settings.tryoutDate ? `📅 ${settings.tryoutDate}` : '');
  setText('#page-tryout .col-text .clinic-time', settings.tryoutTimeLocation ? `⏰ ${settings.tryoutTimeLocation}` : '');

  const contactItems = document.querySelectorAll('#page-contact .contact-item p');
  if (contactItems[0] && settings.contactEmail) contactItems[0].textContent = settings.contactEmail;
  if (contactItems[1] && settings.contactPhone) contactItems[1].textContent = settings.contactPhone;
  if (contactItems[2] && settings.contactServiceArea) contactItems[2].textContent = settings.contactServiceArea;
  if (contactItems[3] && settings.contactResponseTime) contactItems[3].textContent = settings.contactResponseTime;

  const socialLinks = [
    { selector: '#page-contact .social-link[aria-label="Facebook link"]', url: settings.facebookUrl },
    { selector: '#page-contact .social-link[aria-label="Instagram link"]', url: settings.instagramUrl },
    { selector: '#page-contact .social-link[aria-label="YouTube link"]', url: settings.youtubeUrl }
  ];
  socialLinks.forEach(link => {
    const el = document.querySelector(link.selector);
    if (!el) return;
    if (link.url) {
      el.href = link.url;
      el.removeAttribute('aria-disabled');
    } else {
      el.href = '#';
      el.setAttribute('aria-disabled', 'true');
    }
  });

  setText('#page-store .store-notice h2', settings.storeNoticeTitle);
  setText('#page-store .store-notice p', settings.storeNoticeText);
}


/* ============================================================
   PAGE ROUTER
   Shows/hides page sections based on nav clicks
   ============================================================ */

function showPage(pageId, options = {}) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    if (!options.skipHash) {
      const nextHash = pageId === 'home' ? window.location.pathname : '#' + pageId;
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navMenu = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');

  document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.dropdown-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
  if (document.activeElement && document.activeElement.closest('.dropdown-menu')) {
    document.activeElement.blur();
  }

  renderPageContent(pageId);
}

function pageFromHash() {
  const requestedPage = window.location.hash.replace('#', '');
  return document.getElementById('page-' + requestedPage) ? requestedPage : 'home';
}

function renderPageContent(pageId) {
  switch (pageId) {
    case 'coaches':    renderCoaches(); break;
    case 'captains':   renderCaptains(); break;
    case 'aces':       renderAces(); break;
    case 'history':    renderTimeline(); break;
    case 'sponsorship': renderSponsorLevels(); renderCurrentSponsors(); break;
    case 'mentorship': renderMentorValues(); break;
    case 'tryout':     renderTryoutSkills(); break;
    case 'learn':      renderLearn(); break;
    case 'fitness':    renderFitness(); break;
    case 'store':      renderStore(); break;
    case 'contact':    renderFAQ(); break;
    case 'book':       renderEventTypes(); break;
  }
}


/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderCoaches() {
  const grid = document.getElementById('coachGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.coaches.map(c => `
    <div class="coach-card">
      <div class="coach-photo">
        ${c.photo ? `<img src="${c.photo}" alt="Photo of ${c.name}" />` : `
          <div class="coach-photo-ph">
            <span aria-hidden="true">👤</span>
            <span>Photo To Add</span>
          </div>
        `}
      </div>
      <div class="coach-body">
        <span class="coach-role">${c.role}</span>
        <h3>${c.name}</h3>
        <p>${c.bio}</p>
        <p><strong>Experience:</strong> ${c.experience}</p>
        <div class="coach-focus" aria-label="Coaching philosophy">${c.focus}</div>
      </div>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderCaptains() {
  const grid = document.getElementById('captainGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.captains.map(c => `
    <div class="captain-card">
      <div class="captain-photo">
        <div class="captain-photo-ph">
          <span aria-hidden="true">👤</span>
          <span>Photo</span>
        </div>
      </div>
      <div class="captain-body">
        <h3>${c.name}</h3>
        <p class="captain-grade">${c.grade}</p>
        <p class="captain-quote">${c.quote}</p>
      </div>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderAces() {
  const grid = document.getElementById('aceGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.aces.map(a => `
    <div class="ace-card">
      <h3>${a.name}</h3>
      <p class="ace-year">${a.year}</p>
      <p class="ace-category">${a.category}</p>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || container.dataset.rendered) return;
  container.innerHTML = data.timeline.map(t => `
    <div class="timeline-item">
      <p class="timeline-year">${t.year}</p>
      <p class="timeline-title">${t.title}</p>
      <p class="timeline-desc">${t.desc}</p>
    </div>
  `).join('');
  container.dataset.rendered = 'true';
}

function renderSponsorLevels() {
  const el = document.getElementById('sponsorLevels');
  if (!el || el.dataset.rendered) return;
  el.innerHTML = data.sponsorLevels.map(s => `
    <div class="sponsor-level-card ${s.cls}">
      <div class="sponsor-level-icon" aria-hidden="true">${s.icon}</div>
      <h3>${s.level}</h3>
      <p class="sponsor-amount">${s.amount}</p>
      <p class="sponsor-tagline">${s.tagline}</p>
      <ul class="sponsor-perks">
        ${s.perks.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  el.dataset.rendered = 'true';
}

function renderCurrentSponsors() {
  const sponsors = Array.isArray(data.currentSponsors) ? data.currentSponsors : [];
  const spotlight = document.querySelector('.ace-sponsor-spotlight');
  const grid = document.querySelector('.sponsor-logo-grid');
  const featured = sponsors[0];

  if (spotlight) {
    if (featured) {
      spotlight.innerHTML = `
        <div class="ace-sponsor-logo-wrap">
          ${featured.logo ? `<img src="${featured.logo}" alt="${featured.name} logo" />` : ''}
        </div>
        <div>
          <p class="eyebrow-label">${featured.level || 'Sponsor'}</p>
          <h2>${featured.website ? `<a href="${featured.website}" target="_blank" rel="noopener">${featured.name}</a>` : featured.name}</h2>
          <p>${featured.description || ''}</p>
        </div>
      `;
      spotlight.hidden = false;
    } else {
      spotlight.hidden = true;
    }
  }

  if (!grid) return;

  const sponsorCards = sponsors.map(s => `
    <article class="sponsor-logo-card sponsor-featured">
      ${s.logo ? `<img src="${s.logo}" alt="${s.name} logo" />` : ''}
      <h3>${s.website ? `<a href="${s.website}" target="_blank" rel="noopener">${s.name}</a>` : s.name}</h3>
      <p>${s.level || 'Sponsor'}</p>
    </article>
  `);

  const openSpots = Array.from({ length: Math.max(0, 5 - sponsors.length) }, () =>
    '<div class="sponsor-logo-ph" aria-label="Open sponsor spot">Open Sponsor Spot</div>'
  );

  grid.innerHTML = [...sponsorCards, ...openSpots].join('');
}

function renderMentorValues() {
  const el = document.getElementById('mentorValues');
  if (!el || el.dataset.rendered) return;
  el.innerHTML = data.mentorValues.map(v => `
    <div class="value-card">
      <div class="value-icon" aria-hidden="true">${v.icon}</div>
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
    </div>
  `).join('');
  el.dataset.rendered = 'true';
}

function renderTryoutSkills() {
  const el = document.getElementById('tryoutSkills');
  if (!el || el.dataset.rendered) return;
  el.innerHTML = data.tryoutSkills.map((s, i) => `
    <div class="skill-check-item">
      <div class="skill-check-icon" aria-hidden="true">${i + 1}</div>
      <span>${s}</span>
    </div>
  `).join('');
  el.dataset.rendered = 'true';
}

function renderLearn() {
  renderTutorials();
  renderWorkouts();
  renderPrograms();
}

function renderTutorials() {
  const grid = document.getElementById('tutorialGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.tutorials.map(t => `
    <div class="tutorial-card">
      <div class="tutorial-thumb" aria-label="${t.name} tutorial video">
        <span aria-hidden="true">▶</span>
        <span class="coming-soon-badge">To Be Added</span>
      </div>
      <div class="tutorial-body">
        <span class="difficulty-badge ${t.difficulty}">${t.difficulty}</span>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
      </div>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderWorkouts() {
  const grid = document.getElementById('workoutGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.workouts.map(w => `
    <div class="workout-card">
      <p class="workout-level">${w.level}</p>
      <h3>${w.title}</h3>
      <div class="workout-block">
        <p class="workout-block-label">Warmup</p>
        <p class="workout-block-content">${w.warmup}</p>
      </div>
      <div class="workout-block">
        <p class="workout-block-label">Skill Block</p>
        <p class="workout-block-content">${w.skills}</p>
      </div>
      <div class="workout-block">
        <p class="workout-block-label">Conditioning</p>
        <p class="workout-block-content">${w.conditioning}</p>
      </div>
      <div class="workout-block">
        <p class="workout-block-label">Cooldown</p>
        <p class="workout-block-content">${w.cooldown}</p>
      </div>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderPrograms() {
  const grid = document.getElementById('programGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.programs.map(p => `
    <div class="program-card">
      <div class="program-icon" aria-hidden="true">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <button class="btn btn-outline-dark btn-sm" disabled aria-label="${p.name}, to be added">To Be Added</button>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderFitness() {
  const grid = document.getElementById('fitnessCards');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.fitnessCards.map(f => `
    <div class="fitness-card">
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
      <span class="fitness-duration">${f.duration} · ${f.level}</span>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderStore() {
  const grid = document.getElementById('productGrid');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.products.map(p => `
    <div class="product-card">
      <div class="product-image" aria-label="${p.name} product image">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : `<span aria-hidden="true">${p.icon}</span>`}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p class="product-price">${p.price}</p>
        ${p.paymentUrl
          ? `<a class="btn btn-gold btn-sm" href="${p.paymentUrl}" target="_blank" rel="noopener" aria-label="Buy ${p.name}">Buy Now</a>`
          : `<button class="btn btn-outline-dark btn-sm" disabled aria-label="${p.name}, to be added">To Be Added</button>`}
      </div>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}

function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list || list.dataset.rendered) return;
  list.innerHTML = data.faq.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})" aria-expanded="false" aria-controls="faq-answer-${i}">
        ${item.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-${i}">
        ${item.a}
      </div>
    </div>
  `).join('');
  list.dataset.rendered = 'true';
}

function renderEventTypes() {
  const grid = document.getElementById('eventTypes');
  if (!grid || grid.dataset.rendered) return;
  grid.innerHTML = data.eventTypes.map(e => `
    <div class="event-type-card">
      <div class="event-type-icon" aria-hidden="true">${e.icon}</div>
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
    </div>
  `).join('');
  grid.dataset.rendered = 'true';
}


/* ============================================================
   FAQ TOGGLE
   ============================================================ */

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  const btn = item.querySelector('.faq-question');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(fi => {
    fi.classList.remove('open');
    fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  // Open clicked if it was closed
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}


/* ============================================================
   LEARN TABS
   ============================================================ */

function showLearnTab(tab) {
  document.querySelectorAll('.learn-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sub-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });

  const panel = document.getElementById('learn-' + tab);
  const btn = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('active');
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
}


/* ============================================================
   Navigation
   ============================================================ */

function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  // Dropdown toggle on click (touch-friendly)
  document.querySelectorAll('.dropdown-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.has-dropdown');
      const isOpen = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen.toString());

      // Close other dropdowns
      document.querySelectorAll('.has-dropdown').forEach(d => {
        if (d !== parent) {
          d.classList.remove('open');
          d.querySelector('.dropdown-trigger').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.has-dropdown').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.dropdown-trigger').setAttribute('aria-expanded', 'false');
    });
  });

  // Keyboard navigation for dropdown
  document.querySelectorAll('.has-dropdown').forEach(parent => {
    parent.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        parent.classList.remove('open');
        parent.querySelector('.dropdown-trigger').focus();
      }
    });
  });
}


/* ============================================================
   FORM VALIDATION & SUBMISSION
   Form messages
   ============================================================ */

function validateForm(formEl) {
  let valid = true;

  // Clear previous errors
  formEl.querySelectorAll('.field-error').forEach(e => e.remove());
  formEl.querySelectorAll('.error').forEach(e => e.classList.remove('error'));

  formEl.querySelectorAll('[required]').forEach(field => {
    let value = field.value.trim();
    let err = '';

    if (field.type === 'checkbox' && !field.checked) {
      err = 'This checkbox is required.';
    } else if (!value) {
      err = 'This field is required.';
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      err = 'Please enter a valid email address.';
    }

    if (err) {
      field.classList.add('error');
      const errEl = document.createElement('span');
      errEl.className = 'field-error';
      errEl.textContent = err;
      errEl.setAttribute('role', 'alert');
      field.parentNode.appendChild(errEl);
      valid = false;
    }
  });

  return valid;
}

function showSuccess(successId, message) {
  const el = document.getElementById(successId);
  if (el) {
    el.textContent = message || '✓ Thank you! We\'ll be in touch shortly.';
    el.classList.add('visible');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function initForms() {
  // Sponsor form
  const sponsorForm = document.getElementById('sponsorForm');
  if (sponsorForm) {
    sponsorForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showSuccess('sponsorSuccess', '✓ Thank you for your interest in sponsoring Salem Jump Rope! A team representative will contact you within 3 business days.');
      this.reset();
    });
  }

  // Clinic form
  const clinicForm = document.getElementById('clinicInterestForm');
  if (clinicForm) {
    clinicForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showSuccess('clinicSuccess', '✓ Clinic interest received! We\'ll follow up with registration details and available dates.');
      this.reset();
    });
  }

  // Tryout form
  const tryoutForm = document.getElementById('tryoutForm');
  if (tryoutForm) {
    tryoutForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showSuccess('tryoutSuccess', '✓ Tryout interest submitted! A coach will follow up with your next steps and tryout details.');
      this.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showSuccess('contactSuccess', '✓ Message sent! We\'ll get back to you within 48 hours.');
      this.reset();
    });
  }

  // Book form
  const bookForm = document.getElementById('bookForm');
  if (bookForm) {
    bookForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showSuccess('bookSuccess', '✓ Booking request received! We\'ll confirm details and availability within 5 business days.');
      this.reset();
    });
  }

  // Store notify form
  const storeForm = document.getElementById('storeNotifyForm');
  if (storeForm) {
    storeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('sn-email');
      if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        return;
      }
      showSuccess('storeSuccess', '✓ You\'re on the list! We\'ll notify you when the store opens.');
      this.reset();
    });
  }
}


/* ============================================================
   FAQ help
   ============================================================ */

function initChatbot() {
  const trigger = document.getElementById('chatbotTrigger');
  const window_ = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotClose');
  const messagesEl = document.getElementById('chatbotMessages');
  const topicsEl = document.getElementById('chatbotTopics');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');

  // Render topic buttons
  topicsEl.innerHTML = data.chatbotTopics.map((t, i) => `
    <button class="topic-btn" onclick="chatbotSelectTopic(${i})" aria-label="Ask about ${t.label}">${t.label}</button>
  `).join('');

  // Open/close
  trigger.addEventListener('click', () => {
    const isHidden = window_.hasAttribute('hidden');
    if (isHidden) {
      window_.removeAttribute('hidden');
      trigger.setAttribute('aria-expanded', 'true');
      input.focus();
    } else {
      window_.setAttribute('hidden', '');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  closeBtn.addEventListener('click', () => {
    window_.setAttribute('hidden', '');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  });

  // Keyboard close
  window_.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window_.setAttribute('hidden', '');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });

  // Send on Enter
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      chatbotSendMessage();
    }
  });

  sendBtn.addEventListener('click', chatbotSendMessage);
}

function chatbotAddMessage(text, type) {
  const messages = document.getElementById('chatbotMessages');
  const msg = document.createElement('div');
  msg.className = 'chat-msg ' + type;
  msg.innerHTML = `<p>${text}</p>`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function chatbotSelectTopic(index) {
  const topic = data.chatbotTopics[index];
  chatbotAddMessage(topic.label, 'user');
  setTimeout(() => chatbotAddMessage(topic.response, 'bot'), 400);
}

function chatbotSendMessage() {
  const input = document.getElementById('chatbotInput');
  const text = input.value.trim();
  if (!text) return;

  chatbotAddMessage(text, 'user');
  input.value = '';

  // Simple keyword matching
  const lower = text.toLowerCase();
  let response = null;

  for (const topic of data.chatbotTopics) {
    const keywords = topic.label.toLowerCase().split(/\s+/);
    if (keywords.some(k => lower.includes(k)) ||
        lower.includes(topic.label.toLowerCase())) {
      response = topic.response;
      break;
    }
  }

  // Additional keyword matching
  if (!response) {
    if (lower.includes('clinic') || lower.includes('spring') || lower.includes('fall') || lower.includes('register')) {
      response = data.chatbotTopics[0].response;
    } else if (lower.includes('tryout') || lower.includes('join') || lower.includes('team')) {
      response = data.chatbotTopics[1].response;
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
      response = data.chatbotTopics[2].response;
    } else if (lower.includes('book') || lower.includes('perform') || lower.includes('event') || lower.includes('school')) {
      response = data.chatbotTopics[3].response;
    } else if (lower.includes('sponsor') || lower.includes('business') || lower.includes('partner')) {
      response = data.chatbotTopics[4].response;
    } else if (lower.includes('store') || lower.includes('merch') || lower.includes('shirt') || lower.includes('buy')) {
      response = data.chatbotTopics[5].response;
    } else if (lower.includes('member') || lower.includes('portal') || lower.includes('login') || lower.includes('password')) {
      response = data.chatbotTopics[6].response;
    } else {
      response = 'Great question. I may not have that answer yet. Please visit our <strong>Contact</strong> page. We usually respond within 48 hours.';
    }
  }

  setTimeout(() => chatbotAddMessage(response, 'bot'), 500);
}


/* ============================================================
   FOOTER YEAR
   ============================================================ */

function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

function initUpdateBuilder() {
  const generateBtn = document.getElementById('generateUpdateRequest');
  const copyBtn = document.getElementById('copyUpdateRequest');
  const output = document.getElementById('generatedUpdateRequest');
  const status = document.getElementById('copyUpdateStatus');

  if (!generateBtn || !copyBtn || !output) return;

  generateBtn.addEventListener('click', () => {
    const page = document.getElementById('up-page').value;
    const priority = document.getElementById('up-priority').value;
    const request = document.getElementById('up-request').value.trim();
    const assets = document.getElementById('up-assets').value.trim();
    const approval = document.getElementById('up-approval').value.trim();

    if (!request) {
      output.value = 'Please describe the requested change first.';
      return;
    }

    output.value = [
      'Salem Jump Rope website update request',
      '',
      `Page or section: ${page}`,
      `Priority: ${priority}`,
      `Approved by: ${approval || 'Not provided'}`,
      '',
      'Requested change:',
      request,
      '',
      'Files to add:',
      assets || 'No files mentioned',
      '',
      'Please update the website and preview the affected page before sharing it.'
    ].join('\n');

    if (status) status.textContent = 'Request ready. Review it, then copy it.';
  });

  copyBtn.addEventListener('click', async () => {
    if (!output.value.trim() || output.value.startsWith('Please describe')) {
      if (status) status.textContent = 'Generate a request before copying.';
      return;
    }

    try {
      await navigator.clipboard.writeText(output.value);
      if (status) status.textContent = 'Copied. Send this text to the site manager.';
    } catch (err) {
      output.focus();
      output.select();
      if (status) status.textContent = 'Copy blocked by the browser. Select the text and copy it manually.';
    }
  });
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  await loadCmsContent();
  applyCmsContent();
  setFooterYear();
  initNav();
  initForms();
  initChatbot();
  initUpdateBuilder();

  showPage(pageFromHash(), { skipHash: true });

  window.addEventListener('hashchange', () => {
    showPage(pageFromHash(), { skipHash: true });
  });
});
