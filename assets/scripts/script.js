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
    // Selección de elementos
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel__slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel__btn.prev');
    const nextBtn = document.querySelector('.carousel__btn.next');
    
    // Variables de estado
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Inicialización del carrusel
    function initializeCarousel() {
        // Configura el ancho del carrusel para contener todos los slides
        carousel.style.width = `${totalSlides * 100}%`;
        
        // Configura el ancho de cada slide individual
        slides.forEach(slide => {
            slide.style.width = `${100 / totalSlides}%`;
        });
        
        // Muestra el primer slide
        updateCarousel();
    }
    
    // Actualiza la posición del carrusel
    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Actualiza los puntos indicadores
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Navega al slide anterior
    function goToPrevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateCarousel();
    }
    
    // Navega al siguiente slide
    function goToNextSlide() {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }
    
    // Navega a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    // Event listeners para los puntos
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Auto-desplazamiento
    let interval = setInterval(goToNextSlide, 5000);
    
    // Pausar al interactuar
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(goToNextSlide, 5000);
    });
    
    // Inicializar el carrusel
    initializeCarousel();
});