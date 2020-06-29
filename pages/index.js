import React from "react";
import Head from "next/head";
import Container from "../components/container";

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js - Home</title>
      </Head>
      <Container>
        <h1>Hola mundo!</h1>
      </Container>
    </>
  );
};

export default Index;
