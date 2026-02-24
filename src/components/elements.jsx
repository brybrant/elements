/**
 * Generates the DOM elements necessary for CSS animation
 * @param {object} styles Transformed CSS class names (from CSS modules)
 * @param {string} styles.core CSS class for "cores" (large elements)
 * @param {string} styles.core_container CSS class for "core container"
 * @param {string} styles.fragment CSS class for "fragments" (medium elements)
 * @param {string} styles.fragment_container CSS class for "fragment container"
 * @param {string} styles.particle CSS class for "particles" (small elements)
 * @param {string} styles.particle_container CSS class for "particle container"
 */
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
