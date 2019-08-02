import { callApi } from '../src/api';

const Page2 = ({ text, data, userAgent }) => {
  return (
    <div>
      <p>this is home page2</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ${data}`}</p>
      <p>{`userAgent: ${userAgent}`}</p>
    </div>
  );
}

Page2.getInitialProps = async ({ query, req }) => {
  // throw new Error('exception in getInitialProps');
  const text = query.text || 'none';
  const data = await callApi();
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { text, data, userAgent };
}

export default Page2;
