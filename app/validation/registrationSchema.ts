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

export const addCompanySchema = Joi.object({
    logo: Joi.any().optional().allow('').messages({
        'string.empty': 'Logo is optional but must be a valid image if provided',
    }),
    name: Joi.string().min(3).max(100).required().label('Name'),
    postalAddress: Joi.string().min(10).required().label('Postal Address'),
    phone: Joi.string()
        .pattern(/^\+?[0-9]{7,15}$/)
        .required()
        .label('Phone')
        .messages({
            'string.pattern.base': 'Phone number must be valid and include country code.',
        }),
    email: Joi.string()
        .pattern(emailPattern) // Use custom regex
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.pattern.base": "Must be a valid email."
        }),
    website: Joi.string().allow('').uri().label('Website'),
    socials: Joi.array().optional()
        .items(
            Joi.object({
                icon: Joi.string().uri().allow('').label('Social Icon'),
                link: Joi.string().uri().required().label('Social Link'),
                name: Joi.string().min(2).max(50).required().label('Social Name'),
            })
        )
        .label('Social Links'),
    coFounderName: Joi.string().allow('').max(100).label('Co-Founder Name'),
    founderName: Joi.string().max(100).required().label('Founder Name'),
    categoriesList: Joi.string().required().label('Categories').messages({
        'any.required': 'Select Category',
        'string.base': 'Select Category',
        'string.empty': 'Select Category',
    }),
    description: Joi.string().min(10).max(1000).required().label('Description'),
    fieldOfExpertise: Joi.string().allow('').max(200).label('Field of Expertise'),
});
export const addProfSchema = Joi.object({
    logo: Joi.any().optional().allow('').messages({
        'string.empty': 'Logo is optional but must be a valid image if provided',
    }),
    name: Joi.string().min(3).max(100).required().label('Name'),
    postalAddress: Joi.string().min(10).required().label('Postal Address'),
    ServicesOffered: Joi.string().min(10).required().label('Services Offered'),
    officeHours: Joi.string().min(10).required().label('office Hours'),
    phone: Joi.string()
        .pattern(/^\+?[0-9]{7,15}$/)
        .required()
        .label('Phone')
        .messages({
            'string.pattern.base': 'Phone number must be valid and include country code.',
        }),
    email: Joi.string()
        .pattern(emailPattern) // Use custom regex
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.pattern.base": "Must be a valid email."
        }),
    website: Joi.string().allow('').uri().label('Website'),
    socials: Joi.array().optional()
        .items(
            Joi.object({
                icon: Joi.string().uri().allow('').label('Social Icon'),
                link: Joi.string().uri().required().label('Social Link'),
                name: Joi.string().min(2).max(50).required().label('Social Name'),
            })
        )
        .label('Social Links'),
    categoriesList: Joi.string().required().label('Categories').messages({
        'any.required': 'Select Category',
        'string.base': 'Select Category',
        'string.empty': 'Select Category',
    }),
    description: Joi.string().min(10).max(1000).required().label('Description'),
    fieldOfExpertise: Joi.string().allow('').max(200).label('Field of Expertise'),
});