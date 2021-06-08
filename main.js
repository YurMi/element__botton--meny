let btn = document.querySelector('.element__btn');
let navigation = document.querySelector('.element__line__meny');


if (btn) {
    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
        navigation.classList.toggle('active')
    })
}