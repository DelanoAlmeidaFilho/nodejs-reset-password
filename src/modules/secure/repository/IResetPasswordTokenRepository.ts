import { ResetPasswordToken } from '@prisma/client';

interface IResetPasswordTokenRepository {
    generate(userId: string, expiresIn: number): Promise<string>;
    findToken(token: string): Promise<ResetPasswordToken>;
    deleteTokenByUserId(userId: string): Promise<void>;
}

export { IResetPasswordTokenRepository };
