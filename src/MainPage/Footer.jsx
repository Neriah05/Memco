function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">⭐</span>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            ducimus voluptatibus neque illo id repellat quisquam? Autem expedita
            earum quae laborum ipsum ad.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
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

        {/* Column 2: Privacy & TOS */}
        <div>
          <h3 className="text-lg font-bold mb-4">Privacy & TOS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Advertiser Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Acceptable Use Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Technology Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Developer Agreement
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigate */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navigate</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Advertisers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Connect
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Mailing Address: xx00 E. Union Ave</li>
            <li>Suite 1100. Denver, CO 80237</li>
            <li>+999 90932 627</li>
            <li>
              <a
                href="mailto:support@yourdomain.com"
                className="hover:text-white"
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
