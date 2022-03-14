import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  @Column({ length: 50 })
  firstName: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  @Column({ length: 50 })
  lastName: string;
}
