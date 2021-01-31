import styled from 'styled-components'
import db from '../db.json'

import Widget from '../src/componets/Widget'
import QuizBackground from './../src/componets/QuizBackground'
import Footer from '../src/componets/Footer'
import GitHubCorner from '../src/componets/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media only screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi, perferendis odit sed distinctio nobis quas accusantium molestiae. Iure nostrum suscipit ullam delectus! Ipsa ut magni perspiciatis recusandae commodi aspernatur.</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum sit ipsam qui aliquam magnam vel fugit! Itaque maxime nemo unde accusamus, sapiente illum consequuntur quod eligendi molestias est veritatis.</p>
          </Widget.Content>
        </Widget> 

        <Footer/>
        <GitHubCorner projectUrl="https://github.com/omariosouto"/>
      </QuizContainer>
    </QuizBackground>
  )
}
