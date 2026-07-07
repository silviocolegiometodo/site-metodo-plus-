// ── AOS Init ──
AOS.init({ duration: 700, once: true, offset: 80 });

// ── Header scroll ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');

function openMenu() {
  mobileNav.classList.add('active');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.classList.remove('active');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMenu);
if (mobileNav) mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

// ── Scroll to top ──
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Counters (static) ──
document.querySelectorAll('[data-target]').forEach(el => {
  const target = el.getAttribute('data-target');
  const rawSuffix = el.getAttribute('data-suffix');
  const suffix = rawSuffix !== null ? rawSuffix : '+';
  const prefix = el.getAttribute('data-prefix') || '';
  el.textContent = prefix + target + suffix;
});

// ── Lightbox da galeria (fotos e navegação isoladas por card) ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxPrevBtn = document.getElementById('lightboxPrev');
const lightboxNextBtn = document.getElementById('lightboxNext');

let lightboxGroup = [];
let lightboxIndex = 0;

function renderLightbox() {
  const photo = lightboxGroup[lightboxIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt;
  lightboxCaption.textContent = photo.alt;
  const hasMultiple = lightboxGroup.length > 1;
  lightboxPrevBtn.style.display = hasMultiple ? 'flex' : 'none';
  lightboxNextBtn.style.display = hasMultiple ? 'flex' : 'none';
}

function openLightbox(group, startIndex) {
  lightboxGroup = group;
  lightboxIndex = startIndex;
  renderLightbox();
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function lightboxGo(delta) {
  lightboxIndex = (lightboxIndex + delta + lightboxGroup.length) % lightboxGroup.length;
  renderLightbox();
}

document.querySelectorAll('.galeria-item--photo').forEach(item => {
  const group = Array.from(item.querySelectorAll('img.galeria-photo'))
    .map(img => ({ src: img.currentSrc || img.src, alt: img.alt, imgEl: img }));

  item.addEventListener('click', () => {
    const activeImg = item.querySelector('img.galeria-photo.active') || item.querySelector('img.galeria-photo');
    const index = group.findIndex(p => p.imgEl === activeImg);
    openLightbox(group, index >= 0 ? index : 0);
  });
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxOverlay').addEventListener('click', closeLightbox);
lightboxPrevBtn.addEventListener('click', () => lightboxGo(-1));
lightboxNextBtn.addEventListener('click', () => lightboxGo(1));

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxGo(-1);
  if (e.key === 'ArrowRight') lightboxGo(1);
});

let touchStartX = null;
const lightboxStage = document.querySelector('.lightbox-stage');
lightboxStage.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
lightboxStage.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(deltaX) > 40) lightboxGo(deltaX < 0 ? 1 : -1);
  touchStartX = null;
}, { passive: true });

// ── Mini carrossel da galeria (Clube Olympico) ──
document.querySelectorAll('.galeria-carousel').forEach(item => {
  const photos = item.querySelectorAll('.galeria-photo');
  if (photos.length < 2) return;
  let atual = 0;
  setInterval(() => {
    photos[atual].classList.remove('active');
    atual = (atual + 1) % photos.length;
    photos[atual].classList.add('active');
  }, 3500);
});

