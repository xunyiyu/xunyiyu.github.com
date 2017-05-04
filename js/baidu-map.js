/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 16:11:45
 * @version $Id$
 */
//下例显示一个地图,两秒钟后会移动到新中心点; 
//panTo()方法将让地图平移至新中心点,如果移动距离超过了当前地图区域大小，则地图会直跳到该点。
var map = new BMap.Map("myMap");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
window.setTimeout(function() {
  map.panTo(new BMap.Point(116.409, 39.918));
}, 2000);



map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
//map.setCurrentCity("北京"); 



/*var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})
*/
//map.removeOverlay(marker);
/*var opts = {
  width: 30, // 信息窗口宽度    
  height: 30, // 信息窗口高度    
  title: "Hello" // 信息窗口标题   
}
var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象    
map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
*/
/*
//在两点之间创建6像素宽的蓝色折线
var polyline = new BMap.Polyline([
  new BMap.Point(116.399, 39.910),
  new BMap.Point(116.405, 39.920)
], {
  strokeColor: "blue",
  strokeWeight: 2,
  //线条不透明度
  strokeOpacity: 0.5
});
map.addOverlay(polyline);
*/
/*
//通过参数e得到点击的经纬度坐标
map.addEventListener("click", function(e){    
 alert(e.point.lng + ", " + e.point.lat);    
});
*/

//通过this得到地图缩放后的级别。
//var map = new BMap.Map("container");    
//map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
map.addEventListener("zoomend", function(){    
 alert("地图缩放至：" + this.getZoom() + "级");    
});