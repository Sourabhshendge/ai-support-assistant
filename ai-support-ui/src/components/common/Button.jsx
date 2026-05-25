function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button"
}) {

  return (

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4
        py-3
        rounded-xl
        font-medium
        transition
        bg-blue-600
        hover:bg-blue-700
        disabled:bg-slate-600
        text-white
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;