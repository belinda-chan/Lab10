let mongoose = require('mongoose');

let warehouseSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: String,
    capacity: {
        type: Number,
        min: 200,
        max:500
    }
})

let warehouseModel = mongoose.model('Warehouse', warehouseSchema);