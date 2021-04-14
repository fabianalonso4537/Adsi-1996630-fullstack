import mongoose from "mongoose";

const articuloSchema = mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categoria', required: true },
    codigo: { type: String, required: true, maxlength: 64, unique: true },
    nombre: { type: String, required: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 255 },
    precioventa: { type: Number, default: 0 },
    stok: { type: Number, default: 0 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }


});

export default mongoose.model('articulo', articuloSchema)