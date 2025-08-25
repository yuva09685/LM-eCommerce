import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

// Mock User Service
const users = [];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async register(registerUserDto: RegisterUserDto) {
    const { username, email, password } = registerUserDto;
    const user = { id: users.length + 1, username, email, password };
    users.push(user);
    return { message: 'User registered successfully' };
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    const user = users.find((user) => user.email === req.user.email);
    if (user) {
        const payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    const newUser = {
        id: users.length + 1,
        username: req.user.displayName,
        email: req.user.email,
        password: '' // Or a random password
    };

    users.push(newUser);

    const payload = { sub: newUser.id, username: newUser.username };

    return {
        access_token: this.jwtService.sign(payload),
    };
  }
}
