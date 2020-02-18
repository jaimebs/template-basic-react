import React from 'react';

import { Container, Content, Input, Button } from './styles';

export default function Login() {
  return (
    <>
      <Container>
        <Content>
          <Input type="email" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button>Sign</Button>
        </Content>
      </Container>
    </>
  );
}
