// $(document).ready(function() {
//     var i = 1; // Khởi tạo số thứ tự
//    // Viết code vào

// })



// // lấy phần Modal
// var modal = document.getElementById('myModal');

// // Lấy phần button mở Modal
// var btn = document.getElementById("myBtn");

// // Lấy phần span đóng Modal
// var span = document.getElementsByClassName("close")[0];

// // Khi button được click thi mở Modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // Khi span được click thì đóng Modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // Khi click ngoài Modal thì đóng Modal
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

$(document).ready(function(){
    var i=1;
        $("#myBtn").click(function(){
            $("#myModal").modal();
        });
        function Kiemtraten() {
            var i=1;
            let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
            if ($("#Name").val() =="") {
                $("#tbName").html("khong de trong");
                return false;
            }
            if (!mauKT.test($("#Name").val())) {
                $("#tbName"),html("Moi kytu dau viet hoa khong su dung so");
                return true;
            }
            $("#tbName").html("*");
            return true;
        }
        $("#Name").blur(Kiemtraten);

        function kiemtrasoao(){
            var mauKT = /^\d*$/;
            if($("#Ao").val()==""){
                $("#Ao").html("khong de trong");
                return false;
            }
            if (!mauKT.test($("#Ao").val())) {
                $("#tbAo"),html("dung so tu 1 den 100");
                return true;
        }else{
            var soAo =$("#Ao").val();
            if(soAo<1||soAo>100){
                $("#tbAo").html("tu 1 den 100");
            }else{
                $("#tbName").html("*");
                return true;
            }
        }
    }
            $("#Ao").blur(kiemtrasoao);

        function kiemtradiachi(){
            var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-A-Z0-9][a-z0-9]*)*$/;
            if($("#DC").val()==""){
                $("#DC").html("khong de trong");
                return false;
            }
            if (!mauKT.test($("#DC").val())){
                $("#DC").html("moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("#DC").blur(kiemtradiachi);

        function kiemtraNTT() {
            if($("#NTT").val()==""){
             $("#tbNTT").html("ko de trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today =today.setDate(today.getDate()+7);
        if(today>ntt){
            $("#tbNTT").html("phai sau ngay hien tai 7 ngay");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#tbNTT").blur(kiemtraNTT);

        function kiemtraSDT(){
            var mauKT =/^0\d{3}-d{3}-\d{3}$/;
            if ($("#SDT").val()=="") {
                $("#SDT").html("khong de trong");
                 return false;
            }
            if (!mauKT.test($("#SDT").val())) {
                $("#tbSDT").html("theo dang 0xxx-xxx-xxx trong do x la so");
                return true;
            }
            $("#tbSDT").html("*");
            return true;
        }
        $("#SDT").blur(kiemtraSDT);
        $("#Save").click(function () {
            if (kiemtraten()==true && kiemtrasoao()==true && kiemtraSDT()==true && kiemtraNTT()==true && kiemtradiachi()==true) {
                row = "<tr>";
                    row += "<th>" +(i++) + "</th>";
                    row += "<th>" + $("#Name").val() + "</th>";
                    row += "<th>" + $("#Ao").val() + "</th>";
                    row += "<th>" + $("#DC").val() + "</th>";
                    row += "<th>" + $("#NTT").val() + "</th>";
                    row += "<th>" + $("#SDT").val() + "</th>";
                    row += "<th>" + $("#ADD").val() + "</th>";
                    $("#list").append(row);
                    $("#myModal").modal("hide");
            }
        })

    })

