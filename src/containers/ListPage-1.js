import React from 'react';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth'

const ListPage = () => (
  <div>
    <TopMenuContainer/>
  </div>
)
//함수형 component를 써보자

export default withAuth(ListPage);
