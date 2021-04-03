import { Router } from "express";
import { login, usuarioDelete, usuarioGet, usuarioGetbyId, usuarioPost, usuarioPut, usuarioPutActivar, usuarioPutdDesactivar } from "../controllers/usuario.js";
import { check } from "express-validator";
import { existeUsuarioByemail, existeUsuarioById, existeUsuarioByNombre, existeUsuarioByPassword } from "../helpers/bd-usuario.js";
import validarCampos from "../middleware/validar-campos.js";
const router = Router();

router.get('/', usuarioGet)

router.get('/:id', [
    check('id', 'no es un  ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
], usuarioGetbyId)

router.post('/', [
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeUsuarioByNombre),
    check('email', 'EL email es obligatorio').not().isEmpty(),
    check('email').custom(existeUsuarioByemail),
    check('password', 'EL password es obligatorio').not().isEmpty(),
    check('password').custom(existeUsuarioByPassword),
    validarCampos
], usuarioPost)

router.post('/login', login)

router.put('/:id', [
    check('id', 'no es un  ID valido').isMongoId(),
    check('nombre').custom(existeUsuarioByNombre),
    check('email').custom(existeUsuarioByemail),
    check('password').custom(existeUsuarioByPassword),
    validarCampos

], usuarioPut)

router.put('/activar/:id', [
    check('id', 'no es un  ID valido').isMongoId(),
    check('nombre').custom(existeUsuarioByNombre),
    check('email').custom(existeUsuarioByemail),
    check('password').custom(existeUsuarioByPassword),
    validarCampos
], usuarioPutActivar)

router.put('/desactivar/:id', [
    check('id', 'no es un  ID valido').isMongoId(),
    check('nombre').custom(existeUsuarioByNombre),
    check('email').custom(existeUsuarioByemail),
    check('password').custom(existeUsuarioByPassword),
    validarCampos
], usuarioPutdDesactivar)

router.delete('/:id', [
    check('id', 'no es un  ID valido').isMongoId(),
    check('nombre').custom(existeUsuarioByNombre),
    check('email').custom(existeUsuarioByemail),
    check('password').custom(existeUsuarioByPassword),
    validarCampos
], usuarioDelete)

export default router