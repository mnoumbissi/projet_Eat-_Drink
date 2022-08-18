/** @format */

// selectionne le parent
const product_list = document.getElementById('product_list');

fetch('http://localhost:3000/products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // manipulation des donneees
    data.forEach((product) => {
      // {
      //   "id": "00",
      //   "title": "Salade",
      //   "price": 2000,
      //   "img": "product_0.jpg",
      //   "category": "Salade",
      //   "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. "
      // }

      // creer enfant
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

      link.innerHTML = product.title;
      img.src = './images/' + product.img;
      span.innerHTML = product.price;

      product_details.appendChild(span);
      product_details.appendChild(btn_cart);

      product_content.appendChild(h5);
      product_content.appendChild(product_details);

      product_img.appendChild(img);

      product_item.appendChild(product_img);
      product_item.appendChild(product_content);

      h5.appendChild(link);

      product_list.appendChild(product_item);
    });
  })
  .catch();
