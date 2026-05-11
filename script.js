const products = [
  {
    icon: 'zap',
    title: 'Power Tools',
    desc: 'Drills, saws, grinders and more from top brands.',
    img: 'images/product-power-tools.jpg'
  },
  {
    icon: 'landmark',
    title: 'Building Materials',
    desc: 'Cement, lumber, steel and essential construction supplies.',
    img: 'images/product-building-materials.jpg'
  },
  {
    icon: 'droplets',
    title: 'Plumbing Supplies',
    desc: 'Pipes, fittings, valves and complete plumbing solutions.',
    img: 'images/product-plumbing-supplies.jpg'
  },
  {
    icon: 'plug',
    title: 'Electrical Equipment',
    desc: 'Wiring, panels, switches and electrical components.',
    img: 'images/product-electrical-equipment.jpg'
  },
  {
    icon: 'paintbrush',
    title: 'Paint & Finishing',
    desc: 'Interior and exterior paints, brushes and finishing tools.',
    img: 'images/product-paint-finishing.jpg'
  },
  {
    icon: 'hard-hat',
    title: 'Safety Gear',
    desc: 'Helmets, gloves, goggles and protective equipment.',
    img: 'images/product-safety-gear.jpg'
  }
];

const services = [
  { icon: 'clock', title: 'Tool Rental', desc: 'Rent professional-grade tools by the day or week.' },
  { icon: 'truck', title: 'Delivery Services', desc: 'Fast delivery to your jobsite or doorstep.' },
  { icon: 'clipboard-list', title: 'Consultation', desc: 'Expert advice for your construction projects.' },
  { icon: 'package', title: 'Bulk Supply', desc: 'Discounted pricing for large-volume orders.' }
];

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'General Contractor',
    text: 'Caro Hardware has been my go-to supplier for 5 years. Their quality and service are unmatched.'
  },
  {
    name: 'Sarah Williams',
    role: 'Interior Designer',
    text: 'Amazing selection of finishing materials. The staff really knows their products and gives great advice.'
  },
  {
    name: 'David Okafor',
    role: 'Homeowner',
    text: 'Renovated my entire home with supplies from Caro. Fair prices and everything was top quality.'
  },
  {
    name: 'Lisa Martinez',
    role: 'Electrician',
    text: 'Best electrical supply section in the area. Always stocked with what I need for any job.'
  }
];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const colors = ['#E8620A', '#2D2D2D', '#F5F0EB', '#2D2D2D', '#F5F0EB', '#2D2D2D'];
  const texts = ['Power Tools', 'Building Materials', 'Plumbing Supplies', 'Electrical Equipment', 'Paint & Finishing', 'Safety Gear'];

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-sm overflow-hidden sr';
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="h-40 relative overflow-hidden">
        <img src="${product.img}" alt="${product.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>
      <div class="p-6">
        <h3 class="font-bold text-caro-dark text-lg">${product.title}</h3>
        <p class="text-caro-dark/50 text-sm mt-2 leading-relaxed">${product.desc}</p>
        <div class="browse-link mt-4 flex items-center gap-1 text-caro-orange text-sm font-semibold cursor-pointer hover:gap-2 transition-all" data-product="${product.title}">
          <span>Browse</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Add click handlers for browse links
  document.querySelectorAll('.browse-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const productName = link.dataset.product;
      const message = encodeURIComponent(`Hi Caro Hardware, I'm interested in browsing ${productName}. Can you show me available options and pricing?`);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edisonkipkemoi319@gmail.com&su=Browse ${productName}&body=${message}`;
      window.open(gmailUrl, '_blank');
    });
  });
}

function renderServices() {
  const grid = document.getElementById('serviceGrid');
  services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = 'service-card bg-caro-dark border border-white/5 hover:border-caro-orange/30 rounded-sm p-6 text-center sr';
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="w-14 h-14 bg-caro-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <i data-lucide="${service.icon}" class="w-6 h-6 text-caro-orange"></i>
      </div>
      <h3 class="font-bold text-white">${service.title}</h3>
      <p class="text-white/40 text-sm mt-2 leading-relaxed">${service.desc}</p>`;
    grid.appendChild(card);
  });
}

function renderTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots = document.getElementById('testDots');
  testimonials.forEach((testimonial, index) => {
    const slide = document.createElement('div');
    slide.className = 'w-full flex-shrink-0 px-4';
    slide.innerHTML = `
      <div class="max-w-2xl mx-auto text-center">
        <div class="flex justify-center gap-1 mb-4">${'★'.repeat(5).split('').map(() => '<span class="text-caro-orange text-lg">★</span>').join('')}</div>
        <p class="text-white/70 text-lg leading-relaxed italic">"${testimonial.text}"</p>
        <p class="mt-6 font-bold text-white">${testimonial.name}</p>
        <p class="text-caro-orange text-sm">${testimonial.role}</p>
      </div>`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `w-2 h-2 rounded-full transition-all ${index === 0 ? 'bg-caro-orange w-6' : 'bg-white/20'}`;
    dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    dot.addEventListener('click', () => goToTest(index));
    dots.appendChild(dot);
  });
}

let currentTest = 0;
function goToTest(index) {
  const track = document.getElementById('testimonialTrack');
  const dots = document.getElementById('testDots');
  currentTest = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  Array.from(dots.children).forEach((dot, dotIndex) => {
    dot.className = `h-2 rounded-full transition-all ${dotIndex === index ? 'bg-caro-orange w-6' : 'bg-white/20 w-2'}`;
  });
}

function setupNavigation() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
  });
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
    });
  });
}

function setupScrollEffects() {
  const appRoot = document.getElementById('appRoot');
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');

  appRoot.addEventListener('scroll', () => {
    navbar.classList.toggle('nav-scrolled', appRoot.scrollTop > 50);
    backTop.classList.toggle('show', appRoot.scrollTop > 400);
  });

  backTop.addEventListener('click', () => {
    appRoot.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, root: appRoot }
  );

  document.querySelectorAll('.sr, .sr-left, .sr-right').forEach((el) => observer.observe(el));
}

function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const message = document.getElementById('cMsg').value;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=edisonkipkemoi319@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    formMsg.textContent = '✓ Gmail compose opened! Please send the email.';
    formMsg.className = 'mt-3 text-sm text-center text-green-600 font-medium';
    formMsg.classList.remove('hidden');
    contactForm.reset();
    setTimeout(() => {
      formMsg.classList.add('hidden');
    }, 4000);
  });
}

function setupAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupWhatsapp() {
  const whatsappBtn = document.getElementById('whatsappBtn');
  const whatsappMenu = document.getElementById('whatsappMenu');
  const whatsappProducts = document.getElementById('whatsappProducts');
  const quickOrder = document.getElementById('quickOrder');
  const WHATSAPP_PHONE = '0710241295';

  whatsappBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    whatsappMenu.classList.toggle('hidden');
    if (!whatsappMenu.classList.contains('hidden')) {
      renderWhatsappProducts(whatsappProducts, WHATSAPP_PHONE);
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#whatsappBtn') && !event.target.closest('#whatsappMenu')) {
      whatsappMenu.classList.add('hidden');
    }
  });

  quickOrder.addEventListener('click', () => {
    const message = encodeURIComponent('Hi Caro Hardware! I\'d like to place an order. Please help me with available products and pricing.');
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    whatsappMenu.classList.add('hidden');
  });
}

function renderWhatsappProducts(container, whatsappPhone) {
  container.innerHTML = products
    .map(
      (product) => `
      <button class="w-full px-4 py-2 text-left hover:bg-green-50 border-b text-sm font-medium text-caro-dark transition-colors whatsapp-product-item" data-product="${product.title}">
        <span class="text-green-600 mr-2">✓</span>${product.title}
      </button>`
    )
    .join('');

  document.querySelectorAll('.whatsapp-product-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const name = item.dataset.product;
      const message = encodeURIComponent(`Hi Caro Hardware, I'm interested in ordering: ${name}. Can you provide more details and pricing?`);
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      document.getElementById('whatsappMenu').classList.add('hidden');
    });
  });
}

function initTestimonialsNavigation() {
  document.getElementById('prevTest').addEventListener('click', () => {
    goToTest((currentTest - 1 + testimonials.length) % testimonials.length);
  });

  document.getElementById('nextTest').addEventListener('click', () => {
    goToTest((currentTest + 1) % testimonials.length);
  });

  setInterval(() => {
    goToTest((currentTest + 1) % testimonials.length);
  }, 5000);
}

function initIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function init() {
  renderProducts();
  renderServices();
  renderTestimonials();
  setupNavigation();
  setupScrollEffects();
  setupContactForm();
  setupAnchorLinks();
  setupWhatsapp();
  initTestimonialsNavigation();
  initIcons();
}

window.addEventListener('DOMContentLoaded', init);
