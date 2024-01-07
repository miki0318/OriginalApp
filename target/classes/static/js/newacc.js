var chk = document.getElementById("chk");
var pass = document.getElementById("pass");

chk.addEventListener("click", function () {
  if (chk.checked) {
      pass.type = "text";
  } else {
      pass.type = "password";
    }
});

function buttonClick(){
  var pass = document.getElementById("pass").value;
  if(pass.length < 8){
    var validate = "パスワードの文字数が足りません";
    document.getElementById("validate_msg").innerHTML = validate; 
    return false;
  } else if(pass.length > 15){
    var validate = "パスワードの文字数がオーバーしています";
    document.getElementById("validate_msg").innerHTML = validate; 
    return false;
  } else {
    var btn = document.getElementById('btn');
    btn.disabled = true;
    console.log('実行');
      // jQuery(function($) {
      //     $(document).ajaxSend(function(){
      //     $("#overlay").fadeIn(300);
      //     });
          // $('#btn').on('click', function(){
              let a = $("#newform").serialize();
              ajaxTest(a);
          // })
      // });
    return true;
  }
}

function ajaxTest(a){
        $.ajax({
            type: 'POST',
            //detaType: 'json',
            deta: a,
            success: function(deta){
            console.log(deta);
            }
        }).done(function() {
        setTimeout(function(){
        $("#overlay").fadeOut(300);
        },500);
        })
}