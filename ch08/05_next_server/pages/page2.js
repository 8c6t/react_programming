import { callApi } from '../src/api';
import { add } from '../src/util';

const Page2 = ({ text, data, userAgent }) => {
/*   const onClick = () => {
    import('../src/sayHello').then(({ sayHello }) => console.log(sayHello()));
  } */

  return (
    <div>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
      <p>this is home page2</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ${data}`}</p>
      <p>{`userAgent: ${userAgent}`}</p>
      {/* <button onClick={onClick}>sayHello</button> */}
    </div>
  );
}

Page2.getInitialProps = async ({ query, req }) => {
  // throw new Error('exception in getInitialProps');
  const text = query.text || 'none';
  const data = await callApi();
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { sayHello } = await import('../src/sayHello');
  console.log(sayHello());
  return { text, data, userAgent };
}

export default Page2;
