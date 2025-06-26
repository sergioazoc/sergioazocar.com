---
title: 'Lo que aprendí construyendo Design Systems y que haría diferente'
description: Te contaré mi experiencia creando Design Systems y te diré que cosas haría diferente para que no cometas los mismos errores que yo.
author: Sergio Azócar
tags:
  - design system
  - frontend
  - componentes
  - buenas prácticas
union: what-i-learned-building-design-systems-and-what-i-would-do-differently
date: 25/06/2025
img: /images/blog/what-i-learned-building-design-systems-and-what-i-would-do-differently.png
published: true
---

## ¿Qué es un Design System?

En simple, es una colección de **reglas**, **componentes** y **directrices** que actúan como una **única fuente de la verdad** para diseñar y construir interfaces.

Un buen Design System define desde los **colores**, **tipografías** y **espaciados**, hasta cómo deben comportarse los **botones**, **formularios**, **alertas**, y más. Pero va mucho más allá de lo visual: también establece cómo se comunican diseño y desarrollo, cómo se documentan los patrones y cómo evoluciona el producto de forma consistente.

> La idea es que todo el equipo hable el mismo idioma, diseñe más rápido y construya productos que se sientan coherentes, sin reinventar la rueda en cada pantalla.

No es solo una librería de componentes. Es una forma de trabajar que busca **alinear diseño, código y experiencia de usuario**.

Más adelante voy a entrar en detalle sobre cómo lo construí y qué aprendí, pero primero quiero contarte cómo fue enfrentarme a esta idea desde cero.

## Cómo terminé construyendo Design Systems

Después de trabajar en distintos proyectos y equipos, empecé a notar patrones que se repiten constantemente:

- El mismo botón diseñado de tres formas distintas  
- Comportamientos inconsistentes en componentes similares  
- Código duplicado o difícil de mantener  
- Malentendidos entre diseño y desarrollo  
- Interfaces que se veían bien en Figma, pero no en producción

Cada vez que un producto crecía, también lo hacía el caos visual y técnico. Y con él, el tiempo que perdíamos resolviendo los mismos problemas una y otra vez.

Ahí fue cuando entendí que necesitábamos algo más que una librería de componentes. Necesitábamos una **forma compartida de construir interfaces**, con reglas claras, decisiones centralizadas y una fuente de la verdad para todos los equipos.

## Expectativa versus realidad

¿Te acuerdas cuando en el colegio te tocaba hacer un trabajo en grupo?  
Cada uno hacía su parte por separado, lo juntaban todo al final… y el resultado era un verdadero "Frankenstein".

Bueno, construir un Design System se siente muchas veces así 😅.

Al principio crees que va a ordenar todo, que unirá diseño y desarrollo como por arte de magia. Pero en la práctica, aparecen los malentendidos, los atajos, las decisiones cruzadas, y lo que debería ser un sistema coherente empieza a desarmarse.

Estas fueron algunas de las diferencias más marcadas que viví entre lo que imaginaba… y lo que realmente pasó:

### 🧠 Expectativa:
> “Voy a crear una librería de componentes reutilizables y el equipo la va a usar feliz.”

**🧱 Realidad:**  
Algunos devs la ignoran, otros la rompen, otros no saben cómo usarla.  
Sin documentación, onboarding y soporte interno, nadie la adopta como esperás.

### 🎨 Expectativa:
> “El diseño está en Figma, así que solo tengo que replicarlo.”

**⚠️ Realidad:**  
El diseño no contempla estados, errores, focus, interacción, loading...  
Terminé tomando muchas decisiones técnicas que no estaban definidas.

### 🧪 Expectativa:
> “Una vez que los componentes están hechos, no hay que tocarlos más.”

**🔄 Realidad:**  
El diseño evoluciona, aparecen nuevos requerimientos, y cada cambio afecta múltiples partes del sistema.  
Un Design System necesita mantenimiento constante.

### 🧩 Expectativa:
> “Voy a crear componentes genéricos y reutilizables para todo.”

**🧨 Realidad:**  
Componentes ultra flexibles terminan siendo difíciles de mantener, testear o entender.  
A veces es mejor tener variantes claras que un solo componente con 15 props.

### 👥 Expectativa:
> “Diseño y desarrollo van a trabajar como un solo equipo.”

**📉 Realidad:**  
Sin procesos claros y un lenguaje común, aparecen malentendidos todo el tiempo.  
Colaborar no es automático: hay que construir puentes intencionalmente.

### 📦 Expectativa:
> “Con Tailwind puedo hacer todo sin un Design System.”

**🔍 Realidad:**  
Tailwind ayuda, pero sin decisiones de diseño compartidas, tokens y una estructura clara, tu proyecto igual se vuelve inconsistente.

### ⏳ Expectativa:
> “En unas semanas tengo el sistema listo.”

**📆 Realidad:**  
Un Design System no se termina. Es un sistema vivo que crece, se adapta y necesita evolucionar junto a tu producto.

Para entenderlo mejor, analicemos las necesidades de cada uno:

## Necesidades de Diseño y Desarrollo

Cuando te enfrentas a crear un Design System —ya sea desde cero o a partir de una base existente— siempre aparecen dos caras de la misma moneda: lo que quiere y necesita tanto **Diseño** cómo **Desarrollo**. Es ahí donde empiezan todos los ~~problemas~~ desafíos.

