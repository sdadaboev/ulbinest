import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
    async use (req: Request, res: Response, next: NextFunction) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('first middleware works')
                resolve("");
            }, 3000);
        });
        next();
    } 
}
