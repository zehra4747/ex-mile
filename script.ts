document.getElementById('resumeform')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    const previewContent = document.getElementById('preview-content') as HTMLDivElement;
    const fileInput = document.getElementById('photo') as HTMLInputElement;
    const file = fileInput?.files?.[0]; // Get the uploaded file

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');

    const educationHTML = education.map(edu => `<li>${edu}</li>`).join('');
    const skillsHTML = skills.map(skill => `<li>${skill}</li>`).join('');

    const reader = new FileReader();

    reader.onload = function(event) {
        const profilePictureURL = event.target?.result as string; // Get the base64 URL of the uploaded image

        const resumeHTML = `
            <div class="resume-header">
                <div class="profile-picture" style="background-image: url(${profilePictureURL});"></div>
                <div class="name">${name}</div>
            </div>

            <div class="resume-body">
                <div class="vertical-line"></div>
                <div class="resume-content">
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <h4>Education</h4>
                    <ul>${educationHTML}</ul>
                    <h4>Experience</h4>
                    <p>${experience}</p>
                    <h4>Skills</h4>
                    <ul>${skillsHTML}</ul>
                </div>
            </div>
        `;

        previewContent.innerHTML = resumeHTML;
    };

    if (file) {
        reader.readAsDataURL(file); // Read the uploaded file as a base64 data URL
    } else {
        const resumeHTML = `
            <div class="resume-header">
                <div class="profile-picture"></div>
                <div class="name">${name}</div>
            </div>

            <div class="resume-body">
                <div class="vertical-line"></div>
                <div class="resume-content">
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <h4>Education</h4>
                    <ul>${educationHTML}</ul>
                    <h4>Experience</h4>
                    <p>${experience}</p>
                    <h4>Skills</h4>
                    <ul>${skillsHTML}</ul>
                </div>
            </div>
        `;

        previewContent.innerHTML = resumeHTML;
    }
});
