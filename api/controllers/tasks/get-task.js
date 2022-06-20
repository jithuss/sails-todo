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
      let task = await Task.findOne({ user:this.req.me.id, id: this.req.param('id') });
      return exits.success(task);
    } catch (error) {
      console.error(error);
      throw 'somethingWentWrong';
    }
  }
};
