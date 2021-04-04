import { Router } from "express";
import { check } from "express-validator";
import { ventaDelete, ventaGet, ventaGetById, ventapost, ventaPut, ventaPutActivar, ventaPutDesactivar } from "../controllers/venta.js";
import { existeVentaById, existeVentaByNumCombrobante, existeVentaBySrCombrobante, existeVentaByTpCombrobante } from "../helpers/bd-venta.js";
import validarCampos from "../middleware/validar-campos.js";
import { validarRol } from "../middleware/validar-rol.js";
import { validarTokenJWT } from "../middleware/validar-token.js";

const router = new Router();

router.get('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], ventaGet);

router.get('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaGetById);

router.post('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('TpCombrobante', 'EL Tipo Combrobante es obligatorio').not().isEmpty(),
    check('TpCombrobante').custom(existeVentaByTpCombrobante),
    check('SrCombrobante', 'La Serie Combrobante es obligatorio').not().isEmpty(),
    check('SrCombrobante').custom(existeVentaBySrCombrobante),
    check('NumCombrobante', 'EL Numero Combrobante es obligatorio').not().isEmpty(),
    check('NumCombrobante').custom(existeVentaByNumCombrobante),
    validarCampos
], ventapost);

router.put('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    check('TpCombrobante').custom(existeVentaByTpCombrobante),
    check('SrCombrobante').custom(existeVentaBySrCombrobante),
    check('NumCombrobante').custom(existeVentaByNumCombrobante),
    validarCampos
], ventaPut);

router.put('/activar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaPutActivar);


router.put('/desactivar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaPutDesactivar);

router.delete('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
], ventaDelete);

export default router;