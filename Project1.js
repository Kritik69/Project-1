const colors = ["red","blue","green","white","grey","orange","tomato"]

$("button.1").on("click", ()=> {
    $("body.Background").css({"background-color":"#595260"});
})
$("button.2").on("click", ()=> {
    $(".heading1").css({"background-color":"black"});
})
var para = document.querySelector(".para")
$("button.3").on("click", ()=> {
    para.style.visibility = "visible";
})
var para2 = document.querySelector(".para2")
$("button.3").on("click", ()=> {
    para2.style.visibility = "visible";
})
$("button.4").on("click", function(){
    $("body.Background").css({"background-color":"black"});
    $(".heading1").css({"background-color":"#FFD523"});
    para.style.visibility = "hidden";
})
$(".list-item").on("mouseover", ()=> {
    $(".list-item").css("color","green");
})
$(".list-item").on("mouseleave", ()=> {
    $(".list-item").css("color","lightgrey");
})
$(".list2-item").on("mouseover", ()=> {
    $(".list2-item").css("color","red");
})
$(".list2-item").on("mouseleave", ()=> {
    $(".list2-item").css("color","lightgrey");
})

