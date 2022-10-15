import * as React from 'react';
import PostModel from 'app/controller/post.model';
import { Posts } from 'app/components/Post';

export interface IPostProps {
    model: PostModel;
}

const PostView: React.FunctionComponent<IPostProps> = (props) => {
    const { model } = props;
    const data = model.data;
    let content;
    content = <Posts data={data} />;

    return (
        <div className="w-full flex flex-col">
            <header className="p-5 pb-2 bg-black flex justify-center w-full">
                <h3 className="text-white">Home</h3>
            </header>
            <div className="p-3">
                <h1 className="text-3xl mb-5 mt-5">Top 5 GitHub Users</h1>
                <p className="text-lg mb-3">
                    Tap the username to see more information
                </p>
                {content}
            </div>
        </div>
    );
};

export default PostView;
