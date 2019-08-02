import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';

const Page1 = () => {
  return (
    <div>
      <Link href="/page2" passHref>
        <a>page2로 이동</a>
      </Link>
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
