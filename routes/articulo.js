import { Router } from "express";
import { check } from "express-validator";
import { articuloDelete, articuloGet, articuloGetById, articulopost, articuloPut, articuloPutActivar, articuloPutDesactivar } from "../controllers/articulo.js";
import { existeArticuloById, existeArticuloByCodigo, existeArticuloByNombre } from "../helpers/bd-articulo.js";
import validarCampos from "../middleware/validar-campos.js";
import { validarRol } from "../middleware/validar-rol.js";
import { validarTokenJWT } from "../middleware/validar-token.js";


const router = new Router();

router.get('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], articuloGet);

router.get('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloGetById);

router.post('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('codigo', 'EL codigo es obligatorio').not().isEmpty(),
    check('codigo').custom(existeArticuloByCodigo),
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos
], articulopost);

router.put('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    check('codigo').custom(existeArticuloByCodigo),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos
], articuloPut);

router.put('/activar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloPutActivar);


router.put('/desactivar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloPutDesactivar);

router.delete('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeArticuloById),
    validarCampos
], articuloDelete);

export default router;