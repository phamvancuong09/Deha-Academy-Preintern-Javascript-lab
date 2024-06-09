let g = null;
let p = null; 
let s = null;
let timeout = null;
function start(){
    //bước 1 : lấy giá trị ban đầu
    if(g === null){
        g = parseInt(document.getElementById('gio').value);
        p = parseInt(document.getElementById('phut').value);
        s = parseInt(document.getElementById('giay').value);
    }
    // nếu số giây là -1 tức là đã chạ ngược hết số giây, lúc này:
    // giảm số phút xuống 1 đơn vị
    // thiết lập số giây lại 59
    if(s === -1)
        {
            p -= 1;
            s = 59;
        }
    if(p === -1){
        g -=1;
        p = 59
    }

    if(g == -1){
        clearTimeout(timeout);
        alert('Hết giờ !!!');
        return false;
    }

    // Hiển thị đồng hồ
    document.getElementById('g').innerText = g.toString();
    document.getElementById('p').innerText = p.toString();
    document.getElementById('s').innerText = s.toString();

    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);
}

function stop(){
    clearTimeout(timeout);
}
