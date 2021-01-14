const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})
// the model method lets us to interact directly with the DB
module.exports = mongoose.model('Subscriber', subscriberSchema)