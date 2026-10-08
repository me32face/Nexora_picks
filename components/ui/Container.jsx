export default function Container({ children, className = "", size = "default" }) {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    narrow: "max-w-3xl"
  };

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size] || sizeClasses.default} ${className}`}>
      {children}
    </div>
  );
}
