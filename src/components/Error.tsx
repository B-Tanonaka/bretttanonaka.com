// import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function Error() {
  // const error = useRouteError();
  // let errorMessage: string;

  // if (isRouteErrorResponse(error)) {
  //   errorMessage = error.statusText;
  // } else if (typeof error === 'string') {
  //   errorMessage = error;
  // } else {
  //   errorMessage = 'Unknown error';
  // }

  return (
    <div id="error" className="error-container">
      <h1>404</h1>
      <p>An an unexpected error has occurred</p>
      {/* <p>
        <i>{errorMessage}</i>
      </p> */}
    </div>
  );
}
