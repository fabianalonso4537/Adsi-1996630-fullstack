import mongoose from "mongoose";

const articuloSchema = mongoose.Schema({
    codigo: { type: String, require: true, maxlength: 50, unique: true },
    nombre: { type: String, require: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 255 },
    precioventa: { type: Number, default: 1 },
    stok: { type: String, maxlength: 50 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }


});

export default mongoose.model('articulo', articuloSchema)