const flowers = {
    Roses: 10,
    Tulips: 8,
    Lilies: 12,
    Daisies: 5,
    Orchids: 15,
  };
  
  const arrangements = {
    Bouquet: 5,
    Basket: 10,
    "Boxed Arrangement": 15,
    "Vase Arrangement": 20,
  };
  
  let selectedFlowers = {};
  let totalPrice = 0;
  
  // Update Summary
  function updateSummary() {
    const summary = Object.entries(selectedFlowers)
      .map(([flower, qty]) => `${flower} x ${qty}`)
      .join("\n");
    document.getElementById("summary").innerText = summary || "No flowers added yet.";
  }
  
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
