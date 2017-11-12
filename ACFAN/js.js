
  $(document).ready(function(){
  	// 搜索栏的下拉

  	var $search_too=$(".search-form-too");
	var $search_input=$(".search-input");
	    $search_input.focus(function(){
	  		$search_too.css("display","block");
			});

	    $search_input.blur(function(){
	    $search_too.fadeOut(150);
	 	 });

    });
  // 鼠标跟随
  var $banner_href=$(".banner-href")
   $(function () {
            $banner_href.mousemove(function (e) {
                var xPos = parseInt(e.pageX+20	) + "px";
                var yPos = parseInt(e.pageY-20) + "px";
                $("#divMouse").css("left", xPos).css("display","block");
                $("#divMouse").css("top", yPos);
            });
	            $banner_href.mouseout(function(){
				$("#divMouse").css("display","none");
			});
        });
   // 导航
   var $nav_sub_ul=$(".nav-sub-ul");
   var $nav_sub=$(".nav-sub");
   var $nav=$(".nav-con");
   var $nav_too=$(".nav-too");

   $nav_too.hover(function() {
   	var _index=$(this).data("num");

   	$nav_sub.show(true);
   	$nav_sub_ul.eq(_index).show(true).siblings().hide();

   }, function() {
		$nav.mouseleave(function(){
		$nav_sub.hide();
		})
   		

   		$nav_sub.hover(function() {
   				 $nav_sub.show(true);
   		}, function() {
        $nav_sub.hide(true);
   		});
   		});

// 导航栏固定
 window.onscroll=function(){
        var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
        var bignav = document.getElementById("nav");//获取到导航栏id
        var main = document.getElementById("main");
        if(topScroll > 175){ //当滚动距离大于250px时执行下面的东西
          bignav.style.position = 'fixed';
          bignav.style.top = '46px';
          bignav.style.zIndex = '9999';
          main.style.margin = '46px';
        }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
          bignav.style.position = 'static';
          main.style.margin = '0';
        }
      }
   		// 幻灯片
var $item=$(".carousel .item");
	var $btn=$(".carousel-btn .btn");
	i =0;
	function slide(num){
		$item.eq(num).fadeIn(1000);
		$item.not($item.eq(num)).stop(true,true).fadeOut("1000");
		$btn.eq(num).addClass('active');
		$btn.not($btn.eq(num)).removeClass('active');
	}
  $btn.on("click", function(event) {
    i=$(this).index();
    slide(i);
  })

function car(){
		cartime = setInterval(function(){
			i >= 4 ? i = 0 : i++;
			slide(i);
		},3000);
	}
	car();
	$(".carousel").hover(function(){
		clearInterval(cartime);
	},car);
// 标签页
var $navli=$(".xjb #myTab li a");
var $xjb_tab_pane=$(".xjb .tab-pane");

$navli.hover(function() {
  $index=$(this).index();
   $(this).addClass('tab-hover').siblings().removeClass('tab-hover');
    $xjb_tab_pane.eq($index).addClass('active').siblings().removeClass('active');
}, function() {
});
// 娱乐大图
var $tuijian_img=$(".tuijian-img");
var $yule_big=$(".yule-big");
  $yule_big.hover(function() {
  $(this).find(".tuijian-img-yinying").stop(true,true).fadeIn();
  $(this).find(".bofang").stop(true,true).fadeOut();
}, function() {
  $(this).find(".tuijian-img-yinying").stop(true,true).fadeOut();

  $(this).find(".bofang").stop(true,true).fadeIn();
});


  $tuijian_img.hover(function() {
  $(this).find(".tuijian-img-yinying").stop(true,true).fadeIn();
}, function() {
  $(this).find(".tuijian-img-yinying").stop(true,true).fadeOut();
});
// 新番阴影
var $xinfan_li=$(".xinfan-li");
$xinfan_li.hover(function() {
  $(this).find('.tuijian-img-yinying').stop(true,true).fadeIn();
}, function() {
  $(this).find(".tuijian-img-yinying").stop(true,true).fadeOut();
});
// 标签页按钮
  var $fanju_box=$(".fanju-box");
  var $fanju_btn=$(".fanju .title-btn");
  var $xjb_btn=$(".xjb .title-btn");
  var $xjb_l=$(".xjb-l");
  var $yule_btn=$(".yule .yule-btn");
   var $tab_pane=$(".yule .tab-pane");
   var $yule_btn2=$(".erci .yule-btn");
   var $tab_pane2=$(".erci .tab-pane");
  

      function btnon(btn,main){
        $index=btn.index();
          main.eq($index).addClass('active').siblings().removeClass('active');
           btn.addClass('title-btn-active').siblings().removeClass('title-btn-active');
      }
      $fanju_btn.on('click',function(event) {
        btnon($(this),$fanju_box);
      });
      $xjb_btn.on('click',function(event) {
        btnon($(this),$xjb_l);
      });
       $yule_btn.on('click',function(event) {
        btnon($(this),$tab_pane);
      });
       $yule_btn2.on('click',function(event) {
        btnon($(this),$tab_pane2);
      });

       // 随机LI
var ul = document.getElementById("getmyid"),
    lis = Array.prototype.slice.call(ul.childNodes, 0);
 
var i = lis.length;
while(i-- > 0)ul.insertBefore(lis[i], lis[parseInt(Math.random() * lis.length)])
// 返回键
var backButton=$('.back_to_top');  
function backToTop() {  
    $('html,body').animate({  
        scrollTop: 0  
    }, 300);  
}  
backButton.on('click', backToTop);  
  
$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */  
    if ($(window).scrollTop() > $(window).height())  
        backButton.fadeIn();  
    else  
        backButton.fadeOut();  
});  
$(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/  