import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './earth.module.scss';

export default function Earth() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Earth</title>
        <link rel='icon' type='image/svg+xml' href='/elements/earth.svg'/>
      </Helmet>
      <main className={styles.background}>
        <div className='element'>
          {Elements(styles)}
        </div>

        <h1>Earth</h1>

        <p>By Matt Bryant</p>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/earth.module.scss'
        />
      </main>
    </HelmetProvider>
  );
};
