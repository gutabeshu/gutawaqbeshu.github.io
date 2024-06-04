document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tab);

            tabs.forEach(t => t.classList.remove('current'));
            contents.forEach(c => c.classList.remove('current'));

            tab.classList.add('current');
            target.classList.add('current');
        });
    });
});
