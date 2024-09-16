
const logo = document.querySelector('.logo-img');

function addPopEffect() {
    logo.classList.add('pop-effect');
}

window.onload = addPopEffect;
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('subscription-plan');

    select.addEventListener('mouseover', function() {
        const options = select.options;

        // Loop through options and add hover effect
        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener('mouseover', function() {
                options[i].classList.add('custom-hover'); // Apply custom CSS class on hover
            });
            options[i].addEventListener('mouseout', function() {
                options[i].classList.remove('custom-hover'); // Remove custom CSS class on hover out
            });
        }
    });
});
