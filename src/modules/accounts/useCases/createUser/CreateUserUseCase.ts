import { hash } from 'bcryptjs';
import { IUserRequest } from 'modules/accounts/DTOs/IUserRequest';
import { IUsersRepository } from 'modules/accounts/repository/IUsersRepository';
import { AppError } from 'shared/error/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ email, password, name }: IUserRequest): Promise<void> {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError('User already exists');
        }

        await this.usersRepository.create({
            name,
            email,
            password: await hash(password, 8),
        });
    }
}

export { CreateUserUseCase };
