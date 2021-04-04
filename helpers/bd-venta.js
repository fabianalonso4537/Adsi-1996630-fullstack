import Venta from "../models/venta.js";

const existeVentaById = async(id) => {
    const existe = await Venta.findById(id);

    if (!existe) {
        throw new Error(`el ID no existe ${id}`);
    }
}

const existeVentaByTpCombrobante = async(TpCombrobante) => {
    const existe = await Venta.findOne({ TpCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Tipo Combrobante ${TpCombrobante}`);
}
const existeVentaBySrCombrobante = async(SrCombrobante) => {
    const existe = await Venta.findOne({ SrCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Serie Combrobante ${SrCombrobante}`);
}
const existeVentaByNumCombrobante = async(NumCombrobante) => {
    const existe = await Venta.findOne({ NumCombrobante });

    if (existe) throw new Error(`ya existe venta con ese Numero Combrobante ${NumCombrobante}`);
}

export { existeVentaById, existeVentaByTpCombrobante, existeVentaBySrCombrobante, existeVentaByNumCombrobante }