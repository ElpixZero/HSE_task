import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Select } from 'semantic-ui-react';

import './Chart.scss';

const Chart = ({countryName, selectCountries, chartCountries, changeCountryName}) => {
  const selectedData = chartCountries.filter( item => {
    if (item.name === countryName) {
      return item;
    }
  });

  return (
    <div className="chart">
      <div className="chart__select"> 
        <Select placeholder='Select your country' 
          value={countryName} options={selectCountries} 
          onChange={(event, data) => changeCountryName(data.value)} 
        />
      </div>

      <div className="chart__graph"> 
        <LineChart
          width={984}
          height={600}
          data={selectedData[0].data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lower" stroke="blue" activeDot={{r: 8}} />
          <Line type="monotone" dataKey="median" stroke="red" />
          <Line type="monotone" dataKey="upper" stroke="black" />
        </LineChart>
      </div>  
    </div>
)}

export default Chart;