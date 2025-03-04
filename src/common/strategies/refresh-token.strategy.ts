import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, JwtFromRequestFunction, Strategy } from "passport-jwt";
import { JwtPayload, JwtPayloadWithRefreshToken } from "../types";
import { ForbiddenException, Injectable } from "@nestjs/common";

export const cookieExtractor: JwtFromRequestFunction = (req: Request) => {
    if (req && req.cookies) {
        return req.cookies["refresh_token"];
    }
    return null;
};

@Injectable()
export class RefreshTokenCookieStrategy extends PassportStrategy(
    Strategy,
    "refresh-jwt"
) {
    constructor() {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: process.env.REFRESH_TOKEN_KEY!,
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: JwtPayload): JwtPayloadWithRefreshToken {
        const refreshToken = req.cookies.refresh_token;
        
        if (!refreshToken) {
            throw new ForbiddenException("Refresh token noto'g'ri");
        }

        return { ...payload, refreshToken };
    }
}
