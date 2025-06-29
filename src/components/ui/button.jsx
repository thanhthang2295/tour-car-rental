export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-2xl px-4 py-2 font-medium shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
