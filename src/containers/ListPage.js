import React from 'react';
import {Link} from 'react-router-dom';
import TopMenuContainer from './TopMenuContainer';
import withAuth from '../hocs/withAuth';
import ArticleListContainer from './ArticleListContainer';

const ListPage = () => (
  <div>
    <TopMenuContainer />
    {/* {process.env.REACT_APP_API_KEY = 1234} */}
    {/* 환경설정 제일 나중에 추가
    https: //github.com/facebook/create-react-app/
    blob/master/packages/react-scripts/template/
    README.md#adding-custom-environment-variables */}
    <Link to="/new-article"> new article </Link>
    <ArticleListContainer />
  </div>
);

export default withAuth(ListPage);
