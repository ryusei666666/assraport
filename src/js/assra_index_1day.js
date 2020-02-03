$(function(){


    let time6 = $('.time6');
    let timeBox = $('.time_box');
    let title6 = $('.title6');
    let v = 0;

    // console.log(timeBox.eq(0)[0]);

    for(let i=0 ; time6.length>i ;i++){
        timeBox.eq(i).on("click",function(){
            title6.eq(0)[0].classList.add('displayNone');
            time6.eq(v)[0].classList.add('displayNone');
            time6.eq(i)[0].classList.remove('displayNone');
            timeBox.eq(v)[0].classList.remove('white');
            timeBox.eq(i)[0].classList.add('white');
            v=i;
        })
    }
    
})