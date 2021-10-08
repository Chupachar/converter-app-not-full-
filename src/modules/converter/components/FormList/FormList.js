import React from 'react';
import { useState } from 'react';
import s from './FormList.module.css';
import { Formik, Form } from 'formik';
import Select from "react-select";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function FormList({exchange}) {

    const [ newExchange ] = useState(
        [
            {
                exchange: ''
            }
        ]
    );

    const [itemOne, setItemOne] = useState(null);
    const [itemTwo, setItemTwo] = useState(null);
    function handleChangeOne(item) {
        setItemOne(item);
    }
    function handleChangeTwo(item) {
        setItemTwo(item);
    }

    function submitHandler(newExchange) {
        // addNewExchange(newExchange);
        // console.log(newExchange)
    }

    let selectExchange = exchange.map((item) => {
        return {
        value: item.r030,
        label: `${item.cc}${' '}${item.txt}${' '}${item.rate}`
    }});

    return (
        <>
            <Formik initialValues={{newExchange}} onSubmit={submitHandler}>
                <Form className={s.form__container}>
                    <Select
                        value={itemOne}
                        onChange={handleChangeOne}
                        options={selectExchange}
                        name='one'
                    />
                    <Select
                        value={itemTwo}
                        onChange={handleChangeTwo}
                        options={selectExchange}
                        name='two'
                    />
                    <TextField className={s.form__input} id="search" name='exchange' label="Search..." variant="outlined" />
                    <div className={s.btn}>
                        <Button href="" type="submit" variant="contained" color="secondary">Count</Button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormList;











// useEffect(() => {
//     async function getData() {
//             const response = await fetch(
//                 "https://randomuser.me/api?results=7&nat=us"
//             );
//             const resp = await response.json();
//
//             // Map the list according the the react-select api
//             const parsedList = resp.results && resp.results.map(({name,id}) => {
//
//                 return{
//                     value: id.value,
//                     label: `${name.first} ${name.last}`
//                 }
//             });
//
//             setList(parsedList);
//     }
//
//     getData();
// }, []);