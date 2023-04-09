let leftContent = document.querySelectorAll('.content');

const observer = new IntersectionObserver(
    (entries) => {
      // console.log(entries);
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting === true) {
        entry.target.classList.remove("left-page");
        }
    });
    },
    {
    threshold: 0.1,
    }
);
  // console.log(observer);
leftContent.forEach((content) => {
    observer.observe(content);
});
