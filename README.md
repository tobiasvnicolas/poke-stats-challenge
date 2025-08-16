# 🎮 Pokémon Stats Challenge

Un juego web interactivo donde los jugadores deben completar una tabla de estadísticas de Pokémon usando una ruleta aleatoria.

## 🎯 Objetivo del Juego

Rellena una tabla de estadísticas de Pokémon para alcanzar o superar el objetivo de puntos según la dificultad seleccionada:

- **Fácil**: 600 puntos con 6 energías
- **Medio**: 750 puntos con 5 energías  
- **Difícil**: 900 puntos con 4 energías

## 🎲 Mecánicas del Juego

### Ruleta de Pokémon
- Muestra sprites oficiales obtenidos de la PokeAPI
- Gira automáticamente después de cada selección
- Animación de ruleta realista

### Tabla de Estadísticas
- 6 estadísticas: PS, Ataque, Defensa, At. esp, Def. esp, Velocidad
- Haz clic en una celda vacía para llenarla con la estadística del Pokémon actual
- El juego termina cuando se completa la tabla

### Habilidades Especiales (Energías)
1. **🌟 Mega Evolución**: Aumenta las estadísticas del Pokémon actual en un 20%
2. **⏭️ Skip**: Salta al siguiente Pokémon sin usar la estadística actual
3. **🔄 Evolucionar**: Intenta obtener la evolución del Pokémon actual

## ⚙️ Configuraciones Opcionales

### Previsualización de Datos
- Muestra las estadísticas del Pokémon antes de seleccionarlo
- Útil para planificar estrategias

### Energías Infinitas
- Ignora el límite de energías de la dificultad
- Permite usar habilidades sin restricciones

## 🏗️ Estructura del Proyecto

```
pokemon-game/
├── src/
│   └── pages/
│       ├── index.astro       # Página principal
│       ├── difficulty.astro  # Selección de dificultad
│       ├── game.astro       # Página principal del juego
│       └── settings.astro   # Configuraciones
└── public/
    └── styles/
        └── main.css         # Estilos del juego
```

## 🚀 Tecnologías Utilizadas

- **Astro 5**: Framework web moderno
- **JavaScript Puro**: Sin dependencias adicionales
- **CSS Puro**: Diseño responsivo con animaciones
- **PokeAPI**: Datos oficiales de Pokémon
- **LocalStorage**: Persistencia de configuraciones y caché

## 📱 Características

### Responsivo
- Adaptado para dispositivos móviles y escritorio
- Interfaz optimizada para touch y mouse

### Rendimiento
- Caché local de datos de Pokémon
- Lazy loading de sprites
- Animaciones optimizadas

### Accesibilidad
- Interfaz intuitiva y clara
- Feedback visual para acciones del usuario
- Soporte para diferentes tamaños de pantalla

## 🎨 Diseño

- **Paleta de colores**: Inspirada en la saga Pokémon
- **Tipografía**: Legible y moderna
- **Animaciones**: Suaves y funcionales
- **Iconos**: Emojis para una mejor UX

## 🎮 Cómo Jugar

1. **Inicio**: Selecciona "Jugar" en la página principal
2. **Dificultad**: Elige tu nivel de desafío
3. **Juego**: 
   - Observa el Pokémon en la ruleta
   - Haz clic en la estadística que quieres usar
   - Usa habilidades estratégicamente
   - Completa la tabla para ganar
4. **Resultado**: Verifica si alcanzaste el objetivo

## 🛠️ Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Configuración de PowerShell (Windows)

Si encuentras problemas con la ejecución de scripts en PowerShell:

```powershell
# Ejecutar con bypass temporal
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

## 🔧 Configuración Avanzada

### Caché de Pokémon
El juego guarda automáticamente los datos de Pokémon en localStorage para mejorar el rendimiento en futuras sesiones.

### Configuraciones Persistentes
- Las configuraciones del menú se guardan en localStorage
- La dificultad seleccionada se mantiene entre sesiones

## 🎯 Estrategias de Juego

### Dificultad Fácil
- Busca Pokémon con estadísticas balanceadas
- Usa las energías para obtener mejores opciones

### Dificultad Media
- Planifica qué estadísticas necesitas más
- Usa la previsualización si está habilitada

### Dificultad Difícil
- Cada energía cuenta
- Considera usar Mega Evolución en momentos clave
- Busca Pokémon legendarios con estadísticas altas

## � Problemas Conocidos

- Algunos Pokémon pueden no tener sprite disponible
- La evolución puede no estar disponible para todos los Pokémon
- Mega evoluciones son simuladas (20% de aumento en stats)

## 🔮 Futuras Mejoras

- [ ] Sistema de logros
- [ ] Tabla de puntuaciones altas
- [ ] Más mecánicas especiales
- [ ] Sonidos y música
- [ ] Multijugador
- [ ] Temas personalizables

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Diviértete completando tu tabla de estadísticas Pokémon!** 🎉
