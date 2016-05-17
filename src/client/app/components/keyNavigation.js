exports.handleKeyEvents = function () {

	var divs = document.getElementById('Results').getElementsByTagName('div'),
    selectedDiv = 0

    for(var i = 0; i < divs.length; i++){
        divs[i].onmouseover = (function(i){
           return function(){
               divs[selectedDiv].style.backgroundColor = '';
               selectedDiv = i;
               divs[selectedDiv].style.backgroundColor = '#68F';
           }
        })(i)
        
        divs[i].onclick = function(){
            
        	var inputVariable = document.getElementById('AppContainer').getElementsByTagName('input')[0] 

        		var tweetContent = (inputVariable.value).substr(inputVariable.value[0], inputVariable.value.indexOf('@'))
        		inputVariable.focus()
        		inputVariable.value = tweetContent + 
        	    (this.innerText).substr((this.innerText).indexOf('@'), this.innerText.length)
        },


         divs[i].addEventListener = function(event) {
			event.preventDefault();
			if (event.keyCode == 13) {
			    divs[i].click();
			}
		}
    }

    divs[selectedDiv].style.backgroundColor = '#68F';

    document.getElementById('AppContainer').getElementsByTagName('input')[0].focus();

} 

