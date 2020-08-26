import React, { useMemo } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import danosaurs from '../danosaurs.json';

// Components
const CardsPanel = (props) => {
  const { viewById } = useParams();

  useMemo(() => {
    if(viewById) {
      // Find viewBy id
      let foundDanosaur = danosaurs.find(({nameLong}) => nameLong === viewById.split('-').join(' '));
      // fetch from that ID
      setTimeout(() => {
        console.log('fetched unique locations', foundDanosaur.id)
      }, 3000)
    }
  }, [viewById])

  return (
    <div className="">
      {viewById} cards show here
    </div>
  )
};
export default withRouter(CardsPanel);
