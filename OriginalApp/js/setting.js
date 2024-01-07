
function buttonClick() {
  if (document.getElementById) {
    //document.getElementByID("id名")の省略
    var obj1=document.getElementById("a");
    var obj2=document.getElementById("b");
    var obj3=document.getElementById("c");
    var obj4=document.getElementById("d");
    var obj5=document.getElementById("btn");
    var obj6=document.getElementById("cancel");
    var obj7=document.getElementById("change");

    var input=document.getElementById('size');
    var num= input.value;
    console.log(num);

    var username=document.getElementById('username');
    var name=username.value;
    console.log(name);

    var family =document.getElementById('font')
    var fam =family.value;
    console.log(fam);

    switch(num) {
     //フォントサイズの変更 
     case "10":
       obj1.style.fontSize = "3em"; 
       obj2.style.fontSize = "3em"; 
       obj3.style.fontSize = "3em"; 
       obj4.style.fontSize = "3em"; 
       obj5.style.fontSize = "2em"; 
       obj6.style.fontSize = "2em"; 
       obj7.style.fontSize = "2em"; 
     break;
     case "11":
       obj1.style.fontSize = "4em"; 
       obj2.style.fontSize = "4em"; 
       obj3.style.fontSize = "4em"; 
       obj4.style.fontSize = "4em"; 
       obj5.style.fontSize = "3em"; 
       obj6.style.fontSize = "3em"; 
       obj7.style.fontSize = "3em"; 
     break;
     case "12":
       obj1.style.fontSize = "5em"; 
       obj2.style.fontSize = "5em"; 
       obj3.style.fontSize = "5em"; 
       obj4.style.fontSize = "5em"; 
       obj5.style.fontSize = "4em"; 
       obj6.style.fontSize = "4em"; 
       obj7.style.fontSize = "4em"; 
     break;
    }

    switch(fam) {
      //言語の変更
      case "font1":
        obj1.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj1.style.fontFamily = "'Yomogi', cursive;";
        obj1.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj2.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj2.style.fontFamily = "'Yomogi', cursive;";
        obj2.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj3.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj3.style.fontFamily = "'Yomogi', cursive;";
        obj3.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj4.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj4.style.fontFamily = "'Yomogi', cursive;";
        obj4.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj5.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj5.style.fontFamily = "'Yomogi', cursive;";
        obj5.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj6.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj6.style.fontFamily = "'Yomogi', cursive;";
        obj6.style.fontFamily = "'Zen Kurenaido', sans-serif";

        obj7.style.fontFamily = "'Noto Sans JP', sans-serif;";
        obj7.style.fontFamily = "'Yomogi', cursive;";
        obj7.style.fontFamily = "'Zen Kurenaido', sans-serif";

      break;

      case "font2":
        obj1.style.fontFamily = "'Klee One', cursive";
        obj1.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj1.style.fontFamily = "'Shippori Mincho B1', serif";
        obj1.style.fontFamily = "'Yomogi', cursive";
        obj1.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj1.style.fontFamily = "'Shippori Mincho B1', serif";

        obj2.style.fontFamily = "'Klee One', cursive";
        obj2.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj2.style.fontFamily = "'Yomogi', cursive";
        obj2.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj2.style.fontFamily = "'Shippori Mincho B1', serif";

        obj3.style.fontFamily = "'Klee One', cursive";
        obj3.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj3.style.fontFamily = "'Yomogi', cursive";
        obj3.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj3.style.fontFamily = "'Shippori Mincho B1', serif";

        obj4.style.fontFamily = "'Klee One', cursive";
        obj4.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj4.style.fontFamily = "'Shippori Mincho B1', serif";
        obj4.style.fontFamily = "'Yomogi', cursive";
        obj4.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj4.style.fontFamily = "'Shippori Mincho B1', serif";

        obj5.style.fontFamily = "'Klee One', cursive";
        obj5.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj5.style.fontFamily = "'Yomogi', cursive";
        obj5.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj5.style.fontFamily = "'Shippori Mincho B1', serif";

        obj6.style.fontFamily = "'Klee One', cursive";
        obj6.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj6.style.fontFamily = "'Yomogi', cursive";
        obj6.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj6.style.fontFamily = "'Shippori Mincho B1', serif";

        obj7.style.fontFamily = "'Klee One', cursive";
        obj7.style.fontFamily = "'Noto Sans JP', sans-serif";
        obj7.style.fontFamily = "'Yomogi', cursive";
        obj7.style.fontFamily = "'Zen Kurenaido', sans-serif";
        obj7.style.fontFamily = "'Shippori Mincho B1', serif";

      break;
    }
    jQuery(function($) {
      $(document).ajaxSend(function(){
      $("#overlay").fadeIn(300);
      });
      $('#change').on('click', function(){
          // let a = $('#newform').serialize();
          ajaxTest(num,name,fam);
      })
    });
  }
  location.href='main.html'
}

function ajaxTest(num,name,fam){
  $.ajax({
      type: 'POST',
      //detaType: 'json',
      data: {
        num : num,
        name : name,
        fam : fam
      },
      success: function(deta){
      console.log(deta);
      }
  }).done(function() {
  setTimeout(function(){
  $("#overlay").fadeOut(300);
  },500);
  })
}

function Fileselect() {
    var btn = document.getElementById("btn");
    var imgFile = document.getElementById("imgfile");
    var imgEl = document.getElementById('icon');
    if(imgFile.type="file") {
        document.querySelector('input[name="src-img"]').addEventListener('change', function(changeFileEvent){
        var fReaderForURI = new FileReader();
        fReaderForURI.readAsDataURL(changeFileEvent.target.files[0]);
        fReaderForURI.onload = () => {
          imgEl.src = String(fReaderForURI.result);
          var cropper = new Cropper(imgEl, {aspectRatio: 1 / 1});
        }
        imgFile.type="button";
        btn.innerHTML="切り取り"; 
        })   
    } else if(imgFile.type="button"){
      document.getElementById("imgfile").addEventListener('click',function() {
        resultImgUrl = cropper.getCroppedCanvas().toDataURL();
        var result = imgEl.src;
        result.src = resultImgUrl;
        /*const croppedCanvas = cropper.getCroppedCanvas();
        croppedCanvas.toBlob(function(imgBlob) {
            const croppedImgFile = new File([imdBlob], '切り抜き画像.png', {type: "image/png"});
            const dt = new DetaTransfer();
            dt.items.add(croppedImgFile);
            document.getElementById("icon").files = dt.files;
        })*/
        imgFile.type="file";
        btn.innerHTML="写真の変更";
      })
    }
}