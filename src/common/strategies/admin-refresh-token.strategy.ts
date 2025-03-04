import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { JwtFromRequestFunction, Strategy } from "passport-jwt";
import { AdminJwtPayloadWithRefreshToken, JwtAdminPayload } from "../types";
import { ForbiddenException, Injectable } from "@nestjs/common";

export const AdminCookieExtractor: JwtFromRequestFunction = (req: Request) => {
    if (req && req.cookies) {
        return req.cookies["refresh_token"];
    }
    return null;
};

@Injectable()
export class AdminRefreshTokenCookieStrategy extends PassportStrategy(
    Strategy,
    "refresh-jwt"
) {
    constructor() {
        super({
            jwtFromRequest: AdminCookieExtractor,
            secretOrKey: process.env.REFRESH_TOKEN_KEY!,
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: JwtAdminPayload): AdminJwtPayloadWithRefreshToken {
        const refreshToken = req.cookies.refresh_token;
        
        if (!refreshToken) {
            throw new ForbiddenException("Refresh token noto'g'ri");
        }
        if(payload.role != "admin"){
            throw new ForbiddenException("Sizga ruxsat yo'q");
        }
        return { ...payload, refreshToken };
    }
}
