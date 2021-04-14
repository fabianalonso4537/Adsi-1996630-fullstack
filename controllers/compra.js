import Compra from "../models/compra.js"


const compraGet = async(req, res) => {
    const compra = await Compra
        .find()
        .populate('usuario', 'nombre')
        .populate('persona', 'nombre')
    res.json({
        compra
    })
}
const compraGetById = async(req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const compra = await Compra.findOne({ _id: id })

    res.json({
        compra
    })
}

const comprapost = async(req, res) => {
    const { TpCombrobante, usuario, persona, SrCombrobante, NumCombrobante, impuesto, total, cantidad, articulo, precio, descuento } = req.body;

    const compra = new Compra({ TpCombrobante, usuario, persona, SrCombrobante, NumCombrobante, impuesto, total, cantidad, articulo, precio, descuento })

    await compra.save();

    res.json({
        compra
    })
}

const compraPut = async(req, res) => {
    const { id } = req.params;

    const { _id, createdAt, estado, __v, ...resto } = req.body;

    const compra = await Compra.findByIdAndUpdate(id, resto);

    res.json({
        compra
    })
}

const compraPutActivar = async(req, res) => {
    const { id } = req.params;
    const compra = await Compra.findByIdAndUpdate(id, { estado: 1 });

    res.json({
        compra
    })
}

const compraPutDesactivar = async(req, res) => {
    const { id } = req.params;
    const compra = await Compra.findByIdAndUpdate(id, { estado: 0 });

    res.json({
        compra
    })
}

const compraDelete = async(req, res) => {
    const { id } = req.params;
    const compra = await Compra.findOneAndDelete(id);

    res.json({
        compra
    })
}
export { compraGet, compraGetById, comprapost, compraPut, compraPutActivar, compraPutDesactivar, compraDelete }