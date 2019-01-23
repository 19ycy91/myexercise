var list = document.getElementsByTagName("li")

for (var i = 0; i<list.length; i+=1){
	console.log(i)
	list[i].addEventListener("mouseover", function(){ this.classList.add("green")});
	list[i].addEventListener("mouseout", function(){this.classList.remove("green")});
	list[i].addEventListener("click", function(){this.classList.toggle("checked")});
}
