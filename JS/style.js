/*** Các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động là bài toán lặp
 * b1: Xác định yếu tố yếu tố thay đổi (khởi tạo biến bước nhảy)
 * bước 2: điều kiện lặp
 * bước 3: cài đạt khối xử lý
 * b4: thay đổi giá trị của biến bước nhảy
 *
 * */

document.getElementById("btnInTheDiv").onclick = function () {
  //   input:number;
  var input = Number(document.getElementById("iSo").value);
  //output: string
  var output = "";
  // Xử lý
  var dem = 1;
  // biến do người dùng nhập
  while (dem <= input) {
    //còn đúng thì còn làm
    var div = '<div class="alert alert-success mt-2"> Hello vn</div>';

    // output=ouput+div;
    output += div;
    // xuất output
    dem++;
  }
  document.getElementById("ketQua1").innerHTML = output;
};
