export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>Copyright {year} </span>
    </footer>
  );
}
