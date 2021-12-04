import { FormEvent, useState } from 'react';
import { useAuth } from '../src/contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

import styles from '../styles/global.module.scss';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>

      <button type="submit">Entrar</button>
    </form>  
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});