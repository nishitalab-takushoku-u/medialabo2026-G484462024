function changeDom() {
    //要素新規作成
    let l = document.createElement("li");
    l.textContent = "ヨット";
    let u = document.querySelector("#kazoeuta");
    u.insertAdjacentElement("beforeend", l);

    //属性変更1(画像表示)
    let i = document.querySelector("#bluemoon");
    i.setAttribute("src", "bluemoon.jpg");

    //属性変更2(リンク埋め込み)
    let a = document.createElement("a");
    a.textContent = "拓殖大学HP";
    a.setAttribute("href","https://www.takushoku-u.ac.jp");
    let p = document.querySelector("#takudai");
    p.insertAdjacentElement("afterend",a);

    //要素の削除
    let k = document.querySelector("#kassen");
    k.remove();

    //複雑な新規要素の作成
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = "赤";
    ul.insertAdjacentElement("beforeend", li);
    li = document.createElement("li");
    li.textContent = "緑";
    ul.insertAdjacentElement("beforeend", li);
    li = document.createElement("li");
    li.textContent = "青";
    ul.insertAdjacentElement("beforeend", li);
    let primary = document.querySelector("#primary");
    primary.insertAdjacentElement("afterend",ul);
}
//ボタン
    let button = document.querySelector("#henkou");
    button.addEventListener("click", changeDom);