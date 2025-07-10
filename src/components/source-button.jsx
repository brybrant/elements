import PropTypes from 'prop-types';

import GitHubSVG from '@brybrant/svg-icons/GitHub.svg';

export default function SourceButton({ href }) {
  return (
    <a
      rel='noreferrer'
      className='button'
      href={`https://github.com/brybrant/elements${href || ''}`}
      target='_blank'
      dangerouslySetInnerHTML={{ __html: GitHubSVG }}
    />
  );
}

SourceButton.propTypes = {
  href: PropTypes.string.isRequired,
};
