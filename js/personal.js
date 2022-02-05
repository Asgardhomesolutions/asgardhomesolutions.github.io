function sendwamsg() {

    var wpmsg = document.getElementById("wpmsg");
    if (wpmsg.value.length == 0 ) {
        alert("Please enter message");
        return false;
    }
    else {
    window.location.href="https://wa.me/+917736515706/?text="+
    wpmsg.value+"%0D%0A: Message redirected from website";
    }
}