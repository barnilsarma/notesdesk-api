import { body, validationResult } from 'express-validator';

const validateChapter = [
    body('user')
        .notEmpty().withMessage('User is required.')
        .isString().withMessage('User must be a string.'),
    body('title')
        .notEmpty().withMessage('Title is required.')
        .isString().withMessage('Title must be a string.'),
    // body('pages')
    //     .notEmpty().withMessage('Pages are required.')
    //     .isArray().withMessage('Pages must be an array.')
    //     .custom((value) => {
    //         if (!value.every(page => typeof page === 'string')) {
    //             throw new Error('Pages must be an array of strings.');
    //         }
    //         return true;
    //     }),
    body('subjectId')
        .notEmpty().withMessage('Subject ID is required.')
        .isString().withMessage('Subject ID must be an String.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default validateChapter;
