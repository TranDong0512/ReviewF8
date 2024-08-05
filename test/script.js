document.addEventListener("DOMContentLoaded", function () {
  const microphoneIcon = document.querySelector("#fa-microphone");
  const searchInput = document.querySelector('input[type="text"]');
  const listeningIndicator = document.querySelector(".inner-content");
  const listeningText = document.querySelector(".inner-content h2");
  const microIcon = document.querySelector(".inner-content .micro");
  const errorMessage = document.querySelector("#error-message");
  let handled = false;

  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "vi-VN";
    recognition.maxAlternatives = 1;

    microphoneIcon.addEventListener("click", function () {
      recognition.start();
    });
    recognition.onstart = function () {
      listeningIndicator.classList.add("active");
      listeningText.textContent = "Đang nghe...";
      microIcon.classList.add("listening");
    };
    recognition.onresult = function (event) {
      let interimTranscript = "";
      let finalTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      listeningText.textContent = interimTranscript || finalTranscript;
      searchInput.value = interimTranscript || finalTranscript;
      if (finalTranscript) {
        const handled = handleCommand(finalTranscript.trim().toLowerCase());
        if (!handled) {
          errorMessage.textContent = "Không thực hiện được yêu cầu";
        } else {
          errorMessage.textContent = "";
        }
      }
    };

    recognition.onerror = function (event) {
      console.error("Recognition error: ", event.error);
      listeningIndicator.classList.remove("active");
      microIcon.classList.remove("listening");
      errorMessage.textContent = `Lỗi nhận diện: ${event.error}`;
    };

    recognition.onend = function () {
      listeningIndicator.classList.remove("active");
      microIcon.classList.remove("listening");
    };
  } else {
    console.warn("Speech recognition not supported");
    microphoneIcon.style.display = "none";
  }

  // function handleCommand(command) {
  //   let handled = false;
  //   console.log(command)
  //   if (command.includes("google drive")) {
  //     window.open("https://drive.google.com", "_blank");
  //     handled = true;
  //   } else if (command.includes("facebook")) {
  //     window.open("https://www.facebook.com", "_blank");
  //     handled = true;
  //   } else if (command.includes("youtube")) {
  //     if (command.includes("video") || command.includes("xem")) {
  //       const query = command.replace("video", "").replace("xem", "").trim();
  //       window.open(
  //         `https://www.youtube.com/results?search_query=${encodeURIComponent(
  //           query
  //         )}`,
  //         "_blank"
  //       );
  //     } else {
  //       window.open("https://www.youtube.com", "_blank");
  //     }
  //     handled = true;
  //   } else if (command.includes("google drive")) {
  //     // window.open("https://drive.google.com", "_blank");
  //     window.open("https://www.google.com", "_blank");
  //     handled = true;
  //   } else if (command.includes("google maps") || command.includes("bản đồ")) {
  //     const query = command
  //       .replace("google maps", "")
  //       .replace("bản đồ", "")
  //       .trim();
  //     if (query) {
  //       window.open(
  //         `https://www.google.com/maps/search/${encodeURIComponent(query)}`,
  //         "_blank"
  //       );
  //     } else {
  //       window.open("https://www.google.com/maps", "_blank");
  //     }
  //     handled = true;
  //   } else if (
  //     command.includes("chỉ đường") ||
  //     command.includes("tới") ||
  //     command.includes("đường tới")
  //   ) {
  //     const query = command
  //       .replace("chỉ đường", "")
  //       .replace("tới", "")
  //       .replace("đường tới", "")
  //       .trim();
  //     window.open(
  //       `https://www.google.com/maps/dir//${encodeURIComponent(query)}`,
  //       "_blank"
  //     );
  //     handled = true;
  //   } else if (
  //     command.includes("bài hát") ||
  //     command.includes("mở bài hát") ||
  //     command.includes("nghe bài hát")
  //   ) {
  //     const query = command
  //       .replace("bài hát", "")
  //       .replace("mở bài hát", "")
  //       .replace("nghe bài hát", "")
  //       .trim();
  //     window.open(
  //       `https://zingmp3.vn/tim-kiem/bai-hat?q=${encodeURIComponent(query)}`,
  //       "_blank"
  //     );
  //     handled = true;
  //   } else if (
  //     command.includes("video") ||
  //     command.includes("mở video") ||
  //     command.includes("xem video")
  //   ) {
  //     const query = command
  //       .replace("video", "")
  //       .replace("mở video", "")
  //       .replace("xem video", "")
  //       .trim();
  //     window.open(
  //       `https://www.youtube.com/results?search_query=${encodeURIComponent(
  //         query
  //       )}`,
  //       "_blank"
  //     );
  //     handled = true;
  //   }

  //   return handled;
  // }

  function handleCommand(command) {
    const commands = [
      { keyword: "google", url: "https://www.google.com" },
      { keyword: "facebook", url: "https://www.facebook.com" },
      { keyword: "youtube", url: "https://www.youtube.com" },
      { keyword: "google drive", url: "https://drive.google.com" },
      { keyword: "google maps", url: "https://www.google.com/maps" },
    ];

    for (const { keyword, url } of commands) {
      if (command.includes(keyword)) {
        if (keyword === "youtube" && (command.includes("video") || command.includes("xem"))) {
          const query = command.replace("video", "").replace("xem", "").replace(keyword, "").trim();
          window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank");
        } else if (keyword === "google maps" || command.includes("bản đồ")) {
          const query = command.replace("google maps", "").replace("bản đồ", "").trim();
          const finalUrl = query ? `${url}/search/${encodeURIComponent(query)}` : url;
          window.open(finalUrl, "_blank");
        } else {
          window.open(url, "_blank");
        }
        return true;
      }
    }

    if (command.includes("chỉ đường") || command.includes("tới") || command.includes("đường tới")) {
      const query = command.replace("chỉ đường", "").replace("tới", "").replace("đường tới", "").trim();
      window.open(`https://www.google.com/maps/dir//${encodeURIComponent(query)}`, "_blank");
      return true;
    }

    if (command.includes("bài hát") || command.includes("mở bài hát") || command.includes("nghe bài hát")) {
      const query = command.replace("bài hát", "").replace("mở bài hát", "").replace("nghe bài hát", "").trim();
      window.open(`https://zingmp3.vn/tim-kiem/bai-hat?q=${encodeURIComponent(query)}`, "_blank");
      return true;
    }

    if (command.includes("video") || command.includes("mở video") || command.includes("xem video")) {
      const query = command.replace("video", "").replace("mở video", "").replace("xem video", "").trim();
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank");
      return true;
    }

    return false;
  }
});
