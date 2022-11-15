const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

const { getAllTours, createTour, getTour, updateTour, deleteTour, aliasTopTours, getTourStats } =
  tourController;

router.route('/').get(getAllTours).post(createTour);

router.route('/tour-stats').get(getTourStats)

router.route('/top-5-cheap').get(aliasTopTours, getAllTours)

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
