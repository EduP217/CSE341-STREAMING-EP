const Joi = require("@hapi/joi");
const utils = require("../config/utilities");

const streamingSchema = Joi.object({
  name: Joi.string().required(),
  nickname: Joi.string().required(),
  event: Joi.string().required(),
  country: Joi.string().case('upper').required(),
  "date-scheduled": Joi.date().greater(
    utils.addTimeToDateAfterDate(Date.now(), 1, "D")
  ).raw(),
  session: {
    viewers: Joi.number().min(0).max(999999999999).integer(),
    followers: Joi.number().min(0).max(999999999999).integer(),
    "datetime-start": Joi.date().iso().raw(),
    "datetime-end": Joi.date().iso().raw(),
  },
  status: Joi.string()
    .required()
    .valid(...["created", "scheduled", "online", "finished", "canceled"]),
});

module.exports = {
  streamingSchema,
};
