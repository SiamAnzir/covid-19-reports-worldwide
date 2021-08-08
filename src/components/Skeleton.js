import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const Loading = () => {

    return (
        <div className="skeleton">
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
        </div>
    );
}