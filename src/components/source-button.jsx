import PropTypes from 'prop-types';

import GitHubSVG from '../../node_modules/@brybrant/svg-icons/GitHub.svg';

export default function SourceButton(props) {
  return (
    <a
      rel='noreferrer'
      className={`button ${props.className}`}
      href={`https://github.com/brybrant/elements${props.href || ''}`}
      target='_blank'
    >
      <span dangerouslySetInnerHTML={{ __html: GitHubSVG }} />
      View Source
    </a>
  );
}

SourceButton.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
