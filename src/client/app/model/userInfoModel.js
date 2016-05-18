

// Data is sent here from the handleChange function in user.js.  
// The user.js componentWillMount function gets the data from here and tells React to re-render.



var Model = require('backbone-model').Model,
   
    UserModel = Model.extend({
      
      userInfo: null

    });




module.exports = UserModel;
