function check() {
    var adress = document.getElementById('adress');
    var email = adress.value;
    if(window.confirm(email +'に送信しますか？')) {
        jQuery(function($) {
            $(document).ajaxSend(function(){
            $("#overlay").fadeIn(300);
            });
            $('#btn').on('click', function(){
                let a = $('#newform').serialize();
                ajaxTest(a);
            })
        }); 
        window.alert('送信しました');
        return true; 
        } else { 
            window.alert('キャンセルされました');
            return false; 
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