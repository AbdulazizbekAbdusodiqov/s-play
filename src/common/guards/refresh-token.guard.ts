import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class RefreshTokenGuard extends AuthGuard("refresh-jwt") {
  constructor() {
    super();
  }
}
