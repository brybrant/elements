import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import GitHubSVG from '../svg/github.svg?react';
import './fire.scss';

export default function Fire() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Fire</title>
        <link rel='icon' type='image/svg+xml' href='/elements/fire.svg'/>
      </Helmet>
      <main className='fire'>
        <div className='element'>
          {Elements()}
        </div>
        <h1>Fire</h1>
        <p>Made with CSS by Matt Bryant</p>
        <a
          className='button'
          href={`${__GITHUB__}/blob/master/src/pages/fire.scss`}
          target='_blank'
        ><GitHubSVG/>View Source</a>
      </main>
    </HelmetProvider>
  );
};
