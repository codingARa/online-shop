import Product from './interface.product';
interface CartItem extends Product {
    amount : number
};

export default CartItem;