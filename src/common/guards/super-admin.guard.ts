import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class SuperAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user) {
            throw new ForbiddenException('Foydalanuvchi topilmadi');
        }

        if (!user.is_creator) {
            throw new ForbiddenException("Sizda ruxsat yo'q");
        }

        return true;
    }
}
