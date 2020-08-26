import React, { useMemo } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import danosaurs from '../danosaurs.json';

// Components
const CardsPanel = (props) => {
  const { viewById } = useParams();
  const urlName = viewById.split('-').join(' ');

  useMemo(() => {
    if(urlName) {
      // Find viewBy id
      let foundDanosaur = danosaurs.find(({nameLong}) => nameLong === urlName);
      // fetch from that ID
      setTimeout(() => {
        console.log('fetched unique locations', foundDanosaur.id)
      }, 3000)
    }
  }, [viewById])

  return (
    <div className="">
      {urlName} cards show here
    </div>
  )
};
export default withRouter(CardsPanel);
