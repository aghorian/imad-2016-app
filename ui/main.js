// counter code
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function() {
   
    //Create the request object
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttprequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
               // counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    // Make the request
    request.open('GET','http://aghorian.imad.hasura-app.io',true);
    request.send(null);
};