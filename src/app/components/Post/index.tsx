import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IPostProps {
    data: Array<string>;
}

export const Posts: React.FunctionComponent<IPostProps> = (props) => {
    const { data } = props;

    const renderedPosts = data?.map((user: string, index) => (
        <Link
            key={index}
            className="mr-2 p-2 mt-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
            to={`/${user}`}
        >
            {user?.substring(0, 100)}
        </Link>
    ));

    return <div className="flex flex-wrap w-full">{renderedPosts}</div>;
};
