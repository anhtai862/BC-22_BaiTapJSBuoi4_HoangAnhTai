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

var soNguyen1 = 15;
var soNguyen2 = 52;
var soNguyen3 = 30;

if (soNguyen1 < soNguyen2 && soNguyen2 > soNguyen3) {
  console.log("Số Lớn Nhất là số : " + soNguyen2);
} else if (soNguyen1 < soNguyen2 && soNguyen2 < soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen2);
} else if (soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen2);
} else {
  console.log("Số Nhỏ Nhất là số : " + soNguyen2);
}

if (soNguyen1 < soNguyen3 && soNguyen2 < soNguyen3) {
  console.log("Số Lớn Nhất là số : " + soNguyen3);
} else if (soNguyen1 < soNguyen3 && soNguyen2 > soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen3);
} else if (soNguyen1 > soNguyen3 && soNguyen2 < soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen3);
} else {
  console.log("Số Nhỏ Nhất là số : " + soNguyen3);
}

if (soNguyen1 > soNguyen2 && soNguyen1 > soNguyen3) {
  console.log("Số Lớn Nhất là số : " + soNguyen1);
} else if (soNguyen1 > soNguyen2 && soNguyen1 < soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen1);
} else if (soNguyen1 < soNguyen2 && soNguyen1 > soNguyen3) {
  console.log("Số Thứ Hai là số : " + soNguyen1);
} else {
  console.log("Số Nhỏ Nhất là số : " + soNguyen1);
}

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

var boSuDung = 1;
var meSuDung = 2;
var anhSuDung = 3;
var emSuDung = 4;
var nguoiSuDung = 2;

if (nguoiSuDung == 1) {
  console.log("Chào Bố, Mời Bố Vào Nhà");
} else if (nguoiSuDung == 2) {
  console.log("Chào Mẹ, Mời Mẹ Vào Nhà");
} else if (nguoiSuDung == 3) {
  console.log("Chào Anh, Mời Anh Vào Nhà");
} else {
  console.log("Chào Em, Mời Em Vào Nhà");
}

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

var soNgauNhien1 = 14;
var soNgauNhien2 = 22;
var soNgauNhien3 = 25;

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

console.log("Tổng Số Chẵn Là : " + tongChan);
console.log("Tổng Số Lẻ Là : " + tongLe);

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

var canhA = 4;
var canhB = 4;
var canhC = 6;

if ((canhA == canhB) == canhC) {
  console.log("Đây Là Tam Giác Đều");
} else if ((canhA == canhB) != canhC) {
  console.log("Đây Là Tam Giác cân");
} else {
  console.log("Đây Là Tam Giác Thường");
}
