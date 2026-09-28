# 🌱 MYSEED

> Ý tưởng không chết — chỉ chờ được kết nối.

Bản **mockup website tĩnh** của MYSEED.

Case thí điểm xuyên suốt: **Hạt giống 001 — Sâm và dược liệu bản địa, Đắk Nông** (Công ty TNHH MTV đầu tư phát triển Đại Thành).

## Các trang (theo sitemap)

| Tệp | Nhánh sitemap | Nội dung |
| --- | --- | --- |
| `index.html` | Trang chủ | Banner + Hạt giống 001; bối cảnh và vấn đề; 5 bước Gửi · Tìm thấy · Ươm · Nảy mầm · Bén rễ; hạt giống nổi bật; đối tác; nút “Gửi hạt giống của bạn” |
| `gioi-thieu.html` | Giới thiệu | Về chúng tôi và đội ngũ, Tầm nhìn – Sứ mệnh, 8 bước vận hành, hệ sinh thái 7 nhóm, 6 điểm khác biệt, SDGs |
| `vuon-uom.html` | Vườn Ươm ★ | 3 trạng thái (Bỏ Quên / Đang Ươm / Phát Triển Thành Cây), lọc 5 lĩnh vực và 3 khu vực, tìm kiếm |
| `du-an.html` | Chi tiết dự án | Hồ sơ hạt giống (`du-an.html#hat-giong-001`) + modal đầu tư: xác nhận tư cách → chuyên môn → mời người tham gia → tạo nhóm chat |
| `gui-hat-giong.html` | Gửi hạt giống | Tên ý tưởng, mô tả, lý do bỏ dở, giá trị bản địa sẵn có, thông tin liên hệ |
| `tin-tuc.html` | Tin tức / Cẩm nang | Case study Hạt giống 001, tin tức nội bộ, sự kiện, cẩm nang |
| `lien-he.html` | Liên hệ | Hotline, hỗ trợ trực tuyến, mạng xã hội |

`logo.png`, `favicon.png` là logo; `style.css` là giao diện chung, `script.js` chứa dữ liệu Vườn Ươm (mảng `SEEDS`) và tương tác. Không cần cài đặt hay build.

## Đưa lên GitHub Pages

1. Tải **tất cả** tệp trong thư mục này lên nhánh `main` của repo (Add file → Upload files). Tệp trùng tên sẽ được thay thế.
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. Website: `https://<tên-tài-khoản>.github.io/<tên-repo>/`

## Cần cập nhật

- Hotline, email, mạng xã hội trong `lien-he.html` (hiện đang để trống).
- Thêm hạt giống mới: thêm một mục vào mảng `SEEDS` trong `script.js`.

## Lưu ý

Đây là bản mockup: các biểu mẫu và modal chỉ mô phỏng, chưa gửi hay lưu dữ liệu.
