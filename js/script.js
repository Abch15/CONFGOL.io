
const toggleNav = document.getElementById('toggle-nav');
const mainNav = document.getElementById('main-nav');

if (toggleNav && mainNav) {
    toggleNav.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}


const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        button.classList.add('active');
        const dayId = button.getAttribute('data-day');
        const targetPane = document.getElementById(dayId);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('http')) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
           
            if (mainNav) mainNav.classList.remove('active');
        }
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
});


const topicButtons = document.querySelectorAll('.topics-buttons .btn');
const topicSections = document.querySelectorAll('.topics-section');

topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        topicButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const target = button.getAttribute('data-target');
        topicSections.forEach(section => {
            if (section.id === target) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});


const committeeLinks = document.querySelectorAll('.dropdown-menu a[data-target], .committee-nav a[data-target]');
const committeeSections = document.querySelectorAll('.committee-section');

if (committeeLinks.length > 0) {
    committeeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                committeeSections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');
                
               
                committeeLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}


const viewButtons = document.querySelectorAll('.view-registration');
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('registration-fees.html', '_blank');
    });
});


const countdownElement = document.querySelector(".countdown");
if (countdownElement) {
    const targetDate = new Date("May 7, 2026 00:00:00").getTime();
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "The conference has started!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("minutes");
        const secsEl = document.getElementById("seconds");

        if (daysEl) daysEl.textContent = days.toString().padStart(2, "0");
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, "0");
        if (minsEl) minsEl.textContent = minutes.toString().padStart(2, "0");
        if (secsEl) secsEl.textContent = seconds.toString().padStart(2, "0");
    }, 1000);
}
