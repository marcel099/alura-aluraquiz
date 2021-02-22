import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/componets/Widget';
import QuizBackground from '../src/componets/QuizBackground';
import QuizContainer from '../src/componets/QuizContainer';
import QuizLogo from '../src/componets/QuizLogo';
import Footer from '../src/componets/Footer';
import GitHubCorner from '../src/componets/GitHubCorner';
import Input from '../src/componets/Input';
import Button from '../src/componets/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState(''); // retorna uma tupla!

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);
              // router manda para a próxima página
            }}
            >
              <Input
                placeholder="Diz aí seu nome"
                type="text"
                name="nomeDoUsuario"
                value={name}
                autoComplete="given-name"
                onChange={(e) => setName(e.target.value)}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Widget.Content>
        </Widget>

        <Footer />
        <GitHubCorner projectUrl="https://github.com/Marcel099/aluraquiz" />
      </QuizContainer>
    </QuizBackground>
  );
}
