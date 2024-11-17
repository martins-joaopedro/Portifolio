import { Title } from '../../components/Title/index.jsx'
import styles from './styles.module.css'
import profile from '../../assets/profile.png'

export const About = () => {
  return (
    <div className={styles.container} id="sobre">
      <section>
        <img className={styles.avatar} src={profile} />
        <h3>Sobre mim</h3>
        <p>
        Quando criança, minha mãe me presenteou com um carrinho de controle remoto. Não foi dois dias inteiros até eu o desmontar com a justificativa de: "mãe, só queria ver o que tinha dentro dele que o fazia andar". Assim, sempre fui curioso e determinado a descobrir o motivo das coisas. 

Isso ao somar-se com o meu fascínio pela tecnologia e pela criação de novas coisas, me trouxe até os caminhos do desenvolvimento, onde me encontro. Atualmente, curso Ciência da Computação com um olhar especial pelos ramos multidisciplinares que a tecnologia possui.

Possuo um domínio maior pelo desenvolvimento front-end, com experiência nas tecnologias da Web, Javascript, frameworks amplamente utilizados e bibliotecas como ReactJS. Além disso, continuo me aprimorando e buscando conhecimentos em outros ramos da área, como por exemplo, no Java para backend e ReactNative para o desenvolvimento Mobile. 

Dessa forma, sigo me desafiando e complementando o meu leque de conhecimentos para uma maior capacitação e qualificação todos os dias.
        </p>
      </section>
    </div>
  )
}
