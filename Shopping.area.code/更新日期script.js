// 獲取日期和時間
function getCurrentDateTime() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);

    var dateTimeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return dateTimeString;
}

// 更新日期
function updateDate() {
    var dateElement = document.getElementById('update-date');
    dateElement.textContent = '更新日期：' + getCurrentDateTime();
}

// 調用更新日期和瀏覽人次的函數
updateDate();
