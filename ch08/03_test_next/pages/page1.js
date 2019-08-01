import Head from 'next/head';

const Page1 = () => {
  return (
    <div>
      <p>This is home page</p>
      <Head>
        <title>page1</title>
        <img src="/static/icon.png" />
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
