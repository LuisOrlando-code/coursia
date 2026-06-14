# Coursia

Generador de cursos con inteligencia artificial. El usuario describe un tema y la IA genera un curso completo con módulos y lecciones estructuradas.

## Tecnologías

- React + Vite
- Tailwind CSS
- Claude API (Anthropic)

## Requisitos

- Node.js 18+
- Una API key de Anthropic ([obtener aquí](https://console.anthropic.com/))

## Instalación

```bash
git clone https://github.com/LuisOrlando-code/coursia.git
cd coursia
npm install
npm run dev
```

## Uso

1. Ingresa tu API key de Anthropic
2. Escribe el tema que quieres aprender
3. Presiona **Generar curso**
4. La IA generará un curso con módulos y lecciones

## Estructura del proyecto

```
src/
├── App.jsx       # Componente principal con el formulario
├── Curso.jsx     # Componente que renderiza el curso generado
├── api.js        # Integración con la API de Claude
└── index.css     # Estilos globales con Tailwind
```

