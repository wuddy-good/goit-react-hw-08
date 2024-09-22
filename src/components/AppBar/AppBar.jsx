import { useAuth } from '../../hooks/useAuth';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import LoggedNav from '../LoggedNav/LoggedNav';

import { Header } from './AppBar.module';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </Header>
  );
};

export default AppBar;
