/** @format */

(function () {
  fetch('http://localhost:3000/products')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Manipulation du DOM
      const product_list = document.getElementById('product_list');

      data.forEach((product) => {
        // product item
        let product_item = document.createElement('div');
        product_item.classList.add('product_item');

        let product_img = document.createElement('div');
        product_img.classList.add('product_img');

        let img = document.createElement('img');
        img.classList.add('w-50');

        let product_content = document.createElement('div');
        product_content.classList.add('product_content');

        let h5 = document.createElement('h5');
        let link = document.createElement('a');

        let product_details = document.createElement('div');
        product_details.classList.add('product_details');

        let span = document.createElement('span');
        span.classList.add('product_price');

        let btn_cart = document.createElement('button');
        btn_cart.classList.add('addToCard_btn');
        btn_cart.innerHTML = 'ADD TO CART';

        // image
        img.src = `./images/${product.img}`;
        img.alt = product.title;
        // titre du produit
        link.innerHTML = product.title;
        // product price
        span.innerHTML = product.price;
        span.innerHTML = `${product.price} FCFA`;

        product_details.appendChild(span);
        product_details.appendChild(btn_cart);

        h5.appendChild(link);

        product_content.appendChild(h5);
        product_content.appendChild(product_details);

        product_img.appendChild(img);

        product_item.appendChild(product_img);
        product_item.appendChild(product_content);

        product_list.appendChild(product_item);
      });
    });
})();
