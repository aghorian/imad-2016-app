// counter code
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function() {
   
    //Create the request object
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
               // counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // Make the request
    request.open('GET','http://aghorian.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    // make a request to the server with the name entered on the screen and send it too
    // Capture a list of names and render it as a list
    
    //Create the request object
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i=0; i < names.length; i++) {
               list += '<li>' + names[i] + '</li>';
      }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;  
    }
   }
 };
    
// submit name
  var nameInput = document.getElementById('name');
  var name      = nameInput.value;
    // Make the request
    request.open('GET','http://aghorian.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
    
};