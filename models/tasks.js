const mongoose = require("mongoose")
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title must be specified"],
        trim: true,
        maxlength: [20, "title cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model("Task", TaskSchema)