import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import axios from 'axios';

function App() {
  const [optionList, setOptionList] = useState([]);
  const [changedOption, setChangedOption] = useState(0);
  const [divoneList, setDivoneList] = useState([]);
  const [divtwoList, setDivtwoList] = useState([]);

  const addDivone = (id) => {
    const data = {
      option: id,
    }
    try {
      axios.post("http://127.0.0.1:8000/api/Divone", data).then((res) => {
        console.log(res.data)
        setDivoneList([...divoneList,res.data])
      })
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }


  const addDivtwoHandle = (id) => {
    console.log(id)
    const data = {
      option: id,
    }
    try {
      axios.post("http://127.0.0.1:8000/api/Divtwo", data).then((res) => {
        console.log(res.data)
        let findIndex = divoneList.findIndex((item)=>item.id !== res.data.id )
        let result = divoneList.splice(findIndex, 1)
        setDivoneList([...result])
        setDivtwoList([...divtwoList,res.data])
      })
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }


  const divoneDeleteHandle = (option_id) => {
    try {
      axios.delete('http://127.0.0.1:8000/api/deletedivone?id=' + option_id).then(()=>{
        let findIndex = divoneList.findIndex((item)=>item.id === option_id )
        let result = divoneList.splice(findIndex, 1)
        setDivoneList([...result])
      })
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }


  const divtwoDeleteHandle = (option_id) => {
      try {
        axios.delete('http://127.0.0.1:8000/api/deletedivtwo?id=' + option_id).then(()=>{
          let findIndex = divtwoList.findIndex((item)=>item.id === option_id )
          console.log(findIndex,'findIndex')
          let result = divtwoList.splice(findIndex, 1)
          console.log(divtwoList,'divtwoList')
          setDivtwoList([...result])
        })
      }
      catch (error) {
        console.log(error);
        return error;
      }
    }
    

  const getOptions = () => {
    try {
      axios.get('http://127.0.0.1:8000/api/option').then((response) => {
        setOptionList(response.data);
        console.log(response.data);
      })
    }
    catch (error) {

      console.log(error);
      return error;
    }
  }

  const getDivtwo = () => {
    try {
      axios.get('http://127.0.0.1:8000/api/Divtwo').then((response) => {
        setDivtwoList(response.data);
        console.log(response.data);
      })
    }
    catch (error) {

      console.log(error);
      return error;
    }
  }

  const getDivone = () => {
    try {
      axios.get('http://127.0.0.1:8000/api/Divone').then((response) => {
        setDivoneList(response.data);
        console.log(response.data);
      })
    }
    catch (error) {

      console.log(error);
      return error;
    }
  }

  useEffect(() => {
    getOptions()
    getDivtwo()
    getDivone()
  }, [])


  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid>
          <Grid alignItems="center" justifyContent="center" sx={{ width: 1000, height: 500, border: 1, borderBlockColor: 'black', display: 'flex' }}>
            <Box sx={{ width: 500, height: 500, border: 1, borderBlockColor: 'black' }}>
              {divoneList && divoneList.map((obj, index) => {
                return (
                  <MenuItem onMouseDown={()=>divoneDeleteHandle(obj.option)} onClick={()=>{}} onContextMenu={()=>addDivtwoHandle(obj.option)} value={obj.id}>{obj.option}</MenuItem>
                )
              })}
            </Box>
            <Box sx={{ width: 500, height: 500, border: 1, borderBlockColor: 'black' }}>

              {divtwoList && divtwoList.map((obj, index) => {
                return (
                  <MenuItem onMouseDown={()=>divtwoDeleteHandle(obj.option)} onClick={()=>{}} value={obj.id}>{obj.option}</MenuItem>
                )
              })}
            </Box>
          </Grid>
          <Grid maxWidth={'sm'} sx={{ display: 'flex', paddingTop: '5%' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={changedOption}
                label="Options"
                onChange={(e) => setChangedOption(e.target.value)}
              >
                <MenuItem value={0}>Pls choose an option</MenuItem>
                {optionList && optionList.map((obj, index) => {
                  return (
                    <MenuItem value={obj.id}>{obj.option}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <Button onClick={()=>addDivone(changedOption)} variant="contained">Add Elements</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default App;