// Toggle dark/light theme
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-theme", "dark");
});

// Add new card dynamically
const addCardBtn = document.getElementById("addCard");
const cardsContainer = document.querySelector(".cards");

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("article");
  newCard.className = "card tile compact";
  newCard.innerHTML = `
    <img src="https://via.placeholder.com/150" alt="new image">
    <div>
      <h3>New Product</h3>
      <p>This card was added dynamically via JavaScript.</p>
      <button class="tile buyBtn">Buy</button>
    </div>
  `;
  cardsContainer.appendChild(newCard);
});
