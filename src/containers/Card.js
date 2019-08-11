import {connect} from 'react-redux';
import Card from '../components/Card';

const mapStateToProps = ({countries}) => {
  return {
    countryName: countries.countryName,
  }
};

export default connect(mapStateToProps)(Card);

