/*

import { createContext, useState } from 'react'; 
import type { ReactNode } from 'react';
import type { ProductProps } from '../pages/home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps)  {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    if(indexItem !== -1){
      let cartList = cart;
      
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
    
      setCart(cartList)
      totalResultCart(cartList);
      return;
    }

    // Adicionar esse item na nossa lista.
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
    totalResultCart([...cart, data])

  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id)

    if(cart[indexItem]?.amount > 1){

    }

    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem);
    totalResultCart(removeItem)
  }

  function totalResultCart(items: CartProps[]){
    let myCart = items;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
    const resultFormated = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    setTotal(resultFormated);
  }

  return (
    <CartContext.Provider
     value={{ 
      cart,
      cartAmount: cart.length,
      addItemCart,
      removeItemCart,
      total
      }}
      >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
*/

import { createContext, useState } from 'react'; 
import type { ReactNode } from 'react';
import type { ProductProps } from '../pages/home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  incrementItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps)  {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    if(indexItem !== -1){
      const cartList = [...cart];
      cartList[indexItem] = {
        ...cartList[indexItem],
        amount: cartList[indexItem].amount + 1,
        total: (cartList[indexItem].amount + 1) * cartList[indexItem].price
      };
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const data: CartProps = {
      ...newItem,
      amount: 1,
      total: newItem.price
    };

    const next = [...cart, data];
    setCart(next);
    totalResultCart(next);
  }



  function incrementItemCart(product: CartProps) {
   const indexItem = cart.findIndex(item => item.id === product.id);
    if (indexItem === -1) return; const cartList = [...cart]; cartList[indexItem] = { ...cartList[indexItem], amount: cartList[indexItem].amount + 1, total: (cartList[indexItem].amount + 1) * cartList[indexItem].price }; setCart(cartList); totalResultCart(cartList); }





  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id);
    if (indexItem === -1) return;

    // Se tiver mais de 1 unidade, apenas decrementa
    if (cart[indexItem].amount > 1) {
      const cartList = [...cart];
      cartList[indexItem] = {
        ...cartList[indexItem],
        amount: cartList[indexItem].amount - 1,
        total: (cartList[indexItem].amount - 1) * cartList[indexItem].price
      };
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    // Se tiver apenas 1 unidade, remove do carrinho
    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartProps[]){
    const result = items.reduce((acc, obj) => acc + obj.total, 0);
    const resultFormated = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    setTotal(resultFormated);
  }

  return (
    <CartContext.Provider
     value={{ 
      cart,
      cartAmount: cart.length,
      addItemCart,
      removeItemCart,
      incrementItemCart,
      total
      }}
      >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
