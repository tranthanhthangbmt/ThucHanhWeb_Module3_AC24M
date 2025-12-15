function openModal(id) {
    document.getElementById('modal-' + id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}
