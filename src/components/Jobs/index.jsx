import api from 'modules/api/api';
import { JOBS } from 'modules/api/endpoints';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Jobs() {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            Jobs Component
        </div>
    );
}
