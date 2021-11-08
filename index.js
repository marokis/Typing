const subject = document.getElementById('subject');
const timer = document.getElementById('timer');
const form = document.forms.typing;
const textList = [
  'パソコンもスマートフォンもみんなコンピュータである',
  'CPUこと中央処理装置は、複雑な計算や装置のコントロールなどの役割があり、連続的処理を得意としている',
  'GPUこと画像処理装置は、繊細な画像の描写などの役割があり、画像や３Dなど大きなデータを一気に処理することを得意としている',
  'OSことOperating Systemは、アプリケーションとコンピュータと間を取り持つものである。OSがないと、アプリは機能しない',
  'オープンソースとは、ソースコードを公開することである',
  'アップデートとは、最新状態に更新することである、主にバグの解消や性能の向上、セキュリティの強化のために行われる',
  'UIことUser Interfaceとは、製品やサービスとそのユーザーとの接点のことである。WEBサイトを見やすくするのもUIの一つである',
  'UXことUser Experienceとは、ユーザーが製品やサービスの利用を通して得られる体験・経験のことである。',
];

let TIME = 60;
let count = 0;
let state = true;

const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);


form.btn.addEventListener('click', function(e) {
  if(!state) return;
 
  if(form.input.value === subject.textContent) {
    count++;
    init();
  } else {
    subject.textContent = '間違いです！';
    setTimeout(function(){ init() },1000)
  }

});

init();
 
function init() {
  const rnd = Math.floor(Math.random() * textList.length);
 
  subject.textContent = textList[rnd];
  form.input.value = '';
  form.input.focus();
}
 
function finish() {
  clearInterval(countdown);
  subject.textContent = '正解数は' + count + '個でした！';
  state = false;
}