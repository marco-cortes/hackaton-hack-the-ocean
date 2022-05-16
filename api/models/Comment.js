const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
        required: true
    }
});

CommentSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports.model = model('Comment', CommentSchema);