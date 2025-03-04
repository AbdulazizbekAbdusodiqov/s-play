import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
    Strategy,
    "access-jwt"
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.ACCESS_TOKEN_KEY!,
            passReqToCallback: true,
        });
    }
    validate(req: Request, payload: JwtPayload): JwtPayload {
        return payload;
    }
}
