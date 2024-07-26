# Review bài tập về nhà buổi 34 - Lớp FullStack K8

## [Minh Thuân](https://github.com/minhthuan1809/F8-Fullstack/tree/main/day-34)

- Xử lý cập nhật số từ chưa chính xác khi người dùng nhập ký tự tại các dòng mới thì số từ chưa được tăng lên. Nên sử dụng `innerText` thay vì `textContent` do `innerText` cung cấp cách trình bày tốt hơn và nó bao gồm cả việc xử lý các ký tự xuống dòng mới.
  Đề xuất sửa:

```js
// countText()
editorEl.addEventListener("input", () => {
  const text = editorEl.innerText; // sử dụng innerText thay cho textContent
  const charCount = text.replace(/\s/g, "").length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  countTextEl.textContent = charCount;
  countFromEl.textContent = wordCount;
});
```

- Chưa xử lý case tạo file mới khi bấm vào `New`.
- Chưa xử lý case tạo lưu file dưới dạng TXT hoặc PDF

**Điểm mạnh**

- Mã có nhiều hàm riêng biệt xử lý từng chức năng cụ thể như `addEventColor()`, ` addFormat()`, `countText()`
- Tìm hiểu và sử dụng tối `Blob`.

**Điểm yếu**

- Chưa thực hiện đầy đủ yêu cầu của bài tập.
- Mặc dù có một số comment, chúng chỉ có ở một vài vị trí và không giải thích chi tiết các chức năng phức tạp hơn. Các hàm như `addFormat()` và `countText()` sẽ cần thêm comment để giải thích logic bên trong.

**Đánh giá chung:** Bài làm chưa tốt, cần chú ý thực hiện đúng yêu cầu bài tập. Việc viết toàn bộ mã HTML và CSS trong một file có thể gây khó khăn cho việc bảo trì và quản lý mã. Nên tách riêng HTML và CSS thành các file riêng biệt. Điều này giúp mã dễ đọc hơn, dễ bảo trì hơn.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`
