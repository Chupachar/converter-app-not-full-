import React from 'react';
import FormList from "./components/FormList/FormList";


function ConverterModule({exchange}) {



    return (
        <div>
            <FormList exchange={exchange}/>
        </div>
    )
}

export default ConverterModule;