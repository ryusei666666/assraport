$(function(){
    

    let top = $(`.top`);
    let bottom = $(`.bottom`);
    let animeFlg = false;

    // console.log(top[1].style.left);

    let numnum = 0;
    // top[1].style.left =`100%`;
    var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(mousewheelevent,function(e){
        var num = parseInt(numnum);
        // var num = parseInt($('.').style.left);
        e.preventDefault();
        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

        // top
        if (delta < 0){
            let dNum
            if(numnum >= 0){
                dNum = num + 2;
            }
            else{
                dNum = 0;
            }
            for(let i =0 ; top.length>i ; i++){

                if(i !== 0){
                    oriLeftTop = 150 + (i-1)*100
                }
                else if(i==0){
                    oriLeftTop = 0
                }

                // if(animeFlg){ //アニメーションオフ
                    top[i].classList.remove(`anime`); //anime オフ
                //     animeFlg = false;
                // }

                if((i-1)*100+90 < dNum && dNum <(i-1)*100+99){
                    top[i].classList.add(`anime`);
                    // animeFlg = true;
                    dNum = (i-1)*100+100;
                }
                let dNewLeftTop = oriLeftTop - dNum;
                $('.top')[i].style.left = `${dNewLeftTop}%`;
                numnum = dNum;
                console.log(numnum);
    
            }
        } else {
            let uNum;
            if(numnum >= 2){
                uNum = num - 2;
            }
            else{
                uNum = 0;
            }
            for(let i =0 ; top.length>i ; i++){
                if(i !== 0){
                    oriLeftTop = 150 + (i-1)*100
                }
                else if(i==0){
                    oriLeftTop = 0
                }

                top[i].classList.remove(`anime`); //anime オフ
                if((i-1)*100+100 < uNum && uNum <(i-1)*100+110){
                    top[i].classList.add(`anime`);
                    uNum = (i-1)*100+100;
                }
                uNewLeftTop = oriLeftTop - uNum;
                $('.top')[i].style.left = `${uNewLeftTop}%`;
                numnum = uNum;
                console.log(uNum);
            }
        }

        // bottom
        if (delta < 0){
            let dNum;
            if(numnum >= 0){
                dNum = num + 2;
            }
            else{
                dNum = 0;
            }
            for(let i =0 ; bottom.length>i ; i++){
                if(i !== 0){
                    oriLeft = -150 - (i-1)*100
                }
                else if(i==0){
                    oriLeft = 0
                }

                bottom[i].classList.remove(`anime`); //anime オフ
                if((i-1)*100+90 < dNum && dNum <(i-1)*100+99){
                    bottom[i].classList.add(`anime`);
                    dNum = (i-1)*100+100;
                }
                let dNewLeft = oriLeft + dNum;
                $('.bottom')[i].style.left = `${dNewLeft}%`;
                numnum = dNum;
                console.log(dNum);
    
            }

        } else {
            let uNum;
            if(numnum >= 2){
                uNum = num - 2;
            }
            else{
                uNum = 0;
            }
            for(let i =0 ; bottom.length>i ; i++){
                if(i !== 0){
                    oriLeft = -150 - (i-1)*100
                }
                else if(i==0){
                    oriLeft = 0
                }

                bottom[i].classList.remove(`anime`); //anime オフ
                if((i-1)*100+100 < uNum && uNum <(i-1)*100+110){
                    bottom[i].classList.add(`anime`);
                    uNum = (i-1)*100+100;
                }

                uNewLeft = oriLeft + uNum;
                $('.bottom')[i].style.left = `${uNewLeft}%`;
                numnum = uNum;
                console.log(uNum);
            }
        }


    });       
    
    
})