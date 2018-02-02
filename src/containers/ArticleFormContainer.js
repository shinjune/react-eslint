import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

class ArticleFormContainer extends Component{
  render() {
    const {success, ...rest} = this.props;
    //success를 쏙 빼오자
    if(success) {
      return (
        <Redirect to ='/list' />
      );
    }
    return (
      <ArticleForm {...rest} />
    )
  }
}

export default connect (

  //mapStateToProps
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchToProps
)(ArticleFormContainer);

//success가 true면 list로 redirect 해줘야함
