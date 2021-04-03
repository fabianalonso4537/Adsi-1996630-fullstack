import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 60 },
    email: { type: String, maxlength: 70, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true, maxlength: 15 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Usuario', usuarioSchema)