import { Router } from "express";
import { check } from "express-validator";
import { categoriapost, categoriaGet, categoriaGetById, categoriaPut, categoriaPutActivar, categoriaPutDesactivar, categoriaDelete } from "../controllers/categoria.js";
import { existeCategoriaById, existeCategoriaByNombre } from "../helpers/bd-categoria.js";
import validarCampos from "../middleware/validar-campos.js";
import { validarTokenJWT } from "../middleware/validar-token.js";

const router = new Router();

router.get('/', [
    validarTokenJWT,
    validarCampos
], categoriaGet);

router.get('/:id', [
    validarTokenJWT,
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaGetById);

router.post('/', [
    validarTokenJWT,
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriapost);

router.put('/:id', [
    validarTokenJWT,
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
], categoriaPut);

router.put('/activar/:id', [
    validarTokenJWT,
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutActivar);


router.put('/desactivar/:id', [
    validarTokenJWT,
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaPutDesactivar);

router.delete('/:id', [
    validarTokenJWT,
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaDelete);

export default router;