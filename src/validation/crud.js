let Joi = require('joi');

const validation = {
    body: {
        domain: Joi.string().required(),
        properties: Joi.object().pattern(/\w/, Joi.object().keys({
            type:Joi.string().regex(/(string)|(decimal)|(float)|(date)|(integer)/g).lowercase()
        }).requiredKeys('type')).min(1).required()
    }
}

export default validation;