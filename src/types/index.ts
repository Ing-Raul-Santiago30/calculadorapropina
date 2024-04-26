export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// cojemos todo lo que tiene menu item y lo asignamos a orden item mas la cantidad que es de tipo numero
export type OrderItem = MenuItem & {
    quantity: number
}