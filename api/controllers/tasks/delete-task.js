module.exports = {


  friendlyName: 'Delete task',


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
    try {
      let task = await Task.destroyOne({ user:this.req.me.id, id: this.req.param('id') });
      return exits.success(task);
    } catch (error) {
      console.error(error);
      throw 'somethingWentWrong';
    }
  }


};
