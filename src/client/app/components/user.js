var React = require('react')
var UserModel = require('../model/userInfoModel.js')
var DataRequest = require('../requests/request.js')
var KeyNavigation = require('./makeSelection.js')

var User = React.createClass({

    componentWillMount: function(){

        this.props.model.on("change", (function() {
          this.forceUpdate();
        }.bind(this)));

        // This is an event listener for the backbone model that tells React to re-render.

    },

    componentDidMount: function(){

        window.addEventListener('keydown', KeyNavigation.handleKeyEvents)

        // This handles interactions with the search results.

    },

    render: function() {

        var p = this.props;
        var userData = p.model.get('userInfo')    //  < --- This accesses the data model 
        var userInfoList = [];                    
    
        if ( userData !== null && userData !== undefined ) {
        
        // The map function below dynamically creates divs with the user's name, screen name, and profile image.
        // These divs are pushed into the userInfoList array, which is loaded in the 'Results' div.

        userData.map(function(element, index){
            return (
                userInfoList.push(
                    
                    (<div id='SingleUserDiv'>
                        
                        <img className='UserImage' 
                            src={element.profile_image_url}>
                        </img> 

                            &nbsp; 
                        
                        {element.name} 

                            &nbsp;
                        
                        <div className='UserScreenName'>
                            @{element.screen_name} 
                        </div> 

                        <br /> 
                        <br /> 
                    </div>

                        )
                    )
                )
            }       
        )}

    

        return (
        <div>
            <div id='AppContainer'> 
                <input id ='SearchInput'onChange={ this.handleChange }></input>
                </div>
            <br />
            <div>
                <div id='Results'>{ userInfoList }</div>  
            </div>
        </div>
        );

    },

    

    handleChange: function(e){
   
    // Whenever the value of 'SearchInput' changes, this function is called. 
    // The function does several checks in the input box to make sure requirements are met before making a request.    

        var atIndex = ( e.target.value ).indexOf( '@' );  

            // ^ Gets the current index of the '@' symbol.  
        
        var newTargetValue = ( e.target.value ).substr( atIndex + 1, e.target.value.length );

            // ^ Trims the query to start one index past the '@' symbol.

        var spaceIndex = newTargetValue.indexOf(' '); 

            // ^ Checks the trimmed query for spaces.

        if( ( e.target.value ).indexOf( '@' ) === -1 ) { return false }

            // ^ If the '@' symbol is not present in the input, don't send the request.

        if ( newTargetValue.length < 2 ) { document.getElementById('Results').style.display = 'none' }

            // ^ Clears the reccomendations if the query length becomes less than 2

        else if ( spaceIndex === -1 && atIndex > -1 && newTargetValue.length >= 2 ){  
         
            // The 'else if'  statement above checks for 3 things:  
                
              // Checks if there are no spaces in the query 
              // Checks if the '@' symbol is present in the input
              // Checks that the query text that follows the '@' symbol is at least 2 characters in length

        document.getElementById('Results').style.display = 'block'

            // ^ Makes the reccomendations visible again if they were hidden due to the query length being less than 2    
        
        var promise = DataRequest.getUserInfo(newTargetValue)
        
        promise.then( (response) => {

           this.props.model.set({'userInfo': response});            // < --- This updates the data model

                })

            }

    }

});

module.exports = User;     
            