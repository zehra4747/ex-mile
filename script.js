var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var previewContent = document.getElementById('preview-content');
    var fileInput = document.getElementById('photo');
    var file = (_a = fileInput === null || fileInput === void 0 ? void 0 : fileInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the uploaded file
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split('\n');
    var educationHTML = education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join('');
    var skillsHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var profilePictureURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result; // Get the base64 URL of the uploaded image
        var resumeHTML = "\n            <div class=\"resume-header\">\n                <div class=\"profile-picture\" style=\"background-image: url(".concat(profilePictureURL, ");\"></div>\n                <div class=\"name\">").concat(name, "</div>\n            </div>\n\n            <div class=\"resume-body\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"resume-content\">\n                    <p><strong>Email:</strong> ").concat(email, "</p>\n                    <p><strong>Phone:</strong> ").concat(phone, "</p>\n                    <h4>Education</h4>\n                    <ul>").concat(educationHTML, "</ul>\n                    <h4>Experience</h4>\n                    <p>").concat(experience, "</p>\n                    <h4>Skills</h4>\n                    <ul>").concat(skillsHTML, "</ul>\n                </div>\n            </div>\n        ");
        previewContent.innerHTML = resumeHTML;
    };
    if (file) {
        reader.readAsDataURL(file); // Read the uploaded file as a base64 data URL
    }
    else {
        var resumeHTML = "\n            <div class=\"resume-header\">\n                <div class=\"profile-picture\"></div>\n                <div class=\"name\">".concat(name, "</div>\n            </div>\n\n            <div class=\"resume-body\">\n                <div class=\"vertical-line\"></div>\n                <div class=\"resume-content\">\n                    <p><strong>Email:</strong> ").concat(email, "</p>\n                    <p><strong>Phone:</strong> ").concat(phone, "</p>\n                    <h4>Education</h4>\n                    <ul>").concat(educationHTML, "</ul>\n                    <h4>Experience</h4>\n                    <p>").concat(experience, "</p>\n                    <h4>Skills</h4>\n                    <ul>").concat(skillsHTML, "</ul>\n                </div>\n            </div>\n        ");
        previewContent.innerHTML = resumeHTML;
    }
});
