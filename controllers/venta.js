import Venta from "../models/venta.js"

const ventaGet = async(req, res) => {
    const { value } = req.query
    const venta = await Venta.find({
        $or: [
            { TpCombrobante: new RegExp(value, 'i') },
            { SrCombrobante: new RegExp(value, 'i') },
            { NumCombrobante: new RegExp(value, 'i') }
        ]
    }).sort({ "createdAt": -1 })
    res.json({
        venta
    })
}
const ventaGetById = async(req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const venta = await Venta.findOne({ _id: id })

    res.json({
        venta
    })
}

const ventapost = async(req, res) => {
    const { TpCombrobante, SrCombrobante, NumCombrobante } = req.body;

    const venta = new Venta({ TpCombrobante, SrCombrobante, NumCombrobante })

    await venta.save();

    res.json({
        venta
    })
}

const ventaPut = async(req, res) => {
    const { id } = req.params;

    const { _id, createdAt, estado, __v, ...resto } = req.body;

    const venta = await Venta.findByIdAndUpdate(id, resto);

    res.json({
        venta
    })
}

const ventaPutActivar = async(req, res) => {
    const { id } = req.params;
    const venta = await Venta.findByIdAndUpdate(id, { estado: 1 });

    res.json({
        venta
    })
}

const ventaPutDesactivar = async(req, res) => {
    const { id } = req.params;
    const venta = await Venta.findByIdAndUpdate(id, { estado: 0 });

    res.json({
        venta
    })
}

const ventaDelete = async(req, res) => {
    const { id } = req.params;
    const venta = await Venta.findOneAndDelete(id);

    res.json({
        venta
    })
}
export { ventaGet, ventaGetById, ventapost, ventaPut, ventaPutActivar, ventaPutDesactivar, ventaDelete }