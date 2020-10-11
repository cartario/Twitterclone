import {model, Schema} from 'mongoose';

const TweetsSchema = new Schema ({  
  text: {
    required: true,
    type: String
  },
  user: {       
    type: Schema.Types.Mixed,
    ref: 'User'
  },
  postUrl: {
    required: true,
    type: String    
  }     
});

export const TweetsModel = model('Tweets', TweetsSchema);
