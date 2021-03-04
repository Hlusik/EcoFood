let jsonProducts = '{"products": [{"id": 1, "name": "Lemon", "price": 7.6, "imgUrl": "./img/lemon.jpg"}, {"id": 2, "name": "Cauliflower", "price": 1.2, "imgUrl": "./img/cauliflower.jpg"},	{"id": 3, "name": "Corn", "price": 2.0, "imgUrl": "./img/corn.jpg"}, {"id": 4, "name": "Cucumber", "price": 4.5, "imgUrl": "./img/cucumber.jpg"}, {"id": 5, "name": "Kiwi", "price": 10.0, "imgUrl": "./img/kiwi.jpg"},	{"id": 6, "name": "Lime", "price": 9.6, "imgUrl": "./img/lime.jpg"}, {"id": 7, "name": "Peach", "price": 15.5, "imgUrl": "./img/peach.jpg"}, {"id": 8, "name": "Pumpkin", "price": 3.3, "imgUrl": "./img/pumpkin.jpg"}]}';
let productsObj = JSON.parse(jsonProducts);
let productsArr = productsObj.products;
let str = '<h2>Most Popular Products</h2>';

for (let i = 0; i < productsArr.length; i++) {
	str += '<article id="' + productsArr[i].id + '">' +
        '<img src="' + productsArr[i].imgUrl +
        	'" class="product" alt="' + productsArr[i].name +'"/>' +
        '<h3>' + productsArr[i].name +'</h3>' +
        '<p>$' + productsArr[i].price +'</p>' +
        '<button class="add-to-card btn btn-primary">Add to card</button>' +
    '</article>';	
}

let productsHTML = document.getElementById('products');
productsHTML.innerHTML = str;