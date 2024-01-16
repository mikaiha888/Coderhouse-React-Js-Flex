import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(product => product.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId)
    }
    
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}