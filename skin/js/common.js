(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
$.extend({getUrlVars: function(){var vars = [], hash;var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');for(var i = 0; i < hashes.length; i++){hash = hashes[i].split('=');vars.push(hash[0]);vars[hash[0]] = hash[1];}return vars;},getUrlVar: function(name){var val=$.getUrlVars()[name];return val==undefined?"":val;}});
var de_slide=function(obj,speed){
     obj=$("#"+obj);
     speed=speed==undefined?1000*5:speed;
     var interval=null;
     var html=obj.html();
     var obj1=null;
     var ul=null;
     var li=null;
     var span=null;
     function init(){
         obj1=obj.attr("id")+"1";
         obj.after('<div id="'+obj1+'"></div>');
         obj1=$("#"+obj1);
         ul=obj.find("ul");
         li=ul.find("li");
         li.each(function(){obj1.append('<span>&nbsp;</span>');}).eq(0).addClass("current");
         span=obj1.find("span");
         span.fadeTo(0,0.3).eq(0).fadeTo(0,1).addClass("current");
         li.hover(function(){interval0();},function(){interval1();});
         span.click(function(){
             var length=li.length;
             var idx=$(this).index();
             var current_idx=li.filter(".current").index();
             if(idx==current_idx){return false;}
             interval0();
             ul.stop().animate({marginLeft:-li.eq(0).width()*idx},0,function(){interval1();});
             li.removeClass("current").eq(idx).addClass("current");
             span.fadeTo(0,0.3).removeClass("current");
             $(this).fadeTo(0,1).addClass("current");
         });
         span.hover(function(){$(this).click();},function(){});
         interval1();
     }
     function interval0(){if(interval!=null){clearInterval(interval);}}
     function interval1(){interval0();interval=setInterval(show,speed);}
     function show(){
         var length=span.length;
         var idx=span.filter(".current").index();
         idx++;
         if(idx>=length){idx=0;}
         span.eq(idx).click();
     }
     init();
}

function do_header(){}

/*0_banner*/
var banner_interval=null;
function do_banner(){
    banner_interval=null;
    $("#banner").prepend('<div id="banner_3"><ol></ol></div>');
    $("#banner ul li").each(function(i){$("#banner_3 ol").append('<li>'+'&nbsp;&nbsp;&nbsp;'+'</li>');});
    $("#banner_3").show();
    $("#banner_3 ol li").fadeTo(0,0.9).eq(0).addClass("current").fadeTo(0,1);
    $("#banner").hover(function(){banner_interval0();},function(){banner_interval1();});
    $("#banner_3 ol li").click(function(){
        var ul=$("#banner ul");
        var li=ul.find("li");
        var ol=$("#banner_3 ol");
        var li1=ol.find("li");
        var length=li.length;
        var idx=$(this).index();
        li.hide().eq(idx).show();
        li1.removeClass("current").fadeTo(0,0.9).eq(idx).addClass("current").fadeTo(0,1);
    });
    $("#banner_3 ol li").hover(function(){$(this).click();},function(){});
    banner_interval1();
}
function banner_interval0(){if(banner_interval!=null){clearInterval(banner_interval);}}
function banner_interval1(){banner_interval0();banner_interval=setInterval(banner_show,1000*5);}
function banner_show(){
    var li=$("#banner_3 ol li");
    var length=li.length;
    var idx=li.filter(".current").index()+1;
    if(idx>=length){idx=0;}
    li.eq(idx).click();
}
/*1_banner*/

function do_main1(){$("#main1 .box1 ul li").hover(function(){$(this).addClass("current").siblings().removeClass("current");}, function () { });}

/*0_main4*/
var main4_interval = null;
function do_main4() {
    $("#main4 .box").hover(function () { main4_interval0(); }, function () { main4_interval1(); });
    $("#main4 .box1 ul li").click(function () {
        var div = $("#main4 .box2 div");
        var idx = $(this).index();
        div.hide().eq(idx).show();
        $(this).addClass("current").siblings().removeClass("current");
    }).hover(function () { $(this).click(); }, function () { });;
    main4_interval1();
}
function main4_interval0() { if (main4_interval != null) { clearInterval(main4_interval); } }
function main4_interval1() { main4_interval0(); main4_interval = setInterval(main4_show, 1000 * 3); }
function main4_show() {
    var li = $("#main4 .box1 ul li");
    var length = li.length;
    var idx = li.filter(".current").index() + 1;
    if (idx >= length) { idx = 0; }
    li.eq(idx).click();
}
/*1_main4*/

function do_chufanglist() {$("#chufanglist ul li span").fadeTo(0, 0.8);}
function do_productslist() { $("#productslist ul li span").fadeTo(0, 0.8); }
function do_piclist(){$(".piclist ul li span").fadeTo(0,0.8);}
function do_plist_s(){$("#plist_s ul li span").fadeTo(0,0.6);}
function do_ul_products() {$(".ul_products li span").fadeTo(0, 0.8);}

var regex_number=/^\d{7}$|^\d{8}$|^\d{11}$|^\d{3}(-)?\d{8}$|^\d{4}(-)?\d{7,8}$/;
function do_calltel(){
    $("#calltel_submit").click(function(){
        var obj=$(this);
        var calltel_tel=$("#calltel_tel");
        var val_calltel_tel=$.trim(calltel_tel.val());
        if(!regex_number.test(val_calltel_tel)){
            alert("温馨提示：联系电话格式不正确！");
            calltel_tel.focus();
            calltel_tel.select();
           return false;
        }
        var val_calltel_name=encodeURIComponent("");
        val_calltel_tel=encodeURIComponent(val_calltel_tel);
        var val_calltel_content=encodeURIComponent("[来源页面："+document.title+"]");
        var url=encodeURIComponent(location.href);
        var sourceid=obj.attr("sourceid");
        if(!sourceid){sourceid=3;}
        window.open("http://jiabao.dasn.com.cn/index.php/calltel/dooperate?name="+val_calltel_name+"&tel="+val_calltel_tel+"&content="+val_calltel_content+"&url="+url+"&sourceid="+sourceid);
        calltel_tel.val("");
        return false;
    });
}

function do_pimgs1() {
    var div1 = $("#pimgs1 .div1");
    var div2 = $("#pimgs1 .div2");
    div2.append("<ul></ul>");
    var div1img=div1.find("img");
    var div2ul=div2.find("ul");
    $.each(list_img, function (idx) { div2ul.append('<li><img src="' + list_img[idx] + '" width="146" height="68" /></li>'); });
    var div2li=div2ul.find("li");
    div2li.click(function () {
        var idx=$(this).index();
        var oldidx = div2li.filter(".current").index();
        if(idx==oldidx){return false;}
        div1img.attr("src", list_img[idx]);
        div2li.removeClass("current").fadeTo(0,0.6).eq(idx).addClass("current").fadeTo(0,1);
        var marginleft=parseInt(div4ul.css("marginLeft").replace("px",""));
        marginleft=oldidx>idx?marginleft+145:marginleft-145;
        var max=0;
        var min = div2li.length > 5 ? 0 - (div2li.length - 5) * 145 : 0;
        if (oldidx == 0 && idx == div2li.length - 1) { marginleft = min; }
        if (oldidx == div2li.length - 1 && idx == 0) { marginleft = max; }
        marginleft=marginleft>max?max:marginleft;
        marginleft=marginleft<min?min:marginleft;
        div4ul.animate({marginLeft:marginleft},0);
        return false;
    }).hover(function () { $(this).click(); }, function () { }).fadeTo(0, 0.6).eq(0).addClass("current").fadeTo(0, 1);
}

function do_slider_zixun(){
    var obj=$("#slider_zixun");
    var top=obj.position().top;
    $(window).scroll(function(){
        var top_obj=obj.position().top;
        var top_window=$(window).scrollTop();
        if(top_window>top){
            if(!isIE6){obj.css("position","fixed");}else{obj.css("position","absolute").css("top",top_window+"px");}
        }else{
            obj.css("position","static").css("top","0px");
        }
    }).scroll();
}

function do_search(){
    var search_word="开启高端厨房生活...";
    $("#search").html("<form target=\"_blank\" action=\"\/plus\/search.php\"><input type=\"hidden\" name=\"kwtype\" value=\"0\" \/><input name=\"q\" type=\"text\" class=\"style1\" value=\""+search_word+"\" onfocus=\"if (value ==\'"+search_word+"\'){value =\'\'}\" onblur=\"if (value ==\'\'){value=\'"+search_word+"\'}\"\/><input type=\"submit\" value=\"搜索\" class=\"style2\" \/><\/form>");
}

function do_pager(){$(".pager").prepend('<a href="/#/" target="_blank" class="style1">立即咨询？</a>');}

function do_position(){$("#position .div1").prepend('<a href="/#/" target="_blank" class="style1">立即咨询？</a>');}

function do_prenext() { if (a_pre != "") { $("#prenext ul li.style1").html('<a href="' + a_pre + '">上一张</a>'); } if (a_next != "") { $("#prenext ul li.style2").html('<a href="' + a_next + '">下一张</a>'); } }

var isIE=($.browser.msie);
var isIE6=($.browser.msie&&$.browser.version=="6.0");
var isIE7=($.browser.msie&&$.browser.version=="7.0");
var isIE8=($.browser.msie&&$.browser.version=="8.0");
var isSafari=($.browser.safari);
$(function(){
    if(isIE){$("body").addClass("ie");}
    if(isIE6){$("body").addClass("ie6");}
    if(isIE7){$("body").addClass("ie7");}
    if(isIE8){$("body").addClass("ie8");}
    if(isSafari){$("body").addClass("safari");}
    $(".hidetonbsp").each(function(){$(this).html("&nbsp;");});
    if($("#header")[0]){do_header();}
    if($("#banner")[0]){do_banner();}
    if($("#anli_s")[0]){de_slide("anli_s");}
    if($("#plist_s")[0]){do_plist_s();}
    if($("#calltel")[0]){do_calltel();}
    if ($("#pimgs1")[0]) { do_pimgs1(); }
    if ($("#main1")[0]) { do_main1(); }
    if ($(".ul_products")[0]) { do_ul_products(); }
    if ($("#main4")[0]) { do_main4(); }
    if ($("#chufanglist")[0]) { do_chufanglist(); }
    if ($("#productslist")[0]) { do_productslist(); }
    if($(".piclist")[0]){do_piclist();}
    if($("#search")[0]){do_search();}
    if($(".pager")[0]){do_pager();}
    if($("#position")[0]){do_position();}
    if ($("#slider_zixun")[0]) { do_slider_zixun(); }
    if ($("#prenext")[0]) { do_prenext(); }
    $("a[title='站长统计'],a[href='http://tongji.baidu.com/hm-web/welcome/ico?s=16b1a369d1392d8f7e8978b592e0139f']").hide();
});