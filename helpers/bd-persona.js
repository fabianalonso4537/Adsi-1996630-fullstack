import Persona from "../models/persona.js";

const existePersonaById = async(id) => {
    const existe = await Persona.findById(id);
    if (!existe) {
        throw new Error(`el ID no existe ${id}`);
    }

}

const existePersonaByTipo = async(tipo) => {
    const existe = await Persona.findOne({ tipo });

    if (existe) throw new Error(`ya existe persona con ese tipo ${tipo}`);

}

const existePersonaByNombre = async(nombre) => {
    const existe = await Persona.findOne({ nombre });

    if (existe) throw new Error(`ya existe persona con ese nombre ${nombre}`);
}

const existePersonaByTpDocumento = async(tpDocumento) => {
    const existe = await Persona.findOne({ tpDocumento });

    if (existe) throw new Error(`ya existe persona con ese tpDocumento ${tpDocumento}`);

}
const existePersonaByNumDocumento = async(numDocumento) => {
    const existe = await Persona.findOne({ numDocumento });

    if (existe) throw new Error(`ya existe persona con ese numDocumento ${numDocumento}`);


}
export { existePersonaById, existePersonaByTipo, existePersonaByNombre, existePersonaByTpDocumento, existePersonaByNumDocumento }