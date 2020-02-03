$(function(){

    let pointBtn = $('.point_btn');
    let title5 = $('.title5');
    let pointMes = $('.point_mes');
    let v = 0;

    for(let i = 0; pointMes.length>i ; i++){
        pointBtn.eq(i).on('click',function(){
            title5.eq(0)[0].classList.add('displayNone');
            pointMes.eq(v)[0].classList.add('displayNone');
            pointMes.eq(i)[0].classList.remove('displayNone');
            pointBtn.eq(v)[0].classList.remove('highFilter');
            pointBtn.eq(i)[0].classList.add('highFilter');
            v = i;
        })
    
    }
    // console.log(title5.eq(0)[0]);

})