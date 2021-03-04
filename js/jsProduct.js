let queryString = new Array();

window.onload = function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }

    if (queryString["productName"]) {
        document.getElementById('product-name').innerHTML = queryString["productName"];
        let imgUrl = queryString["productName"].toLowerCase();
        document.getElementById('product-img').src = `./img/${imgUrl}.jpg`;
        document.getElementById('product-img').src = './img/' + queryString["productName"] + '.jpg';
        document.getElementById('product-img').alt = queryString["productName"];
    }
};

