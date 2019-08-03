import Head from 'next/head';
import styled from 'styled-components';

import Icon from '../static/icon.png';
import { add } from '../src/util';

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`;

const Page1 = () => {
  return (
    <div>
      <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
      <MyP>This is home page</MyP>
      <Head>
        <title>page1</title>
        <img src={Icon} />
        <Head>
          <meta name="description" content="hello world" />
        </Head>
      </Head>
    </div>
  );
}

export default Page1;
