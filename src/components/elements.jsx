export default function Elements(styles) {
  const particles = [];
  const fragments = [];
  const cores = [];

  for (let i = 0; i < 64; i++) {
    particles.push(<div key={'particle' + i} className={styles.particle} />);
  }

  for (let i = 0; i < 16; i++) {
    fragments.push(<div key={'fragment' + i} className={styles.fragment} />);
  }

  for (let i = 0; i < 4; i++) {
    cores.push(<div key={'core' + i} className={styles.core} />);
  }

  return (
    <>
      <div className={styles.particle_container}>{particles}</div>
      <div className={styles.fragment_container}>{fragments}</div>
      <div className={styles.core_container}>{cores}</div>
    </>
  );
}
