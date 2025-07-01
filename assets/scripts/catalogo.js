document.addEventListener('DOMContentLoaded', function(){
    const mangaItems = document.querySelectorAll('.contenedor__item');

    mangaItems.forEach(item => {
        const btn = item.querySelector('.btn-img');
        const info = item.querySelector('.contenedor__contenido');

        btn.addEventListener('click', function(event) {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                info.classList.remove('show');
                return;
            }
            mangaItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.contenedor__contenido').classList.remove('show');
                }
            });
            item.classList.add('active');
            info.classList.add('show');
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        mangaItems.forEach(item => {
            item.classList.remove('active');
            item.querySelector('.contenedor__contenido').classList.remove('show')
        });
        });
    })

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
