$(function(){

    let mes4Circle = $('.mes4_circle');
    let mes4Select = $('.mes4_select');
    let smallCircle4 = $('.smallCircle4');
    let v = 2;

    for(let i = 0 ; mes4Circle.length>i ; i++){
        mes4Circle.eq(i).on('click',function(){
            smallCircle4.eq(v)[0].classList.add('displayNone');
            smallCircle4.eq(i)[0].classList.remove('displayNone');

            if(i == 0){
                mes4Select.eq(0).css({
                    "left": "39%"
                })           
            }
            else if(i == 1){
                mes4Select.eq(0).css({
                    "left": "50%"
                })    
            }
            else{
                mes4Select.eq(0).css({
                    "left": "61%"
                })    
            }

            v = i;

        })
    }
    console.log(smallCircle4);
    console.log(mes4Circle);
}) 