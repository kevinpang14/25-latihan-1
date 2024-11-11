import React from "react";

const Footer = () => {
  return (
    <div id="containerFooter" className="mx-auto bg-slate-200 py-5">
      <div
        id="footer"
        className="max-w-screen-lg flex flex-row justify-between mx-auto"
      >
        <div>
          <p>&copy; 2009-2014, PT Tokopedia</p>
        </div>
        <div id="footerList">
          <ul className="flex flex-row space-x-4 text-xs py-1">
            <li>Tentang Kami</li>
            <li>Pusat Penjual</li>
            <li>Mobile Apps</li>
            <li>Mitra</li>
            <li>Karir</li>
            <li>Tokopedia Care</li>
            <li>B2B Digital</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
