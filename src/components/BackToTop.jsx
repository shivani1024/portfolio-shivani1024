import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop({ show }) {
  return (
    <button
      className={`back-to-top${show ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
} 