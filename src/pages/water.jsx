import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './water.module.scss';

/** Water page */
export default function Water() {
  return (
    <>
      <title>Water</title>
      <link rel='icon' type='image/svg+xml' href='/elements/water.svg' />
      <main className={styles.background}>
        <div className='element'>{Elements(styles)}</div>

        <h1>Water</h1>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/water.module.scss'
        />
      </main>
    </>
  );
}
