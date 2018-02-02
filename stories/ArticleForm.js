import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/components/ArticleForm';


storiesOf('ArticleForm', module).add('default', ()=> (
  <ArticleForm onSubmit={action('onSubmit')}/>
  // action의 호출결과는 함수다
))
.add('error message', () => (
  <ArticleForm errorMessage = "empty all fields"/>
))
.add('creating', () => (
  <ArticleForm creating />
));
