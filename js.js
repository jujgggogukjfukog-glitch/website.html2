document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navigationbar ul a");
  const sections = document.querySelectorAll("section[id]");

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");

      if (!id || id === "#") return;

      const target = document.querySelector(id);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));

  const year = document.querySelector("#footer p");

  if (year) {
    year.textContent = `© ${new Date().getFullYear()} Website`;
  }
});