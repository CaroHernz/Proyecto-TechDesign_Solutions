document.addEventListener('DOMContentLoaded', function(){
    const mangaItems = document.querySelectorAll('.card__item');

    mangaItems.forEach(item => {
        const btn = item.querySelector('.card__btn');
        const info = item.querySelector('.card__content');

        btn.addEventListener('click', function(event) {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                info.classList.remove('show');
                return;
            }
            mangaItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.card__content').classList.remove('show');
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
            item.querySelector('.card__content').classList.remove('show')
        });
        });
    })

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const showAll = document.getElementById('showAll');
    
    function switchTab(tabId) {
        if (tabId === 'all') {
            contentSections.forEach(section => {section.classList.add('active');
        });
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if(btn.id === 'showAll') {
                btn.classList.add('active');
            }
        });
    } else {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
    
        const selectedBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const selectedSection = document.getElementById(tabId);
        
        if(selectedBtn && selectedSection) {
            selectedBtn.classList.add('active');
            selectedSection.classList.add('active');
        }
    }
    }
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id === 'showAll') {
                switchTab('all');
            } else {
                const tabId = this.getAttribute('data-tab');
                switchTab(tabId);
            }
        });
    });
    
    switchTab('all');
});
