/* =========================================
   MAIN JAVASCRIPT - LOGIC & INTERACTIONS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Theme Toggle Logic (Dark/Light) --- */
    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const htmlTag = document.documentElement;
    
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('rahmat-theme');
    if (savedTheme === 'light') {
        htmlTag.setAttribute('data-theme', 'light');
        if(themeIcon) themeIcon.className = 'fa-regular fa-moon';
    }

    if(themeButton) {
        themeButton.addEventListener('click', () => {
            const currentTheme = htmlTag.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                htmlTag.setAttribute('data-theme', 'light');
                themeIcon.className = 'fa-regular fa-moon';
                localStorage.setItem('rahmat-theme', 'light');
            } else {
                htmlTag.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fa-regular fa-sun';
                localStorage.setItem('rahmat-theme', 'dark');
            }
        });
    }

    /* --- 2. Mobile Full-Screen Menu Toggle --- */
    const menuBtn = document.getElementById('mobile-menu-btn'); // Hamburger in bottom bar
    const closeBtn = document.getElementById('close-menu');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');

    if(menuBtn && mobileOverlay) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileOverlay.classList.add('active');
        });
    }

    if(closeBtn && mobileOverlay) {
        closeBtn.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
        });
    }

    /* --- 3. Initialize AOS (Animate On Scroll) --- */
    // We will add the AOS CDN in the HTML files. This activates it.
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });
    }
});

/* --- 4. Free AI Assistant / Live Chat (Tawk.to) --- */
// This script loads the free chat widget on your website
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64be1234567890abcdef1234/1h5ab1234'; // We will replace this with your actual Tawk.to ID later
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();





document.addEventListener('DOMContentLoaded', () => {
    /* --- Swiper Carousel Init (Auto-play & Breakpoints) --- */
    if(typeof Swiper !== 'undefined') {
        var swiper = new Swiper(".testimonialSwiper", {
            slidesPerView: 1, /* মোবাইলে ১টি দেখাবে */
            spaceBetween: 20, /* কার্ডের মাঝখানের গ্যাপ */
            loop: true, /* কন্টিনিউয়াসলি ঘুরবে */
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { 
                    slidesPerView: 2, /* ট্যাবলেটে ২টি দেখাবে */
                    spaceBetween: 30 
                },
                1024: { 
                    slidesPerView: 3, /* ডেস্কটপে ৩টি দেখাবে */
                    spaceBetween: 30 
                }
            }
        });
    }
});




/* --- Number Counter Animation --- */
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target;
        }
    });
};

// Start counter when visible
const counterSection = document.querySelector('.counter');
if (counterSection) {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateCounters();
        }
    });
    observer.observe(counterSection);
}