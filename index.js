let arr = [];

let tongSoDuong = document.getElementById("tongSoDuong");
let cacSoDuong = document.getElementById("demSoDuong");
let nhoNhat = document.getElementById("soNhoNhat");
let duongNhoNhat = document.getElementById("duongNhoNhat");
let soChanCuoiCung = document.getElementById("chanCuoiCung");
let tangDan = document.getElementById("tangDan");
let songuyento = document.getElementById("soNguyenToDauTien");
let tongNguyen = document.getElementById("tongSoNguyen");
let soSanhAmDuong = document.getElementById("soSanh");
let mangDaDoi = document.getElementById("mangDaDoi");
let mangHienTai = document.getElementById("mangHienTai");
//hàm callback tìm số nguyên tố đầu tiên
let timSoNguyenTo = function (num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//Thêm số nguyên vào để đếm các số nguyên trong mảng
let themSoNguyen = function () {
  let themSoNguyen = document.getElementById("themSoNguyen").value * 1;
  arr = [...arr, themSoNguyen];
  console.log(arr);
};

//Đếm số nguyên
let handleDemSoNguyen = function () {
  let demSoNguyenArr = [...arr];
  console.log(demSoNguyenArr);

  //Đếm các số nguyên
  let cacSoNguyen = [];

  demSoNguyenArr.forEach((item) => {
    if (Number.isInteger(item)) {
      cacSoNguyen.push(item);
    }
  });

  let tongCacSoNguyen = cacSoNguyen.length;
  tongNguyen.innerText = ` ${tongCacSoNguyen}`;
};

let themSo = function () {
  let soThemVao = document.getElementById("themSo").value * 1;
  //Thêm số vào mảng
  arr.push(soThemVao);
  mangHienTai.innerText = ` ${arr}`;

  //Tổng và đếm số dương
  let soDuongArr = arr.filter((item) => item > 0);

  if (soDuongArr.length === 0) {
    soDuongArr = [-1];
  } else {
    //Tổng dương
    let sumSoDuong = soDuongArr.reduce((acc, num) => acc + num, 0);
    tongSoDuong.innerText = ` ${sumSoDuong}`;

    //Đếm dương
    let demSoDuong = soDuongArr.length;
    cacSoDuong.innerText = ` ${demSoDuong}`;

    //Tìm số dương nhỏ nhất
    let soDuonNhoDenLon = soDuongArr.sort((a, b) => a - b);
    let soDuongNhoNhat = soDuonNhoDenLon[0];
    duongNhoNhat.innerText = ` ${soDuongNhoNhat}`;
  }

  //Tìm số nhỏ nhất
  let arrayNhoNhat = [...arr];
  let arrayTangDan = arrayNhoNhat.sort((a, b) => a - b);

  let soNhoNhat = arrayTangDan[0];
  nhoNhat.innerText = ` ${soNhoNhat}`;

  //Tìm số chẵn cuối cùng
  let arrayNguyenTo = [...arr];
  let soChan = arrayNguyenTo.filter((item) => item % 2 === 0 && item !== 0);
  console.log(soChan);
  if (soChan.length === 0) {
    soChan.push(-1);
    console.log(soChan);
    soChanCuoiCung.innerText = ` ${soChan}`;
  } else {
    console.log(soChan);
    let chanCuoiCung = soChan[soChan.length - 1];
    console.log(chanCuoiCung);
    soChanCuoiCung.innerText = ` ${chanCuoiCung}`;
  }

  //Sắp xếp tăng dần
  let mangTangDan = arrayTangDan;
  tangDan.innerText = ` ${mangTangDan}`;

  //Tìm số nguyên tố đầu tiên
  let arrayForSoNguyenTo = [...arr];
  let soNguyenToDauTien = arrayForSoNguyenTo.find((num) => timSoNguyenTo(num));
  if (soNguyenToDauTien) {
    console.log(soNguyenToDauTien);
    songuyento.innerText = ` ${soNguyenToDauTien}`;
  } else {
    soNguyenToDauTien = [-1];
    console.log(soNguyenToDauTien);
    songuyento.innerText = ` ${soNguyenToDauTien} : không có số nguyên tố nào`;
  }

  //So sánh số lượng số âm và số dương
  let soAm = arr.filter((num) => num < 0).length;
  let soDuong = arr.filter((num) => num > 0).length;
  console.log(soAm, soDuong);

  if (soAm > soDuong) {
    soSanhAmDuong.innerText = "số âm > số dương";
  } else if (soAm < soDuong) {
    soSanhAmDuong.innerText = "số âm < số dương";
  } else {
    soSanhAmDuong.innerText = "số âm = số dương";
  }
  console.log(arr);
};

let doiCho = function () {
  let array = [...arr];
  console.log(array);
  //Đổi chổ
  let choA = document.getElementById("doiChoA").value * 1;
  let choB = document.getElementById("doiChoB").value * 1;

  if (array[choA - 1] && array[choB - 1]) {
    let indexA = array[choB - 1];
    let indexB = array[choA - 1];
    array[choA - 1] = indexA;
    array[choB - 1] = indexB;
    mangDaDoi.innerHTML = ` ${array}`;
  } else {
    console.log("Nhập lại 2 ví trí thực");
  }

  console.log(array);
};
