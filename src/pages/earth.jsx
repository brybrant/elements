import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import GitHubSVG from '../svg/github.svg?react';
import './earth.scss';

export default function Earth() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Earth</title>
        <link rel='icon' type='image/svg+xml' href='/elements/earth.svg'/>
      </Helmet>
      <main className='earth'>
        <div className='element'>
          {Elements()}
        </div>
        <h1>Earth</h1>
        <p>Made with CSS by Matt Bryant</p>
        <a
          className='button'
          href={`${__GITHUB__}/blob/master/src/pages/earth.scss`}
          target='_blank'
        ><GitHubSVG/>View Source</a>
      </main>
    </HelmetProvider>
  );
};
