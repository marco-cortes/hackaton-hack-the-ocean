const { Schema, model } = require('mongoose');

const DestinationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    ubication: {
        type: {
            lat: Number,
            lng: Number
        },
        required: true
    },
    photos: {
        type: [String],
        required: true
    },
    videos: {
        type: [String],
        required: true
    },
    comments: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }],
        required: true
    },
    recommendations: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Recommendation'
        }],
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

EventSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = model('Destination', DestinationSchema);