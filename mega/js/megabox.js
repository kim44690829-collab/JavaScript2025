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

        // section 성인,청소년,경로,우대 기능
        let plus_btn = document.querySelectorAll('.plus_btn');  // 더하기 버튼
        let minus_btn = document.querySelectorAll('.minus_btn'); //빼기 버튼
        let count_btn = document.querySelectorAll('.count_btn'); // 숫자값 버튼
        
        let sumCount = 0;

        // 8명보다 더 많은 예약시 모달창
        let overlay = document.querySelector('.overlay');
        let modal = document.querySelector('.modal');
        // let modal_count8 = document.querySelector('.modal_count8');
        let modal_btn = document.querySelectorAll('.modal_btn');
        let message = document.querySelector('.message');


        //우측 선택좌석 네모칸 선택자
        let seatSelect = document.querySelectorAll('.seat-select');
        //우측 선택좌석 네모칸 기본세팅
        for(let i=0; i<seatSelect.length; i++){
            seatSelect[i].textContent = '-';
        }

        // 플러스버튼 클릭시
        for(let i = 0; i < plus_btn.length; i++){
            plus_btn[i].addEventListener('click', () => {  
                
                // sumCount가 8이상일때 모달창을 띄우고 함수를 빠져나감
                // return을 사용한 이유는 함수를 빠져나가서 하단에 count_btn[i].textContent++와 sumCount += 1의
                // 영향을 안받게 하기 위해서
                if(sumCount >= 8){
                    // console.log('2번 위 : ' + sumCount);
                    message.innerHTML = `인원선택은 총 8명까지 가능합니다.`
                    overlay.classList.add('active');
                    modal.classList.add('active');
                    return;
                }
                // plus_btn[2]를 클릭하면서 count_btn[2].textContent가 0일때만 모달창 띄움
                if(i === 2 && Number(count_btn[2].textContent) === 0){
                    message.innerHTML = `
                    ◆ 경로 : 만 65세 이상(신분증)
                    <br/>
                    <br/>
                    경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 본인신분증을 제시해 주시기 바랍니다 
                    <br/>
                    (*미지참시 입장 제한)
                    <br/>
                    <br/>
                    *경로선택 시 추가 할인이 제한될 수 있습니다
                    `
                    modal.classList.add('active');
                    overlay.classList.add('active');
                }
                // plus_btn[3]을 클릭하면서 count_btn[3].textContent가 0일때만 모달창 띄움
                if(i === 3 && Number(count_btn[3].textContent) === 0){
                    message.innerHTML = `
                    ※만 65세이상 고객님께서는 [경로]발권 부탁드립니다(*지점별 상이)
                    <br/>
                    <br/>
                    ◆ 우대요금은 장애인 고객에게 적용되며, 상영관 입장 시 본인확인 증빙서류를 제시해 주시기 바랍니다.<br/>
                    (미지참 시 입장 제한)
                    <br/>
                    <br/>
                    - 장애인: 복지카드
                    <br/>
                    - 국가유공자: 국가유공자증
                    <br/>
                    <br/>
                    위 항목 외 지점별 우대요금 추가적용 대상은 직원확인 후 발권이 가능합니다
                    <br/>
                    *우대선택 시 추가 할인이 제한될 수 있습니다.
                    <br/>
                    *국가유공자증에 한하며, 국가유공자 유족증 등은 할인이 불가합니다.
                    `
                    modal.classList.add('active');
                    overlay.classList.add('active');
                }
                // 위의 조건을 다 실행한 후 count_btn[i].textContent의 숫자와 sumCount 1 증가
                count_btn[i].textContent++;
                sumCount += 1;
                // console.log('1번 아래 : ' + sumCount);

                //우측 '선택'네모 증가
                for(let l=0; l<sumCount; l++){
                    let seatSelect = document.querySelectorAll('.seat-select');

                    if(seatSelect[l].classList.contains('choice')){
                        seatSelect[l].classList.remove('possible');
                    }else if(seatSelect[l].classList.contains('possible')){
                        seatSelect[l].classList.remove('possible');
                        seatSelect[l].classList.add('possible');
                    }else{
                        seatSelect[l].classList.add('possible');
                    }
                }                

                //배열 루프를 돌려서
                for(let j=0;j<seatArr.length;j++){//행
                    for(let k=0; k<seatArr[j].length; k++){//열
                        //만약 한명만 입력했다면
                        if(sumCount == 1){      
                            //각 행의 짝수열(2,4,6,8,10)만 선택불가(unavailSeats) 클래스 추가
                            if(k % 2 == 0) seatTr[j].children[k].classList.add('unavailSeats');

                            let unavailSeats = document.querySelectorAll('.unavailSeats');
                            for(let m=0; m<unavailSeats.length; m++){
                                unavailSeats[m].click();
                            }
                        }else{
                            // 총 인원수 1명 이외는 선택불가(unavailSeats)클래스 제거
                            seatTr[j].children[k].classList.remove('unavailSeats');
                            // 그러나 테이블 첫번째 열(알파벳)에만
                            // 선택불가(unavailSeats)클래스 다시 주기
                            seatTr[j].children[0].classList.add('unavailSeats');
                        }
                    }
                }

                //다음버튼 비활성화
                nextBtn.classList.remove('act');
            })
        }

        let cancel_btn = document.querySelector('#cancel');
        let check_btn1 = document.querySelector('#check1');
        let check_btn2 = document.querySelector('#check2');
        check_btn2.style.display = 'none';
        //마이너스 버튼 클릭시
        for(let i = 0; i < minus_btn.length; i++){
            minus_btn[i].addEventListener('click', () => {               
                //좌측 선택된 좌석
                let selectedSeat = document.querySelectorAll('.selectedSeat');
                let possible = document.querySelectorAll('.possible');

                // 0보다 큰 숫자가 입력 되있으면
                if(count_btn[i].textContent > 0){
                    //인원수 합계가 선택된 좌석수보다 이상이면
                    if(sumCount > selectedSeat.length){
                        //입력된 숫자 감소
                        count_btn[i].textContent--;
                        //우측 '선택좌석' 네모 감소
                        possible[possible.length-1].classList.remove('possible');
                        //인원수 합계 감소
                        sumCount--;

                        if(sumCount - selectedSeat.length > 0){
                            //다음버튼 비활성화
                            nextBtn.classList.remove('act');
                        }else if(sumCount - selectedSeat.length == 0){
                            if(sumCount == 0){
                                //다음버튼 비활성화
                                nextBtn.classList.remove('act');
                            }else{
                                //다음버튼 활성화
                                nextBtn.classList.add('act');
                            }
                        }

                        //입력값(인원수) number로 저장
                        adultNum = Number(adult.textContent);
                        teenNum = Number(teen.textContent);
                        seniorNum = Number(senior.textContent);
                        discountNum = Number(discount.textContent);

                        //마이너스 버튼을 눌러 특정(성인,청소년..) 사람유형의 인원수를 줄였을때, 해당 유형의 선택된 좌석이 인원수보다 초과시, 다른 유형의 남는 관람 인원수로 이동시키는 기능
                        if(adultSeat > adultNum){
                            if(teenSeat < teenNum){
                                teenSeat++;
                                payTypeText2 = `${teenName} ${teenSeat} · `;
                            }else if(seniorSeat < seniorNum){
                                seniorSeat++;
                                payTypeText3 = `${seniorName} ${seniorSeat} · `;
                            }else if(discountSeat < discountNum){
                                discountSeat++;
                                payTypeText4 = `${discountName} ${discountSeat} · `;
                            }

                            if(adultSeat > 1){
                                adultSeat--;
                                payTypeText1 = `${adultName} ${adultSeat} · `;
                            }else{
                                adultSeat--;
                                payTypeText1 = ``;
                            }
                        }else if(teenSeat > teenNum){
                            if(adultSeat < adultNum){
                                adultSeat++;
                                payTypeText1 = `${adultName} ${adultSeat} · `;
                            }else if(seniorSeat < seniorNum){
                                seniorSeat++;
                                payTypeText3 = `${seniorName} ${seniorSeat} · `;
                            }else if(discountSeat < discountNum){
                                discountSeat++;
                                payTypeText4 = `${discountName} ${discountSeat} · `;
                            }

                            if(teenSeat > 1){
                                teenSeat--;
                                payTypeText2 = `${teenName} ${teenSeat} · `;
                            }else{
                                teenSeat--;
                                payTypeText2 = ``;
                            }
                        }else if(seniorSeat > seniorNum){
                            if(adultSeat < adultNum){
                                adultSeat++;
                                payTypeText1 = `${adultName} ${adultSeat} · `;
                            }else if(teenSeat < teenNum){
                                teenSeat++;
                                payTypeText2 = `${teenName} ${teenSeat} · `;
                            }else if(discountSeat < discountNum){
                                discountSeat++;
                                payTypeText4 = `${discountName} ${discountSeat} · `;
                            }

                            if(seniorSeat > 1){
                                seniorSeat--;
                                payTypeText3 = `${seniorName} ${seniorSeat} · `;
                            }else{
                                seniorSeat--;
                                payTypeText3 = ``;
                            }
                        }else if(discountSeat > discountNum){
                            if(adultSeat < adultNum){
                                adultSeat++;
                                payTypeText1 = `${adultName} ${adultSeat} · `;
                            }else if(teenSeat < teenNum){
                                teenSeat++;
                                payTypeText2 = `${teenName} ${teenSeat} · `;
                            }else if(seniorSeat < seniorNum){
                                seniorSeat++;
                                payTypeText3 = `${seniorName} ${seniorSeat} · `;
                            }

                            if(discountSeat > 1){                                
                                discountSeat--;
                                payTypeText4 = `${discountName} ${discountSeat} · `;
                            }else{
                                discountSeat--;
                                payTypeText4 = ``;
                            }
                        }


                        //인원유형 & 인원수 표시
                        payType.innerText = (payTypeText1 + payTypeText2 + payTypeText3 + payTypeText4).slice(0,-2);
                        
                        //최종결제금액 표시
                        totalPay.innerHTML = `${((adultSeat*16000) + (teenSeat*14000) + (seniorSeat*8000) + (discountSeat*7000)).toLocaleString('ko-kr')}<span> 원</span>`;
                    }else{
                        //인원수 합계가 선택된 좌석수보다 이하이면
                        message.innerHTML = `
                        선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?
                        `
                        cancel_btn.classList.add('active');
                        modal.classList.add('active');
                        overlay.classList.add('active');
                        if(check_btn2.style.display == 'none'){
                            check_btn1.style.display = 'none';
                            check_btn2.style.display = 'block';
                        }
                        
                        //확인시 초기화 function 호출
                        modal_btn[3].addEventListener('click',() => {
                            resetAction();
                            overlay.classList.remove('active');
                            modal.classList.remove('active');
                            cancel_btn.classList.remove('active');
                            check_btn1.style.display = 'block';
                            check_btn2.style.display = 'none';
                        })
                    }
                }
                //배열 루프를 돌려서
                for(let j=0;j<seatArr.length;j++){//행
                    for(let k=0; k<seatArr[j].length; k++){//열
                        //만약 한명만 입력했다면
                        if(sumCount == 1){      
                            //각 행의 짝수열(2,4,6,8,10)만 선택불가(unavailSeats) 클래스 추가
                            if(k % 2 == 0) seatTr[j].children[k].classList.add('unavailSeats');

                            let unavailSeats = document.querySelectorAll('.unavailSeats');
                            for(let m=0; m<unavailSeats.length; m++){
                                unavailSeats[m].click();
                            }
                        }else{
                            // 총 인원수 1명 이외는 선택불가(unavailSeats)클래스 제거
                            seatTr[j].children[k].classList.remove('unavailSeats');
                            // 그러나 테이블 첫번째 열(알파벳)에만
                            // 선택불가(unavailSeats)클래스 다시 주기
                            seatTr[j].children[0].classList.add('unavailSeats');
                        }
                    }
                }

                
            })
        }
        


        //좌석배열 생성
        let seatArr = Array.from(Array(10),() => new Array(11));
        //알파벳 배열생성
        let alpa = ['A','B','C','D','E','F','G','H','I','J'];
        //테이블 결과값
        let result = `<table>`;

        //좌석 배열 테이블 생성
        for(let i=0;i<seatArr.length;i++){//행
            
            result += `<tr>`;
            
            for(let j=0;j<seatArr[i].length;j++){//열

                result += `<td>`;

                if(j==0){// 첫 행 시작마다 알파벳이 바뀌게
                    seatArr[i][j] = alpa[i];
                }else{// 나머지 행에는 인덱스 순서대로 저장
                    seatArr[i][j] = j;
                }                    

                result += `${seatArr[i][j]}</td>`;
            }
            
            result += `</tr>`;
        }
        result += `</table>`;

        //좌석 테이블 출력
        let seat = document.querySelector('.seat');
        seat.innerHTML = result;


        // 유형별 ID 선택자
        let adult = document.querySelector('.adult .count_btn');
        let teen = document.querySelector('.teen .count_btn');
        let senior = document.querySelector('.senior .count_btn');
        let discount = document.querySelector('.discount .count_btn');

        // 유형별 이름 선택자
        let adultName = document.querySelector('.adult>span').textContent;
        let teenName = document.querySelector('.teen>span').textContent;
        let seniorName = document.querySelector('.senior>span').textContent;
        let discountName = document.querySelector('.discount>span').textContent;

        //우측 인원유형 & 인원수 표시
        let payType = document.querySelector('.pay-type');
        let payTypeText1 = ``;
        let payTypeText2 = ``;
        let payTypeText3 = ``;
        let payTypeText4 = ``;
        let adultSeat = 0;
        let teenSeat = 0;
        let seniorSeat = 0;
        let discountSeat = 0;

        //최종결제금액 선택자
        let totalPay = document.querySelector('.totalPrice');
        totalPay.innerHTML = ``;

        //다음버튼 선택자
        let nextBtn = document.querySelector('.next');
   
        //총 인원수 합산
        let headCount = 0;

        //입력값(인원수) 초기화
        let adultNum = 0;
        let teenNum = 0;
        let seniorNum = 0;
        let discountNum = 0;

        //좌석 테이블의 tr(행) 선택자
        let seatTr = document.querySelectorAll('.seat table tr');

        for(let i=0;i<seatArr.length;i++){//행 
            for(let j=0;j<seatArr[i].length;j++){//열

                // 테이블 첫번째 열(알파벳)에만
                // 선택불가(unavailSeats)클래스 주기
                if(j == 0){
                    seatTr[i].children[j].classList.add('unavailSeats');
                }

                //좌석 클릭시
                seatTr[i].children[j].addEventListener('click',()=>{

                    //입력값(인원수) number로 저장
                    adultNum = Number(adult.textContent);
                    teenNum = Number(teen.textContent);
                    seniorNum = Number(senior.textContent);
                    discountNum = Number(discount.textContent);
       
                    //총 인원수 합산
                    headCount = adultNum + teenNum + seniorNum + discountNum;

                    //선택된 좌석 클래스
                    let selectedSeat = document.querySelectorAll('.selectedSeat');

                     //우측 선택좌석 네모칸 클래스
                    let possible = document.querySelectorAll('.possible');
                    let choice = document.querySelectorAll('.choice');

                    
                    //인원수 합산이 0명일때
                    if(headCount == 0){
                         // 인원수 합산이 0 일때 좌석을 클릭시 모달창
                        message.innerHTML = `
                            관람하실 인원을 먼저 선택해주세요.
                            `
                            modal.classList.add('active');
                            overlay.classList.add('active');
                    //인원수보다 선택한 좌석이 적을때
                    }else if(headCount > selectedSeat.length){
                         //이미 선택된 좌석이 있을때
                        if(seatTr[i].children[j].classList.contains('selectedSeat')){

                            // 좌측 선택된 좌석(selectedSeat) 클래스 제거
                            seatTr[i].children[j].classList.remove('selectedSeat');

                            if(possible.length + choice.length < 8){
                                //우측 좌석 네모칸 선택자
                                let seatSelect = document.querySelectorAll('.seat-select');
                                //우측 좌석 네모칸에 선택표시(choice)를 없앨거기 때문에 미리 possible을 추가시킴
                                seatSelect[possible.length + choice.length].classList.add('possible');

                                 //우측 선택된 좌석표시(choice)갯수만큼 반복
                                for(let k=0; k<choice.length; k++){
                                    //좌측에서 선택한 좌석 글자와 우측의 choice 네모칸 글자가 같으면
                                    if(choice[k].textContent == `${seatTr[i].children[0].textContent}${j}`){                                    
                                        //우측의 해당 choice 네모칸을 없애버림
                                        choice[k].remove();
                                    }
                                }

                                //우측 choice를 없앴기때문에, possible div를 새로 생성하여 삽입
                                let divCreate = document.createElement('div');
                                divCreate.classList.add('seat-select');
                                divCreate.textContent = '-';
                                document.querySelector('.seat-choice').appendChild(divCreate);

                            }else{
                                 //우측 선택된 좌석표시(choice)갯수만큼 반복
                                for(let k=0; k<choice.length; k++){
                                    //좌측에서 선택한 좌석 글자와 우측의 choice 네모칸 글자가 같으면
                                    if(choice[k].textContent == `${seatTr[i].children[0].textContent}${j}`){                                    
                                        //우측의 해당 choice 네모칸을 없애버림
                                        choice[k].remove();
                                    }
                                }

                                //우측 choice를 없앴기때문에, possible div를 새로 생성하여 삽입
                                let divCreate = document.createElement('div');
                                divCreate.classList.add('seat-select');
                                divCreate.textContent = '-';
                                document.querySelector('.seat-choice').appendChild(divCreate);

                                //우측 좌석 네모칸 선택자
                                let seatSelect = document.querySelectorAll('.seat-select');
                                //우측 좌석 네모칸에 선택표시(choice)를 없앨거기 때문에 미리 possible을 추가시킴
                                seatSelect[7].classList.add('possible');

                            }


                            // 우측 인원유형 & 인원수 표시(감소할때)
                            switch(true){
                                case discountSeat > 1:
                                    discountSeat--;
                                    payTypeText4 = `${discountName} ${discountSeat} · `;
                                break;
                                case discountSeat == 1:
                                    discountSeat--;
                                    payTypeText4 = ``;
                                    break;                   
                                break;

                                case seniorSeat > 1:
                                    seniorSeat--;
                                    payTypeText3 = `${seniorName} ${seniorSeat} · `;
                                break;
                                case seniorSeat == 1:
                                    seniorSeat--;
                                    payTypeText3 = ``;
                                    break;                   
                                break;

                                case teenSeat > 1:
                                    teenSeat--;
                                    payTypeText2 = `${teenName} ${teenSeat} · `;
                                break;
                                case teenSeat == 1:
                                    teenSeat--;
                                    payTypeText2 = ``;
                                    break;                   
                                break;

                                case adultSeat > 1:
                                    adultSeat--;
                                    payTypeText1 = `${adultName} ${adultSeat} · `;
                                break;
                                case adultSeat == 1:
                                    adultSeat--;
                                    payTypeText1 = ``;
                                    break;                   
                                break;
                            }

                            
                            //인원유형 & 인원수 표시
                            payType.innerText = (payTypeText1 + payTypeText2 + payTypeText3 + payTypeText4).slice(0,-2);

                            //최종결제금액 표시
                            totalPay.innerHTML = `${((adultSeat*16000) + (teenSeat*14000) + (seniorSeat*8000) + (discountSeat*7000)).toLocaleString('ko-kr')}<span> 원</span>`;
                            
                            //다음버튼 비활성화
                            nextBtn.classList.remove('act');

                        }else if(seatTr[i].children[j].classList.contains('unavailSeats')){
                            return //아무것도 없이 종료
                        }else{
                            seatTr[i].children[j].classList.add('selectedSeat');
                            possible[0].classList.add('choice');
                            possible[0].textContent = `${seatTr[i].children[0].textContent}${seatTr[i].children[j].textContent}`;
                            possible[0].classList.remove('possible'); 

                            // 우측 인원유형 & 인원수 표시(증가할때)
                            switch(true){
                                case adultNum > 0 && adultNum > adultSeat:
                                    adultSeat++;
                                    payTypeText1 = `${adultName} ${adultSeat} · `;
                                    break;
                                case teenNum > 0 && teenNum > teenSeat:
                                    teenSeat++;
                                    payTypeText2 = `${teenName} ${teenSeat} · `;
                                    break;
                                case seniorNum > 0 && seniorNum > seniorSeat:
                                    seniorSeat++;
                                    payTypeText3 = `${seniorName} ${seniorSeat} · `;
                                    break;
                                case discountNum > 0 && discountNum > discountSeat:
                                    discountSeat++;
                                    payTypeText4 = `${discountName} ${discountSeat} · `;
                                    break;
                                default:
                                    break;
                            }
                            //인원유형 & 인원수 표시
                            payType.innerText = (payTypeText1 + payTypeText2 + payTypeText3 + payTypeText4).slice(0,-2);
                            
                            //최종결제금액 표시
                            totalPay.innerHTML = `${((adultSeat*16000) + (teenSeat*14000) + (seniorSeat*8000) + (discountSeat*7000)).toLocaleString('ko-kr')}<span> 원</span>`;

                            //다음버튼 활성화
                            if(headCount - selectedSeat.length == 1){
                                nextBtn.classList.add('act');
                            }
                        }                        


                    //인원수와 선택 좌석수가 같을 때
                    }else if(headCount == selectedSeat.length){
                        
                        
                        //다음버튼 활성화
                        nextBtn.classList.add('act');
                        
                         //이미 선택된 좌석이 있을때
                        if(seatTr[i].children[j].classList.contains('selectedSeat')){
                            
                            
                            // 좌측 선택된 좌석(selectedSeat) 클래스 제거
                            seatTr[i].children[j].classList.remove('selectedSeat');

                            if(possible.length + choice.length < 8){
                                //우측 좌석 네모칸 선택자
                                let seatSelect = document.querySelectorAll('.seat-select');
                                //우측 좌석 네모칸에 선택표시(choice)를 없앨거기 때문에 미리 possible을 추가시킴
                                seatSelect[possible.length + choice.length].classList.add('possible');

                                 //우측 선택된 좌석표시(choice)갯수만큼 반복
                                for(let k=0; k<choice.length; k++){
                                    //좌측에서 선택한 좌석 글자와 우측의 choice 네모칸 글자가 같으면
                                    if(choice[k].textContent == `${seatTr[i].children[0].textContent}${j}`){                                    
                                        //우측의 해당 choice 네모칸을 없애버림
                                        choice[k].remove();
                                    }
                                }

                                //우측 choice를 없앴기때문에, possible div를 새로 생성하여 삽입
                                let divCreate = document.createElement('div');
                                divCreate.classList.add('seat-select');
                                divCreate.textContent = '-';
                                document.querySelector('.seat-choice').appendChild(divCreate);

                            }else{
                                 //우측 선택된 좌석표시(choice)갯수만큼 반복
                                for(let k=0; k<choice.length; k++){
                                    //좌측에서 선택한 좌석 글자와 우측의 choice 네모칸 글자가 같으면
                                    if(choice[k].textContent == `${seatTr[i].children[0].textContent}${j}`){                                    
                                        //우측의 해당 choice 네모칸을 없애버림
                                        choice[k].remove();
                                    }
                                }

                                //우측 choice를 없앴기때문에, possible div를 새로 생성하여 삽입
                                let divCreate = document.createElement('div');
                                divCreate.classList.add('seat-select');
                                divCreate.textContent = '-';
                                document.querySelector('.seat-choice').appendChild(divCreate);

                                //우측 좌석 네모칸 선택자
                                let seatSelect = document.querySelectorAll('.seat-select');
                                //우측 좌석 네모칸에 선택표시(choice)를 없앨거기 때문에 미리 possible을 추가시킴
                                seatSelect[7].classList.add('possible');

                            }


                            // 우측 인원유형 & 인원수 표시(감소할때)
                            switch(true){
                                case discountSeat > 1:
                                    discountSeat--;
                                    payTypeText4 = `${discountName} ${discountSeat} · `;
                                break;
                                case discountSeat == 1:
                                    discountSeat--;
                                    payTypeText4 = ``;
                                    break;                   
                                break;

                                case seniorSeat > 1:
                                    seniorSeat--;
                                    payTypeText3 = `${seniorName} ${seniorSeat} · `;
                                break;
                                case seniorSeat == 1:
                                    seniorSeat--;
                                    payTypeText3 = ``;
                                    break;                   
                                break;

                                case teenSeat > 1:
                                    teenSeat--;
                                    payTypeText2 = `${teenName} ${teenSeat} · `;
                                break;
                                case teenSeat == 1:
                                    teenSeat--;
                                    payTypeText2 = ``;
                                    break;                   
                                break;

                                case adultSeat > 1:
                                    adultSeat--;
                                    payTypeText1 = `${adultName} ${adultSeat} · `;
                                break;
                                case adultSeat == 1:
                                    adultSeat--;
                                    payTypeText1 = ``;
                                    break;                   
                                break;
                            }


                            //인원유형 & 인원수 표시
                            payType.innerText = (payTypeText1 + payTypeText2 + payTypeText3 + payTypeText4).slice(0,-2);
                            
                            //최종결제금액 표시
                            totalPay.innerHTML = `${((adultSeat*16000) + (teenSeat*14000) + (seniorSeat*8000) + (discountSeat*7000)).toLocaleString('ko-kr')}<span> 원</span>`;
      
                            //다음버튼 비활성화
                            nextBtn.classList.remove('act');
                           
                        }else if(seatTr[i].children[j].classList.contains('unavailSeats')){
                            return //아무것도 없이 종료
                        }else{
                            //선택되지 않은 좌석에 클릭시
                            message.innerHTML = `
                            좌석 선택이 완료되었습니다.
                            `
                            modal.classList.add('active');
                            overlay.classList.add('active');
                        }
                    }                
                })
            }
        }       


        //초기화 function
        function resetAction(){
            //모든 값 0으로 초기화
            adultNum = 0;
            teenNum = 0;
            seniorNum = 0;
            discountNum = 0;
            headCount = 0;
            sumCount = 0;
            payTypeText1 = ``;
            payTypeText2 = ``;
            payTypeText3 = ``;
            payTypeText4 = ``;
            adultSeat = 0;
            teenSeat = 0;
            seniorSeat = 0;
            discountSeat = 0;
            payType.innerText = '';
            totalPay.innerHTML = ``;
            nextBtn.classList.remove('act');


            //인원수 입력 input 갯수만큼 루프
            for(let i=0; i<count_btn.length; i++){
                //입력창도 0으로 표시
                count_btn[i].textContent = 0;                                
            }

            //좌석 배열 루프를 돌려서
            for(let j=0;j<seatArr.length;j++){//행
                for(let k=0; k<seatArr[j].length; k++){//열
                    //좌석에 지정된 모든 클래스 제거
                    seatTr[j].children[k].classList.remove('selectedSeat');
                    seatTr[j].children[k].classList.remove('unavailSeats');
                    //0번째열(알파벳)만 다시 클래스 추가
                    seatTr[j].children[0].classList.add('unavailSeats');
                }
            }

            //우측 좌석 네모칸 선택자
            let seatSelect = document.querySelectorAll('.seat-select');
            //우측 좌석 네모칸 초기화
            for(let l=0;l<seatSelect.length;l++){
                seatSelect[l].classList.remove('possible');
                seatSelect[l].classList.remove('choice');
                seatSelect[l].textContent = '-';
            }
        }

         //초기화 버튼 선택자
        let reset = document.querySelector('.reset_btn');

        //초기화 버튼 클릭시 function동작
        reset.addEventListener('click',resetAction);


        //시간선택 버튼 선택자
        let otherTime = document.querySelector('.other-time');
        
        //시간선택 버튼 누르면 class 'on'줘서 시간목록 펼침 & 화살표 버튼 변경css
        otherTime.addEventListener('click',()=>{
            otherTime.classList.toggle('on');

        })

        //시간선택 목록 선택자
        let otherTimeLi = document.querySelectorAll('.other-time ul li');

        for(let i=0; i<otherTimeLi.length; i++){
            otherTimeLi[i].addEventListener('click',()=>{
                //버튼 텍스트 선택자
                let otherTimeBtn = document.querySelector('.other-time button');
                //버튼 텍스트(시간) 변경
                otherTimeBtn.innerText = otherTimeLi[i].textContent;

                //시간선택 목록에 css 변경
                for(let j=0; j<otherTimeLi.length; j++){
                    otherTimeLi[j].classList.remove('selectLi');
                }
                otherTimeLi[i].classList.add('selectLi');

                message.innerHTML = `
                    <div class='fifteen'>
                        <div class='fifteen-left'>
                            <img src="img/15세.png" alt="#">
                        </div>
                        <div class='fifteen-right'>
                            <p class='tit'>15세이상관람가</p>
                            <p class='txt'>15 세 미만의 고객님은(영,유아 포함)<br>
                                반드시 성인 보호자의 동반하에 관람이 가능합니다.<br>
                                (확인 불가 시 입장제한)<br>
                                *관람 등급 확인을 위해 신분증(주민등록증, 학생증, 청소년증, 여권 등) 확인을 요청할 수 있습니다.
                            </p>
                        </div>
                    </div>
                    `
                    modal.classList.add('active');
                    overlay.classList.add('active');
            })
        }

        // 모달창 제거
        for(let i = 0; i <= modal_btn.length-2; i++){
            modal_btn[i].addEventListener('click', () => {
                overlay.classList.remove('active');
                modal.classList.remove('active');
                cancel_btn.classList.remove('active');
                check_btn1.classList.remove('active');
                check_btn1.style.display = 'block';
                check_btn2.style.display = 'none';
            })
        }