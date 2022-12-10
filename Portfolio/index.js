let contrastToggle = false
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ' dark-theme'
    }
    else{
        document.body.classList.remove('dark-theme')
    }
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible';

    emailjs
        .sendForm(
            'service_qtdfrdc',
            'template_cjfz4q9',
            event.target,
            'X4Mi8L9q9HTYDrE3U'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        }).catch(() => {
            loading.classList.remove("modal overlay--visible");
            alert(
                'The email service is temporarily unavailable. Please contact me directly on firdegjepali@gmail.com'
            )
        })
}

let isModalOpen = false;
function toggleModal() {
    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classList += ' modal--open'
}
