document.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.querySelector('.button-group');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const chevron = document.querySelector('.chevron-down');

    let ignoreClick = false;

    buttonGroup.addEventListener('click', (e) => {
        const isDropdownVisible = dropdownMenu.classList.contains('show-dropdown');

        // Toggle dropdown visibility
        dropdownMenu.classList.toggle('show-dropdown');

        // Toggle chevron direction
        chevron.classList.toggle('chevron-up');

        // Prevent immediate outside click detection
        ignoreClick = true;

        if (!isDropdownVisible) {
            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
                ignoreClick = false;
            }, 0);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
    });

    function handleOutsideClick(event) {
        if (ignoreClick) return;

        if (!buttonGroup.contains(event.target)) {
            dropdownMenu.classList.remove('show-dropdown');
            chevron.classList.remove('chevron-up');
            document.removeEventListener('click', handleOutsideClick);
        }
    }
});


















    









