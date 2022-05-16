const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    files: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

ReportSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = model("Report", ReportSchema);