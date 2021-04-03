import Articulo from "../models/articulo.js"

const articuloGet = async(req, res) => {
    const { value } = req.query
    const articulo = await Articulo.find({
        $or: [
            { codigo: new RegExp(value, 'i') },
            { nombre: new RegExp(value, 'i') }
        ]
    }).sort({ "createdAt": -1 })
    res.json({
        articulo
    })
}
const articuloGetById = async(req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const articulo = await Articulo.findOne({ _id: id })

    res.json({
        articulo
    })
}


const articulopost = async(req, res) => {
    const { codigo, nombre } = req.body;

    const articulo = new Articulo({ codigo, nombre })

    await articulo.save();

    res.json({
        articulo
    })
}

const articuloPut = async(req, res) => {
    const { id } = req.params;

    const { _id, createdAt, estado, __v, ...resto } = req.body;

    const articulo = await Articulo.findByIdAndUpdate(id, resto);

    res.json({
        articulo
    })
}

const articuloPutActivar = async(req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.findByIdAndUpdate(id, { estado: 1 });

    res.json({
        articulo
    })
}

const articuloPutDesactivar = async(req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.findByIdAndUpdate(id, { estado: 0 });

    res.json({
        articulo
    })
}

const articuloDelete = async(req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.findOneAndDelete(id);

    res.json({
        articulo
    })
}

export { articuloGet, articuloGetById, articulopost, articuloPut, articuloPutActivar, articuloPutDesactivar, articuloDelete }