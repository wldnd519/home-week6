let topIndex = 1; // z-index를 관리하는 변수

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // 마우스를 클릭하면 실행되는 함수
    terrariumElement.onpointerdown = pointerDrag;

    // 더블 클릭 시 z-index를 증가시켜 식물을 가장 위로 가져옴
    terrariumElement.ondblclick = bringToFront;

    // pointerDrag 함수: 드래그 시작
    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    // elementDrag 함수: 드래그 중 요소 이동
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    // stopElementDrag 함수: 드래그 중지
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

    // bringToFront 함수: 더블 클릭 시 z-index 값을 증가시켜 식물을 맨 위로
    function bringToFront() {
        topIndex++; // z-index 값을 증가시킴
        terrariumElement.style.zIndex = topIndex; // 식물의 z-index 값을 업데이트
        console.log('z-index:', topIndex); // z-index 값을 로그로 출력
    }
}

// 드래그 가능한 식물 목록
console.log(document.getElementById('plant1'));
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
