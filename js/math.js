function toggleText(id) {
    const text = document.getElementById(id);

    if (text.classList.contains('active')) {
        text.classList.remove('active');
    } else {
        const texts = document.querySelectorAll('.text');
        texts.forEach(t => t.classList.remove('active'));

        text.classList.add('active');
    }
}
