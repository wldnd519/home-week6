let topIndex = 1;

const plants = document.querySelectorAll('.plant');

plants.forEach(plant => {
    plant.addEventListener('dragstart', dragStart);

    plant.addEventListener('dblclick', bringToFront);
});

const terrarium = document.getElementById('terrarium');

terrarium.addEventListener('dragover', allowDrop);
terrarium.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    
    const img = new Image();
    img.src = event.target.src;
    event.dataTransfer.setDragImage(img, img.width / 2, img.height / 2);
}

function allowDrop(event) {
    event.preventDefault();
}


function drop(event) {
    event.preventDefault();

    const plantId = event.dataTransfer.getData('text/plain');
    const plant = document.getElementById(plantId);

    const rect = terrarium.getBoundingClientRect();
    const x = event.clientX - rect.left - 50;
    const y = event.clientY - rect.top - 50;

    terrarium.appendChild(plant);

    plant.style.position = 'absolute';
    plant.style.left = `${x}px`;
    plant.style.top = `${y}px`;
    plant.style.zIndex = '1';
}

function bringToFront(event) {
    topIndex++;
    event.target.style.zIndex = topIndex;
}
