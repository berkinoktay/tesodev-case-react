import Layout from 'components/layout';
import { IRecords } from 'interfaces/records';
import AddLink from 'pages/AddLink';
import Home from 'pages/Home';
import List from 'pages/List';
import db from './data/index.json'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setRecords } from 'redux/slices/records';
function App() {
  const dispatch = useDispatch()
  const recordsData = localStorage.getItem('recordsData');
  useEffect(() => {

    if (!(!!recordsData)) {
      console.log("girdi")
      const convertedData: IRecords[] = []
      let obj: any = {}

      db.data.forEach((element: string[]) => {
        element.forEach((data: string, index: number) => {
          const key = db.cols[index].toLocaleLowerCase().split(' ').join('_')
          obj[key] = data
        })
        convertedData.push({ ...obj })
      })
      dispatch(setRecords(convertedData))
      localStorage.setItem('recordsData', JSON.stringify(convertedData))
    } else {
      dispatch(setRecords(JSON.parse(recordsData)))
    }

  }, [recordsData, dispatch])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/add-link" element={<AddLink />} />
      </Routes>
    </Layout>

  );
}

export default App;
