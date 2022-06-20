module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    this.req.me = null;
    this.res.clearCookie('token');
    return exits.success();
  }
};
