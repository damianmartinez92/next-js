import Head from "next/head";
import Container from "../components/container";

const About = () => {
  return (
    <>
      <Head>
        <title>Next.js - About</title>
      </Head>
      <Container>
        <div className="jumbotron">
          <h1 className="display-3">Sobre el proyecto...</h1>
          <p className="lead">
            Este ejemplo sobre el uso de Next.js, fue realizado siguiendo el
            tutorial de Fazt Code en Youtube.
          </p>
          <hr className="my-4" />
          <p>Podes ver el tutorial en el siguiente enlace.</p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="https://www.youtube.com/watch?v=Tn6QYliFBcs&t=1142s"
              target="_blank"
              role="button"
            >
              Ir al video
            </a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
