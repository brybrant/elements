import Elements from '../components/elements';
import SourceButton from '../components/source-button';
import styles from './fire.module.scss';

export default function Fire() {
  return (
    <>
      <title>Fire</title>
      <link rel='icon' type='image/svg+xml' href='/elements/fire.svg' />
      <main className={styles.background}>
        <div className='element'>{Elements(styles)}</div>

        <h1>Fire</h1>

        <SourceButton
          className={styles.button}
          href='/blob/master/src/pages/fire.module.scss'
        />
      </main>
    </>
  );
}
