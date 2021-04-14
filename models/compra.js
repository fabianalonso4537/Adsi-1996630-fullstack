import mongoose from "mongoose";


const compraSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true },
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'persona', required: true },
    TpCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    SrCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    NumCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    impuesto: { type: Number, default: 1 },
    total: { type: Number },
    cantidad: { type: Number },
    articulo: { type: String, maxlength: 50 },
    precio: { type: Number },
    descuento: { type: String, maxlength: 50 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }


});

export default mongoose.model('compra', compraSchema)