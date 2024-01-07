var chk = document.getElementById("chk");
var pass = document.getElementById("pass");

chk.addEventListener("click", function () {
  if (chk.checked) {
      pass.type = "text";
  } else {
      pass.type = "password";
    }
});

function buttonclick(){
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
    let a = $('#newform').serialize();
    ajaxTest(1101);
    jQuery(function($) {
      $(document).ajaxSend(function(){
      $("#overlay").fadeIn(300);
      });
      $('#btn').on('click', function(){
//          let a = $('#newform').serialize();
//          ajaxTest(a);
      })
    });
    return true;
  }
}

function ajaxTest(userId){
	let LoginData = document.getElementsByName('e-mail','password');
	fetch('http://localhost:8080/hello/top',{
		method:'POST',
		headers:{'Content-Type': 'application/json'},
		body: JSON.stringify(LoginData),
		data: userId
	})
	.then((response) => response.json())
	.then((data) => {
		var data_stringify = JSON.stringify(data);
        var data_json = JSON.parse(data_stringify);
        //jsonデータから各データを取得
        var data_memoId = data_json[0]["memoId"];
        var data_memoName = data_json[0]["memoName"];
        var data_content1 = data_json[0]["content1"];
        var data_content2 = data_json[0]["content2"];
        var data_content3 = data_json[0]["content3"];
        var data_userId = data_json[0]["userId"];
        var data_icon = data_json[0]["icon"];
        var data_userName = data_json[0]["userName"];
        var data_languague = data_json[0]["languague"];
        var data_font = data_json[0]["font"];
        var data_fontSize = data_json[0]["fontSize"];
        var data_url = data_json[0]["url"];
        var data_today = data_json[0]["today"];
        //出力
        $("#memoid").text(data_memoId);
        $("#memoname").text(data_memoName);
        $("#content1").text(data_content1);
        $("#content2").text(data_content2);
        $("#content3").text(data_content3);
        $("#userid").text(data_userId);
        $("#icon").text(data_icon);
        $("#username").text(data_userName);
        $("#languague").text(data_languague);
        $("#font").text(data_font);
        $("#fontsize").text(data_fontSize);
        $("#url").text(data_url);
        $("#today").text(data_today);
	    location.href='top.html';
	}); 
}	    
//  $.ajax({type: 'POST',
//      url:'http://localhost:8080/hello/top',
//      type: 'POST',
//      dataType: 'json',
//  }).done(function(a) {
//  setTimeout(function(){
//  $("#overlay").fadeOut(300);
//  },500);
//    	var data_stringify = JSON.stringify(data);
//        var data_json = JSON.parse(data_stringify);
//        //jsonデータから各データを取得
//        var data_memoId = data_json[0]["memoId"];
//        var data_memoName = data_json[0]["memoName"];
//        var data_content1 = data_json[0]["content1"];
//        var data_content2 = data_json[0]["content2"];
//        var data_content3 = data_json[0]["content3"];
//        var data_userId = data_json[0]["userId"];
//        var data_icon = data_json[0]["icon"];
//        var data_userName = data_json[0]["userName"];
//        var data_languague = data_json[0]["languague"];
//        var data_font = data_json[0]["font"];
//        var data_fontSize = data_json[0]["fontSize"];
//        var data_url = data_json[0]["url"];
//        //出力
//        $("#memoId").text(data_memoId);
//        $("#memoName").text(data_memoName);
//        $("#content1").text(data_content1);
//        $("#content2").text(data_content2);
//        $("#content3").text(data_content3);
//        $("#userId").text(data_userId);
//        $("#icon").text(data_icon);
//        $("#userName").text(data_userName);
//        $("#languague").text(data_languague);
//        $("#font").text(data_font);
//        $("#fontSize").text(data_fontSize);
//        $("#url").text(data_url);
//	    location.href='main.html';
//  }).fail(function (data) {
//            // error
//            console.log("error");
//          });
//}
//
//function objChnange(a){
//  let objData = JSON.parse(a);
//  console.log(objData);
//  let getUser = objData.users[0];
//  console.log(getUser.name);
//}
