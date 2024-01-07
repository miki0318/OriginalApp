var chk1 = document.getElementById("chk1");
var chk2 = document.getElementById("chk2");
var enter = document.getElementById("enter");
var reenter = document.getElementById("reenter");

chk1.addEventListener("click", function () {
    if (chk1.checked) {
        enter.type = "text";
    } else {
        enter.type = "password";
      }
});

chk2.addEventListener("click", function () {
    if (chk2.checked) {
        reenter.type = "text";
    } else {
        reenter.type = "password";
      }
});

function buttonclick(){
    var enter = document.getElementById("enter").value;
    var reenter = document.getElementById("reenter").value;
    if(enter.length < 8){
        var validate = "パスワードの文字数が足りません";
        document.getElementById("validate_msg").innerHTML = validate; 
        var err = "";
        document.getElementById("err_msg").innerHTML = err;
        return false;
    } else if(enter.length > 15){
        var validate = "パスワードの文字数がオーバーしています";
        document.getElementById("validate_msg").innerHTML = validate; 
        var err = "";
        document.getElementById("err_msg").innerHTML = err;
        return false;
    } else if(enter != reenter){
        var validate = "";
        document.getElementById("validate_msg").innerHTML = validate; 
        var err = "パスワードが一致しません";
        document.getElementById("err_msg").innerHTML = err;
        return false;
    } else {
      var btn = document.getElementById('btn');
      btn.disabled = true;
      console.log('実行');
      return true;
    }
  }