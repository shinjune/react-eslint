import React, { Component } from 'react';
import {
  Button,
  Icon,
  Grid,
  Segment,
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
  display: block;
  height: 100vh;
`;

export default class LoginScreen extends Component {
  static defaultProps = {
    onGoogleLogin: () => {},
  }
  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle">
        <Grid.Column style={{ width: '280px' }}>
          <Segment stacked textAlign="center" padded="very">
            <Header as="h1">로그인</Header>
            <Button color="google plus" fluid onClick={this.props.onGoogleLogin}>
              <Icon name="google plus" /> 구글로 로그인
            </Button>
            <Button color="twitter" fluid style={{ marginTop: '10px' }}>
              <Icon name="twitter" /> 트위터로 로그인
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    );
  }
}
