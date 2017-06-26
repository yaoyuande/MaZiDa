function log(msg) {
	if (window["console"]) {
		if ((typeof msg) == "string") {
			console.log(msg);
		} else {
			console.log(String(msg));
		};
	}
}
function ismobile() {

	var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
	var istablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));
	if ((/tablet pc/i.test(navigator.userAgent.toLowerCase()))) {istablet = false;}
	if(ismobile || istablet) return true;
	else return false;

}
function isIEMobile() {
    var regExp = new RegExp("IEMobile", "i");
    if (navigator.userAgent.match(regExp) == "IEMobile")
    {
		return true;
    }
	else
	{
		return false;
	}
}
function saveData() {	
	historyState.pushState({'num':num, 'share_name': share_name,'share_content':share_content }, window.location.pathname + '?num='+num+'&share_name='+share_name+'&share_content='+share_content);
};
var historyState = {
    checkCanPush: function () {
        if (window.history.pushState)
            return true;
        return false;
    },
    pushState: function (data, url) {
        if (historyState.checkCanPush()) {
            //注意data虽然可以保存数据，但是不能保存仍然引用着当前页面元素的对象，例如$("DOM")这样一个对象，就会出现ObjectCloneError
            window.history.pushState(data, document.title, url);
            return true;
        }
        return false;
    }
};
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return decodeURI(r[2]);
	return null;
}
function is_iphone(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/iphone/i)=="iphone") {
		return true;
 	} else {
		return false;
	}
}
function is_weixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/micromessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}
function is_qq(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/QQ/i)=="qq") {
		return true;
 	} else {
		return false;
	}
}
function is_ucweb(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/UCWEB/i)=="ucweb") {
		return true;
 	} else {
		return false;
	}
}
function is_safari(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/safari/i)=="safari") {
		return true;
 	} else {
		return false;
	}
}