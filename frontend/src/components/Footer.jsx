import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import facebook from "../assets/imgs/navbar/facebook.png";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {

  const [contectImg, setContectImg] = useState([
    { img: <img className="w-[14px] h-[14px]" src={facebook} alt=""></img> },
    { img: <MailOutlineIcon sx={{ width: "18px", height: "18px" }}></MailOutlineIcon> },
    { img: <PhoneIcon sx={{ width: "18px", height: "18px" }}></PhoneIcon> }
  ]);

  const { t, i18n } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
    return (
      <div className="bg-footer">
      <div className="footer">
        <div className="box-footer">
          <div className="footer-left">
            <h2 className="text-[20px] pb-[20px]">{t("overview")}</h2>
            <div className="anime">
              <h2 className="lt">{t("services")}</h2>
              <div className="line"></div>
            </div>
            <div className="anime">
              <h2 className="lt">{t("who_we")}</h2>
              <div className="line"></div>
            </div>
            <div className="anime">
              <h2 className="lt">{t("article")}</h2>
              <div className="line"></div>
            </div>
            <div className="anime">
              <h2 className="lt">{t("privacy")}</h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="lt-business-info">{t("business_info")}</h2>
            <h2 className="lt-empire">{t("empire")}</h2>
            <button className="btn-number">(66) 2019-8088</button>
            <button className="btn-email">info@connectacc.co.th</button>
          </div>
        </div>
        <div className="lt-footer">
          <p>© 2024 • Powered by ConnectAcc</p>
          <div className="flex items-center gap-[20px]">
            {contectImg?.map((data, index) =>
            (
              <div key={index}>
                {data?.img}
              </div>
            )
            )}
          </div>
          <button onClick={scrollToTop} className="btn-back-top">{t("back_to_top")}</button>
        </div>

      </div>
    </div>
    )
  }
  
  export default Footer