<script src="main.js"></script>

function calculate() {
  var origin = document.getElementById('origin').value;
  var destination = document.getElementById('destination').value;

  if (origin === "" || destination === "") {
    document.getElementById('result').innerHTML = "両方の住所を入力してください。";
    return;
  }

  document.getElementById('result').innerHTML = "計算中...";

  // google.script.run を使い、サーバー側の getTravelTime() を非同期で呼び出す
  google.script.run.withSuccessHandler(function(result) {
    document.getElementById('result').innerHTML = "所要時間: " + result;
  }).getTravelTime(origin, destination);
}
