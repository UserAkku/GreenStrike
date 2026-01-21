/* ============================================
   SIDCUP FAMILY GOLF - GSAP ANIMATIONS
   ============================================ */

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
    
    gsap.to(cursorBlur, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// Cursor hover effects
const hoverElements = document.querySelectorAll("h4, button, .card, a, .event-card");

hoverElements.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: "#fff",
            duration: 0.3
        });
    });
    
    elem.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#95C11E",
            duration: 0.3
        });
    });
});

// ============================================
// NAVIGATION ANIMATION
// ============================================

gsap.to("#nav", {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    backdropFilter: "blur(10px)",
    height: "100px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        scrub: 1
    }
});

// ============================================
// PAGE 1 - HERO ANIMATIONS
// ============================================

// Initial load animation
const heroTl = gsap.timeline();

heroTl
    .from("#page1 h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from("#page1 h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")
    .from("#page1 p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4");

// ============================================
// PAGE 2 - ABOUT SECTION ANIMATIONS
// ============================================

// About image animation
gsap.from(".about-us img", {
    x: -200,
    opacity: 0,
    rotate: -10,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2
    }
});

// About text animation
gsap.from(".about-us-text", {
    x: 200,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2
    }
});

// ============================================
// PAGE 3 - CARDS ANIMATIONS
// ============================================

// Intro text animation
gsap.from("#page3 > p", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 80%"
    }
});

// Cards stagger animation
gsap.from(".card", {
    y: 150,
    opacity: 0,
    scale: 0.9,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cards-container",
        scroller: "body",
        start: "top 80%"
    }
});

// ============================================
// PAGE 4 - HIGHLIGHT SECTION ANIMATIONS
// ============================================

gsap.from(".highlight-left h3", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%"
    }
});

gsap.from(".highlight-left p", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%"
    }
});

gsap.from("#highlight-btn", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%"
    }
});

gsap.from(".highlight-right img", {
    x: 200,
    opacity: 0,
    rotate: 10,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%"
    }
});

// ============================================
// PAGE 5 - TESTIMONIALS & EVENTS ANIMATIONS
// ============================================

gsap.from(".testimonial", {
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".testimonial",
        scroller: "body",
        start: "top 80%"
    }
});

gsap.from(".events-section h3", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".events-section",
        scroller: "body",
        start: "top 80%"
    }
});

gsap.from(".event-card", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".event-cards",
        scroller: "body",
        start: "top 80%"
    }
});

// ============================================
// FOOTER ANIMATIONS
// ============================================

gsap.from(".footer-content > div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        start: "top 90%"
    }
});

// ============================================
// PARALLAX EFFECTS
// ============================================

// Video parallax (slower scroll)
gsap.to("video", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// ============================================
// TEXT REVEAL ANIMATION
// ============================================

// Hero text parallax
gsap.to("#page1 h1", {
    yPercent: 50,
    opacity: 0.3,
    ease: "none",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// ============================================
// MAGNETIC EFFECT FOR BUTTONS
// ============================================

const magneticBtn = document.getElementById("highlight-btn");

if (magneticBtn) {
    magneticBtn.addEventListener("mousemove", (e) => {
        const rect = magneticBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(magneticBtn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    magneticBtn.addEventListener("mouseleave", () => {
        gsap.to(magneticBtn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
}

// ============================================
// SMOOTH SCROLL LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CARD TILT EFFECT
// ============================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
    gsap.to("body", {
        opacity: 1,
        duration: 0.5
    });
});

console.log("🏌️ Sidcup Family Golf - GSAP Animations Loaded!");