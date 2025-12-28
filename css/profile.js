// Save Profile
document.getElementById("saveBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("proName").value.trim();
  const role = document.getElementById("proRole").value.trim();
  const skills = document.getElementById("proSkills").value.trim();
  const exp = document.getElementById("proExp").value.trim();

  if (!name || !role || !skills || !exp) {
    alert("Please fill all fields!");
    return;
  }

  alert("Profile Saved Successfully!");
});

// Upload Profile Photo
document.getElementById("uploadPhoto").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById("profileImage").src = reader.result;
  };
  reader.readAsDataURL(file);
});

