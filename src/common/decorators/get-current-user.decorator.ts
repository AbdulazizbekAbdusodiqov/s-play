import { createParamDecorator, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { JwtPayload, JwtPayloadWithRefreshToken } from "../types";

export const GetCurrnetUser = createParamDecorator(
    (data: keyof JwtPayloadWithRefreshToken, context: ExecutionContext)=>{
        const request = context.switchToHttp().getRequest();
        const user = request.user as JwtPayload

        if(!user){
            throw new ForbiddenException("Token noto'g'ri");
        }
        if(!data){
            return user
        }

        return user[data]
    }
) 