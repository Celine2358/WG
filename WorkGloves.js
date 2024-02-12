function CelineLink() { // 셀리느 오픈채팅

    window.open("https://open.kakao.com/o/sP0Nmwjf", "_blank");
}

let BGM = document.getElementById('BGM'); // BGM 제목
let BGM1 = document.getElementById('BGM1'); // 리스항구 BGM
let BGM2 = document.getElementById('BGM2'); // 헤네시스 BGM
let BGM3 = document.getElementById('BGM3'); // 페리온 BGM
let BGM4 = document.getElementById('BGM4'); // 커닝시티 BGM
let BGM5 = document.getElementById('BGM5'); // 엘리니아 BGM
let BGM6 = document.getElementById('BGM6'); // 슬리피우드 BGM
let SuccessSound = document.getElementById('Sound1'); // 성공 효과음
let FailSound = document.getElementById('Sound2'); // 실패 효과음
let Success = document.getElementById('Success'); // 성공 이펙트
let Fail = document.getElementById('Fail'); // 실패 이펙트
let Show = document.getElementById('Show'); // 알림창

let BGMNum = 0; // BGM 변경 변수

// 음량 25%
BGM1.volume = 0.25;
BGM2.volume = 0.25;
BGM3.volume = 0.25;
BGM4.volume = 0.25;
BGM5.volume = 0.25;
BGM6.volume = 0.25;
SuccessSound.volume = 0.25;
FailSound.volume = 0.25;

// 스탯
let Att = 0; // 공격력
let Upgrade = 0; // 업횟
let UpgradeTry = 5; // 남은 업횟
let S100 = 0; // 100% 성공
let S60 = 0; // 60% 성공
let S10 = 0; // 10% 성공
let Name = document.getElementById('Name'); // 노가다 목장갑 상태
let Stat = document.getElementById('Stat'); // 노가다 목장갑 스탯


function BGMplay() { // 배경음악 재생

    BGM1.pause();
    BGM2.pause();
    BGM3.pause();
    BGM4.pause();
    BGM5.pause();
    BGM6.pause();

    if (BGMNum == 0) {
        BGMNum += 1;
        BGM.textContent = '리스항구';
        BGM1.play();
    } else if (BGMNum == 1) {
        BGMNum += 1;
        BGM.textContent = '헤네시스';
        BGM2.play();
        BGM1.pause();
    } else if (BGMNum == 2) {
        BGMNum += 1;
        BGM.textContent = '페리온';
        BGM3.play();
        BGM2.pause();
    } else if (BGMNum == 3) {
        BGMNum += 1;
        BGM.textContent = '커닝시티';
        BGM4.play();
        BGM3.pause();
    } else if (BGMNum == 4) {
        BGMNum += 1;
        BGM.textContent = '엘리니아';
        BGM5.play();
        BGM4.pause();
    } else if (BGMNum == 5) {
        BGMNum += 1;
        BGM.textContent = '슬리피우드';
        BGM6.play();
        BGM5.pause();
    } else if (BGMNum == 6) {
        BGMNum = 0;
        BGM.textContent = 'BGM';
        BGM6.pause();
    }
}

function Scroll100() { // 장공 100%

    if (UpgradeTry == 0) {
        alert('노가다 목장갑의 강화가 완료되었습니다. Reset을 누르면 초기화가 가능합니다.');
    } else {
        Att += 1;
        S100 += 1;
        Upgrade += 1;
        UpgradeTry -= 1;

        Name.textContent = '노가다 목장갑 (+' + Upgrade + ')'
        Stat.style.marginTop = '2.5%'; // 윗 여백 설정
        Stat.innerHTML = 
        '장비분류 : 장갑<br>공격력 : +' + Att +'<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;

        Show.textContent = '공 ' + Att + '노목 : 100% ' + S100 + '작, 60% ' + S60 + '작, 10% ' + S10 + '작';

        Success.style.display = 'block';
        setTimeout(function() {
            Success.style.display = 'none';
        }, 800);
        SuccessSound.play();
    }

    if (Att >= 1 && Att < 6) { // 공격력 1 ~ 5 주황색
        Name.style.color = 'orange';
    } else if (Att >= 6 && Att < 16) { // 공격력 6 ~ 15 파란색
        Name.style.color = 'skyblue';
    }
}

