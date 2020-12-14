var cnt = 300;
function validTimeCount(){
    var validTimeMsg;
    if(cnt > 0){
        cnt--;
    }
    else{
        cnt = 300;
    }
    validTimeMsg = "二维码剩余有效时间" + cnt + "秒";
    document.getElementById("valid_time_val").innerHTML = validTimeMsg;
}

    window.onload = setInterval(validTimeCount, 1000);

