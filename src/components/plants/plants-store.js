import querystring from 'querystring';
import { checkHttpResp } from '../../core/utils';
import {API_HOST} from '../../config';

/*
 I can either POST or GET these search queries...
 GET would allow the queries to be bookmarked, were it not for React-Router.
 So I might as well use POST, to save the extra parsing payloads to querystrings.
 */
const USE_POST = true;

function fetchGet(payload) {
  return fetch(API_HOST + "/api/plants/?" + querystring.stringify(payload));
}

function fetchPost(payload) {
  const fetchArgs = {
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(payload)
  };
  return fetch(API_HOST + "/api/plants/", fetchArgs)
}

export function searchPlants({common, family, symbol, sci, limit=10, offset=0}) {

  const payload = {common, family, symbol, sci, limit, offset};

  const fetchOp = USE_POST ? fetchPost : fetchGet;

  return fetchOp(payload)
      .then(checkHttpResp)
      .then((response) => response.json())
      .then((json) => {
        const {data, pagination} = json;
        return { data, pagination };
      });
}
