import { coreSliceApi } from 'template/redux/slice';
import { UserDTO } from 'shared/dto/user.dto';

export const extendedApiSlice = coreSliceApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<UserDTO, string>({
            query: (user) => `/users/${user}`,
            transformResponse(rawResult: UserDTO, meta, arg) {
                return rawResult;
            },
            providesTags: (result, error, arg) =>
                result ? [{ type: 'Users', id: arg }] : ['Users'],
        }),
    }),
});

export const {
    useGetUserQuery,
} = extendedApiSlice;
