import { useEffect } from "react";
const Translate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        autoDisplay: false,
        includedLanguages: 'en,es,de,ja,fr,it,pt,zh-CN,hi,ru,el,no',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
    //   
    // layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      "google_translate_element"
    );
  };
  useEffect(() => {
    const translateDiv = document.createElement('div');
    translateDiv.classList.add('z-50', 'bg-[#FFD0D0]', 'bottom-0', 'left-0', 'fixed', 'rounded-md', 'shadow-box', 'scale-75', '800:scale-100'); 
    translateDiv.id = 'google_translate_element'
    document.getElementById('root').appendChild(translateDiv);
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return null  

};

export default Translate;
{/* <div id="google_translate_element" className="z-50 bg-white bottom-0 right-0 fixed"></div> */}