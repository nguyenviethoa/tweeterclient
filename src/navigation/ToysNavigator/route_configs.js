import { Home } from '../../components/screens/Home';
import ChooseToysNavigator from './ChooseToysNavigator';
import AccountNavigator from '../AccountNavigator';

const HomeRoute = { screen: Home };

const ChooseToysRoute = { screen: ChooseToysNavigator };

const AccountRoute = { screen: AccountNavigator };



export default RouteConfig = {
  Toys: ChooseToysRoute,
  Home: HomeRoute,
  Account: AccountRoute
};
