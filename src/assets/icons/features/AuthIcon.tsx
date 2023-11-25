export function AuthIcon({
  size = 24,
  fill = "#0F0F0F",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1"
      className="h-12 w-12 fill-current"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}
