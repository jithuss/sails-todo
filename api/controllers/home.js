module.exports = {


  friendlyName: 'Home',


  description: 'Just some action to test',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exits) {

    // All done.
    exits.success({ message: 'hi'});

  }


};
