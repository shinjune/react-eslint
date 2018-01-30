import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default class TopMenu extends Component {
  static defaultProps = {
    logoProps: {},
    accountProps: {}
  }
  render() {
    const {logoProps, accountProps} = this.props;
    return (
      <Menu>
        <Menu.Item {...logoProps} name='browse'>
        {/* <Menu.Item as="a" href="https:/google.com" name='browse'  > */}
        {/* 이렇게 쓰는 것보다는 윗윗줄처럼 쓰고 위에 cosnt 설정이 좋다 */}
          Articles
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item {...accountProps} name='signup'  >
            Sign Up
          </Menu.Item>
          <Menu.Item name='help'  >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
