import { Container, Service } from 'typedi';
import HttpService from 'core/service/http.service';
import type { UseQuery, UseMutation } from "core/redux/type";

@Service()
class PostService<B, R> {
    protected httpService = Container.get(HttpService);
}

export default PostService;
