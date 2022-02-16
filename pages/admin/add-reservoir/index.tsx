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
    type: 'Озеро',
    isPaid: false,
    fishTypes: [],
    area: 'Минская',
    region: ''
  });

  const handleSelectChange = (event: SelectChangeEvent, field) => {
    setData({ ...data, [field]: event.target.value})
  };

  const handleFishTypesChange = (event, values) => {
    setData({ ...data, fishTypes: values })
  }

  console.log(data)

  return (
    <AdminPageWrapper>
      <div className={classes.wrapper}>
        <h1>Добавить новый водоем:</h1>
        <Box component="form" autoComplete="off" className={classes.form}>
          <FormControl sx={{width: '46%'}}>
            <TextField className={classes.fieldMargin} inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                       size={'medium'} id="name" label="Название водоема" variant="outlined"/>
            <div className={cn(classes.fieldMargin, classes.row)}>
              <FormControlLabel control={<Switch/>} label="Платный?"/>
              <TextField
                id="Square"
                label="Площадь, кв. км"
                type="number"
              />
            </div>
            <FormControl className={classes.fieldMargin}>
              <InputLabel id="type-input-label">Область</InputLabel>
              <Select
                id="area"
                value={data.area}
                label="Область"
                onChange={(e) => handleSelectChange(e, 'area')}
              >
                <MenuItem value="Минская">Минская</MenuItem>
                <MenuItem value="Витебская">Витебская</MenuItem>
                <MenuItem value="Могилевская">Могилевская</MenuItem>
                <MenuItem value="Гомельская">Гомельская</MenuItem>
                <MenuItem value="Брестская">Брестская</MenuItem>
                <MenuItem value="Гродненская">Гродненская</MenuItem>
              </Select>
            </FormControl>
          </FormControl>
          <FormControl sx={{width: '46%'}}>
            <FormControl className={classes.fieldMargin}>
              <InputLabel id="type-input-label">Тип водоема</InputLabel>
              <Select
                id="type"
                value={data.type}
                label="Тип водоема"
                onChange={(e) => handleSelectChange(e, 'type')}
              >
                <MenuItem value="Озеро">Озеро</MenuItem>
                <MenuItem value="Река">Река</MenuItem>
                <MenuItem value="Водохранилище">Водохранилище</MenuItem>
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
            <FormControl className={classes.fieldMargin}>
              <InputLabel id="type-input-label">Район</InputLabel>
              <Select
                id="region"
                value={data.region}
                label="Район"
                onChange={(e) => handleSelectChange(e, 'area')}
              >
                <MenuItem value="Минская">Минская</MenuItem>
                <MenuItem value="Витебская">Витебская</MenuItem>
                <MenuItem value="Могилевская">Могилевская</MenuItem>
                <MenuItem value="Гомельская">Гомельская</MenuItem>
                <MenuItem value="Брестская">Брестская</MenuItem>
                <MenuItem value="Гродненская">Гродненская</MenuItem>
              </Select>
            </FormControl>
          </FormControl>
        </Box>
      </div>
    </AdminPageWrapper>
  )
}

export default AddReservoir