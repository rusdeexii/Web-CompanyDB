import React from 'react';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        <i className="fa-solid fa-eye-dropper"></i>
          <a href="#">FAST</a>
        </div>
        <ul className="socials">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
         <li><a href='https://www.github.com/rusdeexii'><i className="fa-brands fa-github"></i></a></li>
        </ul>
        <div className="copyright">CompanyDB &copy; 2024</div>
      </div>
    </div>
  );
}

export default AppFooter;