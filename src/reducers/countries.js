const initialState = {
  countryName: 'Afghanistan'
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'COUNTRY_NAME:CHANGE':
      return {
        countryName: action.payload,
      }
     
    default:
      return state;
  }
}

