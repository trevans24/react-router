import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import CardsPanel from './CardsPanel';

// List of "Selectors"
const danosaurs = [
  {
    id: 0,
    name: 'Fish'
  },
  {
    id: 1,
    name: 'Dog'
  },
  {
    id: 2,
    name: 'Cat'
  },
  {
    id: 3,
    name: 'Pony'
  },
  {
    id: 4,
    name: 'Bird'
  },
  {
    id: 5,
    name: 'Snake'
  }
];

const SelfAuthorizations = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  const [ index, setIndex ] = useState(null);

  useEffect(() => {
    let locationId = pathname.split('/')[5];
    // If the url contains an id then we push and select that selector
    // else select the first item in the list
    if(locationId) {
      setIndex(parseInt(locationId));
    }
    else {
      setIndex(0);
      push(`${pathname}/0`);
    }
    // This signifies the "selected" selector on the left side list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDanosaur = () => danosaurs.filter(({id}) => id === index);

  return (
    <div className="">
      {getDanosaur()[0]?.name}
      <Switch>
        <Route path={`${path}/:locationId`} component={CardsPanel} />
      </Switch>
    </div>
  )
};
export default SelfAuthorizations;
