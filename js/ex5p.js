/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 15:38:05
 * @version $Id$
 */

$("div div:eq(0)").on("click", function(){
	$("div div:eq(1)").html("hello");
});
$("div div:eq(1)").on("click", function(){
	$("div div:eq(0)").css("width","150px");
});
$("div div:eq(2)").on("click", function(){
	$("div div:eq(2)").css("background-color","red");
});
$("div div:eq(3)").on("click", function(){
	$(".txt").html("sunday");
});