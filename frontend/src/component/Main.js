import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import { Image } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.css';
import { fetchData } from './Jsondata';
import { CardActionArea } from '@mui/material';
import MyCard from './MyCard';
import { Form, input,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showFilterForm, setshowFilterForm] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
const [minBhk, setMinBhk] = useState(0);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchedData = await fetchData();
  //     setData(fetchedData);
  //   };
  //   getData();
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  const { isLoading, error, data: datass } = useQuery('myData', () =>
  axios.get("http://127.0.0.1:8000/house/").then((res) => res.data)
);
if (isLoading) return 'Loading...';

if (error) return 'An error has occurred: ' + error.message;



  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // button style -----------------------------------------

  const filteredData = datass && datass.filter((item) =>
  item.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
  item.price >= minPrice &&
  item.bhk >= minBhk
).sort((c, d) => c.bhk - d.bhk);


  return (
    <body>
    <div style={{marginBottom:'900px'}}>
       {/* <input type="text" placeholder="Search" onChange={handleSearch} style={{marginTop:'90px'}}/> */}
c<center><Button onClick={() => setshowFilterForm((prevState) => !prevState)} style={{marginTop:'100px'}}>FILTER</Button></center>
        {showFilterForm && (
          <center>
            <Form  className='places'>
              <div>
                place
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  className="place"
                />
              </div>
              <div>
                price
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(parseInt(e.target.value))}
                  className="place"
                />
              </div>
              <div>
                bhk
                <input
                  type="number"
                  placeholder="Min Bhk"
                  value={minBhk}
                  onChange={(e) => setMinBhk(parseInt(e.target.value))}
                  className="place"
                />
              </div>
            </Form>
          </center>
        )}
    <div >
    {filteredData && filteredData.map((item) => (
        <>
          <Card
            sx={{ maxWidth: 345 }}
            key={item.id}
            id="hp"
            data-aos="fade-right"
            
          >
            <CardActionArea>
              <Image
                src={`${item.image1}`}
                style={{ width: '250px', height: '140px' }}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  BHK:{item.bhk}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SqareFeet:{item.sf}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price:{item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  House-Type:{item.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Furniture_Status:{item.furn_status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  age_of_property:{item.age_of_prop}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type_of_Properties:{item.ty_of_prop}
                </Typography>
                <center>
                  <div>
                    <MyCard
                      key={item.location}
                      image1={`${item.image1}`}
                      image2={`${item.image2}`}
                      image3={`${item.image3}`}
                      image4={`${item.image4}`}
                      image5={`${item.image5}`}
                      title={item.gender}
                      content={item.price}
                    />
                  </div>
                </center>
              </CardContent>
            </CardActionArea>
          </Card>
        </>
      ))}
    </div>
    </div>
    <footer style={{marginTop:'200px'}}>
    <p>Copyright &copy; 2023 - My Website</p>
  </footer>
    </body>
  );
}

export default App;
