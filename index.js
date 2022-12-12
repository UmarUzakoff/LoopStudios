var $menu = document.querySelector('#menu');
var $menuContent = document.querySelector('#menu_content');

$menu.addEventListener('click', function () {
    $menuContent.classList.toggle('active')
    $menu.classList.toggle('x')
})