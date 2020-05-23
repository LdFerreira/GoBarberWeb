import React from 'react';
import { FiLogIn, FiMail, FiLock, FiHeart } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <a
            className="amor"
            href="https://www.instagram.com/paoladagostin/?hl=pt-br"
          >
            <FiHeart size={20} />
            EU AMO VOCE, MUITO
          </a>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
