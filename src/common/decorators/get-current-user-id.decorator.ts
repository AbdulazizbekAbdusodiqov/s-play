import {
    createParamDecorator,
    ExecutionContext,
    ForbiddenException,
} from "@nestjs/common";
import { JwtPayload } from "../types";

export const GetCurrentId = createParamDecorator(
    (_: undefined, context: ExecutionContext): number => {
        const request = context.switchToHttp().getRequest();
        const user = request.user as JwtPayload;

        console.log("user: ", user);
        if (!user) {
            throw new ForbiddenException("Token noto'g'ri");
        }
        return user.id;
    }
);
