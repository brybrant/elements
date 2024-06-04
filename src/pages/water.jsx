import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './water.module.scss';

export default function Water() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Water</title>
        <link rel='icon' type='image/svg+xml' href='/elements/water.svg'/>
      </Helmet>
      <main className={styles.background}>
        <div className='element'>
          {Elements(styles)}
        </div>

        <h1>Water</h1>

        <p>By Matt Bryant</p>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/water.module.scss'
        />
      </main>
    </HelmetProvider>
  );
};
