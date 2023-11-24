import express from 'express';
import { check } from 'express-validator';
import { register, login, updateUser, deleteUser, getAllUsers } from '../controllers/authController.js';



const router = express.Router();

// Rutas de formulario de Registro y Login
router.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'Por favor, ingrese un correo electrónico válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
  ],
  register
);

router.post(
  '/login',
  [
    check('email', 'Por favor, ingrese un correo electrónico válido').isEmail(),
    check('password', 'La contraseña es obligatoria').exists(),
  ],
  login
  );
    
router.get('/all-users', getAllUsers);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
