
export namespace ModelsStore {

    export interface Item {
        id?: string;
        name: string;
        description: string;
        price: number;
        image?: string;
    }
    export interface Pedido {
        
    }
    export interface Carrito {
        total: number;
        cantidadTotal: number;
        items: {
            item: Item;
            cant: number;
        }[]
    }
}


    