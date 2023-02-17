import React from 'react'
import './Contact.css'
import { FormControl, Grid, Container, Button , InputLabel, Input, FormHelperText } from '@mui/material';

const Form = () => {
  return (
    <form action="https://formsubmit.co/cjkereti@gmail.com" method="POST">
    <Grid container className='grid-container'>
        <Grid item md={12} className='i-c'>
            <FormControl className='i-c'>
                <InputLabel htmlFor="Nombre" name="name">Nombre Completo</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className='i-c'>
                <InputLabel htmlFor="Correo Electronico" name="email">Correo Electronico</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </Grid>
        <Grid item md={12} className='i-c'>
            <FormControl className='i-c'>
                <InputLabel htmlFor="Mensaje" name="mensaje">Mensaje</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </Grid>
        <Grid item md={12} className='i-c'>
            <Button variant="contained" type="submit" style={{backgroundColor: '#00c2cb'}}>
                Enviar
            </Button>
        </Grid>
    </Grid>
    </form>
  )
}

export default Form
