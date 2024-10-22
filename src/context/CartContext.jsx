import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext()

export function CartContextProvider(props) {
    const [items, setItems] = createStore([
        // dummy data : {title: 'test product', quantity: 3, id: 100, price: 15}
    ])

    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}