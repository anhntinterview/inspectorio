import * as React from 'react';
import { UserDTO } from 'shared/dto/user.dto';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'app/asset/icon';

export interface IPostProps {
    data: UserDTO | undefined;
    isFetching: boolean;
}

export interface IPostErrorProps {
    error: any;
}

export const User: React.FunctionComponent<IPostProps> = (props) => {
    const { data } = props;
    let content;

    if (data) {
        content = (
            <div className="w-full">
                <header className="p-5 bg-black justify-start w-full">
                    <Link className="text-white" to="/">
                        <ChevronLeft />
                    </Link>
                </header>
                <article className="w-full flex p-5" key={data.id}>
                    <img className="rounded-full" width={50} height={50} src={data.avatar_url} alt="" />
                    <div className="ml-3 border-b border-b-gray-400 w-full flex flex-col justify-center">
                        <p className="text-sm">{data.login}</p>
                        <p className="text-xs text-gray-300">{data.location}</p>
                    </div>
                </article>
            </div>
        );
    }

    return <div className="w-full flex flex-col">{content}</div>;
};

export const UserError: React.FunctionComponent<IPostErrorProps> = (props) => {
    const { error } = props;
    return <div>{error?.toString()}</div>;
};
