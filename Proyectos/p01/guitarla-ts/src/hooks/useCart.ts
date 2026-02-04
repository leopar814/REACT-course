import { useMemo } from "react"
import { useState, useEffect } from "react"
import { db } from "../data/db"
import type { Guitar, CartItem } from "../types/types"
import type { GuitarId } from "../types/types"

export const useCart = () => {

    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const[data] = useState(db)
    const[cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item : Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0) { // existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else { // No existe en el carrito
            const newItem : CartItem = {...item, quantity : 1} 

            setCart([...cart, newItem])
        }
        
    }

    function removeFromCart(id : GuitarId) {
        setCart((prevCart) => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id : GuitarId) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id : GuitarId) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item, 
                    quantity: item.quantity + 1 
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    // State derivado
    const cartIsEmpty = useMemo( () => cart.length === 0, [cart] )
    const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart] )

    return {
        data, 
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartIsEmpty,
        cartTotal
    }

}