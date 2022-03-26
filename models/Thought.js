const { Schema, Types, model } = require('mongoose');
const formatDate = require("../utils/format-date");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    validate: {
      validator: function (text) {
        return text.length < 280;
      },
      message: 'Your thought is too long',
    },
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal)
  }
}, {
  toJSON: {
    getters: true
  }
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Your thought cannot be empty',
    validate: {
      validator: function(text) {
        return text.length < 280;
      },
      message: 'Your thought is too long'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;