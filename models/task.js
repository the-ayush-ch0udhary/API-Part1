const mongoose = require("mongoose");

// schema for storing task details

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    status: {
        type: String,
        default: "Pending"
    }

    }, 
    { versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("Task", taskSchema);