import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import sequelize from "sequelize"




async function start() {
    const PORT = process.env.PORT || 3019
    const app = await NestFactory.create(AppModule)
    app.listen(PORT, () => {
        console.log(`server is started on port ${PORT}`
        )
    })

    const swaggerConfig = new DocumentBuilder()
        .setTitle(('ULBINEST'))
        .setDescription('sololearn')
        .setVersion('1.0.0')
        .addTag('Ulbi')
        .build()
    
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('/api/docs', app, swaggerDocument)
    
   

}




start()