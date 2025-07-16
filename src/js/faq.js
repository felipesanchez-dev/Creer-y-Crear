document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")

    if (button && answer) {
      button.addEventListener("click", () => {
        const wasActive = item.classList.contains("active")

        if (!wasActive) {
          item.classList.add("active")
          ;(answer as HTMLElement).style.maxHeight = (answer as HTMLElement).scrollHeight + "px"
        } else {
          item.classList.remove("active")
          ;(answer as HTMLElement).style.maxHeight = "0px"
        }
      })
      ;(answer as HTMLElement).style.maxHeight = "0px"
      item.classList.remove("active")
    }
  })
})
