export interface Carrito {
    total: number;
    productos: Array<ItemCarrito>;
}

export interface Inventario {
    Descripcion_Categoria: string;
    Descripcion_Producto: string;
    IdInventario: number;
    cantidad: number;
    idCategoria: number;
    idProducto: number;
    imagen: string;
    nombreCategoria: string;
    nombreProducto: string;
    precio: number;
}

export interface ItemCarrito {
    strock: number;
    producto: Inventario;
}