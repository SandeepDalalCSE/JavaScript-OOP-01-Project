// adding a list of products, say products array having individual product details in an object.

// Here is the basic view of object for the product
// {
//   title: "A pillow",
//   imageUrl:
//     "https://ctl.s6img.com/society6/img/qq8CsYCPgLXfOUTRCkJzY6XrLLk/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/43abc139d2a448699550989add5a24cd/~~/kawaii-cute-panda-bear502620-pillows.jpg",
//   price: 150,
//   description: "a short pillow!"
// },
// I will be build an Product class to describe the blueprint of this object above.

class Product {
  //
  title = "DEFAULT"; // assigning a value as DEFAULT
  imageUrl; // value will be undefined
  price; // value will be undefined
  description; // value will be undefined

  constructor(title, imgUrl, price, des) {
    this.title = title; // this => Product Class or (in general Product Object)
    this.imageUrl = imgUrl;
    this.price = price;
    this.description = des;
  }
}

console.log(new Product("A carpet", "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg", 500, "a long caret!"));
const test = new Product("A carpet", "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg", 500, "a long caret!");
test.title = "change";
console.log(test.title, test.price);
// Consoling Product object

// Now creating class for shopping cart
class ShoppingCart {
  item = [];

  addProduct(product) {
    this.item.push(product); // adding product to item array of shopping cart.
    this.totalOutput = `
    <h2>Total : Rs ${1} </h2>
    `;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total : Rs ${0} </h2>
    <button> Order Now! </button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

// const a = new ShoppingCart();
// console.log(a);

// Now creating class for rendering a single product-item
class ProductItem {
  product;

  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log(this); // here this is ProductItem Class/Object
    console.log("Adding product to cart");
    console.log(this.product); // here this.product => ProductItem.product
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>Rs ${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
      </div>
      `; // this => ProductItem Object
    const addCartButton = prodEl.querySelector("button");
    // addCartButton.addEventListener("click", this.addToCart); // this => button Object not the ProductItem
    addCartButton.addEventListener("click", this.addToCart.bind(this)); // using bind(this), now this behaves that it is ProductItem Class/Object
    //
    return prodEl;
  }
}

// Now Converting productList Object into ProductList Class
class ProductList {
  products = [
    // Class field
    new Product(
      "A pillow",
      "https://ctl.s6img.com/society6/img/qq8CsYCPgLXfOUTRCkJzY6XrLLk/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/43abc139d2a448699550989add5a24cd/~~/kawaii-cute-panda-bear502620-pillows.jpg",
      150,
      "a short pillow!"
    ),
    new Product("A carpet", "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg", 500, "a long caret!"),
    {
      title: "A pillow",
      imageUrl:
        "https://ctl.s6img.com/society6/img/qq8CsYCPgLXfOUTRCkJzY6XrLLk/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/43abc139d2a448699550989add5a24cd/~~/kawaii-cute-panda-bear502620-pillows.jpg",
      price: 150,
      description: "a short pillow!"
    },
    {
      title: "A carpet",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg",
      price: 500,
      description: "a long caret!"
    }
  ];
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      //this => productList Object
      // const prodEl = document.createElement("li");
      // prodEl.className = "product-item";
      // prodEl.innerHTML = `
      // <div>
      // <img src="${prod.imageUrl}" alt="${prod.title}">
      // <div class="product-item__content">
      //   <h2>${prod.title}</h2>
      //   <h3>Rs ${prod.price}</h3>
      //   <p>${prod.description}</p>
      //   <button>Add to Cart</button>
      // </div>
      // </div>
      // `;
      prodList.append(prodEl);
    }
    return prodList;
    // renderHook.append(prodList);
  }
}

// creating class to combine product list and shopping cart togther
class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    // declaring cart property and assigning the instance value of ShoppingCart Class
    console.log(this.cart); // this.cart => Shop.cart, cart property will have same instance of ShoppingCart
    const cartEl = this.cart.render();
    console.log(new ProductList()); // ProductList Class or ProductList Object in general
    const productList = new ProductList();
    const productListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
  }
}
App.init();

//Converting this object literal concept into classes.
// const productList = {
//   products: [
//     new Product(
//       "A pillow",
//       "https://ctl.s6img.com/society6/img/qq8CsYCPgLXfOUTRCkJzY6XrLLk/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/43abc139d2a448699550989add5a24cd/~~/kawaii-cute-panda-bear502620-pillows.jpg",
//       150,
//       "a short pillow!"
//     ),
//     new Product("A carpet", "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg", 500, "a long caret!"),
//     {
//       title: "A pillow",
//       imageUrl:
//         "https://ctl.s6img.com/society6/img/qq8CsYCPgLXfOUTRCkJzY6XrLLk/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-original-art-uploads/society6/uploads/misc/43abc139d2a448699550989add5a24cd/~~/kawaii-cute-panda-bear502620-pillows.jpg",
//       price: 150,
//       description: "a short pillow!"
//     },
//     {
//       title: "A carpet",
//       imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX355_.jpg",
//       price: 500,
//       description: "a long caret!"
//     }
//   ],
//   render() {
//     const renderHook = document.getElementById("app");
//     const prodList = document.createElement("ul");
//     prodList.className = "product-list";
//     for (const prod of this.products) {
//       //this => productList Object
//       const prodEl = document.createElement("li");
//       prodEl.className = "product-item";
//       prodEl.innerHTML = `
//       <div>
//       <img src="${prod.imageUrl}" alt="${prod.title}">
//       <div class="product-item__content">
//         <h2>${prod.title}</h2>
//         <h3>Rs ${prod.price}</h3>
//         <p>${prod.description}</p>
//         <button>Add to Cart</button>
//       </div>
//       </div>
//       `;
//       prodList.append(prodEl);
//     }
//     renderHook.append(prodList);
//   }
// };

// productList.render();
