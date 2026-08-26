<script setup>
import { h, ref, onMounted } from 'vue'
import escudoIpn from './assets/escudo_ipn.png'
import upiitRender from './assets/UPIIT_render.png'

const isDarkMode = ref(false)

// Pictogramas SVG originales integrados en el sitio; no requieren atribución.
const iconPaths = {
  chart: '<path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/>',
  map: '<path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
  toy: '<circle cx="12" cy="7" r="3"/><path d="M7 21v-5a5 5 0 0 1 10 0v5M9 12l-2-2M15 12l2-2"/>',
  building: '<path d="M4 21V4h11v17M15 9h5v12M2 21h20"/><path d="M8 8h3M8 12h3M8 16h3"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h1a8 8 0 0 0 7-4.2A9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="11" r=".7"/><circle cx="10" cy="7.5" r=".7"/><circle cx="15" cy="8" r=".7"/>',
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/>',
  bars: '<path d="M5 20V10M12 20V4M19 20v-7M3 20h18"/>',
  bot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 8V4M9 4h6M8 13h.01M16 13h.01M9 16h6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  tools: '<path d="m14 6 4-4 2 2-4 4M13 7 5 15l-1 5 5-1 8-8M5 5l4 4M3 7l4-4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/>',
  userCode: '<circle cx="12" cy="7" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M8 15l-2 2 2 2M16 15l2 2-2 2"/>',
  graduation: '<path d="m3 9 9-5 9 5-9 5Z"/><path d="M7 11v5c2.5 2 7.5 2 10 0v-5M21 9v6"/>',
  certificate: '<path d="M6 3h12v14H6zM9 21l3-2 3 2v-5H9Z"/><path d="M9 8h6M9 11h4"/>',
  language: '<path d="M4 5h10M9 3v2M7 5c0 5-2 8-4 10M5 11c1.5 1.5 3 2.5 5 3M14 19l3-9 3 9M15 16h4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M7 3 4.5 5.5c-1 1 1.5 6 5 9.5s8.5 6 9.5 5L21 17.5l-4-3-2.5 2c-1.5-.7-4-3.2-4.7-4.7l2-2.5Z"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
}

