import { useEffect } from 'react';
import Head from "next/head";
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
    // jquery needs to load first, then the callback loads the other scripts
    let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"];
    scripts.forEach(item => {
      addScript(item);
    });

    addScript("https://code.jquery.com/jquery-3.5.1.slim.min.js", function () {
      let scripts2 = ["https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js", "/assets/js/app.js"];
      scripts2.forEach(item => {
        addScript(item);
      });
    })
  },[]);


  return (
    <>
      <Head>
        <title>87LUX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* CONTENT */}
      {props.children}
      {/* FOOTER*/}
      <Footer />
    </>
  );
}


