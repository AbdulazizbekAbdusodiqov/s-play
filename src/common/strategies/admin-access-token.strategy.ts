import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtAdminPayload } from "../types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminAccessTokenStrategy extends PassportStrategy(
    Strategy,
    "access-jwt"
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.ACCESS_TOKEN_KEY!,
        });
    }
    validate(payload: JwtAdminPayload): JwtAdminPayload {
        return payload;
    }
}
