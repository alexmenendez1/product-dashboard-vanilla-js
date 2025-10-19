function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(res => res.json())     // Converts response to JSON
    .then(data => {
      console.log("Products:", data);
        displayProducts(data);
    })
    .catch(err => {
      console.error("Fetch failed:", err);
    });
}


const fetchProductsAsync = async function () {
    try {
        const res = await fetch("https://www.course-api.com/javascript-store-products");
        if (!res.ok) {
            throw new Error(`HELP ME`)
        }
        const data = await res.json();
        console.log("Products:", data);
    } catch (error) {
        handleError(error);
    }
};




function displayProducts(products) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; // Clear previous content
    products.slice(0,5).forEach(product => {
        // console.log(`${product.fields.name}, ${(product.fields.price / 100).toFixed(2)}`);
    const card = document.createElement("div");
    card.classList.add = "product-card";
    // image
    const img = document.createElement("img");
    img.src = product.fields.image[0].url;
    img.alt = product.fields.name;
    // name
    const name = document.createElement("name");
    name.textContent = product.fields.name;
    // price
    const price = document.createElement("price");
    price.textContent = `$${(product.fields.price / 100).toFixed(2)}`;
;    // append to card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    // append card to container
    container.appendChild(card);
    })
};
let handleError = (error) => {
    console.error("An error occured:", error);
}

fetchProductsThen();
fetchProductsAsync();

