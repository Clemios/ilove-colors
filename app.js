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
    "color1" : ["Dark Blue","#4C5B6E"],
    "color2" : ["Regular Blue","#95A6BD"],
    "color3" : ["Light Blue","#DFE6EF"],

    "color4" : ["Dark Grey","#7F8893"],
    "color5" : ["Regular Grey","#9B9B9B"],
    "color6" : ["Light Grey","#F1F1F1"],

    "color7" : ["Jaune Jungle","#fad170"],
    "color8" : ["Jaune roger","#f9e07d"],
    "colo19" : ["Jaune lamute","#f9edb0"],

    "color10" : ["Vert Jungle","#35945d"],
    "color11" : ["Vert roger","#63c48c"],
    "color12" : ["Vert lamute","#a2efbd"],

    "color13" : ["gris Jungle","#333333"],
    "color14" : ["gris roger","#404a56"],
    "color15" : ["gris lamute","#7f8894"],
    "color16" : ["gris lamute -50","#BFC3C9"],
    "color17" : ["gris janine","#f1f1f1"]
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
    "color1" : ["Rose Jungle print","Pantone 710 C","#e73e51"],
    "color2" : ["Bleu Jungle print","Pantone 288 CP","#12326e"],
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
