# Review bài tập về nhà buổi 35 - Lớp FullStack K8

## [Phạm Trung Tuyển](https://github.com/trungtuyentm/JavaScript-F8/tree/main/DAY-35)

- [x] **Điểm mạnh:**
- Vẫn tiếp tục phát huy được những điểm mạnh.

- [x] **Điểm yếu:**

**Đánh giá chung** Bài làm tốt.

`Note: Bài làm của anh rất tốt! Tiếp tục phát huy nhé`.

## [Bùi Đức Dương](https://github.com/buiduong2/F8-Javascript/tree/master/lession34)

- [x] **Điểm mạnh:**
- Vẫn tiếp tục phát huy được những điểm mạnh.

- [x] **Điểm yếu:**

**Đánh giá chung** Bài làm tốt.

`Note: Bài làm của anh rất tốt! Tiếp tục phát huy nhé`.

## [Cù Tiến Thịnh](https://github.com/thinh060903/F8-Fullstack-K8/blob/main/Day-35)

- Khi `counter` chưa về `0` em có thể bật `devtools` xóa `disabled` của thẻ `button` từ đó có thể bấm `Get Link`.

```js
getLinkButton.addEventListener("click", function () {
  if (!getLinkButton.disabled) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});
```

- Trong trường hợp trên khi sửa `disabled` nhưng vẫn có thể `Get Link`, anh cần thêm điều kiện để ngăn chặn người dùng. Đề xuất sửa:

```js
getLinkButton.addEventListener("click", function () {
  if (!getLinkButton.disabled && counter === 0) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});
```

- Khai báo biến `isTabActive` nhưng đang không sử dụng.
- Yêu cầu bài tập không được dùng `setInterval`.

- [x] **Điểm mạnh:**

- [x] **Điểm yếu:**
- Chưa xử lý kỹ những trường hợp có thể xảy ra.
- Chưa làm đúng theo lưu ý của đề bài.

**Đánh giá chung** Bài làm khá tốt, cần lưu ý thêm các trường hợp có thể gây lỗi. Cần làm đúng theo lưu ý của đề bài đưa ra.

`Note: Anh sửa lại bài làm theo nhận xét rồi sau đó báo lại cho em để em kiểm tra lại nha.`

## [Vũ Thị Hoài Thu](https://github.com/hoaithu222/f8_offline_k8/tree/main/homework/Day-35)

- Thêm `requestAnimationFrame(updateCounter)` để đảm bảo bộ đếm luôn được cập nhật liên tục.

```js
if (document.hidden) {
  requestAnimationFrame(updateCounter);
  lastTime = timestamp;
  return;
}
```

- [x] **Điểm mạnh:**
- Vẫn phát huy được những điểm mạnh của buổi trước.

- [x] **Điểm yếu:**

**Đánh giá chung:**

- Bài làm tốt.

`Note: Chị sửa lại bài làm theo nhận xét rồi sau đó báo lại em nha.`

## [Vũ Trí Tùng](https://github.com/tungv62333/f8-offline-k8/blob/main/Javascript/Lesson-35)

- [x] **Điểm mạnh:**
- Vẫn phát huy được điểm mạnh của buổi học trước.

- [x] **Điểm yếu:**

**Đánh giá chung:**

- Bài làm tốt.

`Note: Bài làm của anh rất tốt, tiếp tục phát huy anh nhé.`
