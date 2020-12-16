//index.js
//获取应用实例
//const app = getApp()
//var util = require('utils/util.js');

var y=1;
function disableElement() {
console.log("test");
}
var data = {
marqueePace: 1,//滚动速度
marqueeDistance: 0,//初始滚动距离
marquee_margin: 20,
size:14,
interval: 40, // 时间间隔

infoSelected: false,
text: 'text null',
io: [
{name:'进校', value:0},
{name:'出校', value: 1}
], //进出校门
customName: 'null',
auth: '授权有效!',
time: 'time null',
userInfo: {},
hasUserInfo: false,
//canIUse: wx.canIUse('button.open-type.getUserInfo')
};
function namechange0() {

if (y==1){

				 document.getElementById("username1").innerHTML="王铁霖";
				 y=y+1;
}
else if (y==2){
				 document.getElementById("username1").innerHTML="曾羽 ";
				 y=y+1;
}
else if (y==3){
				 document.getElementById("username1").innerHTML="叶香麟 ";
	 y=y+1;
}
else if (y==4){
				 document.getElementById("username1").innerHTML="廖长春 ";
	 y=y+1;
}
else if (y==5){
				 document.getElementById("username1").innerHTML="刘相渝 ";
	 y=1;
}
}


function radiochange() {
                var x = document.getElementById("auth");
        if(x.innerHTML == "研究生用户，出校登记成功！"){
            
                document.getElementById("auth").innerHTML="研究生用户，入校授权有效！";
        }
       else if (x.innerHTML == "研究生用户，入校授权有效！")
        {
  x.innerHTML = "研究生用户，出校登记成功！";
  }
        
}



function radiochangeslt(){
        var x = parseInt(document.getElementById("slt").options[document.getElementById("slt").options.selectedIndex].value);
        if(x == 1){
                console.log($("input[name='io']:checked").val());
                document.getElementById("auth").innerHTML="本科生用户，出校授权有效！";
        }
        else{
                console.log($("input[name='io']:checked").val());
                document.getElementById("auth").innerHTML="本科生用户，入校授权有效！";
        }
}
/*
$('input[type=radio][name=io]').change(function () {
console.log("radiochange");
console.log("radiochange"+$("input[name='io']:checked").val());
if($("input[name='io']:checked").val() == 0){
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="本科生用户，出校授权有效！";
}
else{
console.log($("input[name='io']:checked").val());
document.getElementById("auth").innerHTML="本科生用户，入校授权有效！";
}
})
*/






$("#infoselected").click(function(){
$("div.info").hide();
data.time = formatTime(new Date())
console.log(data.time)
document.getElementById("time").innerHTML = data.time;
/*2020/12/13*/
//radiochange();
radiochangeslt();
});

const formatTime = date => {
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

var result = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
var ret = result + '  ' + result
console.log(ret)
return ret
}

const formatNumber = n => {
n = n.toString()
return n[1] ? n : '0' + n
}


function gotocode(){
        window.location.href="./code.html"  
}

    function time() {
        function format(i) {
            return (i < 10 ? "0" + i : i);
        }

        var date = new Date();
        var year = date.getFullYear();
        var month = format(date.getMonth() + 1);
        var day = format(date.getDate());
        var hour = format(date.getHours());
        var minute = format(date.getMinutes());
        var second = format(date.getSeconds());
        var dis_date = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        var show_date = dis_date + "  " + dis_date;
        document.getElementById("time").innerHTML = show_date;
    }

     setTimeout(time,1);



//事件处理函数
function bindViewTap() {
wx.navigateTo({
url: '../logs/logs'
})
}
function onLoad() {
//console.log("-1 "+app.globalData.userInfo);
if (app.globalData.userInfo) {
//console.log("0 "+userInfo);
this.setData({
userInfo: app.globalData.userInfo,
hasUserInfo: true
});

} else if (this.data.canIUse){
//console.log("0 "+app.globalData.userInfo);
// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
// 所以此处加入 callback 以防止这种情况
app.userInfoReadyCallback = res => {
this.setData({
userInfo: res.userInfo,
hasUserInfo: true
});
}
} else {
// 在没有 open-type=getUserInfo 版本的兼容处理
//console.log("0 "+app.globalData.userInfo);
wx.getUserInfo({
success: res => {
app.globalData.userInfo = res.userInfo
this.setData({
userInfo: res.userInfo,
hasUserInfo: true
})
}
})

}
}
function getUserInfo(e) {
console.log(e)
app.globalData.userInfo = e.detail.userInfo
this.setData({
userInfo: e.detail.userInfo,
hasUserInfo: true
})
}

function onShow() {
var time = formatTime(new Date());
// 再通过setData更改Page()里面的data，动态更新页面的数据
this.setData({
text: time
});

var that = this;
var length = that.data.text.length * that.data.size;//文字长度
var windowWidth = wx.getSystemInfoSync().windowWidth*0.6;// 屏幕宽度
console.log(length,windowWidth);
that.setData({
length: length,
windowWidth: windowWidth,
});
that.scrolltxt();// 第一个字消失后立即从右边出现
}


function scrolltxt() {
}
