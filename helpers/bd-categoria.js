import Categoria from "../models/categoria.js"
const existeCategoriaById = async(id) => {
    const existe = await Categoria.findById(id);

    if (!existe) {
        throw new Error(`el ID no existe ${id}`);
    }
}

const existeCategoriaByNombre = async(nombre) => {
    const existe = await Categoria.findOne({ nombre });

    if (existe) throw new Error(`ya existe categoria con ese nombre ${nombre}`);
}
export { existeCategoriaById, existeCategoriaByNombre }