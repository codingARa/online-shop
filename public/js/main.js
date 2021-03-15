//Der Shopping-Cart wird umgesetzt ueber eine Liste der Database-IDs der
//ausgewaehlten Produkte
const CART_KEY = 'cart';

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};
const addToCart = (id) => {
    let storedCart = localStorage.getItem(CART_KEY);
    //console.log('initial get', storedCart);

    if (!storedCart){
        //noch kein cart-Array in localStorage
        let arr = [];
        arr.push(id);
        localStorage.setObject(CART_KEY, arr);
    } else {
        let parsedCart = JSON.parse(storedCart);
        //id an cart-Array anhaengen
        parsedCart.push(id);
        localStorage.setObject(CART_KEY, parsedCart);
    }
    //console.log('stored values', localStorage.getItem(CART_KEY));
};

const sendCart = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:5000/cart', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        cart: localStorage.getItem(CART_KEY)
    }));
};
