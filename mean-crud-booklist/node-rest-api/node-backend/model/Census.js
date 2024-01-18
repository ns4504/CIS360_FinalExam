const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    totalPeopleInHome: { type: String },
    streetName: { type: String },
    cityName: { type: String },
    stateName: { type: String },
    zipCode: { type: String },
    censusYear: { type: String },
    censusTakerName: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'cens'
});

module.exports = mongoose.model('Census', CensusSchema);
