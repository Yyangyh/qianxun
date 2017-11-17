/*
* @Author: yang
* @Date:   2017-08-07 10:24:17
* @Last Modified by:   yang
* @Last Modified time: 2017-08-07 18:05:29
*/
'use strict';
$(function(){
	var num=0;
	var timer;
	$('.screen1').children('.title').removeClass('no')
	$('.side li').click(function(event) {
		/* Act on the event */
		num=$(this).index();
		$('section').animate({'top':-100*num+'%'}, 500);
		$(this).addClass('current').siblings('li').removeClass('current')
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no')
	});
	//滚轮事件
	$(document).mousewheel(function(e,d){
		//alert(d)向下滚动：d=-1  向上滚动：d=1
		//定时器：serinterval(function(){},时间)
		//一次性定时器：setTimeout(function(){},时间)
		clearTimeout(timer);
		timer=setTimeout(function(){
			num=num-d;
			if(num>6){num=6}
			if(num<0)(num=0)
			$('section').animate({'top':-100*num+'%'}, 500);
			$('.side li').eq(num).addClass('current').siblings('li').removeClass('current')
			$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no')
		},300)
		
	})




	//音乐按钮
	$('.music').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('play');
		var i=$(this).hasClass('play')//判断是否有该类名，返回值是布尔型true或false
		//alert(i)
		if(i){
			document.getElementById('audio').play()
			//$('audio').get(0).play()
		}else{
			$('audio').get(0).pause()
		}
	});
})