const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item != question) {
        item.classList.remove("show-question");
      }
      question.classList.toggle("show-question");
    });
  });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     let styles = btn.parentElement.parentElement;

//     styles.classList.toggle("show-question");
//   });
// });
