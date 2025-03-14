<script>
  document.getElementById("parseButton").addEventListener("click", () => {
    // 貼り付け先のDIV
    const pasteArea = document.getElementById("pasteArea");
    // 中身を取得
    const pastedHTML = pasteArea.innerHTML;

    // 1) DOMParserでHTMLをパースして、テーブル要素を取得
    const parser = new DOMParser();
    const doc = parser.parseFromString(pastedHTML, "text/html");
    const table = doc.querySelector("table");

    if (!table) {
      alert("テーブルが見つかりません。Excelからコピーされていない可能性があります。");
      return;
    }

    // 2) テーブルの各行・セルを読み取る
    const rows = table.querySelectorAll("tr");
    const data = [];
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td, th");
      const rowData = [];
      cells.forEach((cell) => {
        rowData.push(cell.innerText.trim());
      });
      data.push(rowData);
    });

    // 3) 取得したdataを、ゲームシミュレーション用に変換
    //    ここは業務ロジックに合わせて自由に。
    console.log("Excel表を配列として取得:", data);

    // 例: 先頭行を見出しとして扱い、2行目以降をデータとする…など
    // ここでCanvasに反映する処理を書く
    // ...
    alert("解析完了！コンソールを確認してください。");
  });
</script>
