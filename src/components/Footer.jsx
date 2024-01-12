const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:py-8">
      <div className="container ">
        <p className="text-center text-base text-gray-500">
          Copyright ©{currentYear} | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
};
export default Footer;
