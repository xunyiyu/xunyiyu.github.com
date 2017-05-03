/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 09:57:05
 * @version $Id$
 */
/*-------------PART ONE-----------*/
$(document).ready(function(){
	//点击事件是否屏蔽标志
	var flag=true;
	// 大图片初始状态
	$(".ui-box1-bigbox").hide();

	// 点击小图片时，出现放大版图片
	$("li").click(function(){
		if(flag){
			// 将小图片路径复赋值给大图片
			var imgsrc=$(this).find('img').attr('src');
		 	$("#img").attr("src", imgsrc);
			$(".ui-box1-bigbox").show();
			//设置透明
			$("ul").css("opacity","0.4");
		}
		flag=false;//屏蔽点击事件
	});

	// 点击大图片时，大图片隐藏
	$(".ui-box1-bigbox").click(function(){
		$(".ui-box1-bigbox").hide();
		//透明复原
		$("ul").css("opacity","1.0");

		flag=true;//解除屏蔽
	});


});

/*-------------PART TWO-----------*/
$(document).ready(function(){
  $(".ui-box2-header-button").eq(0).css("background-color", "#C0C0C0");
  $(".ui-box2-content-text").eq(0).show();
  $(".ui-box2-header-button").eq(0).on("click", function() {
      $(".ui-box2-header-button").css("background-color", "white");
      $(this).css("background-color", "#C0C0C0");
      $(".ui-box2-content-text").hide();
      $(".ui-box2-content-text").eq(0).show();
    });
  $(".ui-box2-header-button").eq(1).on("click", function() {
      $(".ui-box2-header-button").css("background-color", "white");
      $(this).css("background", "#C0C0C0");
      $(".ui-box2-content-text").hide();
      $(".ui-box2-content-text").eq(1).show();
    });
  $(".ui-box2-header-button").eq(2).on("click", function() {
      $(".ui-box2-header-button").css("background-color", "white");
      $(this).css("background", "#C0C0C0");
      $(".ui-box2-content-text").hide();
      $(".ui-box2-content-text").eq(2).show();
    });
});
/*-------------PART Three-----------*/
$(document).ready(function(){
var length=3;
$(".ui-box3-button-add").click(function(){
$(".ui-box3-message").eq(0).append(
  "<div class='ui-box3-message-item'><div class='ui-box3-message-item-num'>1</div><input type='text' class='ui-box3-message-item-content'><div class='ui-box3-message-item-button'>Delete</div></div>");
++length;
for(i=0;i<length;i++){
  $(".ui-box3-message-item-num").eq(i).text(i+1);
}
});

$("body").on('click', '.ui-box3-message-item-button', function(event) {
   var index = $(this).parent().index();
   --length;
$(this).parent().remove();
for(i=0;i<length;++i){
$(".ui-box3-message-item-num").eq(i).text(i+1);
 }
});
});