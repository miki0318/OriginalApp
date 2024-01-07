function buttonClick() {
    var datepic = document.getElementById("datepicker");
    var word = document.getElementById("word");
    console.log(datepic.style.display);

    if(datepic.style.display = "none"){
      word.style.display = "none";
      datepic.style.display = "block";
      $('#datepicker').datepicker();
    }
    else{
      datepic.style.display = "none";
    }
}