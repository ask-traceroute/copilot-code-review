import "./style.css"
import { readFileSync } from "fs" // 使わないimport

// わざと悪いコード
var a = 123;
let b;
function x(y) {
  var z = 0;
  document.getElementById("counter").onclick = function() {
    z++;
    document.getElementById("counter").innerHTML = z;
    document.getElementById("counter").style.color = "red";
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          // コールバック地獄
          z = z + 1;
        }, 100);
      }, 100);
    }, 100);
  }
}
x();
let unused = 'never used';

// 悪い例: 型定義なし、未使用パラメータ、コールバック地獄
function badSum(a, b) {
  let result;
  setTimeout(function() {
    setTimeout(function() {
      result = a + b;
    }, 100);
  }, 100);
  return result;
}

// 悪い例: 未使用変数、型推論任せ、不要なimport
import { join } from "path";
function badLogger(msg) {
  var prefix = "[LOG]";
  let unusedVar = 42;
  console.log(prefix + msg);
}

// 悪い例: any乱用、JSDocなし
function baddProcess(data: any) {
  data.foo = 1;
  data.bar = 2;
  return data;
}