window.onload = function(){
	var source = (document.querySelector(".demo script")).innerHTML;

	var code = Prism.highlight(source, Prism.languages.jsx);

	var element = document.createElement("pre");
	element.classList.add("sourcecode");
	element.innerHTML = "<code>" + code + "</code>";

	document.getElementById("sourcecode").appendChild(element);
};