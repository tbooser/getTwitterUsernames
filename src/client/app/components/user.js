var React = require('react')
var UserModel = require('../model/userInfoModel.js')
var DataRequest = require('../requests/request.js')


var User = React.createClass({

     componentWillMount: function(){
        this.props.model.on("change", (function() {
          this.forceUpdate();
        }.bind(this)));
    },

    render: function() {
        var p = this.props;
        var userData = p.model.get('userInfo')
        var userInfoList = [];
    
        if ( userData !== null && userData !== undefined ) {
    
        userData.map(function(element, index){
            return (
                userInfoList.push(
                    (<div>
                        <img className='UserImage' src={element.profile_image_url}></img> &nbsp; 
                        <img className='TweetyBird' src='https://g.twimg.com/blog/s200/twitter-bird.png'></img>
                        @{element.screen_name} &nbsp; 
                        {element.name}
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
        <div> 
            <input id ='SearchInput'onChange={this.handleChange}></input>
            </div>
        <br />
        <div>
            <div id='Results'>{userInfoList}</div>  
        </div>
    </div>
    );

},

    






    handleChange: function(e){
        
        var p = this.props;
        
        var atIndex = ( e.target.value ).indexOf( '@' );  

            // ^ Gets the current value of the '@' symbol.  
        
        var newTargetValue = ( e.target.value ).substr( atIndex + 1, e.target.value.length );

            // ^ Trims the query to start one index past the '@' symbol.

        var spaceIndex = newTargetValue.indexOf(' '); 

            // ^ Checks the trimmed query for spaces.

        if( ( e.target.value ).indexOf( '@' ) === -1 ) { return false }

            // ^ If the '@' symbol is not present in the input, don't send the request.

        else if ( spaceIndex === -1 && atIndex > -1 && newTargetValue.length >= 2 ){  
         
            // The 'else if'  statement above checks for 3 things:  
                
              // Checks if there are no spaces in the query 
              // Checks if the '@' symbol is present in the input
              // Checks that the text that follows the '@' symbol is at least 2 characters in length
        
        var promise = DataRequest.getUserInfo(newTargetValue)
        
        promise.then( (response) => {

            p.model.set({'userInfo': response});  

                })

            }

    }

});

module.exports = User;     
            