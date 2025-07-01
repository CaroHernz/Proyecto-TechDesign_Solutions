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
    // Inicializar todos los carruseles en la página
    const carousels = document.querySelectorAll('.carousel__container');
    
    carousels.forEach(container => {
        initializeCarousel(container);
    });
    
    // Función para inicializar un carrusel individual
    function initializeCarousel(container) {
        const carousel = container.querySelector('.carousel');
        const slides = container.querySelectorAll('.carousel__slide');
        const dots = container.querySelectorAll('.dot');
        const prevBtn = container.querySelector('.carousel__btn.prev');
        const nextBtn = container.querySelector('.carousel__btn.next');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        let interval;
        
        // Configurar el ancho del carrusel
        carousel.style.width = `${totalSlides * 100}%`;
        
        // Configurar el ancho de cada slide
        slides.forEach(slide => {
            slide.style.width = `${100 / totalSlides}%`;
        });
        
        // Actualizar la posición del carrusel
        function updateCarousel() {
            const translateX = -currentIndex * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
            
            // Actualizar puntos indicadores
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Navegar al slide anterior
        function goToPrevSlide() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateCarousel();
            resetInterval();
        }
        
        // Navegar al siguiente slide
        function goToNextSlide() {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateCarousel();
            resetInterval();
        }
        
        // Navegar a un slide específico
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            resetInterval();
        }
        
        // Reiniciar el intervalo de auto-desplazamiento
        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(goToNextSlide, 5000);
        }
        
        // Event listeners para los botones
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
        interval = setInterval(goToNextSlide, 5000);
        
        // Pausar al interactuar
        container.addEventListener('mouseenter', () => clearInterval(interval));
        container.addEventListener('mouseleave', () => {
            interval = setInterval(goToNextSlide, 5000);
        });
        
        // Mostrar el primer slide
        updateCarousel();
    }
    
    // Código para las pestañas (si es necesario)
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
    
    if(tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
        
        switchTab('item1');
    }
});