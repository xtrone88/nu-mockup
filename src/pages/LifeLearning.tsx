import Assets from "../assets/assets";
import MetaTags from 'react-meta-tags';
import { useTranslation } from "react-i18next";

const LifeLearning = () => {
    const { t } = useTranslation();
    return (
        <>
        <MetaTags>
          <title>NU LXP | Life long learning</title>
          <meta name="description" content="We help universities take the next step in digitization" />
        </MetaTags>

        <div className="px-4 lg:container lg:mx-auto">
            <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
                {t("life-long-learning")}
            </h1>
            <div className="px-4 mt-24 flex justify-center">
                <img src={Assets.images.homeLifeLearning} className="md:w-3/4" alt="Life long learning"/>
            </div>
            
            <div className="grid grid-cols md:grid-cols-2 mt-24 md:mt-36">
                <div className="md:pr-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        {t("past-of-teaching")}
                    </h1>
                    <p className="mb-5">
                        {t("past-of-teaching-desc1")}
                    </p>
                    <p>
                        {t("past-of-teaching-desc2")}
                    </p>
                </div>
                <div className="mt-24 md:mt-0 md:pl-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        {t("future-of-teaching")}
                    </h1>
                    <p className="mb-5">
                        {t("future-of-teaching-desc1")}
                    </p>
                    <p>
                        {t("future-of-teaching-desc2")}
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-20 h-32 color-bg-6"></div>
        <div className="px-4 lg:container lg:mx-auto">
            <div className="grid grid-cols md:grid-cols-2 mt-24 md:mt-36 mb-24">
                <div className="md:pr-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        {t("nu-missions")}
                    </h1>
                    <p className="mb-5">
                        {t("nu-missions-desc1")}
                    </p>
                    <p>
                        {t("nu-missions-desc2")}
                    </p>
                </div>
                <div className="mt-24 md:mt-0 md:pl-10">
                    <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mb-10">
                        {t("nu-lxp")}
                    </h1>
                    <p className="mb-5">
                        {t("nu-lxp-desc")}
                    </p>
                </div>
            </div>
        </div>
      </>
    );
};

export default LifeLearning;