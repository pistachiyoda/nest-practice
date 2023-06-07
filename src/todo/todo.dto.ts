import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;
}

export class UpdateTaskDto {
  @IsString()
  title: string;
}
