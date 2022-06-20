module.exports = {


  friendlyName: 'Get task',


  description: '',


  inputs: {

  },


  exits: {
    somethingWentWrong: {
      statusCode: 500,
      description: 'Something went wrong! Please try again later.'
    }
  },


  fn: async function (inputs, exits) {

    // All done.
    try {
      let tasks = await Task.find({ user: this.req.me.id });
      return exits.success(tasks);
    } catch (error) {
      throw 'somethingWentWrong';
    }
  }


};
