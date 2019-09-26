// Smooth Scrolling
console.log('JS is connected')
$('#navbar a, .btn').on('click', event => {
    console.log('clicked');
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});