import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function LogoutButton(props) {
  return (
    // <Button onClick={props.onClick} variant="outlined">Se déconnecter</Button>
    <Button onClick={props.onClick} color="secondary">Déconnexion</Button>
  );
}

export default LogoutButton;