const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const print = document.getElementById("print");
let flag;

function gra() {
  let p1 = b1.value;
  let p2 = b2.value;
  let p3 = b3.value;
  let p4 = b4.value;
  let p5 = b5.value;
  let p6 = b6.value;
  let p7 = b7.value;
  let p8 = b8.value;
  let p9 = b9.value;

  const array1 = [b4, b5, b6, b7, b8, b9];
  const array2 = [b2, b3, b5, b6, b8, b9];
  const array3 = [b1, b2, b3, b4, b5, b6];
  const array4 = [b1, b2, b4, b5, b7, b8];
  const array5 = [b2, b3, b4, b6, b7, b8];
  const array6 = [b1, b2, b4, b6, b8, b9];
  const array7 = [b1, b3, b4, b6, b7, b9];
  const array8 = [b1, b2, b3, b7, b8, b9];
  const array9 = [b4, b5, b6, b7, b8, b9];
  const array10 = [b2, b3, b5, b6, b8, b9];
  const array11 = [b1, b2, b3, b4, b5, b6];
  const array12 = [b1, b2, b4, b5, b7, b8];
  const array13 = [b2, b3, b4, b6, b7, b8];
  const array14 = [b1, b2, b4, b6, b8, b9];
  const array15 = [b1, b3, b4, b6, b7, b9];
  const array16 = [b1, b2, b3, b7, b8, b9];
  //1
  if (
    (p1 === "x" || p1 === "X") &&
    (p2 === "x" || p2 === "X") &&
    (p3 === "x" || p3 === "X")
  ) {
    print.innerHTML = "Player X won";
    array1.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //2
  else if (
    (p1 === "x" || p1 === "X") &&
    (p4 === "x" || p4 === "X") &&
    (p7 === "x" || p7 === "X")
  ) {
    print.innerHTML = "Player X won";
    array2.forEach((element) => (element.disabled = true));

    window.alert("Player X won");
  } //3
  else if (
    (p7 === "x" || p7 === "X") &&
    (p8 === "x" || p8 === "X") &&
    (p9 === "x" || p9 === "X")
  ) {
    print.innerHTML = "Player X won";
    array3.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //4
  else if (
    (p3 === "x" || p3 === "X") &&
    (p6 === "x" || p6 === "X") &&
    (p9 === "x" || p9 === "X")
  ) {
    print.innerHTML = "Player X won";
    array4.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //5
  else if (
    (p1 === "x" || p1 === "X") &&
    (p5 === "x" || p5 === "X") &&
    (p9 === "x" || p9 === "X")
  ) {
    print.innerHTML = "Player X won";
    array5.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //6
  else if (
    (p3 === "x" || p3 === "X") &&
    (p5 === "x" || p5 === "X") &&
    (p7 === "x" || p7 === "X")
  ) {
    print.innerHTML = "Player X won";
    array6.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //7
  else if (
    (p2 === "x" || p2 === "X") &&
    (p5 === "x" || p5 === "X") &&
    (p8 === "x" || p8 === "X")
  ) {
    print.innerHTML = "Player X won";
    array7.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //8
  else if (
    (p4 === "x" || p4 === "X") &&
    (p5 === "x" || p5 === "X") &&
    (p6 === "x" || p6 === "X")
  ) {
    print.innerHTML = "Player X won";
    array8.forEach((element) => (element.disabled = true));
    window.alert("Player X won");
  } //9
  else if (
    (p1 === "0" || p1 === "0") &&
    (p2 === "0" || p2 === "0") &&
    (p3 === "0" || p3 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array9.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //10
  else if (
    (p1 === "0" || p1 === "0") &&
    (p4 === "0" || p4 === "0") &&
    (p7 === "0" || p7 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array10.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //11
  else if (
    (p7 === "0" || p7 === "0") &&
    (p8 === "0" || p8 === "0") &&
    (p9 === "0" || p9 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array11.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //12
  else if (
    (p3 === "0" || p3 === "0") &&
    (p6 === "0" || p6 === "0") &&
    (p9 === "0" || p9 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array12.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //13
  else if (
    (p1 === "0" || p1 === "0") &&
    (p5 === "0" || p5 === "0") &&
    (p9 === "0" || p9 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array13.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //14
  else if (
    (p3 === "0" || p3 === "0") &&
    (p5 === "0" || p5 === "0") &&
    (p7 === "0" || p7 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array14.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //15
  else if (
    (p2 === "0" || p2 === "0") &&
    (p5 === "0" || p5 === "0") &&
    (p8 === "0" || p8 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array15.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } //16
  else if (
    (p4 === "0" || p4 === "0") &&
    (p5 === "0" || p5 === "0") &&
    (p6 === "0" || p6 === "0")
  ) {
    print.innerHTML = "Player 0 won";
    array16.forEach((element) => (element.disabled = true));
    window.alert("Player 0 won");
  } else if (
    (p1 === "X" || p1 === "0") &&
    (p2 === "X" || p2 === "0") &&
    (p3 === "X" || p3 === "0") &&
    (p4 === "X" || p4 === "0") &&
    (p5 === "X" || p5 === "0") &&
    (p6 === "X" || p6 === "0") &&
    (p7 === "X" || p7 === "0") &&
    (p8 === "X" || p8 === "0") &&
    (p9 === "X" || p9 === "0")
  ) {
    print.innerHTML = "Match Tie";
    window.alert("Match Tie");
  } else {
    // Here, Printing Result
    if (flag === 1) {
      print.innerHTML = "Player X Turn";
    } else {
      print.innerHTML = "Player 0 Turn";
    }
  }
}

// Function to reset game
function foo2() {
  location.reload();
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
}

flag = 1;

function foo3() {
  if (flag === 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function foo4() {
  if (flag === 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function foo5() {
  if (flag === 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function foo6() {
  if (flag === 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}

function foo7() {
  if (flag === 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}

function foo8() {
  if (flag === 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}

function foo9() {
  if (flag === 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}

function foo10() {
  if (flag === 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

function foo11() {
  if (flag === 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}
