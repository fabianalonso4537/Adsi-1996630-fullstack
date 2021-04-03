import Persona from "../models/persona.js"

const personaGet = async(req, res) => {
    const { value } = req.query
    const persona = await Persona.find({
        $or: [
            { tipo: new RegExp(value, 'i') },
            { nombre: new RegExp(value, 'i') },
            { tpDocumento: new RegExp(value, 'i') },
            { numDocumento: new RegExp(value, 'i') },
        ]
    }).sort({ "createdAt": -1 })
    res.json({
        persona
    })
}
const personaGetById = async(req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const persona = await Persona.findOne({ _id: id })

    res.json({
        persona
    })
}


const personapost = async(req, res) => {
    const { tipo, nombre, tpDocumento, numDocumento } = req.body;

    const persona = new Persona({ tipo, nombre, tpDocumento, numDocumento })

    await persona.save();

    res.json({
        persona
    })
}

const personaPut = async(req, res) => {
    const { id } = req.params;

    const { _id, createdAt, estado, __v, ...resto } = req.body;

    const persona = await Persona.findByIdAndUpdate(id, resto);

    res.json({
        persona
    })
}

const personaPutActivar = async(req, res) => {
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, { estado: 1 });

    res.json({
        persona
    })
}

const personaPutDesactivar = async(req, res) => {
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, { estado: 0 });

    res.json({
        persona
    })
}

const personaDelete = async(req, res) => {
    const { id } = req.params;
    const persona = await Persona.findOneAndDelete(id);

    res.json({
        persona
    })
}

export { personaGet, personaGetById, personapost, personaPut, personaPutActivar, personaPutDesactivar, personaDelete }