const copyCode = document.getElementById('copycode');
const copyText = copyCode.textContent;

const copyBtn = document.getElementById('copybtn');
copyBtn.addEventListener('click', () => {
    if(!navigator.clipboard){
      alert("このブラウザでは対応していません");
      return;
    }
    navigator.clipboard.writeText(copyText).then( () => {
        alert('コピーしました');
      })
})

