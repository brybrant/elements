import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import GitHubSVG from '../svg/github.svg?react';
import './water.scss';

export default function Water() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Water</title>
        <link rel='icon' type='image/svg+xml' href='/elements/water.svg'/>
      </Helmet>
      <main className='water'>
        <div className='element'>
          {Elements()}
        </div>
        <h1>Water</h1>
        <p>Made with CSS by Matt Bryant</p>
        <a
          className='button'
          href={`${__GITHUB__}/blob/master/src/pages/water.scss`}
          target='_blank'
        ><GitHubSVG/>View Source</a>
      </main>
    </HelmetProvider>
  );
};
