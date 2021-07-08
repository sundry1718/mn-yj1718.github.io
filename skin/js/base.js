var regex_number=/^\d{7}$|^\d{8}$|^\d{11}$|^\d{3,4}(-)?\d{7,8}$/;
var isIE6=($.browser.msie&&$.browser.version=="6.0");
var isIE7=($.browser.msie&&$.browser.version=="7.0");
var isIE8=($.browser.msie&&$.browser.version=="8.0");
var screen_width=window.screen.width;

Date.prototype.pattern=function(fmt) {
    var o = {
    "M+" : this.getMonth()+1,
    "d+" : this.getDate(),
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12,
    "H+" : this.getHours(),
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(),
    "q+" : Math.floor((this.getMonth()+3)/3),
    "S" : this.getMilliseconds()
    };
    var week = {"0" : "/u65e5","1" : "/u4e00","2" : "/u4e8c","3" : "/u4e09","4" : "/u56db","5" : "/u4e94","6" : "/u516d"     };
    if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));}
    if(/(E+)/.test(fmt)){fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);}
    for(var k in o){if(new RegExp("("+ k +")").test(fmt)){fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));}}
    return fmt;
}

function do_search(){
    var search_word = "开启高端厨房生活...";
    $("#search").html("<form target=\"_blank\" action=\"\/plus\/search.php\"><input type=\"hidden\" name=\"kwtype\" value=\"0\" \/><input name=\"q\" type=\"text\" class=\"style1\" value=\""+search_word+"\" onfocus=\"if (value ==\'"+search_word+"\'){value =\'\'}\" onblur=\"if (value ==\'\'){value=\'"+search_word+"\'}\"\/><input type=\"submit\" value=\"搜索\" class=\"style2\" \/><\/form>");
}

$(function(){
    if(isIE6){$("body").addClass("ie6");}
    if(isIE7){$("body").addClass("ie7");}
    if(isIE8){$("body").addClass("ie8");}
    if(screen_width>=1024){$("body").addClass("screen_width_1024");}
    if(screen_width>=1280){$("body").addClass("screen_width_1280");}
    if(screen_width>=1440){$("body").addClass("screen_width_1440");}
    $(".hidetonbsp").html("&nbsp;");
    if($("#search")[0]){do_search();} 
    $("a[title='站长统计'],a[href='http://tongji.baidu.com/hm-web/welcome/ico?s=b5cf1fd5d2debfb7a91fe3e35edab7f1']").hide();
});

