// <script>
    // 获取元素
    var box = document.querySelector('#box');
    var imgArr = document.querySelectorAll('.img-box li');
    var listArr = document.querySelectorAll('.list-box li');
    var prev = document.querySelector('.box-btn-left');
    var next = document.querySelector('.box-btn-right');
    var timer = null;

    // 当前页面的索引
    var currentIndex = 0;

    // 你需要第几张显示就显示第几张
    function animate(currentIndex) {
        // 排他思想
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].style.opacity = 0;
            imgArr[i].style.zIndex = 0;
            listArr[i].className = '';
        }
        imgArr[currentIndex].style.zIndex = 1;
        imgArr[currentIndex].style.opacity = 1;
        listArr[currentIndex].className = 'active';
    }
    for(let i = 0; i<listArr.length; i++) {
        listArr[i].onclick = ()=>{
            currentIndex = i;
            animate(i);
        }
    }
    function autoplay(medthod) {
        if(medthod == 'next') {
            currentIndex ++;
            if(currentIndex > imgArr.length-1) {
                currentIndex = 0;
            }
        }
        if(medthod == 'prev') {
            currentIndex--;
            if(currentIndex < 0) {
                currentIndex = imgArr.length -1;
            }
        }
        animate(currentIndex);
    }

    next.onclick = () => autoplay('next');
    prev.onclick = () => autoplay('prev');

    timer = setInterval(() => autoplay('next'), 2000);
    box.onmouseenter = () => clearInterval(timer);
    box.onmouseleave = function() {
        timer = setInterval(function(){
            autoplay('next')
        }, 2000)
    };
    // </script>