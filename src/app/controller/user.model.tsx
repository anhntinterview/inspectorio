import { Container } from 'typedi';
import UserService from 'template/service/user.service';
import { useGetUserQuery } from 'app/redux/user/slice';
import { UserDTO } from 'shared/dto/user.dto';

export default class UserModel {
    public readonly userService = Container.get(UserService<UserDTO>);

    public user(name: string) {
        return this.userService.user(useGetUserQuery, name);
    }
}
