$(function() {
	$("body").on("touchmove", function(e) {
		e.preventDefault();
	});
	//-----------------------判断横屏------------------------------------------------
	var initFlag = true;
	var landscape = false;
	//判断横屏
	function orien() {
		//alert(window.orientation);
		if (window.orientation == 90 || window.orientation == -90) {
			//log("这是横屏");
			if(initFlag) {
				initFlag = false;
				landscape = true;
			}
			$("#landscape").show();

		} else {
			if(initFlag) {
				initFlag = false;
			}
			$("#landscape").hide();	
			if(landscape) {
				//window.location.reload();
				window.location.reload(true);
			} 
			//log("这是竖屏");
		}
	};

	orien();
	$(window).on("orientationchange", orien);
	var queue = new createjs.LoadQueue();
    var imgJPG_arr = [];
    for(var i=0;i<9;i++){
    	imgJPG_arr.push('a1_'+(i+1)+'.png');
    }
    for (var i = 0; i < imgJPG_arr.length; i++) {
        queue.loadFile("img/p1/" + imgJPG_arr[i] + "");
    }
    queue.on("progress", function (e) {
        //log(e.progress);
    });
    queue.on("complete", function (e) {
        $("#loading").hide();
        musicInit();
        var mySwiper = new Swiper('.swiper-container', {
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    	swiperAnimateCache(swiper); //隐藏动画元素 
			    	swiperAnimate(swiper); //初始化完成开始动画
			    	if(swiper.activeIndex==0){
		        		$('#music').css('display','none');
		       		}
		       		else{
		       			$('#music').css('display','block');
		       		};
				}, 
			  	onSlideChangeEnd: function(swiper){ 
			   		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			   		if(swiper.activeIndex!=0){
			    		$('#music').css('display','block');
			    	}
			    	else{
			    		$('#music').css('display','none');
			    	}
			 	}, 
				direction:'vertical',
				width:window.innerWidth,
				height:window.innerHeight,
			});
        	
    });
    function musicInit() {
		var audio1 = new Audio('music/music.mp3');
		audio1.loop = true;
		audio1.load();

		audio1.addEventListener("canplaythrough", function () {
            audio1.play();
            $('#music').css("visibility", "visible").addClass("on");
        }, false);
        if(!is_weixin() && !is_qq() && !is_ucweb()){
        	window.addEventListener('touchstart',function(){
				if(audio1.paused){
					audio1.load();
					audio1.play();
				}
			});
        }
		
        $('#music').bind('touchend',function () {
            if (!audio1.paused) {
                $(this).removeClass("on").addClass("off");
                audio1.pause();
            } else {
                $(this).removeClass("off").addClass("on").css("visibility", "visible");
                audio1.play();
            }
        });
    }
});
