$(function() {
				$(".datepicker").datepicker({
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
				    showAnim:"blind",
				    //格式化日期
				    //mm/dd/yy   yy-mm-dd   d M, y    d MM, y   DD, d MM, yy   &apos;day&apos; d &apos;of&apos; MM &apos;in the year&apos; yy
				    dateFormat:"mm/dd/yy",
				    //限制日期选择
				    minDate: -20, 
				    maxDate: "+1M +10D"
				});
			});
$(function(){
	$(".intpositiontable>div>div").click(function(){
		$(".intpositiontable>div>div").eq($(this).index()).css("color","#00c0ff").css("border-bottom","2px solid #00c0ff").siblings().css("color","#424242").css("border-bottom","0");
		$(".hotintshow>div").eq($(this).index()).stop().fadeIn(100).siblings().fadeOut(100);
	});
});
$(function(){
	$(".intthemetable>div>div").click(function(){
		$(".intthemetable>div>div").eq($(this).index()).css("color","#00c0ff").css("border-bottom","2px solid #00c0ff").siblings().css("color","#424242").css("border-bottom","0");
		$(".intthemeshow>div").eq($(this).index()).stop().fadeIn(100).siblings().fadeOut(100);
	});
});
