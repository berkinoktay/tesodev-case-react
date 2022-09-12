import { createSlice } from '@reduxjs/toolkit';
import { IRecords } from 'interfaces/records';
// import axios from 'axios';
// import { ICities } from 'interfaces/cities';

interface IRecordsSlice {
  records: IRecords[];
  search: string;
  status: 'loading' | 'succeeded' | 'failed' | 'idle';
}

const initialState: IRecordsSlice = {
  records:
    typeof window !== 'undefined' &&
    (!!localStorage.getItem('recordsData')
      ? JSON.parse(localStorage.getItem('recordsData') as string)
      : []),
  search: '',
  status: 'idle',
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

// export const fetchRecords = createAsyncThunk(
//   'fetchRecords',
//   async () => {
//     const res = await axios.get('/api/cities');
//     return res.data.data;
//   }
// );

export const { setRecords, setSearch } = recordsSlice.actions;

export default recordsSlice.reducer;
