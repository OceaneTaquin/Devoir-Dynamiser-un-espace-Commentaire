document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var message = document.getElementById("message");

    if (!firstName.value || !lastName.value || !message.value) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    var commentList = document.getElementById("comment-list");
    var newComment = document.createElement("div");
    newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName.value} ${lastName.value}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message.value}</p>
          </div>
        </div>
      `;
    commentList.appendChild(newComment);

    firstName.value = "";
    lastName.value = "";
    message.value = "";
  });
});
