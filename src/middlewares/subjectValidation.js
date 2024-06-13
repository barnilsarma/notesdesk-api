import { body, validationResult } from 'express-validator';

const validateSubject = [
    body('user')
        .notEmpty().withMessage('User is required.')
        .isString().withMessage('User must be a string.'),
    body('sub')
        .notEmpty().withMessage('Sub is required.')
        .isString().withMessage('Sub must be a string.'),
    body('libraryId')
        .notEmpty().withMessage('Library ID is required.')
        .isString().withMessage('Library ID must be an string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default validateSubject;
