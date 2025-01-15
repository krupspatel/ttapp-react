import axios from 'axios';
import React from 'react';

export default function AxiosApp() {
  const apiUrl = 'https://api.github.com/users/hadley/orgs';
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>axios</div>;
}
