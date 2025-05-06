export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="
        w-full 
        bg-black/70 backdrop-blur-md py-2
        text-white 
        text-center 
        font-medium 
        text-[1.1rem] 
        tracking-wide 
        md:px-1 md:py-2 md:text-base
      "
    >
      <p>&copy; {year} The Dispute Resolution Centre. All Rights Reserved.</p>
    </footer>
  );
}
