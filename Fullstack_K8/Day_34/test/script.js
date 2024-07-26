class AppEditor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.htmlEdit(); // HTML
        this.css(); // CSS
        this.countText(); // Đếm ký tự và từ
        this.addFormat();
        this.addEventColor();
    }

    addEventColor() {
        const colorInput = this.shadowRoot.querySelector(".color-text");
        colorInput.addEventListener("input", () => {
            const color = colorInput.value;
            this.applyColor(color);
        });
    }

    applyColor(color) {
        const editorEl = this.shadowRoot.querySelector(".editor");
        const selectedText = window.getSelection().toString();

        if (selectedText) {
            document.execCommand("foreColor", false, color);
        } else {
            console.log("Không có ký tự bôi đen");
        }
    }

    addFormat() {
        const boldButton = this.shadowRoot.querySelector(".bold");
        boldButton.addEventListener("click", () => this.applyStyle("bold"));

        const italicButton = this.shadowRoot.querySelector(".italic");
        italicButton.addEventListener("click", () => this.applyStyle("italic"));

        const underlineButton = this.shadowRoot.querySelector(".underlined");
        underlineButton.addEventListener("click", () =>
            this.applyStyle("underline")
        );
    }

    applyStyle(style) {
        document.execCommand(style, false, null);
    }

    countText() {
        const editorEl = this.shadowRoot.querySelector(".editor");
        const countTextEl = this.shadowRoot.querySelector(".count-text");
        const countFromEl = this.shadowRoot.querySelector(".count-from");

        if (editorEl && countTextEl && countFromEl) {
            editorEl.addEventListener("input", () => {
                // const text = editorEl.textContent;
                // const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
                // const charCount = text.length;

                // countTextEl.textContent = charCount;
                // countFromEl.textContent = wordCount;
                const text = editorEl.innerText; // Use innerText instead of textContent to get a better representation of the visible text
                const charCount = text.replace(/\s/g, '').length; // Exclude whitespace characters from character count

                const wordCount = text.trim().split(/\s+/).filter(Boolean).length; // Split by any whitespace, including newlines
                countTextEl.textContent = charCount;
                countFromEl.textContent = wordCount;
            });
        } else {
            console.error("Không tìm thấy các phần tử cần thiết");
        }
    }

    htmlEdit() {
        this.shadowRoot.innerHTML = `
        <div class="container">
          <h1 class="title">Doc Editor</h1>
          <div class="line"></div>
          <div class="controls">
            <div class="control-main">
              <select name="" id="list">
                <option value="File">File</option>
                <option value="CREART">NEW</option>
                <option value="PDF">SAVE AS PDF</option>
                <option value="TXT">SAVE AS TXT</option>
              </select>
              <input type="text" value="untitled">
            </div>
            <div class="control-btn-container">
              <button class="bold"><b>b</b></button>
              <button class="underlined"><u>u</u></button>
              <button class="italic"><i>i</i></button>
              <input type="color" class="color-text">
            </div>
          </div>
          <div contenteditable="true" class="editor"></div>
          <div class="count">
            <p>
              số chữ :
              <span class="count-text">0</span>
            </p>
            <p>
              số từ :
              <span class="count-from">0</span>
            </p>
          </div>
        </div>`;
    }

    css() {
        const style = document.createElement("style");
        style.innerText = `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
  
        .container {
          width: 70%;
          margin: 0 auto;
        }
  
        .title {
          font-size: 2rem;
          margin-top: 2rem;
        }
  
        .line {
          border-bottom: 2px solid black;
          margin-block: 1rem;
        }
  
        .controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
  
        .control-main #list {
          background-color: blue;
          color: white;
          padding-block: 0.5rem;
          font-size: 1.3rem;
        }
  
        .control-main input[value="untitled"] {
          padding: 0.7rem;
          font-size: 1.1rem;
          margin-inline: 1rem;
        }
  
        .control-btn-container {
          display: flex;
          align-items: center;
        }
  
        .control-btn-container button {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
          background-color: black;
          color: white;
          border-radius: 0.5rem;
          border: none;
          margin-inline: 0.2rem;
        }
  
        .control-btn-container .color-text {
          height: 2.5rem;
          margin-inline: 0.3rem;
        }
  
        .editor {
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
          margin: 30px 0;
          min-height: 300px;
          outline: none;
          padding: 20px;
        }
  
        .count {
          display: flex;
          flex-wrap: nowrap;
          justify-content: end;
        }
  
        .count p {
          display: flex;
          font-size: 1.3rem;
          margin: 2px;
          padding-inline: 1rem;
        }
  
        .count p span {
          padding-left: 0.5rem;
        }`;
        this.shadowRoot.append(style);
    }
}

customElements.define("app-editor", AppEditor);