<script setup lang="ts">
const { t } = useI18n()

const jobsData = [
  {
    id: 1,
    company: 'Talana',
    technologies: [
      'Vue 2',
      'Vue 3',
      'TypeScript',
      'TailwindCSS',
      'Pinia',
      'Vite',
      'GraphQL',
      'Zod',
      'Storybook',
      'Vitest',
      'Vuetify',
      'Quasar',
      'Nuxt',
    ],
  },
  {
    id: 2,
    company: 'Hackmetrix',
    technologies: [
      'Vue 2',
      'Vue 3',
      'TypeScript',
      'Bootstrap',
      'Vuetify',
      'Pinia',
      'Vite',
      'Vitest',
    ],
  },
  {
    id: 3,
    company: 'Poliglota',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Bootstrap', 'Sass'],
  },
  {
    id: 4,
    company: 'Integer',
    technologies: ['PHP', 'React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 5,
    company: 'Proyectando Ideas',
    technologies: ['Vue 2', 'JavaScript', 'HTML', 'CSS', 'Wordpress'],
  },
  {
    id: 6,
    company: 'Reactivo',
    technologies: ['JavaScript', 'Ruby on Rails', 'HTML', 'CSS', 'Wordpress', 'PostgreSQL'],
  },
  {
    id: 7,
    company: 'Dr. Marketing',
    technologies: ['PHP', 'JavasScript', 'Jquery', 'Ruby on Rails', 'Wordpress', 'MySQL'],
  },
]

const jobs = computed(() => {
  return jobsData.map((job) => ({
    ...job,
    position: t(`jobs.${job.id}.position`),
    duration: t(`jobs.${job.id}.duration`),
    description: [t(`jobs.${job.id}.description.0`), t(`jobs.${job.id}.description.1`)],
  }))
})

const journeyDescriptions = computed(() => [
  t('journey.description.0'),
  t('journey.description.1'),
  t('journey.description.2'),
])
</script>

<template>
  <div>
    <BaseHero :title="t('title')" :description="t('description')" />

    <section class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <UCard class="order-2 md:order-1 lg:col-span-2">
        <template #header>
          <h2 class="text-2xl">{{ t('journey.title') }}</h2>
        </template>

        <div class="grid gap-4">
          <p v-for="(description, index) in journeyDescriptions" :key="index" class="text-lg">
            {{ description }}
          </p>
        </div>

        <template #footer>
          <div class="flex flex-wrap gap-4">
            <UButton color="primary" variant="solid" external to="mailto:sergioazoc@gmail.com">
              <Icon name="lucide:mail" class="mr-2 h-4 w-4" />
              Email
            </UButton>
            <UButton
              color="primary"
              to="/cv-sergio-azocar.pdf"
              target="_blank"
              size="xl"
              variant="subtle"
              icon="lucide-file-text"
              external
              >CV</UButton
            >
            <UButton
              color="primary"
              variant="subtle"
              external
              to="https://www.linkedin.com/in/sergio-azocar"
            >
              <Icon name="lucide:linkedin" class="mr-2 h-4 w-4" />
              LinkedIn
            </UButton>
          </div>
        </template>
      </UCard>

      <UCard
        :ui="{
          root: 'p-0',
        }"
        class="order-1 sm:p-0 md:order-2"
      >
        <NuxtImg
          class="h-full w-full rounded-lg object-cover"
          src="/images/about/sergio-azocar.jpeg"
          alt="Sergio Azócar"
          placeholder
          loading="lazy"
        />
      </UCard>
    </section>

    <section class="grid gap-8">
      <h2 class="text-center">{{ t('professional-title') }}</h2>

      <UCard v-for="(job, index) in jobs" :key="index" class="gap-4">
        <template #header>
          <div class="flex items-center justify-between gap-4">
            <div>
              <h3 class="text-primary text-xl">{{ job.position }}</h3>
              <p class="text-lg">{{ job.company }}</p>
            </div>
            <p class="text-sm text-neutral-400">{{ job.duration }}</p>
          </div>
        </template>

        <div class="grid gap-4">
          <p v-for="(description, indexDesc) in job.description" :key="indexDesc">
            {{ description }}
          </p>
        </div>

        <template #footer>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, techIndex) in job.technologies"
              :key="techIndex"
              class="mt-2 rounded-full"
              color="primary"
              variant="outline"
            >
              {{ tech }}
            </UBadge>
          </div>
        </template>
      </UCard>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Sobre mí",
    "description": "Apasionado por crear experiencias de usuario excepcionales y construir aplicaciones web escalables que marquen la diferencia.",
    "journey": {
      "title": "Mi Trayectoria",
      "description": [
        "Soy Sergio Azócar, un Desarrollador Frontend Senior con más de 7 años de experiencia construyendo aplicaciones web modernas. Mi trayectoria comenzó con una curiosidad por cómo funcionan los sitios web, y ha evolucionado hacia una pasión por crear experiencias de usuario excepcionales.",
        "Actualmente, me especializo en el ecosistema de Vue.js, TypeScript y arquitectura frontend moderna. He tenido el privilegio de trabajar con startups para escalar sus productos desde MVP hasta millones de usuarios, así como ayudar a empresas grandes a modernizar su pila frontend.",
        "Más allá del código, me apasiona compartir conocimientos a través de mentoría, charlas en conferencias y escritura de artículos técnicos. Creo en el poder de la comunidad y el aprendizaje continuo."
      ]
    },
    "professional-title": "Experiencia Profesional",
    "jobs": {
      "1": {
        "position": "Frontend Lead",
        "duration": "Agosto 2022 - Mayo 2025",
        "description": [
          "Como Frontend Lead, he guiado la transición de Vue 2 a Vue 3 con TypeScript, implementando microservicios y BFF con GraphQL. Mi enfoque en la estandarización de buenas prácticas y la creación de soluciones escalables ha sido clave en el desarrollo de proyectos como Rebranding, Design System e integraciones de plataformas.",
          "Lideré la creación de una librería de componentes en Vue 3 y TypeScript, retrocompatible con Vue 2, optimizando la reutilización de código en todo el equipo. También implementé Storybook para mejorar la documentación y colaboración en el proceso de desarrollo. Trabajo transversalmente con los Squads y Stakeholders para garantizar la alineación entre los equipos y las necesidades del negocio."
        ]
      },
      "2": {
        "position": "Frontend Developer",
        "duration": "Abril 2022 - Julio 2022",
        "description": [
          "En mi rol como Frontend Developer Senior, lideré la migración del frontend a Vue 3 con TypeScript y participé en la adopción de microservicios. Fui responsable de la creación de una librería de componentes reutilizables en Vue 3 y TypeScript, lo que facilitó la estandarización del código y mejoró la eficiencia del equipo.",
          "Además, trabajé en el mantenimiento de la parte frontend del sistema legacy en Rails durante la transición. Este cambio a microservicios mejoró significativamente la escalabilidad y la eficiencia del sistema, permitiendo una experiencia más fluida tanto para los usuarios como para el equipo de desarrollo."
        ]
      },
      "3": {
        "position": "Frontend Developer Senior",
        "duration": "Mayo 2021 - Marzo 2022",
        "description": [
          "En POLIGLOTA, participé en la migración de un sistema monolítico en Ruby on Rails a una arquitectura basada en microservicios. Desarrollé un nuevo login y dashboard para estudiantes utilizando Vue 3 y TypeScript, lo que mejoró la accesibilidad y la experiencia de usuario.",
          "Mi principal objetivo fue mejorar la escalabilidad y rendimiento del proyecto mediante la migración de Vue 2 a Vue 3, implementando una arquitectura moderna basada en microservicios que optimizó la experiencia del usuario y facilitó el mantenimiento a largo plazo. Además, trabajé en la mejora de los procesos internos del equipo, estableciendo buenas prácticas y estándares de desarrollo."
        ]
      },
      "4": {
        "position": "FullStack Developer",
        "duration": "Noviembre 2020 - Abril 2021",
        "description": [
          "Como Fullstack Developer en INTEGER, trabajé en el desarrollo de integraciones y automatizaciones utilizando PHP, HTML/CSS, JavaScript y React. Mi principal responsabilidad fue mejorar los flujos de trabajo y optimizar los procesos del backend para que el sistema fuera más eficiente y escalable.",
          "Desarrollé integraciones personalizadas y soluciones en frontend y backend, colaborando estrechamente con otros equipos para garantizar que las soluciones fueran alineadas con las necesidades de negocio. Mi trabajo ayudó a mejorar el tiempo de respuesta de la plataforma y la eficiencia operativa."
        ]
      },
      "5": {
        "position": "FullStack Developer",
        "duration": "Julio 2018 - Octubre 2020",
        "description": [
          "En PROYECTANDO IDEAS, fui responsable de la creación de sitios web y e-commerce utilizando WordPress, HTML, CSS, JavaScript y Vue 2. Trabajé en la implementación de soluciones a medida para clientes, brindando asesoría sobre el uso de plataformas digitales y optimizando la interacción del usuario con las aplicaciones web.",
          "Desarrollé landing pages personalizadas que ayudaron a mejorar la conversión y la experiencia del usuario. Además, lideré la formación de clientes, enseñándoles cómo gestionar y aprovechar al máximo sus plataformas digitales."
        ]
      },
      "6": {
        "position": "FullStack Developer",
        "duration": "Marzo 2016 - Junio 2018",
        "description": [
          "En REACTIVO, fui responsable del desarrollo de sitios web y aplicaciones utilizando PHP, Ruby on Rails, WordPress, y bases de datos como PostgreSQL. Además, implementé mejoras en el rendimiento de los sitios web y optimicé la interacción de los usuarios.",
          "Mi trabajo se centró en desarrollar soluciones eficientes que permitieran una mayor escalabilidad y optimización de los procesos internos. También proporcioné formación y asesoría técnica a los clientes sobre cómo optimizar sus aplicaciones y mejorar la experiencia de usuario."
        ]
      },
      "7": {
        "position": "FullStack Developer",
        "duration": "Enero 2015 - Febrero 2016",
        "description": [
          "En DR. MARKETING, desarrollé sitios web y aplicaciones utilizando PHP, JavaScript, Ruby on Rails, WordPress y MySQL. Fui responsable de optimizar los procesos internos de marketing digital de los clientes, mejorando la eficiencia de los sistemas a través de nuevas implementaciones tecnológicas.",
          "Además, brindé soporte a los equipos internos y a los clientes, ayudándolos a mejorar el rendimiento de sus aplicaciones y la interacción con los usuarios. Mi enfoque estuvo en la implementación de soluciones personalizadas que optimizaran la experiencia del cliente."
        ]
      }
    }
  },
  "en": {
    "title": "About Me",
    "description": "Passionate about creating exceptional user experiences and building scalable web applications that make a difference.",
    "journey": {
      "title": "My Journey",
      "description": [
        "I'm Sergio Azócar, a Senior Frontend Developer with over 7 years of experience building modern web applications. My journey started with a curiosity about how websites work, and it has evolved into a passion for creating exceptional user experiences.",
        "Currently, I specialize in Vue.js ecosystem, TypeScript, and modern frontend architecture. I've had the privilege of working with startups to scale their products from MVP to millions of users, as well as helping enterprise companies modernize their frontend stack.",
        "Beyond coding, I'm passionate about sharing knowledge through mentoring, speaking at conferences, and writing technical articles. I believe in the power of community and continuous learning."
      ]
    },
    "professional-title": "Professional Experience",
    "jobs": {
      "1": {
        "position": "Frontend Lead",
        "duration": "August 2022 - May 2025",
        "description": [
          "As Frontend Lead, I have guided the transition from Vue 2 to Vue 3 with TypeScript, implementing microservices and BFF with GraphQL. My focus on standardizing best practices and creating scalable solutions has been key in developing projects like Rebranding, Design System, and platform integrations.",
          "Led the creation of a component library in Vue 3 and TypeScript, backward compatible with Vue 2, optimizing code reuse across the team. I also implemented Storybook to improve documentation and collaboration in the development process. I work cross-functionally with Squads and Stakeholders to ensure alignment between teams and business needs."
        ]
      },
      "2": {
        "position": "Frontend Developer",
        "duration": "April 2022 - July 2022",
        "description": [
          "In my role as Senior Frontend Developer, I led the migration of the frontend to Vue 3 with TypeScript and participated in adopting microservices. I was responsible for creating a reusable component library in Vue 3 and TypeScript, which facilitated code standardization and improved team efficiency.",
          "Additionally, I worked on maintaining the frontend of the legacy system in Rails during the transition. This shift to microservices significantly improved scalability and system efficiency, allowing for a smoother experience for both users and the development team."
        ]
      },
      "3": {
        "position": "Senior Frontend Developer",
        "duration": "May 2021 - March 2022",
        "description": [
          "At POLIGLOTA, I participated in migrating a monolithic system in Ruby on Rails to a microservices-based architecture. I developed a new login and dashboard for students using Vue 3 and TypeScript, improving accessibility and user experience.",
          "My main goal was to enhance the scalability and performance of the project by migrating from Vue 2 to Vue 3, implementing a modern microservices-based architecture that optimized user experience and facilitated long-term maintenance. Additionally, I worked on improving internal team processes by establishing best practices and development standards."
        ]
      },
      "4": {
        "position": "FullStack Developer",
        "duration": "November 2020 - April 2021",
        "description": [
          "As a Fullstack Developer at INTEGER, I worked on developing integrations and automations using PHP, HTML/CSS, JavaScript, and React. My main responsibility was to improve workflows and optimize backend processes to make the system more efficient and scalable.",
          "I developed custom integrations and solutions in both frontend and backend, closely collaborating with other teams to ensure that the solutions were aligned with business needs. My work helped improve platform response times and operational efficiency."
        ]
      },
      "5": {
        "position": "FullStack Developer",
        "duration": "July 2018 - October 2020",
        "description": [
          "At PROYECTANDO IDEAS, I was responsible for creating websites and e-commerce using WordPress, HTML, CSS, JavaScript, and Vue 2. I worked on implementing custom solutions for clients, providing advice on using digital platforms and optimizing user interaction with web applications.",
          "I developed custom landing pages that helped improve conversion rates and user experience. Additionally, I led client training, teaching them how to manage and make the most of their digital platforms."
        ]
      },
      "6": {
        "position": "FullStack Developer",
        "duration": "March 2016 - June 2018",
        "description": [
          "At REACTIVO, I was responsible for developing websites and applications using PHP, Ruby on Rails, WordPress, and databases like PostgreSQL. I also implemented performance improvements for websites and optimized user interaction.",
          "My work focused on developing efficient solutions that allowed for greater scalability and optimization of internal processes. I also provided training and technical advice to clients on how to optimize their applications and improve user experience."
        ]
      },
      "7": {
        "position": "FullStack Developer",
        "duration": "January 2015 - February 2016",
        "description": [
          "At DR. MARKETING, I developed websites and applications using PHP, JavaScript, Ruby on Rails, WordPress, and MySQL. I was responsible for optimizing clients' internal digital marketing processes, improving system efficiency through new technological implementations.",
          "Additionally, I provided support to internal teams and clients, helping them improve application performance and user interaction. My focus was on implementing custom solutions that optimized the customer experience."
        ]
      }
    }
  }
}
</i18n>
