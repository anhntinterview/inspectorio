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
    readonly gravatar_id!: string;

    @Expose()
    readonly url!: string;

    @Expose()
    readonly html_url!: string;

    @Expose()
    readonly followers_url!: string;

    @Expose()
    readonly following_url!: string;

    @Expose()
    readonly gists_url!: string;

    @Expose()
    readonly starred_url!: string;

    @Expose()
    readonly subscriptions_url!: string;

    @Expose()
    readonly organizations_url!: string;

    @Expose()
    readonly repos_url!: string;

    @Expose()
    readonly events_url!: string;

    @Expose()
    readonly received_events_url!: string;

    @Expose()
    readonly type!: string;

    @Expose()
    readonly site_admin!: boolean;

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
    readonly hireable!: boolean;

    @Expose()
    readonly bio!: string;

    @Expose()
    readonly twitter_username!: string;

    @Expose()
    readonly public_repos!: number;

    @Expose()
    readonly public_gists!: number;

    @Expose()
    readonly followers!: number;

    @Expose()
    readonly following!: number;

    @Expose()
    readonly created_at!: Date;

    @Expose()
    readonly updated_at!: Date; 
}
