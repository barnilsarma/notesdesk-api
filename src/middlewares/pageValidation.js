import { body, validationResult } from 'express-validator';

const validatePage = [
    body('image')
        .notEmpty().withMessage('Pages are required.'),
    body('chapterId')
        .notEmpty().withMessage('chapter ID is required.')
        .isString().withMessage('chapter ID must be an String.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default validatePage;
