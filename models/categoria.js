import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    nombre: { type: String, require: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 255 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('categoria', categoriaSchema)