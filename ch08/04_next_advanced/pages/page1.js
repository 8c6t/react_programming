import Head from 'next/head';
import Icon from '../static/icon.png';
import { add } from '../src/util';

const Page1 = () => {
  return (
    <div>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
      <p>This is home page</p>
      <Head>
        <title>page1</title>
        <img src={Icon} />
        <Head>
          <meta name="description" content="hello world" />
        </Head>
      </Head>
      <style jsx>{`
        p {
          color: blue;
          font-size: 18pt;
        }
      `}</style>
    </div>
  );
}

export default Page1;
