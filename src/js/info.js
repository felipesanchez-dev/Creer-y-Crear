let index = 0
let interval = 1000

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

const animate = (star: HTMLElement) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`)
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`)

  star.style.animation = "none"
}

for (const star of document.getElementsByClassName(
  "magic-star"
) as HTMLCollectionOf<HTMLElement>) {
  setTimeout(
    () => {
      animate(star)

      setInterval(() => animate(star), interval)
    },
    index++ * (interval / 3)
  )
}
