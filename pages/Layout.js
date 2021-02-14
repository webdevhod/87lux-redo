import Head from "next/head";
import { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout(props) {
  function addScript(path, callback = null) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    if(callback !== null) {
      script.onload = callback;
    }
    document.body.appendChild(script);
  }
  
  useEffect(() => {
    // jquery needs to load first, then the callback loads the other script
    addScript("https://code.jquery.com/jquery-3.5.1.slim.min.js", function () {
      let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"];
      scripts.forEach(item => {
        addScript(item);
      });
      addScript("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js");
      addScript("/assets/js/app.js");
    })
  },[]);


  return (
    <>
      <Head>
        <title>87LUX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Helmet>

    </Helmet> */}
      {/* HEADER */}
      <Header />
      {/* CONTENT */}
      {props.children}
      {/* FOOTER*/}
      <Footer />
      {/* <script src='https://code.jquery.com/jquery-3.5.1.slim.min.js' integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj' crossOrigin='anonymous' type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" type="text/javascript"></script>
        <script src="/assets/js/app.js" type="text/javascript"></script> */}
    </>
  );
}


