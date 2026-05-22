document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. SMOOTH SCROLL TO SECTIONS (ANCHORS)
    // ==========================================
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = document.querySelector('.header').offsetHeight || 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                const nav = document.querySelector('.nav');
                if (nav && nav.classList.contains('nav-open')) {
                    nav.classList.remove('nav-open');
                    const burgerBtn = document.querySelector('.burger-menu');
                    if (burgerBtn) {
                        const lines = burgerBtn.querySelectorAll('span');
                        lines[0].style.transform = 'none';
                        lines[1].style.opacity = '1';
                        lines[2].style.transform = 'none';
                    }
                }
            }
        });
    });

    // ==========================================
    // 2. ORDER FORM VALIDATION & RESET
    // ==========================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
       form.addEventListener('submit', function(e) {
            let isValid = true;
        
            const nameInput = form.querySelector('input[type="text"]');
            const phoneInput = form.querySelector('input[type="tel"]');
 
            form.querySelectorAll('.error-message').forEach(err => err.remove());
            form.querySelectorAll('.form-input').forEach(input => input.style.borderColor = '');

            const showError = (input, text) => {
                input.style.borderColor = '#ef4444';
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.innerText = text;
                errorDiv.style.color = '#ef4444';
                errorDiv.style.fontSize = '0.8rem';
                errorDiv.style.marginTop = '4px';
                errorDiv.style.textAlign = 'left';
                errorDiv.style.width = '100%';
            
                input.parentNode.insertBefore(errorDiv, input.nextSibling);
            };

            if (nameInput && nameInput.value.trim() === '') {
                showError(nameInput, "Please enter your name");
                isValid = false;
            }

            if (phoneInput && phoneInput.value.trim() === '') {
                showError(phoneInput, "Please enter your phone number");
                isValid = false;
            } else if (phoneInput && phoneInput.value.trim().length < 9) {
                showError(phoneInput, "The phone number is too short");
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            } else {
                alert('Thank you! Your request has been received. A technician will contact you shortly.');
                form.reset(); 
            }
        });
    });

    // ==========================================
    // 3. MOBILE BURGER MENU FUNCTIONALITY
    // ==========================================
    const burgerBtn = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    if (burgerBtn && nav) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('nav-open');
            
            const lines = burgerBtn.querySelectorAll('span');
            if (nav.classList.contains('nav-open')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-open') && !nav.contains(e.target) && !burgerBtn.contains(e.target)) {
                nav.classList.remove('nav-open');
                const lines = burgerBtn.querySelectorAll('span');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // ==========================================
    // 4. POPUP MODAL WINDOW (CALL TECHNICIAN)
    // ==========================================
    const openModalBtn = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('phone-modal');

    if (openModalBtn && modalOverlay) {
        const closeModalBtn = modalOverlay.querySelector('.modal-close');

        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        const closeModal = () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; 
        };

        closeModalBtn.addEventListener('click', closeModal);

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});