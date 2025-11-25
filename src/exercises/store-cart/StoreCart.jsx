/*
Implemente um carrinho de compras seguindo:

1- quando eu clico no produto, ele é adicionado no carrinho e botão do produto fica disabilitado
2- o produto ao ser adicionado é mostrado no Cart, e o total é atualizado
3 - quando eu clico no botão remove esse item deve ser excluido do carrinho e o total atualizado, e o botão do produto reabilitado

*/

import PRODUCTS from './db.json';
import './styles.css';
import CartItem from './components/CartItem.jsx';

export default function StoreCart() {
  return (
    <>
      <h2>Shop Cart</h2>
      <div className="store-cart">
        <div className="products">
          <h2>Products</h2>
          <div className="products-container">
            {PRODUCTS.map((product) => (
              <button key={product.id} className="product-card">
                <div className="name">{product.name}</div>
                <div className="price">U$ {product.price}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="cart">
          <h2>Cart</h2>

          <div className="cart-items">
            <CartItem />
          </div>

          <p>Total: 0.0</p>
        </div>
      </div>
    </>
  );
}

