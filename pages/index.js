import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/componets/Widget';
import QuizBackground from '../src/componets/QuizBackground';
import Footer from '../src/componets/Footer';
import GitHubCorner from '../src/componets/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media only screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');  // retorna uma tupla!

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(e) {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);
              // router manda para a próxima página
            }}
            >
              <input placeholder="Diz aí seu nome" type="text" name="name"
                onChange={ e => setName(e.target.value)}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
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
