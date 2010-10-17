if (document.URL == 'http://www.delicious.com/save')
{
//  alert('closing...');
//  chrome.extension.sendRequest({close: true});
  self.close();
//  alert('should have closed by now');
}
//  chrome.extension.sendRequest({greeting: "hello"}, function(response) {
//    alert(response.farewell);
//  });

/*
var button = document.getElementById("mybutton");
button.person_name = "Roberto";
button.addEventListener("click", function() {
  alert(greeting + button.person_name + ".");
}, false);
*/


//http://www.delicious.com/save?url=http://www.codetoad.com/javascript_get_selected_text.asp&title=CodeToad%20-%20Javascript%20Get%20Selected%20Text.&v=5&noui=1&jump=close
