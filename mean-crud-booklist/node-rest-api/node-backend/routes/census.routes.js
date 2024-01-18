const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Censuss
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get censuss: ${error}`);
  })
})
// Add a census
censusRoute.route('/add-census').post((req, res) => {
Census.create(req.body).then(() => {
console.log('Census added successfully.');
res.status(200);
})
.catch((error) => {
console.error(`Could not save census: ${error}`);
})
})
// Delete a census
censusRoute.route('/delete-census/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Census.findByIdAndDelete(req.params.id).then(() => {
  console.log('Census deleted successfully.');
  res.status(200);
  })
  .catch((error) => {
  console.error(`Could not delete census: ${error}`);
  })
})

censusRoute.route('/update-census/:id').put((req, res) => {
  console.log(`Preparing to update: ${req.params.id}`);
  Census.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedCensus) => {
      if (!updatedCensus) {
        console.error('Census not found for update.');
        res.status(404).send('Census not found for update.');
        return;
      }
      console.log('Census updated successfully.');
      res.status(200).json(updatedCensus);
    })
    .catch((error) => {
      console.error(`Could not update census: ${error}`);
      res.status(500).send(`Could not update census: ${error}`);
    })
})

module.exports = censusRoute;