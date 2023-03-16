const Joi = require('joi');

// const emailPattern = Joi.string().min(3).pattern(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/);
const linkPattern = Joi.string().allow('').pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

const schemas = {
  post: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(''),
    link: linkPattern,
    compagny_name: Joi.string().required(),
    compagny_address: Joi.string().allow(''),
    contact_name: Joi.string().allow(''),
    contact_firstname: Joi.string().allow(''),
    contact_email: Joi.string().email({ tlds: { allow: false } }).allow(''),
    contact_phone: Joi.string().allow(''),
    notes: Joi.string().allow(''),
    position: Joi.number().integer().greater(0).required(),
    status_id: Joi.number().integer().required(),
    candidacy_id: Joi.number().integer().required(),
    type_compagny_id: Joi.number().integer().required(),
    list_id: Joi.number().integer().required(),
  }),
};

module.exports = schemas;
