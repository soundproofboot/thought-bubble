const { Schema, Types, model } = require('mongoose');

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
    default: Date.now
    // format date
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
    // format date
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