// ── Form ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;

  const nome     = form.nome.value.trim();
  const email    = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const assunto  = form.assunto.value.trim();
  const mensagem = form.mensagem.value.trim();

  const btn = form.querySelector('button[type="submit"]');

  if (!nome || !email || !mensagem) {
    btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Preencha os campos obrigatórios';
    btn.style.background = '#dc2626';
    setTimeout(() => {
      btn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar pelo WhatsApp';
      btn.style.background = '';
    }, 3000);
    return;
  }

  const texto =
    `*Contato pelo Site — Colégio Método Plus*\n\n` +
    `*Nome:* ${nome}\n` +
    `*E-mail:* ${email}\n` +
    `*Telefone:* ${telefone || 'Não informado'}\n` +
    `*Assunto:* ${assunto || 'Não informado'}\n\n` +
    `*Mensagem:*\n${mensagem}`;

  const url = `https://wa.me/553132218003?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener,noreferrer');

  btn.innerHTML = '<i class="fas fa-check"></i> Redirecionando para o WhatsApp!';
  btn.style.background = '#16a34a';
  form.reset();
  setTimeout(() => {
    btn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar pelo WhatsApp';
    btn.style.background = '';
  }, 4000);
});

// ── Avaliação (estrelas + envio via WhatsApp) ──
const avaliacaoStars = document.querySelectorAll('#avaliacaoStars .avaliacao-star');
let avaliacaoNota = 0;

function pintarEstrelas(ate, classe) {
  avaliacaoStars.forEach(star => {
    const valor = Number(star.dataset.value);
    star.classList.toggle(classe, valor <= ate);
  });
}

avaliacaoStars.forEach(star => {
  star.addEventListener('mouseenter', () => pintarEstrelas(Number(star.dataset.value), 'hovered'));
  star.addEventListener('mouseleave', () => pintarEstrelas(0, 'hovered'));
  star.addEventListener('click', () => {
    avaliacaoNota = Number(star.dataset.value);
    pintarEstrelas(avaliacaoNota, 'selected');
  });
});

const avaliacaoSubmit = document.getElementById('avaliacaoSubmit');
if (avaliacaoSubmit) {
  avaliacaoSubmit.addEventListener('click', () => {
    const comentario = document.getElementById('avaliacaoComentario').value.trim();

    if (!avaliacaoNota) {
      avaliacaoSubmit.innerHTML = '<i class="fas fa-exclamation-circle"></i> Escolha uma nota de 1 a 5 estrelas';
      avaliacaoSubmit.style.background = '#dc2626';
      setTimeout(() => {
        avaliacaoSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar Avaliação pelo WhatsApp';
        avaliacaoSubmit.style.background = '';
      }, 3000);
      return;
    }

    const estrelas = '⭐'.repeat(avaliacaoNota) + '☆'.repeat(5 - avaliacaoNota);
    const texto =
      `*Avaliação pelo Site — Colégio Método Plus*\n\n` +
      `*Nota:* ${estrelas} (${avaliacaoNota}/5)\n` +
      (comentario ? `*Comentário:*\n${comentario}` : '*Comentário:* Não informado');

    const url = `https://wa.me/553132218003?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    avaliacaoSubmit.innerHTML = '<i class="fas fa-check"></i> Redirecionando para o WhatsApp!';
    avaliacaoSubmit.style.background = '#16a34a';
    setTimeout(() => {
      avaliacaoSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar Avaliação pelo WhatsApp';
      avaliacaoSubmit.style.background = '';
    }, 4000);
  });
}

// ── Modal Parceiros ──
const parceiroData = {
  positivo: {
    icon: 'fa-graduation-cap',
    gradient: 'linear-gradient(135deg,#0B3D91,#3b82f6)',
    shadow: 'rgba(11,61,145,0.30)',
    title: 'Sistema Positivo de Ensino',
    paragraphs: [
      'O Sistema Positivo de Ensino é uma das mais reconhecidas propostas educacionais do Brasil, presente em milhares de instituições de ensino e responsável pela formação de milhões de estudantes ao longo de sua trajetória. Sua metodologia combina tradição, inovação e tecnologia, oferecendo materiais didáticos constantemente atualizados e alinhados às competências exigidas pela Base Nacional Comum Curricular (BNCC).',
      'Mais do que transmitir conteúdos, o Sistema Positivo busca desenvolver habilidades essenciais para a vida, como pensamento crítico, criatividade, autonomia, responsabilidade e capacidade de resolução de problemas. Por meio de recursos digitais, plataformas educacionais, avaliações e acompanhamento pedagógico contínuo, os alunos têm acesso a uma experiência de aprendizagem dinâmica, interativa e eficiente.',
      'Nossa parceria com o Sistema Positivo reforça o compromisso com a excelência educacional, proporcionando aos estudantes uma formação sólida, moderna e preparada para os desafios acadêmicos, profissionais e pessoais do futuro.'
    ]
  },
  pes: {
    icon: 'fa-globe',
    gradient: 'linear-gradient(135deg,#0d9488,#34d399)',
    shadow: 'rgba(13,148,136,0.30)',
    title: 'PES English · Arco Educação',
    paragraphs: [
      'O PES English é o programa bilíngue desenvolvido pela Arco Educação em parceria com o Sistema Positivo de Ensino, criado para proporcionar aos alunos uma aprendizagem significativa da língua inglesa desde os primeiros anos escolares. A proposta vai além do ensino tradicional, promovendo a utilização do idioma em situações reais de comunicação e experiências práticas que estimulam a fluência de forma natural e progressiva.',
      'Com materiais exclusivos, recursos digitais modernos e uma metodologia alinhada aos padrões internacionais de ensino, os estudantes desenvolvem competências de leitura, escrita, compreensão auditiva e conversação. O programa também amplia o contato com diferentes culturas, preparando os alunos para um mundo cada vez mais globalizado e conectado.',
      'Por meio dessa parceria, nossos estudantes têm a oportunidade de construir uma base sólida no idioma inglês, ampliando suas possibilidades acadêmicas, profissionais e pessoais ao longo da vida.'
    ]
  },
  classapp: {
    icon: 'fa-mobile-alt',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    shadow: 'rgba(124,58,237,0.30)',
    title: 'ClassApp',
    paragraphs: [
      'O ClassApp é uma plataforma de comunicação escolar desenvolvida para aproximar a escola das famílias, tornando o acompanhamento da vida acadêmica dos alunos mais simples, rápido e eficiente. Por meio do aplicativo, pais, responsáveis, professores e gestores podem se comunicar em tempo real, fortalecendo a parceria entre escola e família.',
      'A ferramenta centraliza informações importantes em um único ambiente digital, permitindo o envio de comunicados, avisos, eventos, documentos, pesquisas, autorizações e diversas outras informações relevantes para a rotina escolar. Dessa forma, as famílias permanecem sempre informadas e participativas no processo educacional de seus filhos.',
      'Além de facilitar a comunicação, o ClassApp contribui para uma gestão escolar mais organizada, reduzindo o uso de papel e garantindo que as informações cheguem aos responsáveis de forma rápida e segura. Sua interface moderna e intuitiva proporciona praticidade no dia a dia, promovendo maior engajamento entre todos os envolvidos na comunidade escolar.',
      'Nossa parceria com o ClassApp reforça o compromisso com a inovação e a excelência no atendimento às famílias, utilizando a tecnologia como uma aliada para fortalecer a comunicação e acompanhar de perto o desenvolvimento dos nossos alunos.'
    ]
  },
  clube: {
    icon: 'fa-medal',
    gradient: 'linear-gradient(135deg,#ea580c,#fbbf24)',
    shadow: 'rgba(234,88,12,0.30)',
    title: 'Clube Olympico',
    paragraphs: [
      'O Clube Olympico é um importante parceiro da nossa instituição na promoção do desenvolvimento esportivo, físico e social dos alunos. Com uma infraestrutura completa e adequada para diversas modalidades esportivas, o clube oferece um ambiente seguro e estimulante para a prática de atividades que contribuem para a saúde, o bem-estar e a formação integral dos estudantes.',
      'Por meio dessa parceria, as aulas de Educação Física são realizadas em espaços amplos e preparados para proporcionar experiências mais enriquecedoras, incentivando hábitos saudáveis, disciplina, cooperação, respeito e trabalho em equipe. Além disso, alunos com destaque esportivo podem ter acesso a oportunidades especiais que valorizam seu talento e dedicação.',
      'Acreditamos que a educação vai além da sala de aula, e o esporte desempenha um papel fundamental na construção de valores, no fortalecimento da autoestima e no desenvolvimento de competências essenciais para a vida em sociedade.'
    ]
  }
};

