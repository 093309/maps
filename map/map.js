import subj from "./subjects_2022.js";

const path = document.getElementsByTagName('path');
const maplabel = document.querySelectorAll('.map-label');
var disable = false;
var disable1 = false;
var disable2 = false;
var disable3 = false;
var disable4 = false;
var disable5 = false;

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM полностью загружен и разобран");
    сolorDisplay();

    for (let i = 0; i < path.length; i++) {
        path[i].addEventListener('mousemove', showPopap);
        path[i].addEventListener('mouseover', () => { addStroke(path[i].id, 1) });
        path[i].addEventListener('mouseout', () => {
            hidePopap();
            addStroke(path[i].id, 0);
        });
    }

    for (let i = 0; i < maplabel.length; i++){
        maplabel[i].addEventListener('mouseenter', showPupd);
        maplabel[i].addEventListener('mouseleave',  ()=>{
            hidePopap();
            opacity1();
        });
    
    }

    document.getElementById('grey').addEventListener('click', colorByConditionGrey);
    document.getElementById('grey').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] != null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }

        }
    });
    document.getElementById('grey').addEventListener('mouseleave', opacity1);

    document.getElementById('green').addEventListener('click', colorByConditionGreen);
    document.getElementById('green').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] > 1 || subj[i]["Население (%)"] == null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }
        }
    });
    document.getElementById('green').addEventListener('mouseleave', opacity1);

    document.getElementById('yellow').addEventListener('click', colorByConditionYellow);
    document.getElementById('yellow').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] < 1 || subj[i]["Население (%)"] > 25 || subj[i]["Население (%)"] == null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }
        }
    });
    document.getElementById('yellow').addEventListener('mouseleave', opacity1);

    document.getElementById('orange').addEventListener('click', colorByConditionOrange);
    document.getElementById('orange').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] < 25 || subj[i]["Население (%)"] > 50 || subj[i]["Население (%)"] == null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }
        }
    });
    document.getElementById('orange').addEventListener('mouseleave', opacity1);

    document.getElementById('red').addEventListener('click', colorByConditionRed);
    document.getElementById('red').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] < 51 || subj[i]["Население (%)"] > 75 || subj[i]["Население (%)"] == null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }
        }
    });
    document.getElementById('red').addEventListener('mouseleave', opacity1);

    document.getElementById('black').addEventListener('click', colorByConditionBlack);
    document.getElementById('black').addEventListener('mouseenter', () => {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] < 76 || subj[i]["Население (%)"] > 100 || subj[i]["Население (%)"] == null) {
                changeTransparency(subj[i].id);
            }
            else {
                addStroke(subj[i].id, 0.7)
            }
        }
    });
    document.getElementById('black').addEventListener('mouseleave', opacity1);
})

function colorByConditionGrey() {
    if (disable) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] == null) {
                changeColor(subj[i].id, null, '#b2b2b4');
                changeCircleColor('circleGrey', '#b2b2b4');
            }
        }
        opacity1();
        lineThrough('map-value_grey', disable);
        disable = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] == null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleGrey', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_grey', disable);
        disable = true;
    }
}

function colorByConditionGreen() {
    if (disable1) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] == 0 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, '#90ED7D');
                changeCircleColor('circleGreen', '#90ED7D');
            }
        }
        opacity1();
        lineThrough('map-value_green', disable1);
        disable1 = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] == 0 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleGreen', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_green', disable1);
        disable1 = true;
    }
}

function colorByConditionYellow() {
    if (disable2) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 1 && subj[i]["Население (%)"] < 25 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, '#FEFE80');
                changeCircleColor('circleYellow', '#FEFE80');
            }
        }
        opacity1();
        lineThrough('map-value_yellow', disable2);
        disable2 = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 1 && subj[i]["Население (%)"] < 25 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleYellow', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_yellow', disable2);
        disable2 = true;
    }
}

function colorByConditionOrange() {
    if (disable3) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 25 && subj[i]["Население (%)"] < 51 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, '#F7A35C');
                changeCircleColor('circleOrange', '#F7A35C');
            }
        }
        opacity1();
        lineThrough('map-value_orange', disable3);
        disable3 = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 25 && subj[i]["Население (%)"] < 51 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleOrange', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_orange', disable3);
        disable3 = true;
    }
}

function colorByConditionRed() {
    if (disable4) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 51 && subj[i]["Население (%)"] < 76 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, '#FE8080');
                changeCircleColor('circleRed', '#FE8080');
            }
        }
        opacity1();
        lineThrough('map-value_red', disable4);
        disable4 = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 51 && subj[i]["Население (%)"] < 76 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleRed', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_red', disable4);
        disable4 = true;
    }
}

function colorByConditionBlack() {
    if (disable5) {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 76 && subj[i]["Население (%)"] <= 100 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, '#66666a');
                changeCircleColor('circleBlack', '#66666a');
            }
        }
        opacity1();
        lineThrough('map-value_black', disable5);
        disable5 = false;
    }
    else {
        for (let i = 0; i < subj.length; i++) {
            if (subj[i]["Население (%)"] >= 76 && subj[i]["Население (%)"] <= 100 && subj[i]["Население (%)"] != null) {
                changeColor(subj[i].id, null, 'white');
                changeCircleColor('circleBlack', '#000');
            }
        }
        opacity1();
        lineThrough('map-value_black', disable5);
        disable5 = true;
    }
}

