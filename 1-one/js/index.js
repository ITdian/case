window.onload  =function () {
    var oul = document.getElementsByClassName('oul')[0];
    var top_img = document.getElementsByClassName('top_img')[0];
    var lis = oul.getElementsByTagName('li');
    // lis[0].onmousemove = function () {
    //     // alert(0);
    //     top_img.src = 'images/1big.jpg'
    // };
    // lis[1].onmousemove = function () {
    //     // alert(0);
    //     top_img.src = 'images/2big.jpg'
    // };
    // lis[2].onmousemove = function () {
    //     // alert(0);
    //     top_img.src = 'images/3big.jpg'
    // };
    // lis[3].onmousemove = function () {
    //     // alert(0);
    //     top_img.src = 'images/4big.jpg'
    // };
    // lis[4].onmousemove = function () {
    //     // alert(0);
    //     top_img.src = 'images/5big.jpg'
    // };
    function changeImg(num) {
        lis[num].onmousemove = function () {
            // alert(0);
            top_img.src = 'images/'+(num+1)+'big.jpg'
        };
    }
    changeImg(0);
    changeImg(1);
    changeImg(2);
    changeImg(3);
    changeImg(4);
};
