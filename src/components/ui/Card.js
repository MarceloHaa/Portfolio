import React from 'react';

const Card = ({ children }) => {
    return <div className="bg-white shadow-md rounded-lg p-4">{children}</div>;
};

export default Card;

export const CardHeader = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

export const CardTitle = ({ children }) => {
    return <h3 className="text-lg font-medium">{children}</h3>;
};

export const CardContent = ({ children }) => {
    return <div>{children}</div>;
};
