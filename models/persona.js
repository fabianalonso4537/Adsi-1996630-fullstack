import mongoose from "mongoose";

const personaSchema = mongoose.Schema({
    tipo: { type: String, require: true, maxlength: 50 },
    nombre: { type: String, require: true, maxlength: 50 },
    tpDocumento: { type: String, require: true, maxlength: 255 },
    numDocumento: { type: String, require: true, maxlength: 255 },
    direccion: { type: String, maxlength: 50 },
    telefono: { type: Number },
    email: { type: String, maxlength: 50 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }


});

export default mongoose.model('persona', personaSchema)