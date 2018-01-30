import React, {Component} from 'react';
import {
  Button,
  Icon,
  Grid,
  Segment,
  Header
} from 'semantic-ui-react';
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
 height: 100vh;
`;


export default class LoginScreen extends Component {
  static defaultProps = {
    onGoogleLogin: () => {}
  }
  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle">
        <Grid.Column style={{width: '280px'}}>
          <Segment textAlign='center' stacked padded="very">
           <Header as="h4">Login with Social Media</Header>
           <Button fluid color='google plus' onClick={this.props.onGoogleLogin}>
            <Icon name='google plus' /> Google Plus
           </Button>
           <Button fluid color='twitter' style={{marginTop: '5px'}}>
            <Icon name='twitter' /> Twitter
           </Button>
          </Segment>
        </Grid.Column>
     </FullHeightGrid>
    );
  }
}
