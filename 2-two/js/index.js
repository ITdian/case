window.onload = function () {
    var oul = document.getElementsByClassName('oul')[0];
    var lis = oul.getElementsByTagName('li');
    // var margin = 10;
/*    for( var i= 0,len =lis.length;i < len;i ++){
            var col = parseInt(i%3);
            var row = parseInt(i/3);
            lis[i].style.position = 'absolute';
            var leftD = col * (100 +margin);
            var topD = row * (100 +margin);
            lis[i].style.left = leftD +'px';
            lis[i].style.top = topD +'px';
        }*/

for( var i= 0,len = lis.length;i < len;i ++){
    // console.log(lis[i]);
    lis[i].onmousedown = function (event) {
        var self = this;
        var event = window.event|| event;
        var distanceX = event.clientX - this.offsetLeft;
        var distanceY = event.clientY - this.offsetTop;
        document.onmousemove = function (event) {
            var event = window.event || event;
            var myX = event.clientX;
            var myY = event.clientY;
            //设置被拖拽的li的位置
            // console.log(this);
            self.style.position = 'absolute';
            // self.style.display = 'block';
            self.style.left = myX - distanceX +'px';
            self.style.top = myY - distanceY +'px';
        };
        };
    document.onmouseup = function () {
        // alert(0);
        document.onmousemove = null;
        document.onmouseup = null;
        // lis[0].onmousedown  =null;

    };
}
};
