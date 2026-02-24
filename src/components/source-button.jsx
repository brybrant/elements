import PropTypes from 'prop-types';

import GitHubSVG from '@brybrant/svg-icons/GitHub.svg';

/**
 * @param {object} props
 * @param {string} props.href
 */
export default function SourceButton(props) {
  return (
    <a
      rel='noreferrer'
      className='button'
      href={`https://github.com/brybrant/elements${props.href || ''}`}
      target='_blank'
      dangerouslySetInnerHTML={{ __html: GitHubSVG }}
    />
  );
}

SourceButton.propTypes = {
  href: PropTypes.string.isRequired,
};
