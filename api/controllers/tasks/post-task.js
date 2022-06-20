module.exports = {


  friendlyName: 'Post task',


  description: '',


  inputs: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
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
      await Task.create({ title: inputs.title, description: inputs.description, user: this.req.me.id });
      return this.res.ok();
    } catch (error) {
      throw 'somethingWentWrong';
    }

  }


};
