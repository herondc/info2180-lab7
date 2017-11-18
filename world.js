window.onload=function(){
    
    var btn= document.getElementById('lookup');
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    
    btn.addEventListener('click',function(element) {
        element.preventDefault();
        
        var checked=document.getElementById('rundllshell').checked;
        if (checked==true) {
         httpRequest.onreadystatechange = processAll;
         httpRequest.open('GET','world.php?country=all=true', true);
         httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         httpRequest.send();
        } else {
         var country_search=document.getElementById('country').value;
         httpRequest.onreadystatechange = processCountry;
         httpRequest.open('GET','world.php?country='+country_search, true);
         httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         httpRequest.send();
        }
    });
    function processAll() {
              if(httpRequest.readyState===XMLHttpRequest.DONE){
                 if(httpRequest.status===200){
            
                    var response=httpRequest.responseText;
                    var output=document.getElementById('result');
            
                    output.innerHTML="<h1> Search Result<h1/><br>"+response;
                }
                else{
                 alert("There was a problem with the request");
                }
             }
             
         }
      function processCountry() {
             if(httpRequest.readyState===XMLHttpRequest.DONE){
                 if(httpRequest.status===200){
            
                    var response=httpRequest.responseText;
                    var output=document.getElementById('result');
            
                    output.innerHTML="<h1> Search Result<h1/><br>"+response;
                    
                     
                }
                else{
                 
                 alert("There was a problem with the request");
                 
                    
                }
             }
             
         }
};