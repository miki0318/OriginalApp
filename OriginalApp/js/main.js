window.addEventListener('load', (loadFinished) => {
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'originalapp',
  password: 'originalapp18',
  port : 3306,
  database: 'note'
});

connection.query(
  'SELECT memoId FROM active',
  (error, results) => {
    console.log(error);
    console.log(results);
  }
);
});

function logout(){

}

var pic_arr = ["img/edit.png", "img/save.png"];
var num = 0;

function slideshow() { 
    if(num == 0) {
            num ++;
            document.getElementById("searchbtn").setAttribute("disabled", true);
            document.getElementById("setbtn").setAttribute("disabled", true);
            document.getElementById("listbtn").setAttribute("disabled",true);
            document.getElementById("title1").removeAttribute("readOnly");
            document.getElementById("title2").removeAttribute("readOnly");
            document.getElementById("title3").removeAttribute("readOnly");
            document.getElementById("box1").removeAttribute("readOnly");
            document.getElementById("box2").removeAttribute("readOnly");
            document.getElementById("box3").removeAttribute("readOnly");
    } else {
            if(window.confirm('保存しますか？')) {
                jQuery(function($) {
                    // $(document).ajaxSend(function(){
                    // $("#overlay").fadeIn(300);
                    // });
                    // $('#edit').on('click', function(){
                    let box1 = $('#box1').val();
                    let box2 = $('#box2').val();
                    let box3 = $('#box3').val();
                    if((box1 == null || box1 == "") &&
                       (box2 == null || box2 == "") &&
                       (box3 == null || box3 == ""))
                    {
                        window.alert('値を入力してください');
                    } else{
                        ajaxTest(box1,box2,box3);
                    }
                });
            } else {
                window.alert('キャンセルしました');
            }
            num --;
            document.getElementById("searchbtn").removeAttribute("disabled");
            document.getElementById("setbtn").removeAttribute("disabled");
            document.getElementById("listbtn").removeAttribute("disabled");
            document.getElementById("title1").setAttribute("readOnly", true);
            document.getElementById("title2").setAttribute("readOnly", true);
            document.getElementById("title3").setAttribute("readOnly", true);
            document.getElementById("box1").setAttribute("readOnly", true);
            document.getElementById("box2").setAttribute("readOnly", true);
            document.getElementById("box3").setAttribute("readOnly", true);
    }
    document.getElementById("edit").src = pic_arr[num];
}

function ajaxTest(box1,box2,box3,memoId){
    $("#overlay").fadeIn(300);
    $.ajax("ここにURL", {
        type: 'POST',
        data: {
            box1: box1,
            box2: box2,
            box3: box3,
            memoId: memoId
        },
        // success: function(deta){
        // console.log(deta);
        // }
    }).done(function() {
        setTimeout(function(){
        $("#overlay").fadeOut(300);
        },500);
        //受け取った後の値を加工する
        window.alert('保存しました');
    }).fail(function() {
        setTimeout(function(){
        $("#overlay").fadeOut(300);
        },500);
        window.alert('保存に失敗しました');
    });
}

function layoutchange() {
    if(document.getElementById){
        var box3 = document.getElementById("box3");
        var box2 = document.getElementById("box2");
        var title3 = document.getElementById("title3");
        var title2 = document.getElementById("title2");        
        var textbox = document.getElementsByClassName("textbox");
        var dis3 = document.defaultView.getComputedStyle(box3).display;
        var dis2 = document.defaultView.getComputedStyle(box2).display;
        
        if(dis3 == "block") {
            box3.style.display = "none";
            title3.style.display = "none";
            textbox[0].style.height='35%';
            textbox[1].style.height='35%';
        }else if (dis2 == "block"){
            box3.style.display = "none";
            box2.style.display = "none";
            title3.style.display = "none";
            title2.style.display = "none";
            textbox[0].style.height='80%';
        }else if(dis2 == "none"){
            box3.style.display = "block";
            box2.style.display = "block";
            title3.style.display = "block";
            title2.style.display = "block";
            textbox[0].style.height='20%';
            textbox[1].style.height='20%';
            textbox[2].style.height='20%';
    }
    }
}
