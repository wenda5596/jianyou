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
	//手风琴table切换
	var onOff = true;
	document.getElementById("accordion_select").onclick = function() {
		if(onOff) {
			document.getElementsByClassName("accordion_tab1")[0].style.display = "none";
			document.getElementsByClassName("accordion_tab2")[0].style.display = "block";
			onOff = !onOff;
		} else {
			document.getElementsByClassName("accordion_tab1")[0].style.display = "block";
			document.getElementsByClassName("accordion_tab2")[0].style.display = "none";
			onOff = !onOff;
		}
	}
}
//手风琴效果
$(function() {
	$(".accordion_tab1>div").click(function() {
		$(".accordion_tab1>div").eq($(this).index()).css("width", "340px").siblings().css("width", "170px");
		$(".accordion_tab1>div").eq($(this).index()).find('p').removeClass("accordion_p2").addClass("accordion_p1");
		$(".accordion_tab1>div").eq($(this).index()).siblings().find('p').removeClass("accordion_p1").addClass("accordion_p2");
		$(".accordion_tab1>div").eq($(this).index()).find('img').removeClass("accordion_logo2").addClass("accordion_logo1");
		$(".accordion_tab1>div").eq($(this).index()).siblings().find('img').removeClass("accordion_logo1").addClass("accordion_logo2");
		$(".accordion_tab1>div").eq($(this).index()).find('.accordion_shu2').removeClass("accordion_shu2").addClass("accordion_shu1");
		$(".accordion_tab1>div").eq($(this).index()).siblings().find('.accordion_shu1').removeClass("accordion_shu1").addClass("accordion_shu2");
	})
	$(".accordion_tab2>div").click(function() {
		$(".accordion_tab2>div").eq($(this).index()).css("width", "340px").siblings().css("width", "170px");
		$(".accordion_tab2>div").eq($(this).index()).find('p').removeClass("accordion_p2").addClass("accordion_p1");
		$(".accordion_tab2>div").eq($(this).index()).siblings().find('p').removeClass("accordion_p1").addClass("accordion_p2");
		$(".accordion_tab2>div").eq($(this).index()).find('img').removeClass("accordion_logo2").addClass("accordion_logo1");
		$(".accordion_tab2>div").eq($(this).index()).siblings().find('img').removeClass("accordion_logo1").addClass("accordion_logo2");
		$(".accordion_tab2>div").eq($(this).index()).find('.accordion_shu2').removeClass("accordion_shu2").addClass("accordion_shu1");
		$(".accordion_tab2>div").eq($(this).index()).siblings().find('.accordion_shu1').removeClass("accordion_shu1").addClass("accordion_shu2");
	})
})
//国内推荐table切换
$(function() {
	$(".hometab p").click(function() {
		$(".hometab p").eq($(this).index()).css("background", "#00c0ff").css("color", "#ffffff").siblings().css("background", "#f5f5f5").css("color", "#909090");
		$(".homebox>div").hide().eq($(this).index()).show();
	});
});
//国外推荐table切换
$(function() {
	$(".inteltab p").click(function() {
		$(".inteltab p").eq($(this).index()).css("background", "#00c0ff").css("color", "#ffffff").siblings().css("background", "#f5f5f5").css("color", "#909090");
		$(".intelbox>div").hide().eq($(this).index()).show();
	});
});
//优惠蒙层效果
$(function() {
	$(".onsale_tab1>div").mouseover(function() {
		$(this).find(".onsale_imgbox>div").css("margin-top", "-174px");
		$(this).find(".onsale_imgbox>p").css("margin-top", "76px");
	});
	$(".onsale_tab1>div").mouseout(function() {
		$(this).find(".onsale_imgbox>div").css("margin-top", "-32px");
		$(this).find(".onsale_imgbox>p").css("margin-top", "146px");
	});
});
//优惠table切换
$(function() {
	var i = 0
	$("#onsale_select").click(function() {
		$(".onsale_show>div").eq(i).css("display", "block").siblings().css("display", "none")
		if(i < 2) {
			i++
		} else {
			i=0
		}
	})
})