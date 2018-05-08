import { Home } from '../../components/screens/Home';
import ChooseTwitterNavigator from './ChooseTwitterNavigator';
import AccountNavigator from '../AccountNavigator';
import SignupNavigator from './SignupNavigator';

const HomeRoute = { screen: Home };

const ChooseTwitterRoute = { screen: ChooseTwitterNavigator };

const AccountRoute = { screen: AccountNavigator };

const SignUpRoute = { screen: SignupNavigator };

export default RouteConfig = {
  Twitter: ChooseTwitterRoute,
  Home: HomeRoute,
  Account: AccountRoute,
  SignUp: SignUpRoute,
};
