//check off specific todos by clicking
// $("li").click(function(){
// 	if ($(this).css("color") == "rgb(128, 128, 128)"){
// 		$(this).css({
// 		"color":"black",
// 		"text-decoration":"none"} )
// }

	
// 	else {
// 	$(this).css({
// 		"color":"gray",
// 		"text-decoration":"line-through"} )
// }
// })

$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
})

//click on X and delete the todo list
$("ul").on("click","span",(function(e){
	$(this).parent().fadeOut(500,function()
		{$(this).remove();
		});
	e.stopPropagation();
}))

$("input[type='text']").keypress(function(e){
	if (e.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//remove
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class=\"fas fa-trash\"></i> </span> "+todoText+"</li>");

	}

})

$(".fa-plus").click(function(){
	$('input[type=text]').fadeToggle()
})


