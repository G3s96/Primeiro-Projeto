const triggers = document.querySelectorAll(".main .trigger")

triggers.forEach((trigger) => {
  trigger.addEventListener("click", (element) => {
    const div = trigger.nextElementSibling

    const isOpen = div.classList.contains("open")

    if (isOpen) {
      div.classList.remove("open")
    } else {
      div.classList.add("open")
    }
  })
})




