// console.log('test!');
var timeout;

window.onload = function(){
    var mijnSlider = new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
    });

    function loop(){
        timeout = setTimeout(function(){
            mijnSlider.next(1);
            loop();
        }, 4000);
    };

    loop();
// console.log('test!');
};

