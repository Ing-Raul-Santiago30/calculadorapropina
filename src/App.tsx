import MenuItem from "./components/MenuItem"
import { OrderContent } from "./components/OrderContent"
import { OrderTotals } from "./components/OrderTotals"
import TipPorcentageForm from "./components/TipPorcentgeForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()



  return (
    <>
      {/* emcabezado con un color blue y un padin arriba y abajo de 5 py-5*/}
      <header className=" hover:bg-blue-700  bg-blue-500 py-5">
        {/* hacemos el h1 con el titulo del ecambezado dentro del header lo 
    centramos hicimos la letra adaptable y 
    le pusimos un font-black para que este en negritas*/}
        <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>


      </header>

      {/* la seccion principal  de nuestro proyecto el grid cols crea 2 columna, md:lg:2xl: son los media query */}
      <main className=" max-w-7xl mx-auto py-20 grid  md:grid-cols-2">{/* despues md se aplica las 2 columna del media query*/}
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menú</h2>

          {/* a la clase padre le pones el space para agregar mt*/}
          <div className=" space-y-3 mt-10" >
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}

              />
            ))}
          </div>

        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length  ? (
            <>
              <OrderContent
                order={order}
                removeItem={removeItem}
              />
              <TipPorcentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className=" text-center text-3xl font-bold">La orden esta vacia</p>
          )}

        </div>

      </main>

      <footer className=" hover:bg-blue-800 bg-blue-700 md:text-3xl font-black text-center "> Ing Raul Santiago @2024 Web  | Todos los Derechos Reservados </footer>

    </>
  )
}

export default App
