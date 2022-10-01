const model = require("../models/streamings");
const { streamingSchema } = require("../helpers/validators");
const createError = require('http-errors');

const all = async (req, res, next) => {
  await model
    .find()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(createError(500, err)));
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  await model
    .findById(id)
    .then((data) => {
      if (!data)
        return next(createError(404, `The Streaming with ID: ${id} was not found`));
      return res.status(200).json(data);
    })
    .catch((err) => next(createError(500, err)));
};

const create = async (req, res, next) => {
  const streaming = req.body;
  res.setHeader("content-type", "application/json");

  // Validate request
  await streamingSchema
    .validateAsync(streaming)
    .then(async (valid) => {
      console.log(valid);
      // Process data to database
      await model
        .create(valid)
        .then((r) =>
          res.status(201).json({
            message: "The Streaming was created successfully",
            streamingId: r.id,
          })
        )
        .catch((err) => next(createError(500, err || "Some error occurred while creating the Streaming")));
    })
    .catch((err) => next(createError(422, err)));
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const streaming = req.body;
  res.setHeader("content-type", "application/json");

  // Validate request
  await streamingSchema
    .validateAsync(streaming)
    .then(async (valid) => {
      console.log(valid);
      // Process data to database
      await model
        .findByIdAndUpdate(id, valid)
        .then((r) => {
          if (!r)
            return next(createError(404, `Cannot update The Streaming with ID: ${id}, maybe it was not found`));
          return res
            .status(204)
            .send({ message: "The Streaming was updated successfully" });
        })
        .catch((err) => next(createError(500, err )));
    })
    .catch((err) => next(createError(422, err )));
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  // Process data to database
  res.setHeader("content-type", "application/json");
  await model
    .findByIdAndDelete(id)
    .then((r) => {
      if (!r)
        return next(createError(404, `Cannot delete The Streaming with ID: ${id}, maybe it was not found`));
      return res
        .status(200)
        .json({ message: "The Streaming was deleted successfully" });
    })
    .catch((err) => next(createError(500, err )));
};

module.exports = {
  all,
  findById,
  create,
  update,
  destroy,
};
