import { useParams, useRouteMatch,useHistory } from 'react-router-dom';
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {HIRING_DESCRIPTION} from "../../constants/description";
import {DISPO} from "../../constants/routes";

import React from 'react';

import {PageDescription, FlashyButton} from 'littleComponents';
import {useGetProcess, useInterviewType} from '../../utils/axios';
import {AuthUserContext} from "../Authentification/Session";
import {useAuthContext} from "components/Authentification2/context";
import CircularProgress from "@material-ui/core/CircularProgress";

function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const [{ data, loading, error }, refetch] = useInterviewType(1);
  const authContext = useAuthContext();
  const history = useHistory();
  const url2 = url.match(/[^/]\w+/g); //url2 permet n'a pas le caractère '/' 
  let description = HIRING_DESCRIPTION[url2];

  if(loading) return <CircularProgress />
  return (
      <div>
          <h2>Hey {authContext.userName}</h2>

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
