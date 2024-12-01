var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(dropdown) {
  var button = dropdown.querySelector('a[data-toggle="dropdown"]');
  var menu = dropdown.querySelector('.dropdown-menu');
  var arrow = button.querySelector('i.icon-arrow');

  button.addEventListener('click', function(event) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
    } else {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
    }

    event.preventDefault();
  });
});
