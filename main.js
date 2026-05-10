const products = [
  { icon: 'zap', title: 'Power Tools', desc: 'Drills, saws, grinders and accessories from trusted brands.', img: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' },
  { icon: 'landmark', title: 'Building Materials', desc: 'Cement, lumber, steel and essential supplies for every job.', img: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' },
  { icon: 'droplets', title: 'Plumbing Supplies', desc: 'Pipes, fittings, valves and full plumbing solutions.', img: 'https://images.pexels.com/photos/410727/pexels-photo-410727.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' },
  { icon: 'plug', title: 'Electrical Equipment', desc: 'Wiring, breakers, outlets and electrical components.', img: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' },
  { icon: 'paintbrush', title: 'Paint & Finishing', desc: 'Interior and exterior finishes, tools, and supplies.', img: 'https://images.pexels.com/photos/158826/pexels-photo-158826.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' },
  { icon: 'hard-hat', title: 'Safety Gear', desc: 'Helmets, gloves, goggles and protective equipment.', img: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop' }
];

const services = [
  { icon: 'clock', title: 'Tool Rental', desc: 'Rent professional-grade tools by the day or week.' },
  { icon: 'truck', title: 'Delivery Services', desc: 'Fast delivery to your jobsite or doorstep.' },
  { icon: 'clipboard-list', title: 'Consultation', desc: 'Expert advice for your construction and renovation needs.' },
  { icon: 'package', title: 'Bulk Supply', desc: 'Discounted pricing for large-volume orders.' }
];

const testimonials = [
  { name: 'Marcus Chen', role: 'General Contractor', text: 'Caro Hardware has been my go-to supplier for 5 years. Their quality and service are unmatched.' },
  { name: 'Sarah Williams', role: 'Interior Designer', text: 'Amazing selection of finishing materials and exceptional customer support.' },
  { name: 'David Okafor', role: 'Homeowner', text: 'Renovated my entire home with supplies from Caro. Fair prices and everything was top quality.' },
  { name: 'Lisa Martinez', role: 'Electrician', text: 'Best electrical supply section in the area. Always stocked with what I need for any job.' }
];

const productGrid = document.getElementById('productGrid');
products.forEach((product, index) => {
  const card = document.createElement('article');
  card.className = 'product-card bg-white rounded-[28px] overflow-hidden shadow-xl shadow-slate-900/5 sr';
  card.style.transitionDelay = `${index * 0.08}s`;
  card.innerHTML = `
    <div class="relative h-52 overflow-hidden bg-slate-900">
      <img src="${product.img}" alt="${product.title}" class="h-full w-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>
    </div>
    <div class="p-6">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-caro-orange/10 text-caro-orange mb-4">
        <i data-lucide="${product.icon}" class="w-5 h-5"></i>
      </div>
      <h3 class="text-xl font-semibold text-caro-dark">${product.title}</h3>
      <p class="mt-3 text-sm leading-relaxed text-caro-dark/60">${product.desc}</p>
      <div class="mt-6 inline-flex items-center gap-2 text-caro-orange font-semibold text-sm">
        <span>Browse</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </div>
    </div>
  `;
  productGrid.appendChild(card);
});

const serviceGrid = document.getElementById('serviceGrid');
services.forEach((service, index) => {
  const card = document.createElement('article');
  card.className = 'service-card rounded-[28px] bg-[#0F172A]/80 p-6 text-center sr';
  card.style.transitionDelay = `${index * 0.08}s`;
  card.innerHTML = `
    <div class="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-caro-orange/10 text-caro-orange mx-auto">
      <i data-lucide="${service.icon}" class="w-6 h-6"></i>
    </div>
    <h3 class="text-white font-semibold text-lg">${service.title}</h3>
    <p class="mt-3 text-sm leading-relaxed text-white/60">${service.desc}</p>
  `;
  serviceGrid.appendChild(card);
});

const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialDots = document.getElementById('testDots');
let activeTestimonial = 0;

testimonials.forEach((item, index) => {
  const slide = document.createElement('div');
  slide.className = 'w-full flex-shrink-0 px-4';
  slide.innerHTML = `
    <div class="max-w-2xl mx-auto text-center">
      <div class="mb-4 flex justify-center gap-1">
        ${'<span class="text-caro-orange text-lg">★</span>'.repeat(5)}
      </div>
      <p class="text-white/70 text-lg leading-relaxed italic">"${item.text}"</p>
      <p class="mt-6 text-white font-semibold">${item.name}</p>
      <p class="text-caro-orange text-sm">${item.role}</p>
    </div>
  `;
  testimonialTrack.appendChild(slide);

  const dot = document.createElement('button');
  dot.className = index === 0 ? 'w-6 h-2 rounded-full bg-caro-orange transition-all' : 'w-2 h-2 rounded-full bg-white/30 transition-all';
  dot.type = 'button';
  dot.addEventListener('click', () => setTestimonial(index));
  testimonialDots.appendChild(dot);
});

function setTestimonial(index) {
  activeTestimonial = index;
  testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
  Array.from(testimonialDots.children).forEach((dot, dotIndex) => {
    dot.className = dotIndex === index ? 'w-6 h-2 rounded-full bg-caro-orange transition-all' : 'w-2 h-2 rounded-full bg-white/30 transition-all';
  });
}

document.getElementById('prevTest').addEventListener('click', () => setTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length));
document.getElementById('nextTest').addEventListener('click', () => setTestimonial((activeTestimonial + 1) % testimonials.length));
setInterval(() => setTestimonial((activeTestimonial + 1) % testimonials.length), 6000);

const navButton = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('.mobile-menu');
let mobileOpen = false;

navButton.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  mobileMenu.classList.toggle('open', mobileOpen);
});

document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileOpen = false;
    mobileMenu.classList.remove('open');
  });
});

