import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useOAuthLogin } from './hooks';

const OAuth = () => {
  const { loading, userLoggedIn, user, error, onSubmit, redirectUrl } = useOAuthLogin();

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const token = params.get('token');
    onSubmit(token!);
  });

  return <>{(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}</>;
};

export default OAuth;
