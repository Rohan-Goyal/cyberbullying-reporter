//gets current URL and platform, and writes them to storage
    var current_URL=window.location.href;
    var current_Platform=window.location.hostname;
    chrome.storage.local.set({'current_URL':current_URL});
    chrome.storage.local.set({'current_Platform':current_Platform});
//initialize current message and account (necessary, because this is not Python)
    var current_Message="";
    var current_Account="";
//gets current message and account based on platform
    if (current_Platform== 'twitter.com'){
         current_Message=document.getElementsByClassName("TweetTextSize  js-tweet-text tweet-text")[0].textContent; 
         current_Account=document.getElementsByClassName('username u-dir u-textTruncate')[0].textContent;
         
         } else if (current_Platform=="www.facebook.com"){
          current_Message= document.getElementsByClassName("_5pbx userContent _3576")[0].textContent;
          current_Account=document.getElementsByClassName("_2wmb")[0].textContent; 
 
          }else if (current_Platform=="www.instagram.com"){
           current_Message="N.A- Image post";
           if (typeof document.getElementsByClassName("FPmhX notranslate nJAzx")[0] != "undefined"){
           current_Account=document.getElementsByClassName("FPmhX notranslate nJAzx")[0].innerHTML;}
 //xkcd is just a test value, and a bit of an easter egg.
          }else if (current_Platform=="xkcd.com"){
          current_Message=document.getElementById('comic_hovertext').innerHTML;};
//writes current message and account to local storage
    chrome.storage.local.set({'current_Message': current_Message});
    chrome.storage.local.set({'current_Account':current_Account});
//opens form in new window
    var div=document.getElementsByTagName('div')[0];
    var extensionURL=chrome.runtime.getURL('/extension.html')
    //div.onClick= window.open(extensionURL);
    div.onClick=window.open(extensionURL, '_blank', 'height=650,width=400, left=50, top=50');
    div.click();


