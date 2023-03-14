import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { DatePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';

import { useState } from 'react';



export default function MyDateTimePicker({ value, onChange, label }) {
  
  
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker 
          value={value?.$d} 
          onChange={(date) => onChange(date.$d)}
          label={label}  
        />
      </LocalizationProvider>
    );

}