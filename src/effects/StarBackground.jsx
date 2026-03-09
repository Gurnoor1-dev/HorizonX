import { useEffect } from "react"

export default function StarBackground() {

  useEffect(() => {
    const canvas = document.getElementById("stars")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let stars = []

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
      })
    }

    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height)

      ctx.fillStyle = "white"

      stars.forEach(s=>{
        ctx.beginPath()
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      id="stars"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
