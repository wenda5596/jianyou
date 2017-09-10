$(function() {
	$(".renttab>div").attr("checkindex","true")
	var a=$(this).attr("checkindex");
	$(".renttab>div").click(function() {
		var n=$(this).index();
		$(this).find("div:first-child").toggleClass("rentactive1");
		$(this).siblings().find("div:first-child").removeClass("rentactive1");
		$(this).find("div:last-child p").toggleClass("rentactive2");
		$(this).siblings().find("div:last-child p").removeClass("rentactive2");
		if (n==0) {
			$(".renttxtbox").attr("id","box1");
			$(".renttxtbox-title").html("国内租车")
		} else if(n==1){
			$(".renttxtbox").attr("id","box2");
			$(".renttxtbox-title").html("国际租车")
		}else if(n==2){
			$(".renttxtbox").attr("id","box3");
			$(".renttxtbox-title").html("国内接送机")
		}else if(n==3){
			$(".renttxtbox").attr("id","box4");
			$(".renttxtbox-title").html("国际接送机")
		}else if(n==4){
			$(".renttxtbox").attr("id","box5");
			$(".renttxtbox-title").html("日租包车")
		}
	});

	var datetime = moment().format('YYYY-MM-DD');
	var hourtime = moment().format('h:mm');
	var week = moment().format('dddd');
	var start;
	var end;
	$("#rentstart").attr("placeholder", datetime + "                  " + week);
	$("#rentend").attr("placeholder", datetime + "                  " + week);
	$("#rentstarth").attr("placeholder", hourtime);
	$("#rentendh").attr("placeholder", hourtime);
	$("#datepicker5").datepicker({
		dateFormat: "yy-mm-dd"
	});
	$('#datepicker5').change(function() {
		start = $(this).val();
		$("#rentstart").val(start);
	});
	$('#startsel').change(function() {
		var starth = $('#startsel option:selected').val();
		$("#rentstarth").val(starth);
		if($("#rentstart").val() == "") {
			alert("请先选择取车日期")
			$("#rentstarth").val("");
		} else {
			$("#rentstart").val(start);
			$("#rentstart").val(start + "   " + starth);
		}

	});
	$("#datepicker6").datepicker({
		dateFormat: "yy-mm-dd"
	});
	$('#datepicker6').change(function() {
		end = $(this).val();
		$("#rentend").val(end);
	});
	$('#endsel').change(function() {
		var endh = $('#endsel option:selected').val();
		$("#rentendh").val(endh);
		if($("#rentend").val() == "") {
			alert("请先选择还车日期");
			$("#rentendh").val("");
		} else {
			$("#rentend").val(end);
			$("#rentend").val(end + "   " + endh);
		}
	});
	var mapcheck = 0;
	$(".mapbtn1").click(function() {
		if(mapcheck == 0) {
			$("#l-map").css("display", "block")
			mapcheck = 1;
		} else {
			$("#l-map").css("display", "none")
			mapcheck = 0;
		}
		$("#l-map")
	})
	$(".mapbtn2").click(function() {
		if(mapcheck == 0) {
			$("#l-map").css("display", "block")
			mapcheck = 1;
		} else {
			$("#l-map").css("display", "none")
			mapcheck = 0;
		}
		$("#l-map")
	})
});

