import { useEffect, useState } from 'react'
import { getWeatherData } from 'utils/api'
import { Box, Divider, TextField, Typography } from '@mui/material';
import { Search } from 'models/Search';
import { Card } from 'components';
import _ from 'lodash';
import { VariantTypography } from '../../utils/constants';

const Weather = () => {
  const [search, setSearch] = useState<string>('L1 8JQ');
  const [searchWeather, setSearchWeather] = useState<Search[]>([]);

  const initData = async () => {
    setSearchWeather(await getWeatherData(search))
  }

  useEffect(() => {
    initData();
  }, [])

  const onChangeSearch = (inputSearch: string) => {
    setSearch(inputSearch);
  }

  return (
    <>
      <Typography variant={VariantTypography.h1}>Vite + React</Typography>
      <Typography variant={VariantTypography.h2}>Anne's testing stuffies</Typography>
      <div>
        <Typography variant={VariantTypography.body1}>
        Introduce the Zip Code to get the city!
        </Typography>
        <TextField
          id="outlined input"
          label="Zip Code"
          defaultValue="L1 8JQ"
          onChange={(event) => onChangeSearch(event.target.value)}
        />
      </div> 
      { searchWeather &&  
        searchWeather.length > 0 &&
        <Card 
          title={`Data for CP ${search}`}
          description={(
            <>
            {_.map(searchWeather, ({name, country}) => (
                <Box key={name}>
                  <Typography variant={VariantTypography.body1}>{name}</Typography>
                  <Divider />
                  <Typography variant={VariantTypography.body1}>{country}</Typography>
                </Box>
            ))}
            </>
          )}
        />}
    </>
  )
}

export default Weather
