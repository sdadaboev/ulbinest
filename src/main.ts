import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const PORT = 3019
  const app = await NestFactory.create(AppModule)
  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
  })
}

start()