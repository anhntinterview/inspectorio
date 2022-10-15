import * as React from 'react';
import { useParams } from 'react-router-dom';
import UserModel from 'app/controller/user.model';
import { User, UserError } from 'app/components/User';
import { Loading } from 'template/component/Loading';

export interface IUserProps {
    model: UserModel;
}

const UserView: React.FunctionComponent<IUserProps> = (props) => {
    const { name } = useParams();

    const { model } = props;
    let content;
    if (name) {
        const { data, isLoading, isFetching, isSuccess, isError, error } =
            model.user(name.toLowerCase());

        if (isLoading) {
            content = <Loading isLoading={true} />;
        } else if (isSuccess) {
            content = <User data={data} isFetching={isFetching} />;
        } else if (isError) {
            content = <UserError error={error} />;
        }
    }

    return <>{content}</>;
};

export default UserView;
