import Assets from "../assets/assets";
import MetaTags from 'react-meta-tags';
import { useTranslation } from "react-i18next";

const WhatIsNew = () => {
  const { t } = useTranslation();
    return (
        <>
        <MetaTags>
          <title>NU LXP | What is Nu</title>
          <meta name="description" content="Nu is the first digital learning hub for universities" />
        </MetaTags>

        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-6xl text-center mt-24 md:mt-36">
              {t("what-is-nu.?")}
          </h1>
          <div className="mt-24 flex justify-center">
            <img src={Assets.images.homeWhatisNu} className="md:w-2/3 self-start" alt="What is nu"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-2">
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconBook} className="w-24 h-24" alt="Icon Book"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">{t("adaptive-learning-AI")}</h5>
              <p className="text-center mt-5 max-w-xs">
                {t("adaptive-learning-AI-desc")}
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconExpert} className="w-24 h-24" alt="Icon Expert"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">{t("developed-by-experts")}</h5>
              <p className="text-center mt-5 max-w-xs">
                {t("developed-by-experts-desc")}
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <img src={Assets.images.iconSkill} className="w-24 h-24" alt="Icon Skill"/>
              <h5 className="font-mont-semibold text-2xl md:text-3xl text-center mt-10">{t("skill-based-learning")}</h5>
              <p className="text-center mt-5 max-w-xs">
                {t("skill-based-learning-desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="gradient-bg-2 h-32 w-full mt-20"></div>

        <div className="px-4 lg:container lg:mx-auto">
          <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36">
            {t("key-features")}
          </h1>
          <p className="mt-5 max-w-2xl">
            {t("typesetting-industry")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
            <div>
              <ul className="list-none items-baseline mb-5 font-mont-semibold">
                <li>
                  <span className="text-indigo-900 mr-10">01</span>
                  Skill Manager & Event Manager
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">02</span>
                  {t("recommendation-ai")}
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">03</span>
                  {t("online-exams")}
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">04</span>
                  {t("interactive-learning")}
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">05</span>
                  {t("action-competence")}
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">06</span>
                  {t("individual-construction")}
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none items-baseline mb-5 font-mont-semibold">
                <li>
                  <span className="text-indigo-900 mr-10">07</span>
                  Potential orientation
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">08</span>
                  Self-regulation
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">09</span>
                  Transversal competences
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">10</span>
                  Problem solving competence
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">11</span>
                  Modular teaching
                </li>
                <li>
                  <span className="text-indigo-900 mr-10">12</span>
                  Modular and flexible preparation for labour market
                </li>
              </ul>
            </div>
          </div>

          <h1 className="font-mont-semibold leading-normal text-4xl md:text-5xl mt-24 md:mt-36 text-center">
            {t("what-do-we-change")}
          </h1>

          <p className="mt-5 text-center mt-10">
            {t("what-do-we-change-desc")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20 gap-4">
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-1 p-8">
              <img src={Assets.images.iconChg1} className="w-20 h-20" alt="Strengthening of self-efficacy expectations"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">{t("self-efficacy-expectations")}</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                {t("self-efficacy-expectations-desc")}
              </p>
            </div>
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-2 p-8">
              <img src={Assets.images.iconChg2} className="w-20 h-20" alt="Enabling and supporting the individual"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">{t("enabling-and-supporting")}</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                {t("enabling-and-supporting-desc")}
              </p>
            </div>

            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-3 p-8">
              <img src={Assets.images.iconChg3} className="w-20 h-20" alt="Competence orientation"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">{t("competence-orientation")}</h6>
              <p className="mt-5 text-blue-800 text-center text-sm"> 
                {t("competence-orientation-desc")}
              </p>
            </div>
            <div className="md:h-144 lg:h-104 flex flex-col items-center rounded-xl color-bg-4 p-8">
              <img src={Assets.images.iconChg4} className="w-20 h-20" alt="Increasing motivation and commitment"/>
              <h6 className="font-mont-semibold text-blue-900 mt-10 text-center">{t("increasing-motivation")}</h6>
              <p className="mt-5 text-blue-800 text-center text-sm">
                {t("increasing-motivation-desc")}
              </p>
            </div>
          </div>

        </div>
      </>
    );
};

export default WhatIsNew;