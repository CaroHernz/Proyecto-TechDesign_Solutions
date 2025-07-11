document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    function switchTab(tabId) {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        const selectedBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const selectedSection = document.getElementById(tabId);
        
        if(selectedBtn && selectedSection) {
            selectedBtn.classList.add('active');
            selectedSection.classList.add('active');
        }
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    switchTab('item1');
});

// Carrusel de img
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del carrusel
    const images = [
        { src: 'assets/img/img1.jpeg', alt: 'Moda ecológica 1' },
        { src: 'assets/img/img2.jpeg', alt: 'Moda ecológica 2' },
        { src: 'assets/img/img3.jpeg', alt: 'Moda ecológica 3' },
        { src: 'assets/img/img4.jpeg', alt: 'Moda ecológica 4' },
        { src: 'assets/img/img5.jpeg', alt: 'Moda ecológica 5' },
        { src: 'assets/img/img6.jpeg', alt: 'Moda ecológica 6' }
    ];

    // Elementos del DOM
    const container = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.carousel__dots');
    let currentIndex = 0;
    let interval;

    // Crear imágenes y puntos
    images.forEach((img, index) => {
        // Crear elemento de imagen
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        imgElement.classList.add('carousel__slide');
        if(index === 0) imgElement.classList.add('active');
        container.appendChild(imgElement);

        // Crear punto indicador
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(index));
        dotsContainer.appendChild(dot);
    });

    // Iniciar carrusel automático
    startCarousel();

    // Función para mostrar una imagen específica
    function showImage(index) {
        // Ocultar imagen actual
        document.querySelector('.carousel__slide.active').classList.remove('active');
        document.querySelector('.dot.active').classList.remove('active');
        
        // Mostrar nueva imagen
        currentIndex = index;
        container.children[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
        
        // Reiniciar intervalo
        resetInterval();
    }

    // Función para mostrar la siguiente imagen
    function nextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    // Iniciar el carrusel automático
    function startCarousel() {
        interval = setInterval(nextImage, 3000); // Cambia cada 3 segundos
    }

    // Reiniciar el intervalo
    function resetInterval() {
        clearInterval(interval);
        startCarousel();
    }

    // Pausar al pasar el mouse
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', startCarousel);
});

// Carrusel de best seller
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del carrusel
    const images = [
        { src: 'assets/img/vestuario3.jpeg', alt: 'Más vendido de vestuario' },
        { src: 'assets/img/joyas3.jpeg', alt: 'Más vendido de joyas' },
        { src: 'assets/img/accesory3.jpeg', alt: 'Más vendido de accesorios' },
    ];

    // Elementos del DOM
    const container = document.querySelector('.carousel__bestseller');
    const dotsContainer = document.querySelector('.carousel__bestseller__dots');
    let currentIndex = 0;
    let interval;

    // Crear imágenes y puntos
    images.forEach((img, index) => {
        // Crear elemento de imagen
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        imgElement.classList.add('carousel__slide');
        if(index === 0) imgElement.classList.add('active');
        container.appendChild(imgElement);

        // Crear punto indicador
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(index));
        dotsContainer.appendChild(dot);
    });

    // Iniciar carrusel automático
    startCarousel();

    // Función para mostrar una imagen específica
    function showImage(index) {
        // Ocultar imagen actual
        document.querySelector('.carousel__slide.active').classList.remove('active');
        document.querySelector('.dot.active').classList.remove('active');
        
        // Mostrar nueva imagen
        currentIndex = index;
        container.children[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
        
        // Reiniciar intervalo
        resetInterval();
    }

    // Función para mostrar la siguiente imagen
    function nextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    // Iniciar el carrusel automático
    function startCarousel() {
        interval = setInterval(nextImage, 5000); // Cambia cada 5 segundos
    }

    // Reiniciar el intervalo
    function resetInterval() {
        clearInterval(interval);
        startCarousel();
    }

    // Pausar al pasar el mouse
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', startCarousel);
});