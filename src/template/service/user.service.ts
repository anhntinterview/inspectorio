import { Container, Service } from 'typedi';
import HttpService from 'core/service/http.service';
import type { UseQuery } from 'core/redux/type';

@Service()
class UserService<R> {
    protected httpService = Container.get(HttpService);

    public user(useQuery: UseQuery<R>, args: any) {
        return this.httpService.queryAPI(useQuery, args);
    }
}

export default UserService;
