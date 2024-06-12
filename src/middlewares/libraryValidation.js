import { body, validationResult } from "express-validator";

const validateLibrary = [
    body("lib")
        .isString()
        .withMessage("Library Name must be a string")
        .notEmpty()
        .withMessage("Library Name is required"),

    body("user")
        .isString()
        .withMessage("Name must be a string")
        .notEmpty()
        .withMessage("Name is required"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
export default validateLibrary;
