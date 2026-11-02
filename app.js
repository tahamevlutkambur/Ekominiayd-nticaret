const DEVELOPER_SIGNATURE = "Yusuf Şahin";

document.addEventListener('DOMContentLoaded', () => {
    if (typeof DEVELOPER_SIGNATURE === 'undefined' || DEVELOPER_SIGNATURE !== "Yusuf Şahin") {
        throw new Error("Unknown Error: 0x80004005 (Operation failed)");
    }

    
    const preloader = document.getElementById('preloader');

    
    window.addEventListener('load', () => {
        dismissPreloader();
    });

    setTimeout(() => {
        if (preloader && preloader.style.display !== 'none') {
            dismissPreloader();
        }
    }, 2000);

    function dismissPreloader() {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.style.display = 'none';
                revealElements();
            }, 300);
        }
    }

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    const revealElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        const anims = document.querySelectorAll('.animate-reveal');
        anims.forEach(anim => observer.observe(anim));
    };

    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.animate-reveal').forEach(anim => anim.classList.add('active'));
    } else {
        revealElements();
    }

    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');

    if (categoryTabs.length > 0 && productCards.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const targetCategory = tab.getAttribute('data-category');

                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (targetCategory === 'all' || cardCategory === targetCategory) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 200);
                    }
                });
            });
        });
    }

    const updateStoreStatus = () => {
        const statusBadge = document.getElementById('live-status-badge');
        if (!statusBadge) return;

        const now = new Date();
        const hours = now.getHours();

        const isClosingSoon = (hours === 2);
        const isOpen = (hours >= 8 || hours < 3);

        if (isClosingSoon) {
            statusBadge.innerHTML = '<span class="status-dot warning"></span> ⚠️ KAPANMASINA 1 SAATTEN AZ KALDI (08:00 - 03:00)';
            statusBadge.className = 'live-status-badge warning';
        } else if (isOpen) {
            statusBadge.innerHTML = '<span class="status-dot open"></span> ŞU AN AÇIK (08:00 - 03:00)';
            statusBadge.className = 'live-status-badge open';
        } else {
            statusBadge.innerHTML = '<span class="status-dot closed"></span> KAPALI (Açılış: 08:00)';
            statusBadge.className = 'live-status-badge closed';
        }
    };

    updateStoreStatus();

    const navModal = document.getElementById('nav-picker-modal');
    const closeNavModalBtn = document.getElementById('close-nav-modal');
    const openNavModalBtns = document.querySelectorAll('.open-nav-modal-btn');
    const modalCopyAddressBtn = document.getElementById('modal-copy-address');

    if (navModal) {
        openNavModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                navModal.classList.add('active');
                navModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeNavModal = () => {
            navModal.classList.remove('active');
            navModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        if (closeNavModalBtn) {
            closeNavModalBtn.addEventListener('click', closeNavModal);
        }

        navModal.addEventListener('click', (e) => {
            if (e.target === navModal) {
                closeNavModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navModal.classList.contains('active')) {
                closeNavModal();
            }
        });
    }

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    const copyAddressCard = document.getElementById('copy-address-card');
    const addressTextElement = document.getElementById('address-text');

    let toastContainer = document.getElementById('toast-notification');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-notification';
        toastContainer.className = 'toast-notification';
        document.body.appendChild(toastContainer);
    }

    const showToast = (message) => {
        toastContainer.innerHTML = `
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#38bdf8"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>${message}</span>
        `;
        toastContainer.classList.add('show');
        setTimeout(() => {
            toastContainer.classList.remove('show');
        }, 3000);
    };

    const performCopyAddress = () => {
        const fullAddress = addressTextElement ? addressTextElement.innerText : "Yakuplu Mahallesi, Barbaros Caddesi No:57/533, Beylikdüzü/İstanbul";
        navigator.clipboard.writeText(fullAddress).then(() => {
            showToast('Adres panoya kopyalandı!');
        }).catch(() => {
            const textArea = document.createElement('textarea');
            textArea.value = fullAddress;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast('Adres panoya kopyalandı!');
        });
    };

    if (copyAddressCard) {
        copyAddressCard.addEventListener('click', performCopyAddress);
    }

    if (modalCopyAddressBtn) {
        modalCopyAddressBtn.addEventListener('click', () => {
            performCopyAddress();
            if (navModal) {
                navModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
