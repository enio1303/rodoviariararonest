import { Injectable } from '@nestjs/common';


export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'enio',
            password: '12345'
        },
        {
            userId: 2,
            username: 'jose',
            password: '3333333'
        }
    ]

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
