import React, { useMemo } from 'react';
import { useParams, withRouter } from 'react-router-dom';

// Components
const CardsPanel = (props) => {
  const { locationId } = useParams();

  useMemo(() => {
    if(locationId) {
      setTimeout(() => {
        console.log('fetched unique locations', locationId)
      }, 3000)
    }
  }, [locationId])

  return (
    <div className="">
      CardsPanel #{locationId} works
    </div>
  )
};
export default withRouter(CardsPanel);
