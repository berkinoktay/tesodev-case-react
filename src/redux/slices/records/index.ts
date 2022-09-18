import { createSlice } from '@reduxjs/toolkit';
import { IRecords } from 'interfaces/records';
// import axios from 'axios';
// import { ICities } from 'interfaces/cities';

interface IRecordsSlice {
  records: IRecords[];
  search: string;
}

const initialState: IRecordsSlice = {
  records: !!localStorage.getItem('recordsData')
    ? JSON.parse(localStorage.getItem('recordsData') as string)
    : [],
  search: '',
};

const recordsSlice = createSlice({
  name: 'recordsSlice',
  initialState,
  reducers: {
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setRecords, setSearch } = recordsSlice.actions;

export default recordsSlice.reducer;
