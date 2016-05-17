

// Data is sent here from the handleChange function in user.js.  
// The user.js render function gets the data from here and displays it.



var Model = require('backbone-model').Model,
   
    UserModel = Model.extend({
      userInfo: null
    });




module.exports = UserModel;
