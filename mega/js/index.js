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