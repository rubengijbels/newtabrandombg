const path = require("path")
const fs = require("fs")

const Koa = require("koa")
const cors = require("@koa/cors")
const serve = require("koa-static")
const mount = require("koa-mount")
const Router = require("@koa/router")


const app = new Koa()
const router = new Router()

const wallpapersPath = "/Users/rubengijbels/Pictures/wallpapers"
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

router.get("/api", (ctx, next) => {
  const wallpapers = fs.readdirSync(wallpapersPath)
  const randomIndex = randomInt(0, wallpapers.length - 1)
  ctx.body = JSON.stringify(path.basename(wallpapers[randomIndex]))
});

app
  .use(cors())
  .use(router.routes())
  .use(mount("/img", serve(wallpapersPath)))

app.listen(3099)