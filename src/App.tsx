import React from 'react';
import { Loading } from 'template/component/Loading';
import { Route, Routes } from 'react-router-dom';

const PostPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "PostPage" */
            'app/pages/post'
        )
);

const UserPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "PostPage" */
            'app/pages/user'
        )
);

function App() {
    return (
        <div className='flex justify-center items-center'>
            <React.Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="/" element={<PostPage />} />
                    <Route path="/:name" element={<UserPage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
