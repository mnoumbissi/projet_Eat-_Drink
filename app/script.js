fetch('http://localhost:3004/products')
    .then((response) =>
        response.json()

    ).then((data) => {
        let repa_card = document.getElementById('repa_card');
        data.forEach(repa => {
            let div = document.createElement('div');
            div.innerHTML = ` <div class="card">
           <img src="api-pizza/images/${repa.img} " alt="" />
           <h1>${repa.title} </h1>
           <div class="menu11">
             <h3>${repa.price} fcfa</h3>
             <button type="submit">add to cart</button>
           </div>
         </div>`
            repa_card.appendChild(div)

        });
        console.log(data)

    })