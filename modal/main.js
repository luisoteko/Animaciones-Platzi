$yep = document.getElementById('yep')
$overlay = document.getElementById('overlay')
$modal = document.getElementById('modal')
$image = document.getElementById('image')
$close = document.getElementById('hideModal')
$nope = document.getElementById('nope')

function hideModal() {
  $modal.style.animation = 'modalOut .8s forwards'
  $overlay.classList.remove('active')
}
function showModal() {
  $modal.style.animation = 'modalIn .8s forwards'
  $overlay.classList.add('active')
}

$yep.addEventListener('click', hideModal)

$nope.addEventListener('click', hideModal)

$close.addEventListener('click', hideModal)

$overlay.addEventListener('click', hideModal)

$image.addEventListener('click', showModal)