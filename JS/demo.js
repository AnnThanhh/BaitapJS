//Bài Tập 1
function tinhLuong() {
  let luongNgay = parseFloat(document.getElementById("luongNgay").value);
  let soNgay = parseInt(document.getElementById("soNgay").value);
  let luong = 0;

  if (luongNgay <= 0 || soNgay <= 0) {
    alert("Vui lòng nhập đúng thông tin");
  } else {
    luong = luongNgay * soNgay;
  }

  document.getElementById(
    "ketQua"
  ).innerHTML = `Tổng lương là ${luong.toLocaleString()}`;
}
document.getElementById("tinhLuongBtn").onclick = tinhLuong;

//Bài Tập 2
function tinhTrungBinh() {
  let so1 = parseFloat(document.getElementById("so1").value);
  let so2 = parseFloat(document.getElementById("so2").value);
  let so3 = parseFloat(document.getElementById("so3").value);
  let so4 = parseFloat(document.getElementById("so4").value);
  let so5 = parseFloat(document.getElementById("so5").value);
  let tb = 0;

  if (isNaN(so1) || isNaN(so2) || isNaN(so3) || isNaN(so4) || isNaN(so5)) {
    alert("Vui lòng nhập đúng thông tin");
    return;
  } else {
    tb = (so1 + so2 + so3 + so4 + so5) / 5;
  }

  document.getElementById("ketQua2").innerHTML = "Giá trị trung bình là: " + tb;
}
document.getElementById("tinhTbinhBtn").onclick = tinhTrungBinh;

//Bài Tập 3
function quyDoi() {
  let soUSD = parseFloat(document.getElementById("inputUSD").value);
  let soVND = 0;

  if (isNaN(soUSD) || soUSD <= 0) {
    alert("Vui lòng nhập số USD hợp lệ");
  } else {
    soVND = soUSD * 23500;
  }

  document.getElementById("ketQua3").innerHTML =
    "Số tiền quy đổi là: " + soVND.toLocaleString() + " VND";
}
document.getElementById("quyDoiBtn").onclick = quyDoi;

//Bài tập 4
function tinhSVaP() {
  let l = parseFloat(document.getElementById("chieuDai").value);
  let w = parseFloat(document.getElementById("chieuRong").value);
  let s = 0;
  let p = 0;

  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
    alert("Vui lòng nhập đúng thông tin");
  } else {
    s = l * w;
    p = (l + w) * 2;
  }

  document.getElementById("ketQua4").innerHTML =
    "Diện tích là: " + s + "<br>Chu vi là: " + p;
}
document.getElementById("tinhCVDTBtn").onclick = tinhSVaP;

//Bài tập 5
function sum() {
  let soHaiChuSo = parseInt(document.getElementById("soHaiChuSo").value);
  let hangDonVi = 0;
  let hangChuc = 0;
  let tong = 0;
  if (isNaN(soHaiChuSo) || soHaiChuSo < 10 || soHaiChuSo > 99) {
    alert("Vui lòng nhập số có 2 chữ số");
  } else {
    hangDonVi = soHaiChuSo % 10;
    hangChuc = Math.floor(soHaiChuSo / 10);
    tong = hangChuc + hangDonVi;
  }

  document.getElementById("ketQua5").innerHTML = "Tổng hai chữ số là: " + tong;
}
document.getElementById("tinhTongBtn").onclick = sum;
