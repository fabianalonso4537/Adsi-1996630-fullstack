import Compra from "../models/compra.js";


const existeCompraById = async(id) => {
    const existe = await Compra.findById(id);

    if (!existe) {
        throw new Error(`el ID no existe ${id}`);
    }
}

const existeCompraByTpCombrobante = async(TpCombrobante) => {
    const existe = await Compra.findOne({ TpCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Tipo Combrobante ${TpCombrobante}`);
}
const existeCompraSrCombrobante = async(SrCombrobante) => {
    const existe = await Compra.findOne({ SrCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Serie Combrobante ${SrCombrobante}`);
}
const existeCompraNumCombrobante = async(NumCombrobante) => {
    const existe = await Compra.findOne({ NumCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Numero Combrobante ${NumCombrobante}`);
}

export { existeCompraById, existeCompraByTpCombrobante, existeCompraSrCombrobante, existeCompraNumCombrobante }