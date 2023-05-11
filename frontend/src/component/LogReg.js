import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import House from './images/house.png'
import Reg from './Reg';
import Login from './Login';
import './AboutPage.css'

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
  <div className='body'>
    <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${House})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '90vhvh' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Login /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Reg />
            </TabPanel>
          </Box>
          {/* <Box textAlign='center' sx={{ mt: 2 }}>
            <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography>
          </Box> */}
        </Card>
      </Grid>
    </Grid>
    </div>
  </>;
};

export default LoginReg;
