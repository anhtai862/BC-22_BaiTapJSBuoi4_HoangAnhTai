/**
 * Bài Tập 1:
 * Đầu Vào
 * - tạo biến soNguyen1
 * - tạo biến soNguyen2
 * - tạo biến soNguyen3

 * Xử Lý:
 * soLonNhat > soNhoNhat && soLonNhat > soThuHai
 * soThuHai > soNhoNhat && soThuHai < soLonNhat
 * soNhoNhat < soThuHai && soNhoNhat < soLonNhat
 * 
 * Đầu ra: Thông báo kết qủa
 */

document.getElementById("btnKiemTra").onclick = function () {
  var soNguyen1 = document.getElementById("txtNumber1").value;
  var soNguyen2 = document.getElementById("txtNumber2").value;
  var soNguyen3 = document.getElementById("txtNumber3").value;
  var soLonNhat = " Số Lớn Nhất là số :";
  var soThuHai = " Số Lớn Hai là số :";
  var soNhoNhat = " Số Nhỏ Nhất là số :";

  if (soNguyen1 < soNguyen2 && soNguyen2 > soNguyen3) {
    soLonNhat += soNguyen2;
  } else if (soNguyen1 < soNguyen2 && soNguyen2 < soNguyen3) {
    soThuHai += soNguyen2;
  } else if (soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3) {
    soThuHai += soNguyen2;
  } else {
    soNhoNhat += soNguyen2;
  }

  if (soNguyen1 < soNguyen3 && soNguyen2 < soNguyen3) {
    soLonNhat += soNguyen3;
  } else if (soNguyen1 < soNguyen3 && soNguyen2 > soNguyen3) {
    soThuHai += soNguyen3;
  } else if (soNguyen1 > soNguyen3 && soNguyen2 < soNguyen3) {
    soThuHai += soNguyen3;
  } else {
    soNhoNhat += soNguyen3;
  }

  if (soNguyen1 > soNguyen2 && soNguyen1 > soNguyen3) {
    soLonNhat += soNguyen1;
  } else if (soNguyen1 > soNguyen2 && soNguyen1 < soNguyen3) {
    soThuHai += soNguyen1;
  } else if (soNguyen1 < soNguyen2 && soNguyen1 > soNguyen3) {
    soThuHai += soNguyen1;
  } else {
    soNhoNhat += soNguyen1;
  }
  var ketQua = soNhoNhat + "<br/>" + soThuHai + "<br/>" + soLonNhat;
  document.getElementById("footerKiemTra").innerHTML = ketQua;
};

/**
 * Bài Tập 2
 *
 * Đầu Vào:
 * - Tạo Biến boSuDung = 1
 * - Tạo Biến meSuDung = 2
 * - Tạo Biến anhSuDung = 3
 * - Tạo Biến emSuDung = 4
 * - Tạo Biến nguoiSuDung
 *
 *
 * Xử Lý :
 *  - so sánh giá trị người sử dụng
 * nguoiSuDung == boSuDung
 * nguoiSuDung == meSuDung
 * nguoiSuDung == anhSuDung
 * nguoiSuDung == emSuDung
 *
 *
 * Đẩu ra : Báo kết quả
 *
 */

document.getElementById("btnNguoiSuDung").onclick = function () {
  var nguoiSuDung = document.getElementById("txtDienSo").value;
  var chaoBo = "Chào Bố, Mời Bố Vào Nhà";
  var chaoMe = "Chào Mẹ, Mời Mẹ Vào Nhà";
  var chaoAnh = "Chào Anh, Mời Anh Vào Nhà";
  var chaoEm = "Chào Em, Mời Em Vào Nhà";
  var ketQua;

  if (nguoiSuDung.toUpperCase() == "B") {
    ketQua = chaoBo;
  } else if (nguoiSuDung.toUpperCase() == "M") {
    ketQua = chaoMe;
  } else if (nguoiSuDung.toUpperCase() == "A") {
    ketQua = chaoAnh;
  } else if (nguoiSuDung.toUpperCase() == "E") {
    ketQua = chaoEm;
  } else {
    ketQua = "Người Lạ";
  }
  document.getElementById("footerKiem").innerHTML = ketQua;
};

