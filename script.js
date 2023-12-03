document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".left-image").addEventListener("click",function (){
        document.querySelector('.dog-img').style = "display:none;";
        document.querySelector('.dog').style = "height:404px; width: 100px";
        document.querySelector('.cat').style = "width: calc(100% - 140px);text-align: right;";
        document.querySelector('.cat-img').style = "width: 80%; ";
    });
    document.querySelector(".both-image").addEventListener("click",function (){
        document.querySelector('.cat-img').style = "display:block;";
        document.querySelector('.dog-img').style = "display:block;";
        document.querySelector('.cat').style = "width: calc(50% - 20px);";
        document.querySelector('.dog').style = "width: calc(50% - 20px);"
    });
    document.querySelector(".right-image").addEventListener("click",function (){
        document.querySelector('.cat-img').style = "display:none;";
        document.querySelector('.cat').style = "height:404px; width: 100px";
        document.querySelector('.dog').style = "width: calc(100% - 140px);text-align: left;";
        document.querySelector('.dog-img').style = "width: 80%; ";
    });
});