import React from "react";
import Head from "next/head";
import fetch from "isomorphic-fetch";

import Container from "../components/container";
import Users from "../components/users";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Next.js - Home</title>
      </Head>
      <Container>
        <h1>Next</h1>

        <Users users={props.users} />
      </Container>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
//   console.log(resJSON)
  return { users: resJSON.data };
};

export default Index;
