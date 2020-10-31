import {body} from 'express-validator';

export const createTweetValidation = [
  body('text', 'Введите текст')
  .isString()
  .isLength({max: 280})
  .withMessage('Максимальная длина твита 280 символов')
];
