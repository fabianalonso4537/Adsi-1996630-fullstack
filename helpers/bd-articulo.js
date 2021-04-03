import Articulo from "../models/articulo.js";

const existeArticuloById = async(id) => {
    const existe = await Articulo.findById(id);

    if (!existe) {
        throw new Error(`el ID no existe ${id}`);
    }
}

const existeArticuloByCodigo = async(codigo) => {
    const existe = await Articulo.findOne({ codigo });

    if (existe) throw new Error(`ya existe categoria con ese codigo ${codigo}`);
}
const existeArticuloByNombre = async(nombre) => {
    const existe = await Articulo.findOne({ nombre });

    if (existe) throw new Error(`ya existe categoria con ese nombre ${nombre}`);
}
export { existeArticuloById, existeArticuloByCodigo, existeArticuloByNombre }