import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import List from './views/List';
import Detail from './views/Detail';

const Routes = createAppContainer(
  createStackNavigator({
    List: {
      screen: List,
    },
    Detail: {
      screen: Detail,
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#7159C1'
      },
    },
  })
);

export default Routes;