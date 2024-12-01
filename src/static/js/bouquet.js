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
  