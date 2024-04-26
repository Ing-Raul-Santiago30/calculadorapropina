import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderTotalsProps = {
  order: OrderItem[],
  tip: number
  placeOrder: ()=> void
}

export const OrderTotals = ({order, tip, placeOrder} :orderTotalsProps) => {

  const subtotalApagar = useMemo(() => order.reduce(( total, item) => total + (item.quantity * item.price), 0), [order])
  const PropinaApagar = useMemo(() => subtotalApagar * tip,[tip, order])
  const TotalAPagar = useMemo(() => subtotalApagar + PropinaApagar,[tip,order])
  return (
    <>
    <div className=" space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a Pagar: {''}   { /* con esta sintaxis podemos inyectar un espacio en blaco*/}
        <span className=" font-bold">{formatCurrency(subtotalApagar)}</span>
        </p>

        <p>Propina: {''}   { /* con esta sintaxis podemos inyectar un espacio en blaco*/}
        <span className=" font-bold">{formatCurrency(PropinaApagar)}</span>
        </p>

        <p>Total a Pagar: {''}   { /* con esta sintaxis podemos inyectar un espacio en blaco*/}
        <span className=" font-bold">{formatCurrency(TotalAPagar)}</span>
        </p>



    </div>

    <button
    className=" w-full  hover:bg-blue-500 bg-blue-800 p-3 uppercase text-white  font-black disabled:opacity-10"
    disabled= {TotalAPagar === 0}
    onClick={placeOrder}
    
    >

      Guardar Orden
    </button>
    
    
    </>
  )
}
