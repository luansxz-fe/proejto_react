import { Container } from './components/Container';
import { MainForm } from './components/MainForm';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { MailIcon, Lock } from 'lucide-react';

export function App() {
  return (
    <Container>
      <MainForm>
        <DefaultInput 
          icon={<MailIcon size={18} />} 
          placeholder="Digite seu email" 
        />
        <DefaultInput 
          icon={<Lock size={18} />} 
          placeholder="Digite sua senha" 
        />
        <DefaultButton>Entrar</DefaultButton>
      </MainForm>
    </Container>
  );
}