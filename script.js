const products = document.querySelectorAll(".add_to_cart");
const cartValue = document.querySelector("#cartValue");

const allProducts = [
  {
    name: "Blue T-shirt",
    tag: "bluetshirt",
    price: 14,
    inCart: 0,
  },
  {
    name: "Pink T-shirt",
    tag: "pinkshirt",
    price: 16,
    inCart: 0,
  },
  {
    name: "Avengers T-shirt",
    tag: "avengersshirt",
    price: 24,
    inCart: 0,
  },
  {
    name: "Whateva T-shirt",
    tag: "whatevashirt",
    price: 18,
    inCart: 0,
  },
  {
    name: "Marvel T-shirt",
    tag: "marvelshirt",
    price: 26,
    inCart: 0,
  },
  {
    name: "Peach T-shirt",
    tag: "peachtshirt",
    price: 22,
    inCart: 0,
  },
];


const subtotal=(index)=>{
    let element= allProducts[index].tag
    // console.log(element);
    let Product = localStorage.getItem("cartProducts");
    Product=JSON.parse(Product);
    let price = localStorage.getItem("subtotal");
    price= JSON.parse(price);
    

    // console.log(price[Product[element].tag], "shows the price of ele,mnt")

    

    console.log( price, "price type")

    const productPrice = Product[element].price*Product[element].inCart;
   if(price===null){
    price={
        [Product[element].tag]: productPrice
    }
   }
   else{
    // console.log(price[Product[element].tag]===undefined)
        if(price[Product[element].tag]===undefined){
            console.log('ins product null')
            price = {
                ...price,
                [Product[element].tag]: productPrice
              };
        }
        else{
            // console.log('going good')
            price={
                ...price,
                [Product[element].tag]:Product[element].price*Product[element].inCart
            }
        }
       
   }
   
   

   

    localStorage.setItem("subtotal", JSON.stringify(price));

    console.log(price, 'price')
    
}

const cartProducts = (index) => {
  let Product = localStorage.getItem("cartProducts");
  Product = JSON.parse(Product);
  console.log("getting allproduct", Product);

  if (Product === null) {
    allProducts[index].inCart = 1;
    Product = {
      [allProducts[index].tag]: allProducts[index],
    };

    // localStorage.setItem("cartProducts",JSON.stringify(Product));
    console.log(allProducts[index], "when get all product null");
  } else {
    if (Product[allProducts[index].tag] === undefined) {
      allProducts[index].inCart = 1;
      Product = {
        ...Product,
        [allProducts[index].tag]: allProducts[index],
      };
    } else {
      Product[allProducts[index].tag].inCart++;
      console.log(Product[allProducts[index].tag].inCart, "not null");
    }
  }
  localStorage.setItem("cartProducts", JSON.stringify(Product));
};

const getCartValue = () => {
  cartValue.innerHTML = localStorage.getItem("cartItems");
};

const cartitems = (index) => {
  console.log("clicked");

  let cartItems = localStorage.getItem("cartItems");
  if (cartItems === null) {
    cartItems = 1;
    localStorage.setItem("cartItems", cartItems);
  } else {
    cartItems = parseInt(cartItems);
    localStorage.setItem("cartItems", cartItems + 1);
    getCartValue();
  }
  cartProducts(index);
};

for (let index = 0; index < products.length; index++) {
  const element = products[index];
  element.onclick = () => {
    cartitems(index);
    subtotal(index)
  };
}

getCartValue();
