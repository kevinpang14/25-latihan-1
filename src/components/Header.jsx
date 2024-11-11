import React from "react";

const Header = () => {
  return (
    <div id="containerHeader" className="mx-auto border-b-2 bg-black">
      <div
        id="header"
        className="max-w-screen-lg flex flex-row justify-between mx-auto"
      >
        <div id="headerMenu">
          <ul className="flex flex-row space-x-4 text-xs py-1 text-white">
            <li>Jual Beli Online</li>
            <li>Official Store</li>
            <li>Produk Digital</li>
            <li>Tiket Kereta</li>
            <li>Tiket Pesawat</li>
            <li>Donasi</li>
            <li>Layanan Finansial</li>
          </ul>
        </div>
        <div
          id="headerLogo"
          className="flex flex-row flex-wrap space-x-4 py-1 pr-6"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/doodle/48/instagram-new.png"
            alt="instagram-new"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/twitter--v1.png"
            alt="twitter--v1"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/youtube-play--v1.png"
            alt="youtube-play--v1"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
