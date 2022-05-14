const { Schema, model } = require('mongoose');

const RecomendationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
        required: true
    }
});

EventSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = model('Recomendation', RecomendationSchema);