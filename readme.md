# Crawling kết quả RACING F1 của RACE RESULTS (formula1.com)

_trước tiên muốn crawl được HTML từ trang formula1.com thì phải tạo 1 proxy ở NodeJs, nếu gửi request ở Front-end sẽ bị lỗi CORS_

# Tạo Proxy để có thể lấy được mã HTML của trang web

Dùng axios để gửi phương thức GET, và nhận lại response.data là đoạn HTML của trang web
_Chạy lệnh:_ node index.js để tiến hành khởi động Proxy Backend

# Xây dựng giao diện và cách lấy, bốc tách data

- Sau khi tạo Proxy ở Nodejs và tiến hành chạy, thì sẽ dùng axios để gửi request đến Backend để nhận lại HTML
- Bốc tách và lấy dữ liệu từ data nhận lại là HTML
  _Phân tích HTML_
- Sau khi phân tích thì thấy:
  Data ở bảng dữ liệu có DOM là: .inner-wrap.ResultArchiveWrapper table.resultsarchive-table tr. Data tiêu đề kiểu(bộ lọc): .resultsarchive-filter-container .resultsarchive-filter-wrap
- Sau khi lấy được DOM của 2 phần trên, tiến hành lặp qua và lấy các giá trị ở trong, sau đó hiển thị ra ngoài.

_Chạy lệnh:_ npm start để tiến hành khởi động website

# CÁCH TRIỂN KHAI WEBSITE
- sau khi tiến hành clone về thì bật terninal lên chạy lệnh npm install ở 2 forder để tiến hành cài các package liên quan
- Ở Proxy Backend (Thư mục proxy_be) mở terninal và chạy lệnh: _node index.js_ để khởi động Proxy backend
- Ở giao diện website (Thư mục crawling_f1) mở terninal và chạy lệnh _npm start_ để khởi động website => Xem thành quả
