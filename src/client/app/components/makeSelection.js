// This function allows you to click on a suggestion and have it replace the handle you've written so far.

exports.handleKeyEvents = function() {
  var divs = document.getElementById("Results").getElementsByTagName("div"),
    selectedDiv = 0;

  for (var i = 0; i < divs.length; i++) {
    (divs[i].onclick = function() {
      var inputVariable = document.getElementById("AppContainer").getElementsByTagName("input")[0];

      // ^ Targets the text input box

      var tweetContent = inputVariable.value.substr(
        inputVariable.value[0],
        inputVariable.value.indexOf("@")
      );

      // ^ Grabs the tweet message that you've written so far, minus the '@'handle you've typed

      inputVariable.value =
        tweetContent + this.innerText.substr(this.innerText.indexOf("@"), this.innerText.length);

      // ^ Sets the value of the input box to the tweet message and the Twitter handle grabbed from the div
    }),
      document
        .getElementById("AppContainer")
        .getElementsByTagName("input")[0]
        .focus();

    // ^ Puts the caret back in the search box so you don't have to click on it to keep typing again
  }
};
