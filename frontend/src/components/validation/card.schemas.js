import * as Joi from 'joi';

const linkPattern = Joi.string().allow('').pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

export const schemas = Joi.object({
    title: Joi.string().required().messages({
      'string.base': `Le titre doit être une chaîne de caractères`,
      'string.empty': `Le titre est obligatoire`,
      'any.required': `Le titre est obligatoire`
    }),
    description: Joi.string().allow(''),
    link: linkPattern.messages({
      'string.pattern.base': `Le lien indiqué n'est pas au bon format`,
    }),
    compagny_name: Joi.string().required().messages({
      'string.base': `Le nom de l'entreprise doit être une chaîne de caractères`,
      'string.empty': `Le nom de l'entreprise est obligatoire`,
      'any.required': `Le nom de l'entreprise est obligatoire`
    }),
    compagny_address: Joi.string().allow(''),
    contact_name: Joi.string().allow(''),
    contact_firstname: Joi.string().allow(''),
    contact_email: Joi.string().email({ tlds: { allow: false } }).allow('').messages({
      'string.base': ``,
      'string.email': `L'adresse e-mail n'est pas au bon format`,
      'any.required': ``
    }),
    contact_phone: Joi.string().allow(''),
    notes: Joi.string().allow(''),
    position: Joi.number().integer().greater(0).required(),
    status_id: Joi.number().integer().required(),
    candidacy_id: Joi.number().integer().required().messages({
      'number.base': `Le type d'offre est obligatoire`,
      'any.required': `Le type d'offre est obligatoire`
    }),
    type_compagny_id: Joi.number().integer().required().messages({
      'number.base': `Le type de compagnie est obligatoire`,
      'any.required': `Le type de compagnie est obligatoire`
    }),
    list_id: Joi.number().integer().required(),
  });
