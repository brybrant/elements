import GitHubSVG from '../svg/github.svg?react';

export default function SourceButton(props) {
  return (
    <a
      className={`button ${props.className}`}
      href={`https://github.com/brybrant/elements${props.href || ''}`}
      target='_blank'
    ><GitHubSVG/>View Source</a>
  );
};
