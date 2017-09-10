$(function() {
	$("#datepicker1").datepicker({
		//显示其它月份
		showOtherMonths: true,
		//显示的其它月份是否可以点击
		selectOtherMonths: true,
		//显示当天和关闭按钮
		showButtonPanel: true,
		//月份可选择
		changeMonth: true,
		//年份可选择
		changeYear: true,
		//显示多个月份
		numberOfMonths: 2,
		showButtonPanel: true,
		//图标触发器
		showOn: "button",
		//图标地址
		buttonImage: "img/rq.png",
		//显示图标，而不是按钮样式的图标
		buttonImageOnly: true,
		//打开动画
		//show默认，slideDown下滑，fadeIn淡入，blind百叶窗，bounce反弹，clip剪辑，drop降落,fold折叠，slide滑动
		showAnim: "blind",
		//格式化日期
		//mm/dd/yy   yy-mm-dd   d M, y    d MM, y   DD, d MM, yy   &apos;day&apos; d &apos;of&apos; MM &apos;in the year&apos; yy
		dateFormat: "yy-mm-dd",
		//限制日期选择
		minDate: -20,
		maxDate: "+1M +10D"
	});
	$("#datepicker2").datepicker({
		//显示其它月份
		showOtherMonths: true,
		//显示的其它月份是否可以点击
		selectOtherMonths: true,
		//显示当天和关闭按钮
		showButtonPanel: true,
		//月份可选择
		changeMonth: true,
		//年份可选择
		changeYear: true,
		//显示多个月份
		numberOfMonths: 2,
		showButtonPanel: true,
		//图标触发器
		showOn: "button",
		//图标地址
		buttonImage: "img/rq.png",
		//显示图标，而不是按钮样式的图标
		buttonImageOnly: true,
		//打开动画
		//show默认，slideDown下滑，fadeIn淡入，blind百叶窗，bounce反弹，clip剪辑，drop降落,fold折叠，slide滑动
		showAnim: "blind",
		//格式化日期
		//mm/dd/yy   yy-mm-dd   d M, y    d MM, y   DD, d MM, yy   &apos;day&apos; d &apos;of&apos; MM &apos;in the year&apos; yy
		dateFormat: "yy-mm-dd",
		//限制日期选择
		minDate: -20,
		maxDate: "+1M +10D"
	});
});
$(function() {
	$(".positiontable>ul>li").click(function() {
		$(".positiontable>ul>li").eq($(this).index()).css("background", "#00c0ff").css("color", "#ffffff").siblings().css("background", "#ffffff").css("color", "#00c0ff");
		$(".position>div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
	})
})
$(function() {
	$(".theme1").hover(function() {
		$(".theme1 .themeshadow").animate({
			width: "364px"
		});
		$(".theme1 .themep>p").css("padding-right", "20px").css("margin-left", "50px");
		$(".theme1 .themep>div").css("margin-left", "50px");
		$(".theme1 .themep>ul").delay(300).fadeIn();
		$(".theme1 .sj").fadeOut();
	}, function() {
		$(".theme1 .themeshadow").delay(50).animate({
			width: "110px"
		});
		$(".theme1 .themep>p").css("padding-right", "10px").css("margin-left", "20px");
		$(".theme1 .themep>div").css("margin-left", "70px");
		$(".theme1 .themep>ul").fadeOut();
		$(".theme1 .sj").fadeIn();
	})
	$(".theme1 li").click(function() {
		$(".theme1 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})
$(function() {
	$(".theme2").hover(function() {
		$(".theme2 .themeshadow").animate({
			width: "364px"
		});
		$(".theme2 .themep>p").css("padding-right", "20px").css("margin-left", "35px");
		$(".theme2 .themep>div").css("margin-left", "32px");
		$(".theme2 .themep>ul").delay(300).fadeIn();
		$(".theme2 .sj").fadeOut();
	}, function() {
		$(".theme2 .themeshadow").delay(50).animate({
			width: "110px"
		});
		$(".theme2 .themep>p").css("padding-right", "10px").css("margin-left", "20px");
		$(".theme2 .themep>div").css("margin-left", "70px");
		$(".theme2 .themep>ul").fadeOut();
		$(".theme2 .sj").fadeIn();
	})
	$(".theme2 li").click(function() {
		$(".theme2 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})
$(function() {
	$(".theme3").hover(function() {
		$(".theme3 .themeshadow").animate({
			width: "364px"
		});
		$(".theme3 .themep>p").css("padding-right", "20px").css("margin-left", "35px");
		$(".theme3 .themep>div").css("margin-left", "30px");
		$(".theme3 .themep>ul").delay(300).fadeIn();
		$(".theme3 .sj").fadeOut();
	}, function() {
		$(".theme3 .themeshadow").delay(50).animate({
			width: "110px"
		});
		$(".theme3 .themep>p").css("padding-right", "10px").css("margin-left", "20px");
		$(".theme3 .themep>div").css("margin-left", "70px");
		$(".theme3 .themep>ul").fadeOut();
		$(".theme3 .sj").fadeIn();
	})
	$(".theme3 li").click(function() {
		$(".theme3 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})
$(function() {
	$(".theme4").hover(function() {
		$(".theme4 .themeshadow").animate({
			width: "364px"
		});
		$(".theme4 .themep>p").css("padding-left", "26px").css("margin-left", "35px");
		$(".theme4 .themep>div").css("margin-left", "60px");
		$(".theme4 .themep>ul").delay(300).fadeIn();
		$(".theme4 .sj").fadeOut();
	}, function() {
		$(".theme4 .themeshadow").delay(50).animate({
			width: "110px"
		});
		$(".theme4 .themep>p").css("padding-left", "16px").css("margin-left", "50px");
		$(".theme4 .themep>div").css("margin-left", "12px");
		$(".theme4 .themep>ul").fadeOut();
		$(".theme4 .sj").fadeIn();
	})
	$(".theme4 li").click(function() {
		$(".theme4 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})
$(function() {
	$(".theme5").hover(function() {
		$(".theme5 .themeshadow").animate({
			width: "364px"
		});
		$(".theme5 .themep>p").css("padding-left", "26px").css("margin-left", "35px");
		$(".theme5 .themep>div").css("margin-left", "60px");
		$(".theme5 .themep>ul").delay(300).fadeIn();
		$(".theme5 .sj").fadeOut();
	}, function() {
		$(".theme5 .themeshadow").delay(50).animate({
			width: "110px"
		});
		$(".theme5 .themep>p").css("padding-left", "16px").css("margin-left", "50px");
		$(".theme5 .themep>div").css("margin-left", "12px");
		$(".theme5 .themep>ul").fadeOut();
		$(".theme5 .sj").fadeIn();
	})
	$(".theme5 li").click(function() {
		$(".theme5 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})
$(function() {
	$(".theme6").hover(function() {
		$(".theme6 .themeshadow").animate({
			height: "282px"
		});
		$(".theme6 .themep>ul").delay(300).fadeIn();
		$(".theme6 .sj").fadeOut();
	}, function() {
		$(".theme6 .themeshadow").delay(50).animate({
			height: "70px"
		});
		$(".theme6 .themep>ul").fadeOut();
		$(".theme6 .sj").fadeIn();
	})
	$(".theme6 li").click(function() {
		$(".theme6 li").eq($(this).index()).css("background", "#00c0ff").siblings().css("background", "")
	})
})