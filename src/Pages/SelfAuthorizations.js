import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import danosaurs from '../danosaurs.json';

import CardsPanel from './CardsPanel';

const SelfAuthorizations = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  const { viewBy } = useParams();

  const [ index, setIndex ] = useState(null);

  useEffect(() => {
    let viewById = pathname.split('/')[5];
    // If the url contains an id then we push and select that selector
    // else select the first item in the list
    if(viewById) {
      setIndex(viewById.split('-').join(' '));
    }
    else {
      setIndex(0);
      let urlName = danosaurs[0].nameLong.split(' ').join('-');
      push(`${pathname}/${urlName}`);
    }
    // This signifies the "selected" selector on the left side list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDanosaur = () => danosaurs.filter(({nameLong}) => nameLong === index);

  return (
    <div className="">
      {`${viewBy.toUpperCase()} Authorization ${getDanosaur()[0]?.nameShort}`}
      <Switch>
        <Route path={`${path}/:viewById`} component={CardsPanel} />
      </Switch>
    </div>
  )
};
export default SelfAuthorizations;
