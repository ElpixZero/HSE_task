import {connect} from 'react-redux';
import Chart from '../components/Chart';
import countryAction from '../actions/countries';
import countriesForSelect from '../data/countriesForSelect';
import countriesForChart from '../data/countriesForChart';

const mapStateToProps = ({countries}) => {
  return {
    countryName: countries.countryName,
    selectCountries: countriesForSelect,
    chartCountries: countriesForChart
  }
};

const mapActionsToProps = {
  ...countryAction
}

export default connect(mapStateToProps, mapActionsToProps)(Chart);

