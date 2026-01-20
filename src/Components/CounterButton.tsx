interface Props {
  label: string
  onClick: () => void
}

export default function CounterButton({ label, onClick }: Props) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
