

const Footer = () => {
    return (
      <div>
        <div className="bg-yellow-600 gap-5 space-y-2 p-10 md:flex justify-center items-center">
            <img src="https://i.ibb.co/bLHdGTw/brand-1.png" alt="" />
            <img src="https://i.ibb.co/xjTDtvL/brand-2.png" alt="" />
            <img src="https://i.ibb.co/bNMJdQD/brand-3.png" alt="" />
        </div>
          <footer className="footer p-10 bg-black  text-white">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    
                </fieldset>
            </form>
        </footer>
      </div>
    );
};

export default Footer;