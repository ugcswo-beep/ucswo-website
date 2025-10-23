// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 50
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll to membership section
function scrollToMembership() {
    document.querySelector('#membership').scrollIntoView({
        behavior: 'smooth'
    });
}

// Donation Modal Functions
function showDonationModal() {
    document.getElementById('donationModal').style.display = 'flex';
}

function hideDonationModal() {
    document.getElementById('donationModal').style.display = 'none';
}

function processDonation() {
    alert('Thank you for your generosity! You will be redirected to our secure donation portal.');
    hideDonationModal();
}

// Event Registration Functions
function showEventRegistration(eventName) {
    document.getElementById('eventModalTitle').textContent = `Register for: ${eventName}`;
    document.getElementById('eventRegistrationModal').style.display = 'flex';
}

function hideEventRegistrationModal() {
    document.getElementById('eventRegistrationModal').style.display = 'none';
}

function showEventDetails(eventName) {
    alert(`More details about ${eventName} coming soon!`);
}

// Membership Application
function showMembershipApplication(type) {
    if (type === 'Honorary') {
        alert('Honorary membership is by invitation only. Please contact the board for more information.');
    } else {
        alert(`Thank you for your interest in ${type} membership! You will be redirected to the application form.`);
    }
}

// Event Registration Form Handler
document.getElementById('eventRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your registration! We will send you a confirmation email shortly.');
    hideEventRegistrationModal();
    this.reset();
});

// Close modals when clicking outside
document.getElementById('donationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideDonationModal();
    }
});

document.getElementById('eventRegistrationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideEventRegistrationModal();
    }
});

// Button click handlers
document.querySelectorAll('.cta-primary, .cta-glow:not(.donate-btn)').forEach(button => {
    if (!button.hasAttribute('onclick')) {
        button.addEventListener('click', () => {
            alert('Thank you for your interest in UCSWO! You will be redirected to our application portal.');
        });
    }
});

document.querySelectorAll('.cta-secondary').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});