function Scroll60() { // 장공 60%

    let Random60 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (UpgradeTry == 0) {
        alert('노가다 목장갑의 강화가 완료되었습니다. Reset을 누르면 초기화가 가능합니다.');
    } else {

        if (Random60 < 60) { // 성공률 60%
            Att += 2;
            S60 += 1;
            Upgrade += 1;
            UpgradeTry -= 1;
    
            Name.textContent = '노가다 목장갑 (+' + Upgrade + ')'
            Stat.style.marginTop = '2.5%'; // 윗 여백 설정
            Stat.innerHTML = 
            '장비분류 : 장갑<br>공격력 : +' + Att +'<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;
    
            Show.textContent = '공 ' + Att + '노목 : 100% ' + S100 + '작, 60% ' + S60 + '작, 10% ' + S10 + '작';
    
            Success.style.display = 'block';
            setTimeout(function() {
                Success.style.display = 'none';
            }, 800);
            SuccessSound.play();
        } else {
            UpgradeTry -= 1;

            Name.textContent = '노가다 목장갑 (+' + Upgrade + ')'
            Stat.style.marginTop = '2.5%'; // 윗 여백 설정
            Stat.innerHTML = 
            '장비분류 : 장갑<br>공격력 : +' + Att +'<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;
    
            Show.textContent = '공 ' + Att + '노목 : 100% ' + S100 + '작, 60% ' + S60 + '작, 10% ' + S10 + '작';
    
            Fail.style.display = 'block';
            setTimeout(function() {
                Fail.style.display = 'none';
            }, 800);
            FailSound.play();
        }
    }

    if (Att >= 1 && Att < 6) { // 공격력 1 ~ 5 주황색
        Name.style.color = 'orange';
    } else if (Att >= 6 && Att < 16) { // 공격력 6 ~ 15 파란색
        Name.style.color = 'skyblue';
    }
}

function Scroll10() { // 장공 10%

    let Random10 = Math.floor(Math.random() * 100); // 0 ~ 99 난수

    if (UpgradeTry == 0) {
        alert('노가다 목장갑의 강화가 완료되었습니다. Reset을 누르면 초기화가 가능합니다.');
    } else {

        if (Random10 < 10) { // 성공률 10%
            Att += 3;
            S10 += 1;
            Upgrade += 1;
            UpgradeTry -= 1;
    
            Name.textContent = '노가다 목장갑 (+' + Upgrade + ')'
            Stat.style.marginTop = '2.5%'; // 윗 여백 설정
            Stat.innerHTML = 
            '장비분류 : 장갑<br>공격력 : +' + Att +'<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;
    
            Show.textContent = '공 ' + Att + '노목 : 100% ' + S100 + '작, 60% ' + S60 + '작, 10% ' + S10 + '작';
    
            Success.style.display = 'block';
            setTimeout(function() {
                Success.style.display = 'none';
            }, 800);
            SuccessSound.play();
        } else {
            UpgradeTry -= 1;

            Name.textContent = '노가다 목장갑 (+' + Upgrade + ')'
            Stat.style.marginTop = '2.5%'; // 윗 여백 설정
            Stat.innerHTML = 
            '장비분류 : 장갑<br>공격력 : +' + Att +'<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;
    
            Show.textContent = '공 ' + Att + '노목 : 100% ' + S100 + '작, 60% ' + S60 + '작, 10% ' + S10 + '작';
    
            Fail.style.display = 'block';
            setTimeout(function() {
                Fail.style.display = 'none';
            }, 800);
            FailSound.play();
        }
    }

    if (Att >= 1 && Att < 6) { // 공격력 1 ~ 5 주황색
        Name.style.color = 'orange';
    } else if (Att >= 6 && Att < 16) { // 공격력 6 ~ 15 파란색
        Name.style.color = 'skyblue';
    }
}

function Reset() { // 초기화

    Att = 0;
    Upgrade = 0;
    UpgradeTry = 5;
    S100 = 0;
    S60 = 0;
    S10 = 0;

    Name.textContent = '노가다 목장갑'
    Name.style.color = 'white';
    Stat.style.marginTop = '5%'; // 윗 여백 설정
    Stat.innerHTML = 
    '장비분류 : 장갑<br>물리방어력 : +2<br>업그레이드 가능 횟수 : ' + UpgradeTry;

    Show.innerHTML = '주문서로 <span style="font-weight: bold">노가다 목장갑</span>을 강화하세요!'
}