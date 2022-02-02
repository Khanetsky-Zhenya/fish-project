import React, {FC, useState} from 'react'
import cn from 'classnames'
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
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'

import { fishOptions } from 'features/Admin/constants'
import AdminPageWrapper from 'components/layouts/AdminPageWrapper'

import classes from './styles.module.scss'

export const AddReservoir: FC = () => {
  const [data, setData] = useState({
    name: '',
    type: '',
    isPaid: false,
    fishTypes: []
  });

  const handleTypeChange = (event: SelectChangeEvent) => {
    setData({ ...data, type: event.target.value})
  };

  const handleFishTypesChange = (event, values) => {
    setData({ ...data, fishTypes: values })
  }

  return (
    <AdminPageWrapper>
      <div className={classes.wrapper}>
        <h1>Добавить новый водоем:</h1>
        <Box component="form" autoComplete="off" className={classes.form}>
          <FormControl sx={{width: '46%'}}>
            <TextField className={classes.fieldMargin} inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                       size={'medium'} id="name" label="Название водоема" variant="outlined"/>
            <div className={cn(classes.fieldMargin, classes.row)}>
              <FormControlLabel className={classes.fieldMargin} control={<Switch/>} label="Платный?"/>
              <TextField
                id="Square"
                label="Площадь, кв. км"
                type="number"
              />
            </div>
          </FormControl>
          <FormControl sx={{width: '46%'}}>
            <FormControl className={classes.fieldMargin}>
              <InputLabel id="type-input-label">Тип водоема</InputLabel>
              <Select
                id="type"
                value={data.type}
                label="Тип водоема"
                onChange={handleTypeChange}
              >
                <MenuItem value="like">Озеро</MenuItem>
                <MenuItem value="river">Река</MenuItem>
                <MenuItem value="water-reservoir">Водохранилище</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.fieldMargin}>
              <Stack>
                <Autocomplete
                  multiple
                  id="fish-types"
                  options={fishOptions}
                  onChange={handleFishTypesChange}
                  getOptionLabel={(option) => option.name}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Рыба в водоеме"
                      placeholder="Вид рыбы"
                    />
                  )}
                />
              </Stack>
            </FormControl>
          </FormControl>
        </Box>
      </div>
    </AdminPageWrapper>
  )
}

export default AddReservoir