Para contextualizar un poco analicemos las necesidades de cada equipo.

### Diseño 🎨

- **Consistencia visual**: Un lenguaje visual unificado (colores, tipografías, espaciados, iconografía, etc.).

- **Velocidad y eficiencia**: Poder diseñar interfaces sin reinventar los mismos componentes cada vez.

- **Escalabilidad de diseños**: Que lo que funciona en una pantalla también funcione en otras (web, mobile, responsive...).

- **Tokens de diseño claros y reutilizables**: Definición técnica de colores, tamaños, fuentes, z-index, etc.

- **Relación directa con la implementación**: Que lo que diseñan se vea igual en producción.

### Desarrollo 💻

- **Reutilización real de componentes**: Librería estable, bien documentada y fácil de usar.

- **Consistencia funcional y técnica**: Mismos patrones de props, slots, estados, accesibilidad, validación, etc.

- **Facilidad de mantenimiento**: Código limpio, con nombres claros, tests, y sin lógica duplicada.

- **Documentación viva**: Storybook o similar, con ejemplos reales, no solo teoría.

- **Adaptabilidad a contextos distintos**: Que un botón (por ejemplo) funcione igual en cualquiera de las aplicaciones que tenemos.

Cada equipo tiene sus propias necesidades y prioridades, pero para que un Design System funcione, **deben trabajar en conjunto**, tomando decisiones basadas en definiciones compartidas. Ahí es donde deben aprovechar al máximo los puntos de unión entre ambos mundos.

### Necesidades mutuas, el punto de equilibrio 🤝

- **Lenguaje común**: Tokens, nombres de componentes, variantes, estados. Todos deben hablar el mismo idioma.

- **Proceso de diseño–desarrollo fluido**: Entregas claras desde Figma (o lo que usen), handoffs eficientes, feedback mutuo.

- **Versionado y control de cambios**: Para que los cambios en diseño se puedan implementar y comunicar sin romper el resto del sistema.

- **Adopción transversal del sistema**: Que no se quede en un equipo. Tiene que ser fácil de usar y entender por todos.

> En resumen, un Design System necesita ser lo suficientemente **cerrado** como para respetar las definiciones de diseño sin permitir cambios visuales arbitrarios, pero también lo suficientemente **flexible** como para extenderse y adaptarse sin romper nada.  

## Cómo lograr la adopción del sistema

Tener un Design System técnicamente impecable no sirve de mucho si nadie lo usa.

Uno de los mayores desafíos no es construir el sistema, sino lograr que el equipo lo adopte de verdad. Y no me refiero solo a “que lo conozcan”, sino a que **lo integren en su día a día**, lo respeten, lo cuestionen y lo mantengan vivo.

Algunas cosas que me funcionaron (y otras que aprendí a la fuerza):

- **Involucrar desde el inicio**: Si el sistema se construye entre unos pocos, alejado del equipo, va a generar rechazo. Mientras más voces participen desde el comienzo, más pertenencia genera.

- **Mostrar valor rápidamente**: Un componente útil, bien documentado y fácil de usar vale más que una promesa de “algún día vamos a tener todo ordenado”.

- **Documentar con empatía**: No es solo escribir cómo usar un componente, es pensar en cómo lo entenderá alguien que llega por primera vez. Ejemplos reales, capturas, casos de uso, FAQs... todo suma.

- **Dar soporte interno**: Si alguien tiene un problema con un componente, tiene que haber una forma rápida de resolverlo. Slack, issues, pair programming... lo que sea, pero que no sientan que están solos y sobre todo, un flujo claro de como reportar los errores.

- **Celebrar el uso**: Cuando alguien adopta un componente, lo mejora o reporta un bug, hay que celebrarlo. Pequeños reconocimientos hacen que el sistema se vea como algo vivo, colaborativo y útil.

> La adopción no es un evento, es un proceso. Y requiere tiempo, paciencia y mucha comunicación.

## Lecciones aprendidas y recomendaciones

Después de todo este proceso, me quedo con varias ideas que ojalá hubiese sabido antes:

- **Un Design System no es un proyecto, es un producto**. Y como todo producto, necesita investigación, diseño, mantenimiento, comunicación y evolución.

- **Empieza por lo que más duele**: No intentes resolver todo desde el día uno. Identifica qué está causando más fricción hoy y empieza por ahí.

- **La perfección no es el objetivo**: Siempre va a haber deuda, componentes por mejorar y decisiones que se pueden cuestionar. La clave es que sea útil y evolucione.

- **Sin adopción, no hay sistema**: Si no lo usa el equipo, es solo una carpeta más en tu repo.

- **Cada equipo es distinto**: No copies un sistema de otro lado esperando que funcione igual. Inspírate, sí, pero adapta todo a tu contexto y necesidades reales.

- **Anticipa los problemas**: Tu Design System puede y va a fallar, habrán cambios de definiciones y de diseño. Ten eso en cuenta para que construyas todo de forma modular y flexible.

- **Utiliza Atomic Design**: Pero utilizalo bien, cada componente es un mundo por si mismo, mientras más atómico sea cada uno, más fácil es modificarlo o extenderlo sin romperlo todo.

> Un Design System es una inversión a largo plazo. Puede ser desafiante, incluso frustrante a veces, pero cuando empieza a funcionar, **todo el equipo gana en velocidad, consistencia y confianza**.