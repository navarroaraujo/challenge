import { createAppContainer } from 'react-navigation';
import React from 'react'
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Loadable from 'react-loadable';

import List from './views/List';
//import Detail from './views/Detail';

const LoadableDetail = Loadable({
  loader: () => import('./views/Detail'),
  loading() {
    return <Text>loading...</Text>
  }
})

const Routes = createAppContainer(
  createStackNavigator({
    List: {
      screen: List,
    },
    Detail: {
      screen: LoadableDetail,
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