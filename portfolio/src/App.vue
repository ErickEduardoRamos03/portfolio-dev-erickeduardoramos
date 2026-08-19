<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

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
    title: 'Análisis de Datos Masivos',
    description: 'Proyecto de análisis de grandes volúmenes de datos utilizando técnicas de machine learning para predecir tendencias en datos socioeconómicos.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'SQL'],
    icon: '📊'
  },
  {
    title: 'Dashboard Interactivo',
    description: 'Desarrollo de un dashboard interactivo para visualización de datos en tiempo real con tecnologías web modernas.',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'APIs'],
    icon: '📈'
  },
  {
    title: 'Modelo Predictivo',
    description: 'Implementación de modelos predictivos para clasificación y regresión aplicados a problemas reales de la industria.',
    tags: ['R', 'TensorFlow', 'Jupyter', 'Git'],
    icon: '🤖'
  }
]

const skills = [
  {
    title: 'Lenguajes de Programación',
    icon: '💻',
    items: ['Python', 'R', 'JavaScript', 'SQL']
  },
  {
    title: 'Ciencia de Datos',
    icon: '📊',
    items: ['Machine Learning', 'Estadística', 'Visualización', 'Big Data']
  },
  {
    title: 'Herramientas',
    icon: '🛠️',
    items: ['Git', 'Jupyter', 'Docker', 'AWS']
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  }
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
      <div class="logo">Erick Ramos</div>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mí</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <button class="theme-toggle" @click="toggleTheme">
        <span>{{ isDarkMode ? '☀️' : '🌙' }}</span>
        <span>{{ isDarkMode ? 'Claro' : 'Oscuro' }}</span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="inicio">
    <div class="hero-content">
      <h1>Erick Eduardo Ramos</h1>
      <p class="subtitle">Científico de Datos | Egresado del IPN</p>
      
      <div class="ipn-info">
        <div class="ipn-logo">
          <span class="ipn-badge">IPN</span>
          <span class="ipn-badge">UPIIT</span>
        </div>
        <p>Licenciatura en Ciencia de Datos</p>
        <p>Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala</p>
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
          <div class="placeholder-avatar">👨‍💻</div>
        </div>
        <div class="about-text">
          <h3>¡Hola! Soy Erick Eduardo Ramos</h3>
          <p>
            Soy egresado de la Licenciatura en Ciencia de Datos por la Unidad Profesional 
            Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT) del Instituto Politécnico Nacional.
          </p>
          <p>
            Me apasiona transformar datos complejos en información valiosa para la toma de decisiones. 
            Durante mi formación académica desarrollé habilidades en análisis estadístico, machine learning, 
            y visualización de datos.
          </p>
          <p>
            Estoy constantemente aprendiendo nuevas tecnologías y metodologías para mantenerme actualizado 
            en este campo en constante evolución. Mi objetivo es aplicar mis conocimientos para resolver 
            problemas reales y generar impacto positivo.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="habilidades">
    <div class="container">
      <h2 class="section-title">Habilidades</h2>
      <div class="skills-grid">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          <div class="skill-icon">{{ skill.icon }}</div>
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
          <div class="project-image">{{ project.icon }}</div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a href="#">Ver Código →</a>
              <a href="#">Demo →</a>
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
        <p>¿Te interesa colaborar o conocer más sobre mi trabajo?</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span>erick.ramos@email.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>Tlaxcala, México</span>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="social-link" title="GitHub">💼</a>
          <a href="#" class="social-link" title="LinkedIn">🔗</a>
          <a href="#" class="social-link" title="Twitter">🐦</a>
          <a href="#" class="social-link" title="Email">✉️</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Erick Eduardo Ramos. Todos los derechos reservados.</p>
      <div class="ipn-footer">
        <span class="ipn-badge">IPN</span>
        <span>«La Técnica al Servicio de la Patria»</span>
      </div>
    </div>
  </footer>
</template>
