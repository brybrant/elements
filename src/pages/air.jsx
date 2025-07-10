import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './air.module.scss';

export default function Air() {
  return (
    <>
      <title>Air</title>
      <link rel='icon' type='image/svg+xml' href='/elements/air.svg' />
      <main className={styles.background}>
        <div className='element'>{Elements(styles)}</div>

        <h1>Air</h1>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/air.module.scss'
        />
      </main>
    </>
  );
}
