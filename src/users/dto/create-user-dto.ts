import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({required: true})
  readonly name : string;
  @ApiProperty({required: true})
  readonly email : string;
  @ApiProperty({ enum: ['Admin', 'Customer Executive'], required: true})
  readonly roleType: string;
  @ApiProperty({required: true})
  readonly contactNumber: string;
  @ApiProperty({ enum: ['Active', 'Inactive', 'Pending']})
  readonly status: string;
}