const AppIcon = {
  props: { name: { type: String, required: true } },
  setup(props) {
    return () => h('svg', {
      class: 'app-icon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      'aria-hidden': 'true', innerHTML: iconPaths[props.name] || ''
    })
  }
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

// Generate bubbles for background
const bubbles = ref([])
onMounted(() => {
  const bubbleCount = 15
  for (let i = 0; i < bubbleCount; i++) {
    bubbles.value.push({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 10
    })
  }
})

const projects = [
  {
    title: 'Dashboard de Indicadores Clave (Grupo Textil Providencia)',
    description: 'Desarrollo de un Dashboard interactivo en Power BI para la visualización de indicadores clave de rendimiento (KPIs) y creación de un portal web utilizando Node.js y Vue.js como parte de estancias profesionales.',
    tags: ['Power BI', 'Vue.js', 'Node.js', 'JavaScript', 'SQL Server'],
    icon: 'chart'
  },
  {
    title: 'Análisis de Crecimiento Urbano en Tlaxcala',
    description: 'Estudio de dinámicas sociodemográficas y desplazamiento urbano en Tlaxcala: Un análisis de datos sobre la evolución del costo de vida y cambios en el uso de suelo empleando Python y visualización de datos geográficos.',
    tags: ['Python', 'Jupyter Notebook', 'Geospatial Data', 'Git', 'GitHub'],
    icon: 'map',
    github: 'https://github.com/ErickEduardoRamos03/Tlaxcala-Urban-Growth'
  },
  {
    title: 'Sitio Web Oficial de Muñecas Nicté',
    description: 'Sitio web oficial para Muñecas Nicté. Diseñado y desarrollado con Vue.js, Vite y CSS personalizado, ofreciendo una experiencia responsiva, interactiva y fluida.',
    tags: ['Vue.js', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    icon: 'toy',
    github: 'https://github.com/ErickEduardoRamos03/nicte-munecas-web',
    website: 'https://nicte-munecas-web.vercel.app'
  },
  {
    title: 'Akron Malvados y Asociados',
    description: 'Diseño, maquetación y desarrollo frontend de páginas web personalizadas para la consultora Akron Malvados y Asociados S.A. de C.V.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'building',
    github: 'https://github.com/ErickEduardoRamos03/akron-malvados-y-asociados-sadcv'
  },
  {
    title: 'Portafolio Personal Frutiger Aero',
    description: 'Código fuente y diseño del portafolio personal interactivo, desarrollado en Vue.js bajo la estética retro-futurista de Frutiger Aero.',
    tags: ['Vue.js', 'Vite', 'CSS', 'Frutiger Aero'],
    icon: 'palette',
    github: 'https://github.com/ErickEduardoRamos03/portfolio-dev-erickeduardoramos'
  }
]

const skills = [
  {
    title: 'Lenguajes de Programación',
    icon: 'code',
    items: ['Python', 'C', 'MATLAB']
  },
  {
    title: 'Sistemas Gestores de BD',
    icon: 'database',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'CassandraDB']
  },
  {
    title: 'Visualización de Datos',
    icon: 'bars',
    items: ['Power BI', 'Qlik']
  },
  {
    title: 'IA Generativa',
    icon: 'bot',
    items: ['Grok', 'ChatGPT', 'DeepSeek', 'Claude', 'Microsoft Copilot', 'Gemini', 'Qwen']
  },
  {
    title: 'Desarrollo Web',
    icon: 'globe',
    items: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js']
  },
  {
    title: 'Herramientas y Metodologías',
    icon: 'tools',
    items: ['Análisis de Datos', 'IDE (Entornos de Desarrollo)', 'Programación Aplicada']
  }
]

const certifications = [
  {
    title: 'Congreso Internacional de Ciencias de la Computación CORE 2024 (IPN)',
    type: 'Constancia',
    year: '2024',
    institution: 'Instituto Politécnico Nacional'
  },
  {
    title: 'Preparación de Elementos Mecánicos para Impresión 3D Enfocado a FDM (IPN)',
    type: 'Constancia',
    year: '2024',
    institution: 'Instituto Politécnico Nacional'
  },
  {
    title: 'Lengua y Cultura Náhuatl en Tlaxcala',
    type: 'Reconocimiento',
    year: '2023',
    institution: 'Gobierno del Estado de Tlaxcala'
  },
  {
    title: 'Coloquio de Innovación e Investigación Educativas (IPN)',
    type: 'Constancia',
    year: '2022',
    institution: 'Instituto Politécnico Nacional'
  }
]

const languages = [
  { name: 'Español' },
  { name: 'Inglés Técnico' },
  { name: 'Náhuatl' }
]
</script>

<template>
  <!-- Background Bubbles -->
  <div class="bubbles">
    <div 
      v-for="bubble in bubbles" 
      :key="bubble.id"
      class="bubble"
      :style="{
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        left: `${bubble.left}%`,
        animationDelay: `${bubble.delay}s`,
        animationDuration: `${bubble.duration}s`
      }"
    ></div>
  </div>

  <!-- Navigation -->
  <nav>
    <div class="nav-container">
      <div class="logo">Erick Eduardo Ramos</div>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mí</a></li>
        <li><a href="#formacion">Formación</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <button class="theme-toggle" @click="toggleTheme">
        <AppIcon :name="isDarkMode ? 'sun' : 'moon'" />
        <span>{{ isDarkMode ? 'Claro' : 'Oscuro' }}</span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="inicio">
    <div class="hero-content">
      <!-- Escudos del IPN y de la UPIIT -->
      <div class="hero-logos">
        <img :src="escudoIpn" alt="Escudo IPN" title="Instituto Politécnico Nacional" class="logo-img ipn-logo-img">
        <img :src="upiitRender" alt="Escudo UPIIT" title="Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala" class="logo-img upiit-logo-img">
      </div>

      <h1>Erick Eduardo Ramos</h1>
      <p class="subtitle">Científico de Datos | Egresado de la UPIIT - IPN</p>
      
      <div class="ipn-info">
        <p class="ipn-title">Licenciatura en Ciencia de Datos</p>
        <p class="ipn-desc">Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala</p>
        <p class="ipn-inst">Instituto Politécnico Nacional</p>
      </div>

      <div class="cta-buttons">
        <a href="#proyectos" class="btn btn-primary">Ver Proyectos</a>
        <a href="#contacto" class="btn btn-secondary">Contactar</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="sobre-mi">
    <div class="container">
      <h2 class="section-title">Sobre Mí</h2>
      <div class="about-grid">
        <div class="about-image">
          <!-- Glassmorphic ID Card -->
          <div class="id-card">
            <div class="id-card-header">
              <img :src="escudoIpn" alt="IPN" class="id-logo">
              <div class="id-header-text">
                <span class="id-inst">IPN</span>
                <span class="id-dept">UPIIT</span>
              </div>
            </div>
            <div class="id-card-body">
              <div class="id-photo">
                <AppIcon name="userCode" />
              </div>
              <div class="id-info">
                <h4>Erick E. Ramos</h4>
                <p class="id-title">Científico de Datos</p>
                <p class="id-program">Lic. en Ciencia de Datos</p>
                <span class="id-status">Egresado</span>
              </div>
            </div>
            <div class="id-card-footer">
              <span class="id-motto">"La Técnica al Servicio de la Patria"</span>
            </div>
          </div>
        </div>
        <div class="about-text">
          <h3>¡Hola! Soy Erick Eduardo Ramos</h3>
          <p>
            Soy egresado de la Licenciatura en Ciencia de Datos por la Unidad Profesional 
            Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT) del Instituto Politécnico Nacional.
          </p>
          <p>
            Me apasiona transformar datos complejos en información de valor estratégico para la toma de decisiones. 
            Durante mi formación académica y estancias profesionales, he desarrollado sólidas habilidades en modelado estadístico, machine learning, desarrollo de dashboards analíticos y diseño de portales web interactivos.
          </p>
          <p>
            Me caracterizo por mi capacidad de adaptación, el aprendizaje continuo en tecnologías de IA generativa y herramientas de Big Data, y un fuerte compromiso con el desarrollo de soluciones tecnológicas aplicadas que generen un impacto positivo real.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Formacion y Certificaciones Section -->
  <section id="formacion">
    <div class="container">
      <h2 class="section-title">Formación y Certificaciones</h2>
      <div class="formacion-grid">
        <!-- Card de Formación Académica -->
        <div class="formacion-card education-card">
          <div class="card-icon"><AppIcon name="graduation" /></div>
          <h3>Educación Profesional</h3>
          <div class="timeline-item">
            <span class="timeline-date">Enero 2022 - Enero 2026</span>
            <h4>Licenciatura en Ciencia de Datos</h4>
            <p class="institution">Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT)</p>
            <p class="university">Instituto Politécnico Nacional (IPN)</p>
          </div>
        </div>
        
        <!-- Card de Certificaciones y Diplomados -->
        <div class="formacion-card certifications-card">
          <div class="card-icon"><AppIcon name="certificate" /></div>
          <h3>Diplomados y Congresos</h3>
          <ul class="cert-list">
            <li v-for="(cert, index) in certifications" :key="index" class="cert-item">
              <span class="cert-year">{{ cert.year }}</span>
              <div class="cert-details">
                <h5>{{ cert.title }}</h5>
                <p>{{ cert.institution }} - <strong>{{ cert.type }}</strong></p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Card de Idiomas -->
        <div class="formacion-card languages-card">
          <div class="card-icon"><AppIcon name="language" /></div>
          <h3>Idiomas</h3>
          <div class="lang-list">
            <div class="lang-item" v-for="lang in languages" :key="lang.name">
              <div class="lang-info">
                <span class="lang-name">{{ lang.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="habilidades">
    <div class="container">
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div class="skills-grid">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          <div class="skill-icon"><AppIcon :name="skill.icon" /></div>
          <h3>{{ skill.title }}</h3>
          <ul>
            <li v-for="(item, i) in skill.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="proyectos">
    <div class="container">
      <h2 class="section-title">Proyectos</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <div class="project-image"><AppIcon :name="project.icon" /></div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="btn-project-link">Ver en GitHub →</a>
              <a v-if="project.website" :href="project.website" target="_blank" class="btn-project-link btn-website-link">Visitar Sitio →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contacto">
    <div class="container">
      <h2 class="section-title">Contacto</h2>
      <div class="contact-content">
        <p>¿Te interesa colaborar, realizar una consulta o conocer más sobre mi trabajo?</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon"><AppIcon name="mail" /></span>
            <div class="emails-box">
              <span>eramosc2101@alumno.ipn.mx</span>
              <span class="email-divider">|</span>
              <span>e.ramos.dev03@hotmail.com</span>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon"><AppIcon name="phone" /></span>
            <span>246 233 9121</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon"><AppIcon name="pin" /></span>
            <span>Tlaxcala, México</span>
          </div>
        </div>
        <div class="social-links">
          <a href="https://github.com/ErickEduardoRamos03" target="_blank" class="social-link" title="GitHub">
            <svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/erick-eduardo-ramos-84586a395/" target="_blank" class="social-link" title="LinkedIn">
            <svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/></svg>
          </a>
          <a href="mailto:eramosc2101@alumno.ipn.mx" class="social-link" title="Email Académico">
            <svg class="icon-svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
          </a>
          <a href="mailto:e.ramos.dev03@hotmail.com" class="social-link" title="Email Personal">
            <svg class="icon-svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <p>&copy; 2026 Erick Eduardo Ramos. Todos los derechos reservados.</p>
      <div class="ipn-footer">
        <span class="ipn-badge">IPN</span>
        <span>«La Técnica al Servicio de la Patria»</span>
      </div>
    </div>
  </footer>
</template>
