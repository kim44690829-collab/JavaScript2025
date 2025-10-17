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

        // 이미지 변경시 span 막대기 자동변경
        let banner_btns = document.querySelectorAll('.banner_btns span');
        // banner_btns.length를 total2 변수로 지정
        let total2 = banner_btns.length;

        // section2 변경될 이미지 및 span 막대
        function slideShow2(){
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

        // section3 포스터 배열

        let movie_right3 = document.querySelector('.movie_right3');
        // section3 이미지 클릭시 bigimg변경
        let big_img = document.getElementById('big_img');
        let p1 = document.querySelector('.p1');
        let p2 = document.querySelector('.p2');
        let p3 = document.querySelector('.p3');

        let movieNum = 1;
        let movieName = ["마작", "프랑켄슈타인 : 더 뮤지컬 라이브", "만남의 집", "그저 사고였을 뿐", "연의 편지"];
        let movieStory = [
            "급격한 경제 성장을 이루며 전 세계의 돈이 모이는 1990년대 타이베이,<br/><br/>네 청년 홍어, 소부처, 홍콩 그리고 룬룬은 모든 것을 함께 나눈다는 약속을 하며청년 갱단을 조직해 한 집에서 살아간다.<br/><br/>남자친구와 재회하기 위해 무작정 타이베이를 찾았지만 갈 곳이 없어진 프랑스인 마르트.<br/>갱단의 리더 홍어는 마르트를 이용하기 위해 접근하고, 룬룬은 그녀에게 설레는 감정을 느끼기 시작한다.<br/><br/>한편, 홍어 아버지의 빚을 받아내려는 빚쟁이가 룬룬을 홍어로 착각해 룬룬과 마르트를 납치하는 사건이 벌어지는데....",
            "“신을 믿어 지독하게. 하지만 그건 축복이 아니야, 저주를 통해서지.”<br/><br/>나폴레옹 전쟁의 참혹한 전장에서 시작된 과학자 빅터 프랑켄슈타인의 실험은 피조물을 탄생시키지만,<br/> 예기치 못한 피조물의 실종으로 파국을 맞이한다.<br/><br/>3년 뒤, 빅터 앞에 괴물이 되어 돌아온 피조물은 “교만한 창조주여, 내가 겪은 불행을 돌려주리라”는 저주와 함께<br/> 그의 운명을 뒤흔든다.<br/><br/>10년간 무대를 압도해온 한국 창작뮤지컬의 신화, 뮤지컬 〈프랑켄슈타인〉이 스크린에서 다시 살아난다.",
            "15년 차 교도관 태저(송지효)는 근무 중 담당 수용자 미영(옥지영)의 모친 사망 소식을 전해 듣는다.<br/><br/>어느 겨울밤, 장례식장 빈소에서 예기치 못한 만남을 하게 된 태저와 미영의 딸 준영(도영서).<br/>짧은 만남은 두 사람의 삶에 따스한 균열을 일으키고, 결국 세 인물의 연결고리를 만들어낸다.<br/><br/>“네가 하는 모든 선택들이 모여서 네가 돼”<br/><br/>서로의 삶을 비추는 ‘햇빛 같은 만남’",
            "어느 날, 나를 지옥으로 이끌던 삐걱 소리가 다시 들렸다.<br/><br/>분명 <strong>그놈</strong>이다. 하지만 만약에 아니라면?<br/><br/>“그저 사고였을 뿐? 누군가는 그걸 평생 기억해”",
            "여름 방학이 지나고 새로운 학교로 전학 오게 된 ‘소리’는 자신의 책상 서랍에서 학교에 대한 소개와 <br/> 다음 편지를 찾을 수 있는 힌트가 담긴 익명의 편지 한 통을 발견한다.<br/><br/>“내 편지를 더 읽고 싶다면 두 번째 편지를 찾아줘!” 이어지는 편지를 따라서 보물찾기하듯 학교 곳곳을 누비던 ‘소리’는 <br/> 어쩐지 동급생 ‘동순’과 자꾸 마주치고, ‘소리’와 ‘동순’은 함께 편지를 찾는 친구가 된다.<br/><br/> 하나, 둘… 편지를 모을수록 특별한 인연이 이어지자, ‘소리’는 편지를 보낸 사람에 대한 궁금증이 점차 커져가게 되는데…<br/><br/> “마지막 편지까지 찾아서, 너에게 고맙다고 말하고 싶어”"
        ]
                       // i = 0부터 0,1,2,3,4 총길이 5
        for(let i = 0; i < movieName.length; i++){
            console.log(movieName.length)
            movie_right3.innerHTML += `
            <div class="movieInfo">
                <img src="img/movie_${movieNum + i}.jpg" alt="영화상세 보기" class="moviePoster"/> 
                <p>${movieName[i]}</p>
            </div>
            `
        }
        let moviePoster = document.querySelectorAll('.moviePoster'); // [0,1,2,3,4]
        for(let i = 0; i < moviePoster.length; i++){
            console.log(moviePoster.length)
            moviePoster[i].addEventListener('click',() => {
                big_img.src = `img/movie_${i+1}.jpg`;
                p2.textContent = movieName[i];
                p3.innerHTML = movieStory[i];
                if(i === 1){
                    p1.textContent = "#클래식소사이어티";
                }else{
                    p1.textContent = "#필름소사이어티";
                }
            })
        }

        // section4 오른쪽 버튼, 왼쪽버튼
        let left2 = document.querySelector('.left2');
        let right2 = document.querySelector('.right2');
        let cinema_wrap = document.getElementById('cinema_wrap');
        

        right2.addEventListener('click',() => {
            cinema_wrap.style.transform = 'translate3d(-180px, 0px, 0px)';
        })
        left2.addEventListener('click',() => {
            cinema_wrap.style.transform = 'translate3d(180px, 0px, 0px)';
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