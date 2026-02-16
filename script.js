document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {

      tabs.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      this.classList.add("active");

      const target = this.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });

});