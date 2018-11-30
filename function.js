
document.addEventListener('load',form_filler()); 
//initialize everything
var database=firebase.database();
var ref= new Firebase("https://file-2e88a.firebaseio.com");
var file=ref.child("Reports");

 function firebase_writer(){
 	   
        //gets the data to be pushed based on what the user has filled
        var name=document.getElementById('name').value;
        var description=document.getElementById('description').value;
        var URL= document.getElementById('URL').innerHTML;
        var platform= document.getElementById('platform').innerHTML;
        var account= document.getElementById('account').value;
        var message=document.getElementById('message').value;

        //gets the type of bullying selected by the user
        var x = document.getElementById("type").selectedIndex;
        var y = document.getElementById("type").options;
        var selection=y[x].text;
       
          //push the data to firebase
          file.push({
            Name: name,
            Description: description,
            URL: URL,
            Platform: platform,
            Account: account,
            Message: message,
            Timestamp: Date(),
            Type: selection
            });
            window.alert('Form submitted. Thank you for the report.');
            //window.close(); //inform user of push
        };

 function form_filler(){
 	    //get variables from local storage, and writes them to the form/paragraph

        chrome.storage.local.get(['current_URL'], function (item){
        	var current_URL=item.current_URL;
        	document.getElementById("URL").innerHTML=current_URL;
        	});

        chrome.storage.local.get(['current_Platform'], function (item){
        	var current_Platform=item.current_Platform;
        	document.getElementById("platform").innerHTML=current_Platform;
        	});

        chrome.storage.local.get(['current_Account'], function (item){
        	var current_Account=item.current_Account;
        	document.getElementById("account").setAttribute('value',current_Account);
        	});

        chrome.storage.local.get(['current_Message'], function (item){
        	var current_Message=item.current_Message;
        	document.getElementById("message").value=current_Message;
        	});
         // Once the data is submitted, runs the function to push it to firebase
        document.getElementById("submit").onclick=function() {firebase_writer()};

        };