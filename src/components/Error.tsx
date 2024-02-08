import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error">
      <h1>Sorry!</h1>
      <p>An an unexpected error has occurred</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
