import { getExchange } from '../api';
import { useState, useEffect } from 'react';


export default function useExchange() {

    const [exchange, setExchange] = useState([]);

    useEffect(() => {
        getExchange().then(setExchange);
    }, []);


    return { exchange };
}

