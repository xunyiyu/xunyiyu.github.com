/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 16:11:45
 * @version $Id$
 */
//下例显示一个地图,两秒钟后会移动到新中心点; 
//panTo()方法将让地图平移至新中心点,如果移动距离超过了当前地图区域大小，则地图会直跳到该点。
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.141375,30.257806);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom();//启动鼠标滚轮缩放地图
map.enableKeyboard();//启动键盘操作地图
//控件
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());  
//宾馆

var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
     panel: "result"
  }
});
local.search("宾馆");


var transit=new BMap.TransitRoute(map, {
        renderOptions: {
            map: map,
            panel: "route"
          }
             });
local.searchNearby("宾馆", "西湖",1000);
var college=new BMap.Point(120.019973,30.294177);

var markerarray=[];
local.setMarkersSetCallback(function(pois){
     for(var i=0;i<pois.length;i++){
        markerarray[i]=pois[i].marker;
         pois[i].marker.addEventListener("click", function(e){
          transit.clearResults(); 
      transit.search(college,this.z.title);
         });
     }
 });






//标注
function addMarkers(){
  var playground = new BMap.Marker(new BMap.Point(120.013436,30.295195)); 
  var eight = new BMap.Marker(new BMap.Point(120.014801,30.296594)); 
  var seven = new BMap.Marker(new BMap.Point(120.014985,30.29608)); 
  var ten = new BMap.Marker(new BMap.Point(120.015676,30.297152));
  var nine = new BMap.Marker(new BMap.Point(120.015973,30.296645));
  var six = new BMap.Marker(new BMap.Point(120.016534,30.296255));
  var five = new BMap.Marker(new BMap.Point(120.016705,30.29578));
  var four = new BMap.Marker(new BMap.Point(120.015896,30.295187));
  var three = new BMap.Marker(new BMap.Point(120.01631,30.29472));
  var two = new BMap.Marker(new BMap.Point(120.017298,30.295261));
  var one = new BMap.Marker(new BMap.Point(120.017536,30.294755));
  var canteen = new BMap.Marker(new BMap.Point(120.01821,30.295636));
  var twenty_three = new BMap.Marker(new BMap.Point(120.018578,30.2976));
  var twelve = new BMap.Marker(new BMap.Point(120.019858,30.296739));
  var nineteen = new BMap.Marker(new BMap.Point(120.018079,30.296976));
  map.addOverlay(playground);
  map.addOverlay(one);
  map.addOverlay(two);
  map.addOverlay(three);
  map.addOverlay(four);
  map.addOverlay(five);
  map.addOverlay(six);
  map.addOverlay(seven);
  map.addOverlay(eight);
  map.addOverlay(nine);
  map.addOverlay(ten);
  map.addOverlay(canteen);
  map.addOverlay(twenty_three);
  map.addOverlay(twelve);
  map.addOverlay(nineteen);
  
    
  var opts = {    
    width : 50,     // 信息窗口宽度    
    height: 50,     // 信息窗口高度    
    title : "HZNU"  // 信息窗口标题   
    }  
  playground .addEventListener("click", function(e){  
      
    var infoWindow = new BMap.InfoWindow("操场", opts);  // 创建信息窗口对象    
    map.openInfoWindow(infoWindow,new BMap.Point(120.013436,30.295195)); 
       
    });
  one .addEventListener("click", function(e){ 
    var infoWindow = new BMap.InfoWindow("博文苑1号楼便利超市", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.017536,30.294755));
       
    });
  two.addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑2号楼", opts);    
    map.openInfoWindow(infoWindow,new BMap.Point(120.01737,30.295421));
       
    });
  three .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑3号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.01631,30.29472));
    });
  four .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑4号楼萌站", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.015896,30.295187));  
    });
  five .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑5号楼晨光文具&水果超市&电脑维修", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.016705,30.29578));    
    });
  six .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑6号楼仓前图文制作部&菜鸟驿站", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.016534,30.296255));  
    });
  seven .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑7号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.014985,30.29608));   
    });
  eight .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑8号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.014801,30.296594)); 
    });
  nine .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑7号楼便利超市&医务室", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.015973,30.296645)); 
    });
  ten .addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("博文苑10号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.015676,30.297152)); 
    });
  canteen.addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("食堂", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.01821,30.295636)); 
    });
  twenty_three.addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("恕园23号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.018578,30.2976)); 
    });
  twelve.addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("恕园12号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.019858,30.296739)); 
    });
  nineteen.addEventListener("click", function(e){    
    var infoWindow = new BMap.InfoWindow("恕园19号楼", opts); 
    map.openInfoWindow(infoWindow,new BMap.Point(120.018079,30.296976)); 
    });
}
addMarkers();
    
    // 创建地址解析器实例 
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野    
    myGeo.getPoint("杭州市余杭区海曙路58号", function(point) {
      if (point) {
        map.centerAndZoom(point, 17.5);
      //标注
      var marker = new BMap.Marker(point);  
         map.addOverlay(marker);
      marker.enableDragging();  
      }
    }, "杭州市");
