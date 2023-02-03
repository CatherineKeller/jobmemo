const Joi = require('joi');

const emailPattern = Joi.string().min(3).pattern(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/);
const linkPattern = Joi.string().pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);

const schemas = {
  // post: Joi.array().items(
  //   Joi.object({
  //     position: Joi.number().integer().greater(0),
  //     // card: {
  //     //   title: Joi.string(),
  //     //   contact_email: emailPattern,
  //     // },
  //   }),
  // ),
  post: Joi.object({
    title: Joi.string(),
    compagny_name: Joi.string(),
    compagny_address: Joi.string(),
    position: Joi.number().integer().greater(0),
    list_id: Joi.number().integer(),
    status_id: Joi.number().integer(),
    candidacy_id: Joi.number().integer(),
    type_compagny_id: Joi.number().integer(),
    link: linkPattern,
    contact_email: Joi.string().email(),
  }),
};

module.exports = schemas;
