import clsx from "clsx";

interface ButtonProps {
  type: string,
  name: string
}

const Button = ({ type, name }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(type === "action" ? "bg-brand-button text-brand-button-text hover:text-white px-2 md:px-4 py-2 border border-black" : "")}
      onClick={async () => {}}
    >
      {name}
    </button>
  )
}

export default Button;