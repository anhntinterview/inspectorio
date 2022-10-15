import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import PostView from 'app/view/post';
import PostModel from 'app/controller/post.model';
import { IPostProps } from 'app/view/post';

class PostPage extends BaseComponent({
    model: new PostModel(),
})<IPostProps> {
    baseElement = () => <PostView model={this.props.model} />;
}

export default PostPage;
