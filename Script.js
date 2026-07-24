async function getProducts(){


let response = await fetch("https://fakestoreapi.com/products");
let data = await response.json();
console.log(data);

let womenClothes = data.filter(item => item.category ==="women's clothing");

for(let item of womenClothes) {
    
        console.log(item.title +"| Price: $"+ item.price)
    
  }
}

getProducts();
