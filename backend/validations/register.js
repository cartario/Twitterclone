import {body} from 'express-validator';

export const registerValidations = [
  body('email', 'Введите e-mail').isEmail().withMessage('неверная почта').isLength({
    min: 10,
    max: 40
  }).withMessage('От 10 до 40 символов'),
  body('fullName', 'Введите fullName').isString().isLength({
    min: 2,
    max: 40
  }).withMessage('От 2 до 40 символов'),
  body('userName', 'Введите userName').isString().isLength({
    min: 2,
    max: 40
  }).withMessage('От 2 до 40 символов'),
  body('password', 'Введите password').isString().isLength({
    min: 6,
    max: 40
  }).withMessage('От 6 до 40 символов')
];