const modal       = document.getElementById('parceiroModal');
const modalBox    = document.getElementById('parceiroModalBox');
const modalTitle  = document.getElementById('parceiroModalTitle');
const modalIcon   = document.getElementById('parceiroModalIconEl');
const modalBody   = document.getElementById('parceiroModalBody');
const modalClose  = document.getElementById('parceiroModalClose');
const modalOverlay = document.getElementById('parceiroModalOverlay');

function openParceiroModal(key) {
  const data = parceiroData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalIcon.className = 'fas ' + data.icon;
  modalIcon.style.color = '#fff';
  document.getElementById('parceiroModalIcon').style.background = data.gradient;
  document.getElementById('parceiroModalIcon').style.boxShadow = '0 6px 16px ' + data.shadow;
  modalBody.innerHTML = data.paragraphs
    .map(p => `<p style="color:var(--text-muted);font-size:0.97rem;line-height:1.85;margin:0;">${p}</p>`)
    .join('');

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    modalBox.style.transform = 'translateY(0) scale(1)';
    modalBox.style.opacity = '1';
  });
}

function closeParceiroModal() {
  modalBox.style.transform = 'translateY(24px) scale(0.97)';
  modalBox.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 280);
}

document.querySelectorAll('.parceiro-card').forEach(card => {
  card.addEventListener('click', () => openParceiroModal(card.dataset.parceiro));
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
    card.style.boxShadow = '0 12px 36px rgba(11,61,145,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
  });
});

modalClose.addEventListener('click', closeParceiroModal);
modalOverlay.addEventListener('click', closeParceiroModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeParceiroModal(); });
modalClose.addEventListener('mouseenter', () => { modalClose.style.background = '#f0f4ff'; });
modalClose.addEventListener('mouseleave', () => { modalClose.style.background = 'none'; });

// ── Smooth scroll for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Interactive Hover Button ──
(function () {
  document.querySelectorAll('.btn-accent:not(button), .btn-primary:not(button)').forEach(function (btn) {
    btn.classList.add('ihb');
    var html = btn.innerHTML;
    var text = btn.textContent.trim();
    btn.innerHTML =
      '<span class="ihb-default">' + html + '</span>' +
      '<span class="ihb-hover">' + text + ' <i class="fas fa-arrow-right"></i></span>';
  });
}());
