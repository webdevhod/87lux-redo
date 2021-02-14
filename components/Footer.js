export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h3 className="footer__header">We work with any budget! </h3>
        <btn className="footer__cta cta-button" type="button" data-toggle="modal" data-target="#messageModal" data-whatever="@87lux">Let's Get Started</btn>
      </div>
    </footer>
  );
}