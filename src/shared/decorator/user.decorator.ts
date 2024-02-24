import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../database/entities';

export const CurrentUser = createParamDecorator((data: User, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
