import Usuario from "../models/usuario.js"

const existeUsuarioById = async(id) => {
    const existe = await Usuario.findById(id);

    if (existe) {
        throw new Error(`el ID no existe ${id}`);
    }
}
const existeUsuarioByNombre = async(nombre) => {
    const existe = await Usuario.findOne({ nombre });

    if (existe) throw new Error(`ya existe usuario con ese nombre ${nombre}`);
}
const existeUsuarioByemail = async(email) => {
    const existe = await Usuario.findOne({ email });

    if (existe) throw new Error(`ya existe usuario con ese email ${email}`);
}
const existeUsuarioByPassword = async(password) => {
    const existe = await Usuario.findOne({ password });

    if (existe) throw new Error(`ya existe usuario con ese password ${password}`);
}

export { existeUsuarioById, existeUsuarioByNombre, existeUsuarioByemail, existeUsuarioByPassword, }