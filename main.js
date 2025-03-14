
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
function doGet(e) {
  const callback = e.parameter.callback;
  // JSONデータを作る
  const data = { duration: "5 hours 35 mins" };
  const jsonStr = JSON.stringify(data);
  if (callback) {
    // JSONP 形式
    return ContentService
      .createTextOutput(`${callback}(${jsonStr})`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    // 通常JSON
    return ContentService
      .createTextOutput(jsonStr)
      .setMimeType(ContentService.MimeType.JSON);
  }
}
