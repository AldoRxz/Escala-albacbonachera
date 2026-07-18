# 09 · Animaciones y Comportamiento Técnico (Obligatorios)

## 1. Carga Inicial (Hero)

- El título del libro aparece con **fade-in lento de 1.5 segundos**.
- Acompañado de un **sutil aumento de escala inicial**.

## 2. Activación por Scroll

- Todas las secciones animables (sinopsis, ficha de personaje y galería) usan la clase **`.scroll-animate`**.
- Implementación con **Intersection Observer**.
- Comportamiento al entrar en el campo visual:
  - Emergen suavemente desde abajo: de `translate-y-[30px]` a `translate-y-0`.
  - Ganan opacidad progresivamente.

## 3. Optimización de Assets

- Todo el arte pesado lleva `loading="lazy"`.
- **Excepción única**: la imagen del Hero — debe cargar de inmediato para asegurar una carga instantánea de la estructura de la página.

## Recordatorios de rendimiento

- Los hovers de botones usan aceleración por hardware (`transform`, `box-shadow`) — ver [01-directrices-globales-diseno.md](01-directrices-globales-diseno.md#comportamiento-de-botones-ctas).
- El parallax del Hero debe ser sutil y no bloquear el hilo principal — ver [03-hero.md](03-hero.md).

---
Anterior: [08-footer.md](08-footer.md) · Índice: [README.md](README.md)
