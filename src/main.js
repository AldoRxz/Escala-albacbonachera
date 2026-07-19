import Splide from '@splidejs/splide'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ── Navbar: transparente arriba, degradado + blur al hacer scroll ── */
const navbar = document.getElementById('navbar')
const onNavScroll = () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 40)
}
window.addEventListener('scroll', onNavScroll, { passive: true })
onNavScroll()

/* ── Menú hamburguesa (móvil) ── */
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
if (navToggle && navMenu) {
  const setMenu = (open) => {
    navMenu.classList.toggle('is-open', open)
    navToggle.classList.toggle('is-open', open)
    navToggle.setAttribute('aria-expanded', String(open))
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
    document.body.style.overflow = open ? 'hidden' : ''
  }
  navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('is-open')))
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false))
  })
}

/* ── Parallax sutil del Hero (rAF, sin bloquear el hilo principal) ── */
const heroBg = document.getElementById('hero-bg')
if (heroBg && !prefersReducedMotion) {
  let ticking = false
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (y < window.innerHeight) {
          heroBg.style.transform = `translate3d(0, ${y * 0.35}px, 0)`
        }
        ticking = false
      })
    },
    { passive: true },
  )
}

/* ── Scroll reveal con Intersection Observer ── */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
)
document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el))

/* ── Galería: carrusel Splide con foco central y secundarias atenuadas ── */
const splideEl = document.getElementById('galeria-splide')
if (splideEl) {
  new Splide(splideEl, {
    type: 'loop',
    focus: 'center',
    perPage: 2,
    gap: '1rem',
    speed: 900,
    easing: 'ease',
    autoplay: !prefersReducedMotion,
    interval: 5000,
    pauseOnHover: true,
    lazyLoad: false,
    breakpoints: {
      768: { perPage: 1 },
    },
  }).mount()
}
