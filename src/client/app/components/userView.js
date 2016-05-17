


//  The User component gets rendered into the UserView, which then gets rendered into App (index.jsx).  
//  One advantage of rendering like this is that it makes it easier to add components down the line.


import React from 'react';
import {render} from 'react-dom';
require("../styles/styles.css");


var UserModel = require('../model/userInfoModel.js'),
User = require('./user.js'),
user = new UserModel();

var UserView = React.createClass({

    render: function() {

        return (
            <div>

                <User model={user}/>

            </div>

        );

    }

});

module.exports = UserView;



