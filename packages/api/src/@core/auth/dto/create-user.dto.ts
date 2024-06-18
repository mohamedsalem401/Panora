import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  strategy: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(9, { message: 'Password must be at least 9 characters long' })
  password_hash?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  id_organisation?: string;
}
