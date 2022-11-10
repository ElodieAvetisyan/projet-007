import React from 'react';
import { useParams } from 'react-router-dom';


const PageHebergement = () => {
    const params = useParams()
    console.log(params.id);
    return (
        <div>

        </div>
    );
};

export default PageHebergement;