# Documentación de Arquitectura Web y Diseño — Los Caminantes de la Balanza

Documentación de referencia para el desarrollo de la web de la autora (Alba C. Bonachera). Cada documento cubre un bloque de la arquitectura.

## Índice

| Documento | Contenido |
|---|---|
| [01-directrices-globales-diseno.md](01-directrices-globales-diseno.md) | Filosofía de layout, atmósfera, paleta de colores, tipografía y estilo de botones (CTAs) |
| [02-navbar.md](02-navbar.md) | Navegación fija superior (sticky) |
| [03-hero.md](03-hero.md) | Sección 1 — El Origen (Hero a pantalla completa con parallax) |
| [04-la-obra.md](04-la-obra.md) | Sección 2 — Sinopsis, portada y bloque de compra (CTAs de tiendas) |
| [05-cronicas-personajes.md](05-cronicas-personajes.md) | Sección 3 — Ficha interactiva de personajes (Glassmorphism) |
| [06-galeria-universo.md](06-galeria-universo.md) | Sección 4 — Galería de arte oficial con carrusel (Splide.js) |
| [07-el-gremio.md](07-el-gremio.md) | Sección 5 — Suscripción, comunidad y Ko-fi |
| [08-footer.md](08-footer.md) | Pie de página |
| [09-animaciones-y-tecnica.md](09-animaciones-y-tecnica.md) | Animaciones obligatorias, scroll reveal y optimización de assets |

## Principios rectores (resumen rápido)

- **Lienzo continuo**: prohibidos los cortes horizontales abruptos entre secciones; transiciones de color con degradados suaves.
- **Estética**: fantasía oscura, misterio, novela visual / RPG.
- **Colores clave**: fondo `#0b0d19`, texto `#e2e8f0`, acento oro `#d4af37`.
- **Rendimiento**: `loading="lazy"` en todo el arte pesado excepto el Hero.
