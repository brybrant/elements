import { Helmet, HelmetProvider } from 'react-helmet-async';

import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './air.module.scss';

export default function Air() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Air</title>
        <link rel='icon' type='image/svg+xml' href='/elements/air.svg' />
      </Helmet>
      <main className={styles.background}>
        <div className='element'>{Elements(styles)}</div>

        <h1>Air</h1>

        <p>By Matt Bryant</p>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/air.module.scss'
        />
      </main>
    </HelmetProvider>
  );
}
