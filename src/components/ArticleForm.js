import React, {Component} from 'react';
import {Form, Message} from 'semantic-ui-react';

export default class ArticleForm extends Component{
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
  }


  state = {
    title: "",
    content: ""
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }
  render() {
    const {title, content} = this.state;
    const { errorMessage} = this.props;
    return (
      <Form as="div">
      {/* div를 안쓰면 Form 컴포넌트가 실제 html 폼 컴포넌트로 rendering된다 그걸 쓰고 싶지 않아서
      html form tag 대신에 div tag가 대신 사용되도록 넣어줬따.
      이 방법이 브라우저 내장 기능을 안 쓰는 깔끔한 방법*/}
        <Form.Input name="title" value={title} label= "제목" onChange={this.handleChange}/>
        <Form.TextArea name="content" value={content} label="내용" onChange={this.handleChange}/>
        <Form.Button onClick={this.handleSubmit}> submit </Form.Button>
        {
          errorMessage && (
        <Message negative>
          <Message.Header> 전송할 수 없음</Message.Header>
          <p>{errorMessage}</p>
        </Message>
          )
        }
      </Form>
    )
  }
}
