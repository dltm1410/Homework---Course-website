function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.currentTarget.parentElement;
    dropdown.classList.toggle('open');
}

window.onclick = function(event) {
    const dropdowns = document.getElementsByClassName("dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdowns[i].classList.remove('open');
        }
    }
}