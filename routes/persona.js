import { Router } from "express";
import { check } from "express-validator";
import { personaDelete, personaGet, personaGetById, personapost, personaPut, personaPutActivar, personaPutDesactivar } from "../controllers/persona.js";
import { existePersonaById, existePersonaByNombre, existePersonaByNumDocumento, existePersonaByTipo, existePersonaByTpDocumento } from "../helpers/bd-persona.js";
import validarCampos from "../middleware/validar-campos.js";
import { validarRol } from "../middleware/validar-rol.js";
import { validarTokenJWT } from "../middleware/validar-token.js";

const router = new Router();

router.get('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    validarCampos
], personaGet);

router.get('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaGetById);

router.post('/', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('tipo', 'EL tipo es obligatorio').not().isEmpty(),
    check('tipo').custom(existePersonaByTipo),
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existePersonaByNombre),
    check('tpDocumento', 'EL tpDocumento es obligatorio').not().isEmpty(),
    check('tpDocumento').custom(existePersonaByTpDocumento),
    check('numDocumento', 'EL numDocumento es obligatorio').not().isEmpty(),
    check('numDocumento').custom(existePersonaByNumDocumento),
    validarCampos
], personapost);

router.put('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    check('codigo').custom(existePersonaByTipo),
    check('nombre').custom(existePersonaByNombre),
    check('nombre').custom(existePersonaByTpDocumento),
    check('nombre').custom(existePersonaByNumDocumento),
    validarCampos
], personaPut);

router.put('/activar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaPutActivar);


router.put('/desactivar/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaPutDesactivar);

router.delete('/:id', [
    validarTokenJWT,
    validarRol('ALMACENISTA_ROL'),
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existePersonaById),
    validarCampos
], personaDelete);

export default router;