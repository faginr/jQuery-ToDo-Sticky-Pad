// Clicking Todos toggles strikethrough text and changes color of text
// $("li").click(function(){ ------ this will only apply to original lis, not those created later. Must use parent child style syntax to affect later lis.
   $("ul").on("click", "li", function(){
	$(this).toggleClass("completed");


   /* 	
	// if li is silver
	if($(this).css("color") === "rgb(192, 192, 192)"){
		$(this).css({
		//turn li black
			color: "black",
			textDecoration: "none"
		});
	}
	// else turn li silver 
	else{
		$(this).css({	
			color: "silver",
			textDecoration: "line-through"
		});	
	}
	*/	 
    
});

// Clicking on X makes line fade-out and disappear
$("ul").on("click", "span", function(event){
	// above line must target ul not li, because ul is rendered and never removed, whereas li can be added after the initial load
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});	
	event.stopPropagation();
})

/*
event.stopPropagation will keep an event from (bubbling) cascading into other events, such as toggling strikethrough after removal
this changes from referring to the span to referring to the li parent of the span after .parent() is envoked


*/

// Typing something and hitting enter makes a new todo item.

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab users text from input
		var userText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + userText + "</li>")
	}
});


$(".fa-chevron-circle-down").click(function(){
	$("input[type='text']").fadeToggle();
})