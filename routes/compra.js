import { Router } from "express";
import { check } from "express-validator";
import { compraDelete, compraGet, compraGetById, comprapost, compraPut, compraPutActivar, compraPutDesactivar } from "../controllers/compra.js";
import { existeCompraById, existeCompraByTpCombrobante, existeCompraNumCombrobante, existeCompraSrCombrobante } from "../helpers/bd-compra.js";
import validarCampos from "../middleware/validar-campos.js";
import { validarRol } from "../middleware/validar-rol.js";
import { validarTokenJWT } from "../middleware/validar-token.js";

const router = new Router();

router.get('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], compraGet);

router.get('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraGetById);

router.post('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('TpCombrobante', 'EL Tipo Combrobante es obligatorio').not().isEmpty(),
    check('TpCombrobante').custom(existeCompraByTpCombrobante),
    check('SrCombrobante', 'La Serie Combrobante es obligatorio').not().isEmpty(),
    check('SrCombrobante').custom(existeCompraSrCombrobante),
    check('NumCombrobante', 'EL Numero Combrobante es obligatorio').not().isEmpty(),
    check('NumCombrobante').custom(existeCompraNumCombrobante),
    validarCampos
], comprapost);

router.put('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    check('TpCombrobante').custom(existeCompraByTpCombrobante),
    check('SrCombrobante').custom(existeCompraSrCombrobante),
    check('NumCombrobante').custom(existeCompraNumCombrobante),
    validarCampos
], compraPut);

router.put('/activar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraPutActivar);


router.put('/desactivar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraPutDesactivar);

router.delete('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
], compraDelete);

export default router;