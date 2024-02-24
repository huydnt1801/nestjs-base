import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from './response';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        return next.handle().pipe(
            map((data) => ({
                meta: {
                    code: context.switchToHttp().getResponse().statusCode,
                    message: data.message ? data.message : 'Successful',
                    error_code: data.error_code,
                    pagination: data.pagination,
                },
                summary: data.summary,
                data: data.results ? data.results : data,
            })),
        );
    }
}
