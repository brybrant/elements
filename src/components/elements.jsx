const particles = [];
const fragments = [];
const cores = [];

for (let index = 0; index < 64; index++) {
  particles.push(<div key={'particle' + index} className='particle'/>);
  if (index % 4 == 0) {
    fragments.push(
      <div key={'fragment' + (fragments.length + 1)} className='fragment'/>
    );
  };
  if (index % 16 == 0) {
    cores.push(
      <div key={'core' + (cores.length + 1)} className='core'/>
    );
  };
};

export default function Elements() {
  return (
    <>
      <div className='particle-container'>{particles}</div>
      <div className='fragment-container'>{fragments}</div>
      <div className='core-container'>{cores}</div>
    </>
  )
};