const appRoot = document.getElementById('appRoot');
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');

appRoot.addEventListener('scroll', () => {
  navbar.classList.toggle('shadow-xl', appRoot.scrollTop > 40);
  backTop.classList.toggle('show', appRoot.scrollTop > 420);
});

backTop.addEventListener('click', () => {
  appRoot.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { root: appRoot, threshold: 0.12 });

document.querySelectorAll('.sr').forEach((element) => observer.observe(element));

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.getElementById('formMsg');
  message.textContent = '✓ Message sent successfully! Our team will contact you shortly.';
  message.className = 'mt-3 text-center text-green-600 font-medium';
  message.classList.remove('hidden');
  event.target.reset();
  setTimeout(() => message.classList.add('hidden'), 4500);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappMenu = document.getElementById('whatsappMenu');
const whatsappProducts = document.getElementById('whatsappProducts');
const quickOrder = document.getElementById('quickOrder');
const WHATSAPP_PHONE = '1234567890';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_PHONE}`;

whatsappBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  whatsappMenu.classList.toggle('hidden');
  if (!whatsappMenu.classList.contains('hidden')) {
    renderWhatsappProducts();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('#whatsappBtn') && !event.target.closest('#whatsappMenu')) {
    whatsappMenu.classList.add('hidden');
  }
});

function renderWhatsappProducts() {
  whatsappProducts.innerHTML = products.map((product) => `
    <button type="button" data-product="${product.title}" class="w-full text-left px-4 py-3 text-sm text-caro-dark hover:bg-slate-100 transition-colors">
      <span class="text-green-600 mr-2">✓</span>${product.title}
    </button>
  `).join('');

  whatsappProducts.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
      const content = encodeURIComponent(`Hi Caro Hardware, I'm interested in ordering: ${item.dataset.product}. Please share pricing and availability.`);
      window.open(`${WHATSAPP_BASE}?text=${content}`, '_blank', 'noopener noreferrer');
      whatsappMenu.classList.add('hidden');
    });
  });
}

quickOrder.addEventListener('click', () => {
  const content = encodeURIComponent('Hi Caro Hardware! I would like to place an order. Please share available products and pricing.');
  window.open(`${WHATSAPP_BASE}?text=${content}`, '_blank', 'noopener noreferrer');
  whatsappMenu.classList.add('hidden');
});

lucide.createIcons();

const defaultConfig = {
  background_color: '#0A1026',
  surface_color: '#F5F0EB',
  text_color: '#FFFFFF',
  primary_action_color: '#E8620A',
  secondary_action_color: '#2D2D2D',
  font_family: 'Outfit',
  font_size: 16,
  hero_headline: 'Quality Hardware Solutions for Every Project',
  hero_subheading: 'Your trusted partner in construction and home improvement. Premium tools, materials, and expert advice — all under one roof.',
  about_title: 'About Caro Hardware',
  about_text: 'Founded in 2010, Caro Hardware has grown from a local hardware shop to one of the region\'s most trusted suppliers. We provide premium-quality tools, building materials, and expert advice to contractors, builders, and homeowners alike.',
  contact_phone: '+1 (555) 234-5678',
  contact_email: 'info@carohardware.com',
  contact_address: '123 Industrial Ave, Construction City, CC 45678'
};

if (window.elementSdk?.init) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      const conf = (key) => config[key] ?? defaultConfig[key];
      document.body.style.fontFamily = `${conf('font_family')}, Outfit, sans-serif`;
      document.getElementById('heroHeadline').textContent = conf('hero_headline');
      document.getElementById('heroSub').textContent = conf('hero_subheading');
      document.getElementById('aboutTitle').textContent = conf('about_title');
      document.getElementById('aboutText').textContent = conf('about_text');
      document.getElementById('contactPhone').textContent = conf('contact_phone');
      document.getElementById('contactEmailDisplay').textContent = conf('contact_email');
      document.getElementById('contactAddress').textContent = conf('contact_address');
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color ?? defaultConfig.background_color,
          set: (value) => window.elementSdk?.setConfig({ background_color: value })
        },
        {
          get: () => config.surface_color ?? defaultConfig.surface_color,
          set: (value) => window.elementSdk?.setConfig({ surface_color: value })
        },
        {
          get: () => config.text_color ?? defaultConfig.text_color,
          set: (value) => window.elementSdk?.setConfig({ text_color: value })
        },
        {
          get: () => config.primary_action_color ?? defaultConfig.primary_action_color,
          set: (value) => window.elementSdk?.setConfig({ primary_action_color: value })
        },
        {
          get: () => config.secondary_action_color ?? defaultConfig.secondary_action_color,
          set: (value) => window.elementSdk?.setConfig({ secondary_action_color: value })
        }
      ]
    }),
    mapToEditPanelValues: (config) => new Map([
      ['hero_headline', config.hero_headline ?? defaultConfig.hero_headline],
      ['hero_subheading', config.hero_subheading ?? defaultConfig.hero_subheading],
      ['about_title', config.about_title ?? defaultConfig.about_title],
      ['about_text', config.about_text ?? defaultConfig.about_text],
      ['contact_phone', config.contact_phone ?? defaultConfig.contact_phone],
      ['contact_email', config.contact_email ?? defaultConfig.contact_email],
      ['contact_address', config.contact_address ?? defaultConfig.contact_address]
    ])
  });
}
