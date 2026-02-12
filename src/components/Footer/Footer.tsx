import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">
        © {currentYear} Omprakash Narayanan Lakshmanan
      </p>
    </footer>
  );
};
