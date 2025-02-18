document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.getElementById('profileIcon');
    const modal = document.getElementById('profileModal');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    // Open modal when profile icon is clicked
    profileIcon.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal function
    window.closeModal = function () {
        modal.style.display = 'none';
    };

    // Toggle sidebar
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });
});
document.addEventListener('DOMContentLoaded', function () {
const profileIcon = document.getElementById('profileIcon');
const modal = document.getElementById('profileModal');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Open modal when profile icon is clicked
profileIcon.addEventListener('click', () => {
modal.style.display = 'block';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.style.display = 'none';
}
});

// Close modal function
window.closeModal = function () {
modal.style.display = 'none';
};

// Toggle sidebar
menuToggle.addEventListener('click', () => {
sidebar.classList.toggle('collapsed');
mainContent.classList.toggle('expanded');
});

// Rating System
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

stars.forEach(star => {
star.addEventListener('click', () => {
    const value = parseInt(star.getAttribute('data-value'));

    // Update star colors
    stars.forEach((s, index) => {
        if (index < value) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });

    // Update rating value text
    ratingValue.textContent = `Rating: ${value}/5`;
});
});
});
