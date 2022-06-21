module.exports = {


  friendlyName: 'Patch task',


  description: '',


  inputs: {
    completed: {
      type: 'boolean'
    }
  },

  exits: {
    somethingWentWrong: {
      statusCode: 500,
      description: 'Something went wrong! Please try again later.'
    }
  },



  fn: async function (inputs, exits) {
    try {
      await Task.updateOne({ completed: inputs.completed, user: this.req.me.id });
      return this.res.ok();
    } catch (error) {
      throw 'somethingWentWrong';
    }
  }


};
