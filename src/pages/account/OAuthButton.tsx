import { Button } from 'react-bootstrap';
import naverIcon from 'assets/images/btnW_icon_circle.png';
import googleIcon from 'assets/images/google.png';
import config from 'config';

type Props = {
  type: string;
  loading: boolean;
};

const OAuthButton = ({ type, loading }: Props) => {
  return (
    <Button
      href={`${config.API_URL}/oauth2/authorization/${type}?redirect_uri=${config.WEB_URL}/account/oauth`}
      className="signin-button"
      variant="primary"
      type="submit"
      disabled={loading}
    >
      <img
        className="signin-icon"
        src={type === 'naver' ? naverIcon : googleIcon}
        alt={type === 'naver' ? 'Naver' : 'Google' + ' Icon'}
      />{' '}
      Sign in with
      {type === 'naver' ? ' Naver' : ' Google'}
    </Button>
  );
};

export default OAuthButton;
