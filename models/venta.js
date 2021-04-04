import mongoose from "mongoose";

const ventaSchema = mongoose.Schema({
    TpCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    SrCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    NumCombrobante: { type: String, require: true, maxlength: 50, unique: true },
    impuesto: { type: Number, default: 1 },
    total: { type: Number },
    cantidad: { type: Number },
    precio: { type: Number },
    descuento: { type: String, maxlength: 50 },
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }


});

export default mongoose.model('venta', ventaSchema)