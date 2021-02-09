import {BrowserRouter as Router, Link, Route, useParams, useRouteMatch,useHistory} from 'react-router-dom';
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {HIRING_DESCRIPTION} from "../../constants/description";
import {DISPO} from "../../constants/routes";

import React from 'react';

import {PageDescription, FlashyButton} from '../Navigation';

function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();

  const history = useHistory();
  const url2 = url.match(/[^/]\w+/g); //url2 permet n'a pas le caractère '/' 
  let description = HIRING_DESCRIPTION[url2];

  return (
      <div>
        <h3>
          Milestone number :
          {url}
          {id}
        </h3>
        <h2>Description of process </h2>
        <PageDescription>{description}</PageDescription>
        <FlashyButton onClick={() => history.push(DISPO)}>
          Take appointment
        </FlashyButton>
      </div>

  );
}

export default MilestonePage;