//функция меняет прозрачность элемента по ID
function changeTransparency(id) {
    document.getElementById(id).setAttribute('opacity', '0.2');
}

//функция возвращает прозрачность всем элемнтам
function opacity1() {
    for (let i = 0; i < subj.length; i++) {
        document.getElementById(subj[i].id).setAttribute('opacity', '1');
        addStroke(subj[i].id, 0)
    }
}

//функция изменяет цвет элемента(круга с диапозоном) по нажатию 
function changeCircleColor(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

//функция принимает ID элемента и значние прозрачности (0.0 - 1), добавляет границу к path
function addStroke(id, opacity) {
    for (let i = 0; i < path.length; i++) {
        document.getElementById(id).setAttribute('stroke', 'black');
        document.getElementById(id).setAttribute('stroke-width', '1.5');
        document.getElementById(id).setAttribute('stroke-opacity', opacity);
    }
}

//функция принимает id элемента и применяет стиль зачеркивания
function lineThrough(id, disable) {
    if (!disable) {
        document.getElementById(id).style.textDecoration = 'line-through';
    }
    else {
        document.getElementById(id).style.textDecoration = 'none';
    }
}

//функция принимает ID элемента и применяет стиль изменения цвета
function changeColor(id, circleID, color) {
    document.getElementById(id).setAttribute('fill', color);
    if (circleID != null) {
        document.getElementById(circleID).style.backgroundColor = color;
    }
}

//функция отображает цвет по условию из данных subjects_2022.js
function сolorDisplay() {
    for (let i = 0; i < subj.length; i++) {
        let value = subj[i]["Население (%)"];

        if (value == null) {
            changeColor(subj[i].id, 'circleGrey', '#b2b2b4');
        }
        else if (value == 0 && value < 1 && value != null) {
            changeColor(subj[i].id, 'circleGreen', '#90ED7D');
        }
        else if (value >= 1 && value < 25 && value != null) {
            changeColor(subj[i].id, 'circleYellow', '#FEFE80');
        }
        else if (value >= 25 && value < 51 && value != null) {
            changeColor(subj[i].id, 'circleOrange', '#F7A35C');
        }
        else if (value >= 51 && value < 76 && value != null) {
            changeColor(subj[i].id, 'circleRed', '#FE8080');
        }
        else if (value >= 76 && value <= 100 && value != null) {
            changeColor(subj[i].id, 'circleBlack', '#66666a');
        }
    }
}

function showPopap(e) {
    const cursor = e.target;
    if (!cursor) return;

    document.querySelector('.map-window').style.left = e.pageX - 0 + 'px';
    document.querySelector('.map-window').style.top = e.pageY - 60 + 'px';
    document.querySelector('.map-window').style.display = 'block';
    document.querySelector('.map-name').innerHTML = e.target.attributes.name.value + ': ';

    for (let i = 0; i < subj.length; i++) {
        if (subj[i].id == e.target.id) {
            document.querySelector('.map-region_value').innerHTML = subj[i]["Население (%)"] + '%';
            if (subj[i]["Население (%)"] == null) document.querySelector('.map-region_value').innerHTML = 'Нет данных';
        }
    }

    for(let j = 0; j < maplabel.length; j++){
        maplabel[j].style.opacity = 0.2;
    }
}

function hidePopap() {
    document.querySelector('.map-window').style.display = 'none';

    for(let j = 0; j < maplabel.length; j++){
        maplabel[j].style.opacity = 1;
    }

}

function showPupd(e) {
    const cursor = e.target;
    if (!cursor) return;
    document.querySelector('.map-window').style.left = e.pageX - 19 + 'px';
    document.querySelector('.map-window').style.top = e.pageY - 42 + 'px';
    document.querySelector('.map-window').style.display = 'block';
    document.querySelector('.map-name').innerHTML = e.target.innerText + ': ';

    for(let i = 0; i< subj.length; i++){
        if(e.target.innerText == 'Санкт-Петербург' && subj[i].id == 78){
            document.querySelector('.map-region_value').innerHTML = subj[i]["Население (%)"] + '%';
            if (subj[i]["Население (%)"] == null) document.querySelector('.map-region_value').innerHTML = 'Нет данных';
        }
        if(e.target.innerText == 'Москва' && subj[i].id == 77){
            document.querySelector('.map-region_value').innerHTML = subj[i]["Население (%)"] + '%';
            if (subj[i]["Население (%)"] == null) document.querySelector('.map-region_value').innerHTML = 'Нет данных';
        }
        if(e.target.innerText == 'Севастополь' && subj[i].id == 92){
            document.querySelector('.map-region_value').innerHTML = subj[i]["Население (%)"] + '%';
            if (subj[i]["Население (%)"] == null) document.querySelector('.map-region_value').innerHTML = 'Нет данных';
        }
    }
    if(e.target.innerText == 'Норильск'){
        document.querySelector('.map-region_value').innerHTML = '99%';
    }

    for(let j = 0; j < path.length; j++){
        changeTransparency(path[j].id)
    }

    for(let j = 0; j < maplabel.length; j++){
        maplabel[j].style.opacity = 1;
    }
}