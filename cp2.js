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
    products.slice(0,5).forEach(product => {
        console.log(`${product.fields.name}, ${(product.fields.price / 100).toFixed(2)}`);
    })
};
let handleError = (error) => {
    console.error("An error occured:", error);
}

fetchProductsThen();
fetchProductsAsync();

