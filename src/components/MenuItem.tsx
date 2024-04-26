import type { MenuItem} from "../types"
type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void // este tipo de sintaxis va hace muy comun cuando se pase por vio proops void= a una funcion que retorna nada
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    
    <button
    
    className=" border-2 border-blue-400 hover:bg-blue-300 w-full p-3 flex justify-between"
    onClick={() =>addItem(item)}
    
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  )
}

