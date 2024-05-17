document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function () {
            tabLinks.forEach(link => link.classList.remove('current'));
            tabContents.forEach(content => content.classList.remove('current'));

            this.classList.add('current');
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).classList.add('current');
        });
    });
});
