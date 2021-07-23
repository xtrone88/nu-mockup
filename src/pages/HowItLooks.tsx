import {useState} from "react";
import Assets from "../assets/assets";
import Contact from "../components/Contact";
import MetaTags from 'react-meta-tags';
import { useTranslation } from "react-i18next";

const HowItLooks = () => {

  const [showContact, setShowContact] = useState(false)
  const { t } = useTranslation();

    return (
        <>
        <MetaTags>
          <title>NU LXP | What is Nu</title>
          <meta name="description" content="Nu is the first digital learning hub for universities" />
        </MetaTags>
        
        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
            {t("how-it-looks1")}
          </h1>
          <div className="px-4 mt-24 flex justify-center">
            <img src={Assets.images.homeHowitlook} className="md:w-3/4 self-start" alt="What is nu"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36 gap-10">
            <div className="px-4 order-2 md:order-1">
              <img src={Assets.images.homeWhatisNu} alt="Has been the industry since is" />
            </div>
            <div className="order-1 md:order-1 mt-20 md:mt-0">
              <h5 className="font-mont-semibold text-3xl">
                {t("has-been-industry")}
              </h5>
              <p className="mt-5">
                {t("typesetting-industry1")}
              </p>
              <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-black active:bg-indigo-800 text-white hover:bg-indigo-600 focus:outline-none"
                onClick={()=>setShowContact(true)}>
                {t("try-now")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-36 mb-20">
            <div>
              <h5 className="md:mt-32 font-mont-semibold text-3xl">
                {t("intelligenter-content")}
              </h5>
              <p className="mt-5">
                {t("typesetting-industry2")}
              </p>
              <p className="mt-5">
                {t("typesetting-industry3")}
              </p>
              <br/>
              <button className="mt-4 lg:mt-8 px-6 py-3 rounded-xl bg-black active:bg-indigo-800 text-white hover:bg-indigo-600 focus:outline-none"
                onClick={()=>setShowContact(true)}>
                {t("try-now")}
              </button>
            </div>
            <div>
              <img src={Assets.images.homeNotes} alt="Has been the industry since is" />
            </div>
          </div>
        </div>
        <Contact show={showContact} setShow={setShowContact}></Contact>
      </>
    );
};

export default HowItLooks;
