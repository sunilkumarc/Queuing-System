var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var requestsSchema = new Schema({
     request_id: String,
     requester_id: String,
     driver_assigned: {
         type: String,
         default: null
     },
     requested_at: {
         type: Number,
         default: new Date().getTime()
     },
     status: {
         type: String,
         default: 'Waiting'
     }
 });

requestsSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {
        ret.request_id = ret._id;
        delete ret._id;
        delete ret.id;
    }
});

module.exports = mongoose.model('requests', requestsSchema);