window.onload = function() {
	function getStyle(obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	}
	//轮播图
	var obanner = document.getElementById("banner");
	var obox = document.getElementById("bannerbox"); //图片集合
	var oimg = document.querySelectorAll("#bannerbox>img"); //图片
	var ocycle = document.querySelectorAll("#cycle>div"); //圆点
	var oleft = document.getElementById("left"); //上一张
	var oright = document.getElementById("right"); //下一张
	var index = 0;
	var timer = null;

	oleft.onclick = function() {
		if(index == 0) {
			index = oimg.length - 1;
		} else {
			index--
		}
		obox.style.left = -parseInt(getStyle(obanner, "width")) * index + "px";
		ocycleshow(index)
	}
	oright.onclick = function() {
		if(index == oimg.length - 1) {
			index = 0
		} else {
			index++
		}
		obox.style.left = -parseInt(getStyle(obanner, "width")) * index + "px";
		ocycleshow(index);
	}
	for(var i = 0; i < ocycle.length; i++) {
		ocycle[i].index = i;
		ocycle[i].onclick = function() {
			index = this.index;
			obox.style.left = -parseInt(getStyle(obanner, "width")) * index + "px";
			ocycleshow(index);
		}
	}

	function ocycleshow(index) {
		for(var i = 0; i < ocycle.length; i++) {
			ocycle[i].className = "";
		}
		ocycle[index].className = "on";
	}
	timer = setInterval(oright.onclick, 2000);
	oleft.onmouseover = function() {
		clearInterval(timer);
	};
	oleft.onmouseout = function() {
		timer = setInterval(oright.onclick, 2000);
	};
	oright.onmouseover = function() {
		clearInterval(timer);
	};
	oright.onmouseout = function() {
		timer = setInterval(oright.onclick, 2000);
	};
	for(var i = 0; i < ocycle.length; i++) {
		ocycle[i].onmouseover = function() {
			clearInterval(timer);
		};
		ocycle[i].onmouseout = function() {
			timer = setInterval(oright.onclick, 2000);
		};
	}
	var marker;
	var zoomSize = 18;
	var map = new BMap.Map("l-map");
	var lon = 116.404;
	var lat = 39.915;

	if(typeof getBizPoint == "function") {
		var pointJson = getBizPoint();
		lon = pointJson.lon;
		lat = pointJson.lat;
	}

	var point = new BMap.Point(lon, lat);
	map.centerAndZoom(point, zoomSize);

	marker = new BMap.Marker(point);
	map.addOverlay(marker);
	marker.enableDragging();
	marker.addEventListener("dragend", setBizValue);

	var navigationControl = new BMap.NavigationControl({

		anchor: BMAP_ANCHOR_TOP_LEFT,

		type: BMAP_NAVIGATION_CONTROL_LARGE,

		enableGeolocation: true
	});
	map.addControl(navigationControl);

	var geoc = new BMap.Geocoder();

	var ac1 = new BMap.Autocomplete({
		"input": "suggestId1",
		"location": map
	});
	var ac2 = new BMap.Autocomplete({
		"input": "suggestId2",
		"location": map
	});
	ac1.addEventListener("onhighlight", function(e) {
		var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if(e.fromitem.index > -1) {
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

		value = "";
		if(e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});
	ac2.addEventListener("onhighlight", function(e) {
		var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if(e.fromitem.index > -1) {
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

		value = "";
		if(e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province + _value.city + _value.district + _value.street + _value.business;
		}
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});
	var myValue;
	ac1.addEventListener("onconfirm", function(e) {
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		setPlace();
	});
	ac2.addEventListener("onconfirm", function(e) {
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
		G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		setPlace();
	});

	function setPlace() {
		map.clearOverlays();

		function myFun() {
			var pp = local.getResults().getPoi(0).point;
			setBizValueForPoint(pp);
			map.centerAndZoom(pp, zoomSize);
			marker = new BMap.Marker(pp);
			marker.enableDragging();
			map.addOverlay(marker);
			marker.addEventListener("dragend", setBizValue);
		}
		var local = new BMap.LocalSearch(map, {
			onSearchComplete: myFun
		});
		local.search(myValue);
	}

	function G(id) {
		return document.getElementById(id);
	}

	function setBizValue(e) {
		var point = e.point;
		setBizValueForPoint(point);
	}

	function setBizValueForPoint(point) {
		lon = point.lng;
		lat = point.lat;
		geoc.getLocation(point, function(rs) {
			var addComp = rs.addressComponents;
			addr = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
			if(typeof setBizFun == "function") {
				setBizFun({
					lon: lon,
					lat: lat,
					addr: addr
				});
			}
		});

	}

	function setBizValueForMarker() {
		var point = marker.getPosition();
		setBizValueForPoint(point);
	}

}