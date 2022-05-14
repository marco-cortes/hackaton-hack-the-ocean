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
    recommendations: {
        type: [{
            title: String,
            text: String,
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
    },
    status: {
        type: String,
        enum: ['ACCEPTED', 'PENDING', 'REJECTED'],
        default: 'PENDING'
    }
});

DestinationSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = model('Destination', DestinationSchema);