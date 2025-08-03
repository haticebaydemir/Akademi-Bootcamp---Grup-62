export function Input({ className = '', ...props }) {
  return (
    <input
      className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
    />
  );
}