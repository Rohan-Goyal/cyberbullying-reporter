
  
  chrome.runtime.onInstalled.addListener(function() {
    console.log('I have awoken.'); 
    });

chrome.browserAction.onClicked.addListener(function() {
	// find the current tab, and execute the inject.js file
	chrome.tabs.query({active: true, lastFocusedWindow: true
        }, function(tabs) 
        {
 
            var tab = tabs[0];
	chrome.tabs.executeScript(null,{file:'inject.js'})
		});
});
