import {BrowserRouter as Router, Link, Route, useParams, useRouteMatch,useHistory} from 'react-router-dom';
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {HIRING_DESCRIPTION} from "../../constants/description";
import {DISPO} from "../../constants/routes";

import React from 'react';

import {PageDescription, FlashyButton} from '../Navigation';
import {useGetProcess, useInterviewType} from '../../utils/axios';

function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const [{ data, loading, error }, refetch] = useInterviewType(1);

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
          <div className="paper">
          <h1>{data && data.title}</h1>
        <h2>what is it ? </h2>
        <PageDescription>{data && data.description}</PageDescription>
        <FlashyButton onClick={() => history.push(DISPO)}>
          Take appointment
        </FlashyButton>
              <img src="/milestoneVector.svg" />
          </div>
      </div>

  );
}

export default MilestonePage;
