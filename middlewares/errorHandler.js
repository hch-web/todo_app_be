import { StatusCodes } from 'http-status-codes';

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);

    res.status(StatusCodes.BAD_REQUEST).json({ message: messages });
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' });
};

export default errorHandler;
