const tl = gsap.timeline({ default: { ease: 'power2.out' } });

tl.to(".slider", { y: "-100%", duration: 1.2 }); // Corrected y value
tl.to(".intro .hero", { y: "0%", duration: 1.2 }, "-=1"); // Removed space before "-=1"
