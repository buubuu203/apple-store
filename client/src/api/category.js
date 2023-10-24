// Tạo một request để lấy dữ liệu từ API
fetch('http://127.0.0.1:8000/api/category')
  .then(response => {
    // Kiểm tra trạng thái của response (200 là thành công)
    if (response.status === 200) {
      return response.json(); // Trả về dữ liệu dưới dạng JSON
    } else {
      throw new Error('Lỗi khi gọi API');
    }
  })
  .then(data => {
    // Dữ liệu từ API đã được trả về
    console.log(data);
    // Xử lý dữ liệu ở đây
  })
  .catch(error => {
    console.error(error);
  });
