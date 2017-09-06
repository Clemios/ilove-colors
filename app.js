function $(id) {
    return document.getElementById(id)
}

function removeAllChild(node){
    var myNode = document.getElementById(node);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

var colors = {
    "color1" : ["Fiord","#4C5B6E"],
    "color2" : ["Nepal","#95A6BD"],
    "color3" : ["Catskill White","#DFE6EF"],

    "color4" : ["Oslo Gray","#7F8893"],
    "color5" : ["Tundora","#4A4A4A"],
    "color6" : ["Dusty Gray","#9B9B9B"],
    "color7" : ["Seashell","#F1F1F1"]
};


for (var color in colors) {
    var nouveauDiv = document.createElement("div");
    nouveauDiv.className = "block";

    nouveauDiv.innerHTML = '\
        <div class="block-color dark" style="background:'+colors[color][1]+'">'+colors[color][0]+'</div>\
        <button class="pick-color btn" data-clipboard-text="'+colors[color][1]+'">'+colors[color][1]+'</button>\
        ';

    $("content").appendChild(nouveauDiv);
}



var colorsPrint = {
   // "color1" : ["Rose Jungle print","Pantone 710 C","#e73e51"],
   // "color2" : ["Bleu Jungle print","Pantone 288 CP","#12326e"],
};


for (var colorPrint in colorsPrint) {
    var nouveauDiv = document.createElement("div");
    nouveauDiv.className = "block";

    nouveauDiv.innerHTML = '\
        <div class="block-color dark" style="background:'+colorsPrint[colorPrint][2]+'">'+colorsPrint[colorPrint][0]+'</div>\
        <button class="pick-color btn" data-clipboard-text="'+colorsPrint[colorPrint][1]+'">'+colorsPrint[colorPrint][1]+'</button>\
        ';

    $("content-print").appendChild(nouveauDiv);
}


function cleanAlert(){
    $("alert").classList.remove("on");
    removeAllChild("alert");
}

var timeOut;
function goTimeOut(){
    timmeOut = setTimeout(cleanAlert, 2000);
}
function stopTimeOut(){
    clearTimeout( timmeOut );
}




var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
    var colorCode = [e.text];

    var alerteClass = $("alert").className;
    var alert = document.createElement("p");
    alert.innerHTML = '<span style="background-color:'+colorCode+'; width:20px; height:20px; display:inline-block;"></span> '+colorCode+' copié !';

    if (alerteClass == "alert"){
        $("alert").className += ' on';
        $("alert").appendChild(alert);
        goTimeOut()

    }else {
        stopTimeOut()
        removeAllChild("alert");
        $("alert").appendChild(alert);
        goTimeOut()
    }

    e.clearSelection();
});



"use strict";
var afficherOngler = function (a) {
    var li = a.parentNode
    var div = a.parentNode.parentNode.parentNode

    if(li.classList.contains('active')){
        return false
    }
    div.querySelector('.tabs .active').classList.remove('active')
    li.classList.add('active')

    div.querySelector('.tab-content.active').classList.remove('active')
    div.querySelector(a.getAttribute('href')).classList.add('active')
}

var tabs = document.querySelectorAll('.tabs a')
for (var i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', function (e){
        afficherOngler(this)
    })

}

var hash = window.location.hash
console.log(hash);
var a = document.querySelector('a[href="'+ hash +'"]')
if (a !== null && !a.classList.contains('active')) {
    afficherOngler(a)
}
