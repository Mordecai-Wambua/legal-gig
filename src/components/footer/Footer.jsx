import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} The Dispute Resolution Centre. All Rights Reserved.</p>
    </footer>
  );
}
