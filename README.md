<h1 align= "center"> Evaluación Final Módulo 3 </h1>

Este proyecto implementa una tienda de moda sustentable utilizando Bootstrap 5 como framework CSS, con personalización mediante SASS.

## Contexto
La empresa **TechDesign Solutions**, especializada en el desarrollo de plataformas de comercio electrónico, necesita rediseñar su portal web para mejorar la experiencia del usuario y aumentar las conversiones. Para ello, el equipo de desarrollo ha decidido implementar una interfaz modular y escalable utilizando metodologías modernas como BEM y preprocesadores CSS. Además, aprovecharán Bootstrap 5 para agilizar la creación de componentes reutilizables y garantizar una experiencia responsiva. Como parte de este proyecto, tu tarea será desarrollar una sección clave del portal web siguiendo las mejores prácticas de desarrollo de interfaces.

### 🎯 Objetivo
Implementar una interfaz de usuario web utilizando buenas prácticas en el manejo de estilos para brindar un aspecto visual e interacciones acordes a lo requerido.

### 🛠 Tecnologías Utilizadas
* **Frontend:** HTML5, CSS, JavaScript, Sass
* **Control de Versiones:** Git & GitHub
* **Framework CSS:** Bootstrap 5.3.7
	
### 🎨 Características Implementadas
- Navbar & Footer: Diseño consistente en todas las páginas.
- Formulario de Contacto.
- Catálogo de Productos
- Responsive Design: Adaptable a móviles y desktop.

### 📌 Estructura del Proyecto

```
Proyecto-Bootstrap/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   ├── img/
│   ├── scripts/
│   └── scss/
│       ├── abstracts/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── page/
│       ├── themes/
│       ├── vendors/
│       │   └── _bootstrap.scss
│       └── main.scss *custom*
├── index.html
└── README.md
```


### 🛠 Requerimientos 

1. **Metodología BEM**
  * Escritura del código CSS utilizando metodología BEM
  * Nombres de clases acordes a BEM (Bloque, Elemento, Modificador)
  * Coherencia en la nomenclatura de clases
  * Se evita el uso de selectores de etiquetas y anidaciones innecesarias
      
2. **Preprocesadores CSS**
  * Se implementa SASS como preprocesador de CSS
  * Divide los estilos en archivos parciales para modularizar la estructura
  * Uso de variables para definir colores, fuentes y otros valores reutilizables
  * Se implementan mixins y/o funciones para evitar repeticiones en los estilos

3. **Modelo de Cajas**
  * Los elementos siguen el modelo de cajas
  * Se utiliza `box-sizing: border-box`para facilitar el cálculo de dimensiones
  * Se aplica padding y margin para el espaciado entre elementos
  * Diseño de la distribución de los elementos acorde al prototipo proporcionado

4. **Uso de Bootstrap 5**
  * Se implementa sistema de grid de Bootstrap 5 para la estructura del layout
  * Se usan componentes de Bootstrap 5 como: botones, formularios y tarjetas.
  * Personalización de estilos de Bootstrap mediante variables de SASS

### Responsables
<h5 align="center"> 
  <a href="https://github.com/CaroHernz">Carolina Hernández</a>
</h5>
