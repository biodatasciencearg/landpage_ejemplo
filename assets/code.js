
var date_ ,month_, year_;

$(document).ready(function(){
  // fetch all DOM elements for the input
  date_ = document.getElementById("feature1");
})

$(document).on('click','#submit',function(){
    // on clicking submit fetch values from DOM elements and use them to make request to our flask API
    var date = date_.value;
    if(date == ""){
      // you may allow it as per your model needs
      // you may mark some fields with * (star) and make sure they aren't empty here
      alert("empty fields not allowed");
    }
    else{
      // replace <username> with your pythonanywhere username
      // also make sure to make changes in the url as per your flask API argument names
      var requestURL = "http://127.0.0.1:5000/sentiment/";
      console.log(requestURL); // log the requestURL for troubleshooting
      $.getJSON(requestURL, function(data) {
        console.log(data); // log the data for troubleshooting
        prediction = data['price']; // Reminder: we added added price in the dictionary with the key 'price' on flask response json
      });
      // following lines consist of action that would be taken after the request has been read
      // for now i am just changing a <h2> tag's inner html using jquery
      // you may simple do: alert(prediction);
      $(".result").html("Predicted price is: $" + prediction);
    }
  });
