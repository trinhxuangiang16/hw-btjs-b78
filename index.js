let arr = [1, 2, 5, 11, 3, 5, 6, 7, 8, -1, -3, -4, -5, -7, 0];
console.log(arr);

let timSoNguyen = function (num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let themSo = function () {
  //Thêm số vào mảng
  //let so = document.getElementById("themSo").value * 1;
  //arr.push(so);
  let array = [...arr];
  console.log(array);

  //Đếm số dương
  let soDuongArr = array.filter((item) => item > 0);
  console.log(soDuongArr);

  let demSoDuong = soDuongArr.length;
  console.log(demSoDuong);

  //Tìm số nhỏ nhất
  let arrayTangDan = array.sort((a, b) => a - b);
  console.log(array);
  let soNhoNhat = arrayTangDan[0];
  console.log(soNhoNhat);

  //Tìm số dương nhỏ nhất
  let soDuongNhoNhat = soDuongArr[0];
  console.log(soDuongNhoNhat);

  //Tìm số chẵn cuối cùng
  let soChan = array.filter((item) => item % 2 === 0 && item !== 0);
  console.log(soChan);
  let soChanCuoiCung = soChan[soChan.length - 1];
  console.log(soChanCuoiCung);

  //Sắp xếp tăng dần
  let mangTangDan = arrayTangDan;
  console.log(mangTangDan);

  //Tìm số nguyên tố đầu tiên
  let soNguyenDauTien = array.find((num) => timSoNguyen(num));
  console.log(soNguyenDauTien);

  //Đếm các số nguyên
  let cacSoNguyen = [];

  array.forEach((item) => {
    if (Number.isInteger(item)) {
      cacSoNguyen.push(item);
    }
  });

  let tongCacSoNguyen = cacSoNguyen.length;
  console.log(tongCacSoNguyen);

  //So sánh số lượng số âm và số dương
  let soAm = array.filter((num) => num < 0).length;
  let soDuong = array.filter((num) => num > 0).length;
  console.log(soAm, soDuong);

  if (soAm > soDuong) {
    console.log("số âm > số dương");
  } else if (soAm < soDuong) {
    console.log("số âm < số dương");
  } else {
    console.log("số âm = số dương");
  }
};
themSo();

let doiCho = function () {
  let array = [...arr];
  //Đổi chổ
  let choA = document.getElementById("doiChoA").value * 1;
  let choB = document.getElementById("doiChoB").value * 1;

  if (array[choA - 1] && array[choB - 1]) {
    let indexA = array[choB - 1];
    let indexB = array[choA - 1];
    array[choA - 1] = indexA;
    array[choB - 1] = indexB;
  } else {
    console.log("Nhập lại 2 ví trí thực");
  }

  console.log(array);
};