/**
 * Bài Tập 3
 *
 * Đầu Vào :
 * - Tạo biến soNgauNhien1
 * - Tạo biến soNgauNhien2
 * - Tạo biến soNgauNhien3
 * - Tạo biến tongChan = soChan1 + soChan2 + soChan3
 * - Tạo biến tongLe = soLe1 + soLe2 + soLe3;
 *
 * Xử Lý :
 *  số chẵn là số chia hết cho 2. %
 *  Nếu số kiểm tra % 2 === 0 => chẵn => soChan1,2,3 += 1 => tongChan
 *  Ngược lạo là số lẻ => soLe1,2,3 += 1  => tongLe
 *
 *
 * Đầu Ra : báo kết qủa
 */
document.getElementById("btnKiemTraChanLe").onclick = function () {
  var soNgauNhien1 = document.getElementById("txtDienSo1").value;
  var soNgauNhien2 = document.getElementById("txtDienSo2").value;
  var soNgauNhien3 = document.getElementById("txtDienSo3").value;

  if (soNgauNhien1 % 2 === 0) {
    var soLe1 = 0;
    var soChan1 = 0;
    soChan1 = soChan1 + 1;
  } else {
    var soLe1 = 0;
    var soChan1 = 0;
    soLe1 = soLe1 + 1;
  }

  if (soNgauNhien2 % 2 === 0) {
    var soLe2 = 0;
    var soChan2 = 0;
    soChan2 = soChan2 + 1;
  } else {
    var soLe2 = 0;
    var soChan2 = 0;
    soLe2 = soLe2 + 1;
  }

  if (soNgauNhien3 % 2 === 0) {
    var soLe3 = 0;
    var soChan3 = 0;
    soChan3 = soChan3 + 1;
  } else {
    var soLe3 = 0;
    var soChan3 = 0;
    soLe3 = soLe3 + 1;
  }

  var tongChan = soChan1 + soChan2 + soChan3;
  var tongLe = soLe1 + soLe2 + soLe3;
  var ketQuaTongChanLe =
    "Tổng Số Chẵn Là : " + tongChan + "<br/>" + "Tổng Số Lẻ Là : " + tongLe;

  document.getElementById("btnKiemTraKetQua").innerHTML = ketQuaTongChanLe;
  // document.getElementById("btnKiemTraKetQua").innerHTML = ketQuaLe;
};

/**
 * Bài Tập 4
 *
 * Đầu Vào :
 * - tạo biến canhA
 * - tạo biến canhB
 * - tạo biến canhC
 *
 * Xử Lý :
 * - Nếu canhA = canhB = canhC => Tam giac deu
 * - Nếu canhA = canhB != canhC => Tam giac can
 *  - Nếu canhA != canhB != canhC  => Tam giac Thuong
 *
 * Đầu Ra : thông báo kết quả
 */

document.getElementById("btnTimTamGiac").onclick = function () {
  var canhA = document.getElementById("txtCanh1").value * 1;
  var canhB = document.getElementById("txtCanh2").value * 1;
  var canhC = document.getElementById("txtCanh3").value * 1;
  var canhA2 = Math.pow(canhA, 2);
  var canhB2 = Math.pow(canhB, 2);
  var canhC2 = Math.pow(canhC, 2);
  var ketQua;

  if (canhA == canhB && canhA == canhC) {
    ketQua = "Đây Là Tam Giác Đều";
  } else if (canhA == canhB && canhA != canhC) {
    ketQua = "Đây Là Tam Giác cân";
  } else if (canhA != canhB && canhA == canhC) {
    ketQua = "Đây Là Tam Giác cân";
  } else if (canhA == canhC && canhC != canhB) {
    ketQua = "Đây Là Tam Giác cân";
  } else if (canhB == canhC && canhC != canhA) {
    ketQua = "Đây Là Tam Giác cân";
  } else if (
    canhA2 == canhB2 + canhC2 ||
    canhC2 == canhB2 + canhA2 ||
    canhB2 == canhA2 + canhC2
  ) {
    ketQua = "Đây Là Tam Giác Vuông";
  } else {
    ketQua = "Đây Là Tam Giác Thường";
  }
  document.getElementById("btnLoaiTamGiac").innerHTML = ketQua;
};
