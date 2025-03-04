import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class AccessTokenGuard extends AuthGuard("access-jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublice = this.reflector.getAllAndOverride("isPublic", [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublice) {
      return true;
    }
    return super.canActivate(context);
  }
}
