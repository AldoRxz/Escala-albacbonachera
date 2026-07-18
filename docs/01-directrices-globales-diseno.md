# 01 · Directrices Globales de Diseño (UI/UX)

## Filosofía de Layout

- La página debe comportarse como un **lienzo continuo**.
- **Prohibidos** los cortes horizontales abruptos entre secciones.
- Las transiciones de color entre secciones se realizan mediante **degradados suaves**.

## Atmósfera Visual

Fantasía oscura, misterio y estética de **novela visual / RPG**.

## Paleta de Colores (Tailwind)

| Rol | Color | Hex |
|---|---|---|
| Fondo base | Negro espacial / azul ultra oscuro | `#0b0d19` |
| Texto principal | Blanco hueso / gris claro (evita fatiga visual) | `#e2e8f0` |
| Acento místico | Oro editorial — bordes finos, elementos interactivos y destacados | `#d4af37` |

## Tipografía

| Uso | Fuente | Reglas |
|---|---|---|
| Títulos (H1, H2, H3) | Serif cinematográfica (ej. **Cinzel**) | Siempre en mayúsculas, `letter-spacing: 0.2em` |
| Cuerpo de texto | Sans-serif limpia y moderna (ej. **Inter** o **Montserrat**) | — |

## Comportamiento de Botones (CTAs)

Estilo **interfaz de juego (RPG)**:

- Sin fondos plásticos.
- Borde dorado de `1px`, texto del mismo color que el borde.
- Hover suave con **aceleración por hardware**:
  - Brillo interior (`box-shadow`).
  - Desplazamiento vertical mínimo: `translate-y-[-2px]`.

---
Ver también: [02-navbar.md](02-navbar.md) · [09-animaciones-y-tecnica.md](09-animaciones-y-tecnica.md)
