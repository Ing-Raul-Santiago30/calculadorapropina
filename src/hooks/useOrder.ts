import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // un arreglo como valor iniciar
    const [tip, setTip] = useState(0) // la propina inicial es cero hasta que el usuario elja lo que quiera dar


    const addItem = (item: MenuItem) => {

        const itemExit = order.find(orderItem => orderItem.id === item.id)
        if (itemExit) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                {
                    ...orderItem, quantity:
                        orderItem.quantity + 1
                } :
                orderItem

            )
            setOrder(updatedOrder)

        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])

        }



    }
    const removeItem = (id: MenuItem['id']) =>{
        //setiarlo
        setOrder(order.filter(item => item.id !== id))
        
    }
    // de esta forma podemos reiniciar
    const  placeOrder = () =>{
        setOrder([])
        setTip(0)
    }



    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}