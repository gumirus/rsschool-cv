document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});