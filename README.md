# 🌱 MYSEED · Hạt Giống Bỏ Quên

> “Chúng tôi không bắt đầu bằng một dự án. Chúng tôi bắt đầu bằng một ý tưởng mà một người trẻ từng bỏ cuộc.”

Website giới thiệu dự án **MYSEED – Hạt Giống Bỏ Quên**: nền tảng trung gian đánh thức những ý tưởng vì quê hương mà sinh viên từng bỏ dở, ghép chúng với người có kỹ năng phù hợp để hiện thực hóa thành mô hình sinh kế thật tại địa phương, rồi trao lại quyền vận hành cho người khởi nguồn và cộng đồng.

## Nội dung website

| Mục | Nội dung |
| --- | --- |
| Vấn đề | Số liệu NEET, thu nhập, di cư nông thôn – thành thị; case giá cam sành Vĩnh Long |
| Cơ chế | Vòng đời 5 bước: Gửi → Tìm thấy → Ươm → Nảy mầm → Bén rễ; bảng so sánh cách tiếp cận |
| Vườn ươm | Mô phỏng website trung gian: hạt giống cam sành (mục 5.1) + biểu mẫu gửi hạt giống mới |
| Case cam sành | Thí điểm 500kg, biểu đồ trước/sau, **máy tính thu nhập nông dân**, bảng chi phí pilot |
| SDGs | 4 mục tiêu trọng tâm (1, 8, 9, 12) + lưới 17 SDGs có thể bấm xem ghi chú |
| Lộ trình | 3 giai đoạn, đối tác, quản trị rủi ro, đo lường tác động |
| Vai trò đội | Đội là “người đánh thức” (mục 12) + kết luận |

## Cấu trúc thư mục

```
├── index.html          # Toàn bộ nội dung trang
├── assets/
│   ├── style.css       # Giao diện (tự động hỗ trợ chế độ tối)
│   └── script.js       # Vườn ươm, máy tính thu nhập, lưới SDGs
├── .nojekyll           # Để GitHub Pages phục vụ file tĩnh nguyên bản
└── README.md
```

Không cần cài đặt hay build — chỉ là HTML/CSS/JS thuần.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub (ví dụ `myseed`), để **Public**.
2. Tải toàn bộ file trong thư mục này lên repo (nút **Add file → Upload files**, hoặc dùng git):
   ```bash
   git init
   git add .
   git commit -m "MYSEED website"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản>/myseed.git
   git push -u origin main
   ```
3. Vào **Settings → Pages**, mục *Build and deployment* chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)` → **Save**.
4. Sau 1–2 phút, website sẽ có tại `https://<tên-tài-khoản>.github.io/myseed/`.

## Tùy chỉnh nhanh

- **Hạt giống:** thêm ý tưởng thật vào mảng `SAMPLE_SEEDS` trong `assets/script.js`.
- **Màu sắc:** chỉnh các biến trong `:root` ở đầu `assets/style.css`.

## Lưu ý về “Vườn ươm”

Phần vườn ươm là bản mô phỏng chạy hoàn toàn trên trình duyệt: hạt giống người dùng gửi chỉ lưu trong `localStorage` của máy đó, không chia sẻ với người khác. Để trở thành nền tảng thật, bước tiếp theo có thể là kết nối biểu mẫu với Google Forms/Sheets, Firebase hoặc Supabase.

## Nguồn số liệu

Theo bản đề xuất dự án: GSO (quý I, II/2025), Khảo sát di cư quốc gia, HCMCOUJS (2025, 606 sinh viên), Sở NN&PTNT Vĩnh Long.
