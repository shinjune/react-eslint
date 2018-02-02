import { connect } from 'react-redux';
import React,{Component} from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticleList } from '../ducks/articleList';
import withLoading from '../hocs/withLoading';

const ArticleListWithLoading = withLoading(ArticleList);

class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    const {onMount, ...rest} = this.props;
    // ArticleListContainer에서 onMount를 골라내고 나머지만 props로 내려주겠다.
    return (
      <ArticleListWithLoading {...this.props} />
    )
  }
}

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
