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
// Consoling Product object

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
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      //this => productList Object
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>Rs ${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
      </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}
console.log(new ProductList()); // ProductList Class or ProductList Object in general
const productList = new ProductList();
productList.render();

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
