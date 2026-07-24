async function getProducts(){
// server ko request bhejne ke liya

let response = await fetch("https://fakestoreapi.com/products");
let data = await response.json();
// console.log(data);

let womenClothes = data.filter(item => item.category ==="women's clothing");

// for(let item of womenClothes) {
    
//         console.log(item.title +"| Price: $"+ item.price)
    
//   }
// }
let totalBill = womenClothes.reduce((acc, item)=> acc +item.price,0);
console.log("Total Bill: $"+totalBill);
}
 getProducts();
