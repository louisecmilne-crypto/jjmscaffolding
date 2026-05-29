const photoInput = document.getElementById("photos");
const fileName = document.getElementById("file-name");

if (photoInput) {
    photoInput.addEventListener("change", () => {

        if (photoInput.files.length === 0) {
            fileName.textContent = "No files selected";
        }

        else if (photoInput.files.length === 1) {
            fileName.textContent =
                photoInput.files[0].name;
        }

        else {
            fileName.textContent =
                `${photoInput.files.length} photos selected`;
        }

    });
}