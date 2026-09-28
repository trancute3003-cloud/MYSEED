# 🌱 MYSEED

> Ý tưởng không chết — chỉ chờ được kết nối.

Bản **mockup website tĩnh** của MYSEED, dựng theo sơ đồ trang (mục 9.1) của proposal chính thức (09/2026), chương trình “Sinh viên thế hệ mới” – chủ đề “Quê mình có việc, Gen ‘Ziệt’ có cách”.

Case thí điểm xuyên suốt: **Hạt giống 001 — Sâm và dược liệu bản địa, Đắk Nông** (Công ty TNHH MTV đầu tư phát triển Đại Thành).

## Các trang (theo sitemap)

| Tệp | Nhánh sitemap | Nội dung |
| --- | --- | --- |
| `index.html` | Trang chủ | 7 dải: banner + câu chuyện Hạt giống 001; giới thiệu kèm số liệu; cơ chế 5 bước Gửi · Tìm thấy · Ươm · Nảy mầm · Bén rễ; hạt giống nổi bật; lưới dự án mới nhất; đối tác; chân trang + nút “Gửi hạt giống của bạn” |
| `gioi-thieu.html` | Giới thiệu | Về chúng tôi (đội thực hiện), Tầm nhìn – Sứ mệnh, Cơ chế vận hành chi tiết, Liên kết SDGs (1, 8, 9, 12, 15) |
| `vuon-uom.html` | Vườn Ươm ★ | 3 trạng thái (Bỏ Quên / Đang Ươm / Phát Triển Thành Cây), lọc 5 lĩnh vực và 3 khu vực, tìm kiếm |
| `du-an.html` | Chi tiết dự án | Hồ sơ hạt giống (`du-an.html#hat-giong-001`) + modal đầu tư: xác nhận tư cách → chuyên môn → mời người tham gia → tạo nhóm chat |
| `gui-hat-giong.html` | Gửi hạt giống | Tên ý tưởng, mô tả, lý do bỏ dở, giá trị bản địa sẵn có, thông tin liên hệ |
| `tin-tuc.html` | Tin tức / Cẩm nang | Case study Hạt giống 001, tin tức nội bộ, sự kiện, cẩm nang |
| `lien-he.html` | Liên hệ | Hotline, hỗ trợ trực tuyến, mạng xã hội |

`style.css` là giao diện chung, `script.js` chứa dữ liệu Vườn Ươm (mảng `SEEDS`) và tương tác. Không cần cài đặt hay build.

## Đưa lên GitHub Pages

1. Tải **tất cả** tệp trong thư mục này lên nhánh `main` của repo (Add file → Upload files). Tệp trùng tên sẽ được thay thế.
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Website: `https://<tên-tài-khoản>.github.io/<tên-repo>/`

## Cần cập nhật

- Hotline, email, mạng xã hội trong `lien-he.html` (proposal đang để trống).
- Thêm hạt giống mới: thêm một mục vào mảng `SEEDS` trong `script.js`.

## Lưu ý

Đây là bản mockup: các biểu mẫu và modal chỉ mô phỏng, chưa gửi hay lưu dữ liệu. Số liệu lấy từ proposal chính thức MYSEED (09/2026) và các nguồn được trích dẫn trong đó.
