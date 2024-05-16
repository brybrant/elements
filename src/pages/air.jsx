import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import GitHubSVG from '../svg/github.svg?react';
import './air.scss';

export default function Air() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Air</title>
        <link rel='icon' type='image/svg+xml' href='/elements/air.svg'/>
      </Helmet>
      <main className='air'>
        <div className='element'>
          {Elements()}
        </div>
        <h1>Air</h1>
        <p>Made with CSS by Matt Bryant</p>
        <a
          className='button'
          href={`${__GITHUB__}/blob/master/src/pages/air.scss`}
          target='_blank'
        ><GitHubSVG/>View Source</a>
      </main>
    </HelmetProvider>
  );
};
