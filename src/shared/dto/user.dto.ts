import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDTO {

    @Expose()
    @IsNotEmpty()
    readonly login!: string;

    @Expose()
    @IsNotEmpty()
    readonly id!: string;

    @Expose()
    @IsNotEmpty()
    readonly node_id!: string;

    @Expose()
    readonly avatar_url!: string;

    @Expose()
    readonly name!: string;

    @Expose()
    readonly company!: string;

    @Expose()
    readonly blog!: string;

    @Expose()
    readonly location!: string;

    @Expose()
    readonly email!: string;

    @Expose()
    readonly created_at!: Date;

    @Expose()
    readonly updated_at!: Date; 
}
