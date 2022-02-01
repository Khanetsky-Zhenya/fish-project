import React, {FC, useState} from 'react'
import Box from '@mui/material/Box'
import {
  TextField,
  FormControl,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent
} from '@mui/material'

import AdminPageWrapper from 'components/layouts/AdminPageWrapper'

import classes from './styles.module.scss'

export const AddReservoir: FC = () => {
  const [type, setType] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  return (
    <AdminPageWrapper>
      <div className={classes.wrapper}>
        <h1>Добавить новый водоем:</h1>
        <Box
          component="form"
          autoComplete="off"
          className={classes.form}
        >
          <FormControl
            sx={{width: '50ch'}}
          >
            <TextField className={classes.fieldMargin} inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                       size={'medium'} id="name" label="Название водоема" variant="outlined"/>
            <FormControlLabel className={classes.fieldMargin} control={<Switch/>} label="Платный?"/>
          </FormControl>
          <FormControl
            sx={{width: '50ch'}}
          >
            <FormControl
              className={classes.fieldMargin}
            >
              <InputLabel id="type-input-label">Тип водоема</InputLabel>
              <Select
                id="type"
                value={type}
                label="Тип водоема"
                onChange={handleChange}
              >
                <MenuItem value="like">Озеро</MenuItem>
                <MenuItem value="river">Река</MenuItem>
                <MenuItem value="water-reservoir">Водохранилище</MenuItem>
              </Select>
            </FormControl>
          </FormControl>
        </Box>
      </div>
    </AdminPageWrapper>
  )
}

export default AddReservoir