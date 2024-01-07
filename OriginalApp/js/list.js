function closebtnClick(){
    //ローカルストレージから値を取得する
    localStorage.setItem('aaa','bbb');
    var id = localStorage.getItem('aaa');
    location.href='main.html?memoId='+ id
}

function button1Click(){
  if(document.getElementById){
      var first = document.getElementById("check1");
      var second = document.getElementById("check2");
      console.log(first.style.display);

      if(first.style.display = "none"){
        first.style.display = "block";
        second.style.display = "none";
      }
  }
}

function button2Click(){
  if(document.getElementById){
      var first = document.getElementById("check1");
      var second = document.getElementById("check2");
      console.log(second.style.display);

      if(second.style.display = "none"){
        second.style.display = "block";
        first.style.display = "none";
      }
  }
}

/*var ac1 = document.getElementById('ac1');
var ac2 = document.getElementById('ac2');
var first = document.getElementById("check1");
var second = document.getElementById("check2");

ac1.addEventListener('click', function(){
    if(first.style.display == "none"){
      first.style.display = "block";
      second.style.display = "none";
    }
})

ac2.addEventListener('click', function(){
  if(second.style.display == "none"){
    second.style.display = "block";
    first.style.display = "none";
  }
})*/

var del1 = document.getElementById('del1');
var request1 = document.getElementById("request1");
 
del1.addEventListener('click', function() {
    var result1 = window.confirm('削除しますか？');
    
    if( result1 ) {
        console.log('OK');
        request1.remove();
    }
    else {
        console.log('キャンセル');
    }
})

var admit1 = document.getElementById('admit1');
var request1 = document.getElementById("request1");
 
admit1.addEventListener('click', function() {
    var result2 = window.confirm('承認しますか？');
    
    if( result2 ) {
        console.log('OK');
        request1.remove();
    }
    else {
        console.log('キャンセル');
    }
})

var del2 = document.getElementById('del2');
var request2 = document.getElementById("request2");
 
del2.addEventListener('click', function() {
    var result3 = window.confirm('削除しますか？');
    
    if( result3 ) {
        console.log('OK');
        request2.remove();
    }
    else {
        console.log('キャンセル');
    }
})

var admit2 = document.getElementById('admit2');
var request2 = document.getElementById("request2");
 
admit2.addEventListener('click', function() {
    var result4 = window.confirm('承認しますか？');
    
    if( result4 ) {
        console.log('OK');
        request2.remove();
    }
    else {
        console.log('キャンセル');
    }
})