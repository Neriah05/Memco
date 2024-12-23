function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
        {/* Column 1: Logo and Description */}
        <div className="flex-1 max-w-md space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">⭐</span>
            </div>
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            As digital reserves gain momentum, $MARs unites the meme coin
            ecosystem into one powerful token. Backed by top meme assets, $MARs
            is more than just currency—it’s the central bank of memes, where
            wealth meets culture. Join the movement.
          </p>
          <div className="flex space-x-6 text-lg text-gray-400">
            <a href="#" className="hover:text-white">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="hover:text-white">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="hover:text-white">
              <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="#" className="hover:text-white">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="hover:text-white">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        {/* Column 2: Contact Us */}
        <div className="flex-1 max-w-md space-y-6">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="space-y-4 text-base text-gray-300 leading-relaxed">
            <li>Mailing Address: xx00 E. Union Ave</li>
            <li>Suite 1100. Denver, CO 80237</li>
            <li>+999 90932 627</li>
            <li>
              <a
                href="mailto:support@yourdomain.com"
                className="hover:text-white underline"
              >
                support@yourdomain.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
