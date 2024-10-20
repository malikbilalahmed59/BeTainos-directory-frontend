import Joi from "joi";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const registrationSchema = Joi.object({
    username: Joi.string().min(3).required().messages({
        "string.empty": "Username is required.",
        "string.min": "Username must be at least 3 characters long."
    }),
    email: Joi.string()
        .pattern(emailPattern) // Use custom regex
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.pattern.base": "Must be a valid email."
        }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required.",
        "string.min": "Password must be at least 6 characters long."
    }),
}); 