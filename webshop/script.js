const products = [
  { id: 1, name: "Headphones", price: 499, emoji: "🎧", category: "audio" },
  { id: 2, name: "Keyboard", price: 799, emoji: "⌨️", category: "computer" },
  { id: 3, name: "Mouse", price: 349, emoji: "🖱️", category: "computer" },
  { id: 4, name: "Webcam", price: 599, emoji: "📷", category: "computer" },
  { id: 5, name: "Speaker", price: 699, emoji: "🔊", category: "audio" },
  { id: 6, name: "Phone case", price: 149, emoji: "📱", category: "phone" },
  { id: 7, name: "Charger", price: 199, emoji: "🔌", category: "phone" },
  { id: 8, name: "Backpack", price: 899, emoji: "🎒", category: "other" },
  { id: 9, name: "Desk lamp", price: 299, emoji: "💡", category: "other" },
  { id: 10, name: "Notebook", price: 99, emoji: "📓", category: "other" },
];

function displayProducts() {
  const productList = document.getElementById("productList");

  // Clear any existing products
  productList.innerHTML = "";

  // Loop through each product
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    // Create the main article element
    const article = document.createElement("article");
    article.className = "product-card";

    // Create emoji div
    const emojiDiv = document.createElement("div");
    emojiDiv.className = "product-emoji";
    emojiDiv.textContent = product.emoji;

    // Create name heading
    const nameHeading = document.createElement("h3");
    nameHeading.className = "product-name";
    nameHeading.textContent = product.name;

    // Create price paragraph
    const priceParagraph = document.createElement("p");
    priceParagraph.className = "product-price";
    priceParagraph.textContent = product.price + " kr";

    // Add all parts to the article
    article.appendChild(emojiDiv);
    article.appendChild(nameHeading);
    article.appendChild(priceParagraph);

    // Add article to the product list
    productList.appendChild(article);
  }
}
displayProducts();
