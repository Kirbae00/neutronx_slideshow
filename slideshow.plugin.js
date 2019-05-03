//META{"name":"Slideshow"}*//

var Slideshow = function () {};
var slides = bdPluginStorage.get("Slideshow", "array");
var interval = 10000;
var i = 0;
Slideshow.prototype.start = function (){
    var i = 0;
    var handle = setInterval(function () {

		let root = document.documentElement;
		
        root.style.setProperty("--bgImage", "url('" + slides[i] + "')");

        i++;

        if (i >= slides.length) {
            i = 0;
        }
    }, interval);
	window.add_element=function(parentId, elementTag, elementId, html){
	slides.push(document.getElementById('t1').value); // adding element to array
	document.getElementById('t1').value=''; // Making the text box blank
	disp();
	bdPluginStorage.set("Slideshow", "array", slides);
	}; // displaying the array elements
	window.disp=function(parentId, elementTag, elementId, html){
	var str='';
	str = 'total number of pictures in array : ' + slides.length + '<br>';
	for (i=0;i<slides.length;i++) 
	{ 
	str += i + ':'+slides[i] + "<input class='btn-slide' type=button value='remove' onClick='arrayRemove("+ i + ");'></br>";  // adding each element with key number to variable
	};

	document.getElementById('disp').innerHTML=str; // Display the elements of the array
	};	
	window.arrayRemove = function(value) {

	slides.splice(value,1)
	disp();
	bdPluginStorage.set("Slideshow", "array", slides);
	}
	window.showdisp =function() {
	disp();
}
};		


Slideshow.prototype.load = function ($, interval, slides) {
	

}



Slideshow.prototype.unload = function ($, interval, slides) {
	bdPluginStorage.set("Slideshow", "array", slides);
    var i = 0;
    var handle = setInterval(function () {


        $('body').css("");

        i++;

        if (i >= slides.length) {
            i = 0;
        }
    }, interval);

}

Slideshow.prototype.stop = function () {

};

Slideshow.prototype.onMessage = function () {
    //called when a message is received
};

Slideshow.prototype.onSwitch = function () {
    //called when a server or channel is switched
};

Slideshow.prototype.observer = function (e) {
    //raw MutationObserver event for each mutation
	
};

Slideshow.prototype.getName = function () {
    return "slideshow";
};


Slideshow.prototype.getSettingsPanel = function () {
	return "<h3>Settings</h3></br><p>Input url to image and click add</p></br><input type=text  id='t1'><input class='btn-slide'type=button value='Add' onClick='add_element();'><div id=disp onLoad='showdisp();'></div>";
	
};	

Slideshow.prototype.getDescription = function () {
    return "Slideshow";
};

Slideshow.prototype.getVersion = function () {
    return "0.1.0";
};

Slideshow.prototype.getAuthor = function () {
    return "Kirbae";
};


