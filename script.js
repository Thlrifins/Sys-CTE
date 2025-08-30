// ระบบ Login Demo
function loginUser(event) {
  event.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  if (email && pass) {
    alert("เข้าสู่ระบบสำเร็จ (Demo) 🎉");
    window.location.href = "index.html";
  } else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }
}

function registerUser(event) {
  event.preventDefault();
  let username = document.getElementById("regUsername").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPassword").value;

  if (username && email && pass) {
    alert("สมัครสมาชิกสำเร็จ (Demo) 🎉");
    window.location.href = "login.html";
  } else {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  }
}

// ระบบอัปโหลด PDF เก็บใน LocalStorage
function uploadPDF() {
  let fileInput = document.getElementById("pdfUpload");
  let file = fileInput.files[0];

  if (file && file.type === "application/pdf") {
    let reader = new FileReader();
    reader.onload = function(e) {
      let pdfData = e.target.result;
      localStorage.setItem(file.name, pdfData);
      showPDFList();
      alert("อัปโหลด PDF สำเร็จ 🎉");
    };
    reader.readAsDataURL(file);
  } else {
    alert("กรุณาเลือกไฟล์ PDF เท่านั้น");
  }
}

function showPDFList() {
  let pdfList = document.getElementById("pdfList");
  pdfList.innerHTML = "<h4>📑 รายการ PDF</h4>";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.endsWith(".pdf")) {
      let link = document.createElement("a");
      link.href = "#";
      link.textContent = key;
      link.onclick = function() {
        let pdfData = localStorage.getItem(key);
        document.getElementById("pdfViewer").src = pdfData;
        document.getElementById("pdfViewer").style.display = "block";
      };

      let downloadBtn = document.createElement("a");
      downloadBtn.href = localStorage.getItem(key);
      downloadBtn.download = key;
      downloadBtn.textContent = " ⬇️ ดาวน์โหลด";
      downloadBtn.style.marginLeft = "10px";

      let div = document.createElement("div");
      div.appendChild(link);
      div.appendChild(downloadBtn);

      pdfList.appendChild(div);
    }
  }
}

// โหลดรายการ PDF ตอนเปิดเว็บ
window.onload = function() {
  if (document.getElementById("pdfList")) {
    showPDFList();
  }
};
