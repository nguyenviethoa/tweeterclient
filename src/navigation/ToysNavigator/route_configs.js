import { Home } from '../../components/screens/Home';
import ChooseToysNavigator from './ChooseToysNavigator';
import AccountNavigator from '../AccountNavigator';
import SignupNavigator from './SignupNavigator';

const HomeRoute = { screen: Home };

const ChooseToysRoute = { screen: ChooseToysNavigator };

const AccountRoute = { screen: AccountNavigator };

const SignUpRoute = { screen: SignupNavigator };

export default RouteConfig = {
  Toys: ChooseToysRoute,
  Home: HomeRoute,
  Account: AccountRoute,
  SignUp: SignUpRoute
};
