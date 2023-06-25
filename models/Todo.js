import mongoose, { Schema } from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    dateTime: {
      type: Date,
      default: null,
    }
  },
  { timestamps: true, versionKey: false, toJSON: { virtuals: true } },
);

todoSchema.virtual('id').get(function () {
  return this._id;
});

export const Todo = mongoose.model('Todo', todoSchema);
