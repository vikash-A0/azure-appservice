const Joi = require('joi').extend(require('@joi/date'));
const {metric_name,count,average,date} = require('../models/azure');


const schema = Joi.object({
    MetricName: Joi.string().min(2).max(20),
    count: Joi.number().greater(-1).less(100),
    avg: Joi.number(),
    TimeGenerated : Joi.date(),
   max:Joi.number(),
   min:Joi.number()
   
});

module.exports = schema;