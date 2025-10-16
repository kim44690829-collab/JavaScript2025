 // 목록 및 검색 토글을 위한 document
        let list_btn = document.querySelector('#list_btn');
        let search_btn = document.querySelector('#search_btn');
        let list_toggle = document.querySelector('.list_toggle');
        let search_toggle = document.querySelector('.search_toggle');

        // 랭킹에 마우스 오버시 영화 이미지 변경을 위한 document 2세트
        let main_img = document.querySelector('#main_img');
        let img_sub = document.querySelectorAll('.img_sub');
        let ranking = document.querySelectorAll('.ranking');

        let main_img2 = document.querySelector('#main_img2');
        let img_sub2 = document.querySelectorAll('.img_sub2');
        let ranking2 = document.querySelectorAll('.ranking2');
        
        // 예매율순과 관객순을 서로 바꾸기 위한 document
        let ranking_order = document.querySelectorAll('.ranking_order');
        let img_ranking = document.querySelector('.img_ranking');
        let img_ranking2 = document.querySelector('.img_ranking2');

        // 목록 버튼 토글
        list_btn.addEventListener('click',() =>{
            list_toggle.classList.toggle('list');
            search_toggle.classList.remove('input_toggle');
            list_btn.classList.toggle('btn_on');
            search_btn.classList.remove('btn_on');
        })
        // 검색 버튼 토글
        search_btn.addEventListener('click',() =>{
            search_toggle.classList.toggle('input_toggle');
            list_toggle.classList.remove('list');
            search_btn.classList.toggle('btn_on');
            list_btn.classList.remove('btn_on');
        })

        // 메뉴버튼 마우스 오버시 서브메뉴
        let depth2 = document.querySelectorAll('.depth2');
        let depth1 = document.querySelectorAll('.depth1');
        let header = document.querySelector('#head_top');

        // 마우스 오버시 서브메뉴 출력
        depth1[0].addEventListener('mouseover',() => {
            depth1[0].classList.add('hover');
            depth1[1].classList.remove('hover');
            depth1[2].classList.remove('hover');
            depth1[3].classList.remove('hover');
            depth1[4].classList.remove('hover');
            depth1[5].classList.remove('hover');
            
            depth2[0].classList.add('on');
            depth2[1].classList.remove('on');
            depth2[2].classList.remove('on');
            depth2[3].classList.remove('on');
            depth2[4].classList.remove('on');
            depth2[5].classList.remove('on');
        })
        
        depth1[1].addEventListener('mouseover',() => {
            depth1[1].classList.add('hover');
            depth1[0].classList.remove('hover');
            depth1[2].classList.remove('hover');
            depth1[3].classList.remove('hover');
            depth1[4].classList.remove('hover');
            depth1[5].classList.remove('hover');

            depth2[1].classList.add('on');
            depth2[0].classList.remove('on');
            depth2[2].classList.remove('on');
            depth2[3].classList.remove('on');
            depth2[4].classList.remove('on');
            depth2[5].classList.remove('on');
        })

        depth1[2].addEventListener('mouseover',() => {
            depth1[2].classList.add('hover');
            depth1[0].classList.remove('hover');
            depth1[1].classList.remove('hover');
            depth1[3].classList.remove('hover');
            depth1[4].classList.remove('hover');
            depth1[5].classList.remove('hover');

            depth2[2].classList.add('on');
            depth2[0].classList.remove('on');
            depth2[1].classList.remove('on');
            depth2[3].classList.remove('on');
            depth2[4].classList.remove('on');
            depth2[5].classList.remove('on');
        })

        depth1[3].addEventListener('mouseover',() => {
            depth1[3].classList.add('hover');
            depth1[0].classList.remove('hover');
            depth1[1].classList.remove('hover');
            depth1[2].classList.remove('hover');
            depth1[4].classList.remove('hover');
            depth1[5].classList.remove('hover');

            depth2[3].classList.add('on');
            depth2[0].classList.remove('on');
            depth2[1].classList.remove('on');
            depth2[2].classList.remove('on');
            depth2[4].classList.remove('on');
            depth2[5].classList.remove('on');
        })

        depth1[4].addEventListener('mouseover',() => {
            depth1[4].classList.add('hover');
            depth1[0].classList.remove('hover');
            depth1[1].classList.remove('hover');
            depth1[2].classList.remove('hover');
            depth1[3].classList.remove('hover');
            depth1[5].classList.remove('hover');

            depth2[4].classList.add('on');
            depth2[0].classList.remove('on');
            depth2[1].classList.remove('on');
            depth2[2].classList.remove('on');
            depth2[3].classList.remove('on');
            depth2[5].classList.remove('on');
        })

        depth1[5].addEventListener('mouseover',() => {
            depth1[5].classList.add('hover');
            depth1[1].classList.remove('hover');
            depth1[2].classList.remove('hover');
            depth1[3].classList.remove('hover');
            depth1[4].classList.remove('hover');
            depth1[0].classList.remove('hover');

            depth2[5].classList.add('on');
            depth2[1].classList.remove('on');
            depth2[2].classList.remove('on');
            depth2[3].classList.remove('on');
            depth2[4].classList.remove('on');
            depth2[0].classList.remove('on');
        })
        // 쌓인 서브메뉴 삭제
        for(let i=0; i<depth2.length; i++){
            depth2[i].addEventListener('mouseleave',() => {
                depth1[i].classList.remove('hover');
                depth2[i].classList.remove('on');
            })
        }

        // 영화 랭킹에 마우스오버시 포스터 변경
        for(let i = 0; i < img_sub.length; i++){
            ranking[i].addEventListener('mouseover',() => {
                main_img.src = img_sub[i].src;
            })
        }
        for(let i = 0; i < img_sub2.length; i++){
            ranking2[i].addEventListener('mouseover',() => {
                main_img2.src = img_sub2[i].src;
            })
        }

        // 예매율순, 관객순을 누르면 서로 바뀌게 하는 스크립트
        ranking_order[1].addEventListener('click',() => {
            img_ranking.classList.add('click');
            img_ranking2.classList.add('click');
            ranking_order[1].classList.add('on1');
            ranking_order[0].classList.remove('on');
            ranking_order[0].classList.remove('order');
        })
        ranking_order[0].addEventListener('click',() => {
            img_ranking.classList.remove('click');
            img_ranking2.classList.remove('click');
            ranking_order[0].classList.add('on');
            ranking_order[1].classList.remove('on1');
        })

        

        // 모달 배너 document
        // x버튼 누르면 모달 삭제
        let x_btn = document.getElementById('x_btn');
        let modal_banner = document.querySelector('.modal_banner');

        // 이미지 자동 변경
        let banner = document.getElementById('banner');
        // 현재 보여지는 슬라이드의 인덱스 번호(0부터 시작)
        let current = 0;
        let current2 = 0;
        // setInterval() 함수를 사용해서 반복적으로 이미지가 변경되도록 지정할 예정
        let timer;
        let timer2;
        // 이미지 변경시 span의 동그라미 자동 변경
        let btns = document.querySelectorAll('.btns span');
        // btns.length를 total 변수로 지정, 현재 total = 5
        let total = btns.length;
        

        // 정지, 재생버튼 토글
        let playStop = document.querySelector('#playStop');
        let playStop2 = document.querySelector('#playStop2');
        // 현재 버튼 상태
        let isPlay = true;
        let isPlay2 = true;

        // input 누르면 하루동안 나오지 않기
        let day1_btn = document.getElementById('day1_btn');

        // x버튼 클릭 모달 삭제
        x_btn.addEventListener('click',() => {
          modal_banner.classList.add('active');
        })

        // section2 배너
        let banner2_str = document.getElementById('banner2_str');
        let banner2_img = document.getElementById('banner2_img');
        console.log('banner2_str',banner2_str)
        console.log('banner2_img',banner2_img)

        // 이미지 변경시 span 막대기 자동변경
        let banner_btns = document.querySelectorAll('.banner_btns span');
        // banner_btns.length를 total2 변수로 지정
        let total2 = banner_btns.length;

        // section2 변경될 이미지 및 span 막대
        function slideShow2(){
            console.log('a')
            banner2_str.src = `img/bannerS_${current2+1}.jpg`;
            banner2_img.src = `img/banner_${current2+1}.jpg`;
            for(let i = 0; i < total2; i++){
                banner_btns[i].classList.remove('num1');
            }
            banner_btns[current2].classList.add('num1');
        }

        // section2 3초마다 자동 변경
        function startSlide2(){
            timer2 = setInterval(() => {
                current2 = (current2 + 1) % total2;
                slideShow2(current2);
            }, 3000)
        }
        // section 정지
        function stopSlide2(){
            clearInterval(timer2);
        }

        slideShow2();
        startSlide2();

        playStop2.addEventListener('click',() => {
            if(isPlay2){
                stopSlide2();
                playStop2.innerHTML = '<i class="fa-solid fa-play"></i>';
            }else{
                startSlide2();
                playStop2.innerHTML = '<i class="fa-solid fa-stop"></i>';
            }

            isPlay2 = !isPlay2;
        })

        // 모달배너 script
        // 이미지 자동 변경
        function slideShow(){
            // 이미지 변경을 위한 접근
            banner.src = `img/banner1_${current+1}.jpg`;
            // 기본적인 class="num" 삭제를 위한 코드
            for(let i = 0; i < total; i++){
                btns[i].classList.remove('num');
            }
            // 삭제한 num을 다시 심기위한 코드
            btns[current].classList.add('num');
        }

        // span버튼 클릭시 클릭한 span에 해당하는 img로 가도록
        // for(let i = 0; i < total; i++){
        //         btns[i].addEventListener('click',() => {
        //             banner.src = `img/banner1_${i+1}.jpg`;
        //             btns[current].classList.remove('num');
        //             btns[i].classList.add('num');
        //             startSlide(i);
        //         })
        //     }

        // 이미지 자동변경
        function startSlide(){
            // setInterval(() => {실행문}, 3000)
            timer = setInterval(() => {
                current = (current + 1) % total;
                slideShow(current);
            }, 3000)
        }

        // 이미지 멈추는 함수
        function stopSlide(){
            clearInterval(timer);
        }

        slideShow();
        startSlide();

            playStop.addEventListener('click',() => {
            if(isPlay){
                stopSlide();
                playStop.innerHTML = '<i class="fa-solid fa-play"></i>';
            }else{
                startSlide();
                playStop.innerHTML = '<i class="fa-solid fa-stop"></i>';
            }

            isPlay = !isPlay;
        })

        // label클릭시 하루동안 보지않기
        day1_btn.addEventListener('click',() => {
            modal_banner.classList.add('active');
        })