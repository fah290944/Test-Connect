import { Button, TextField, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navber";
import { useTranslation } from "react-i18next";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import empowering from '../assets/imgs/home/empowering.png'
import errorPage from '../assets/imgs/home/error-page.png'
import blogInsights from '../assets/imgs/home/blog-insights.png'
import entreIndustry from '../assets/imgs/home/entrepreneurs-industry.png'
import time from '../assets/imgs/home/time-icon.png'
import letter from '../assets/imgs/home/letter-icon.png'
import commpany from '../assets/imgs/home/commpany-icon.png'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import arrow from '../assets/imgs/home/arrow.png'
import bg from '../assets/imgs/home/bg.png'
import cityscape from '../assets/imgs/home/cityscape.jpg'



function Home() {

  const { t, i18n } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Accounting',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="home-page h-[100vh]">

      <div className="bg-accounting">
        <div className="accounting">
          <div className="bg-img-accounting">
              <img src={bg} alt="" className="img-accounting"/>
              
              <div className="box-accounting">
                <div className="lt-accounting">{t("accounting_home")}</div>
                <div className="lt-solutions">{t("solutions")}</div>
                <div className="lt-business">{t("business")}</div>
                <div className="lt-tax">{t("tax")}</div>
                <div className="lt-description1">{t("description1")}</div>
                <button className="btn-contact-us">{t("contact_us_home")}</button>
              </div>

          </div>
        </div>
      </div>

      <div className="bg-about-us">
        <div className="about-us">
          <div className="bg-manage">
            <div className="bg-img-when">
              <img src={cityscape} alt="" className="img-tower"/>
              <div className="box-when-it">{t("when_it")}</div>
            </div>
            <div className="box-lt-about">
              <div className="text-[40px] py-[20px]">{t("about_us_home")}</div>
              <div className="text-[#4778c6] font-bold text-[18px] pb-[20px]">{t("connect")} <span className="font-normal">{t("des_connect")}</span></div>
              
              <div className="flex items-start gap-[20px] pb-[20px]">
                <img src={arrow} alt="" className="w-[18px] h-[18px]"></img>
                <div className="text-[#4778c6] font-bold text-[18px]">{t("innovation")}<span className="dash"> - </span><span className="font-normal">{t("des_innovation")}</span></div>
              </div>

              <div className="flex items-start gap-[20px] pb-[20px]">
                <img src={arrow} alt="" className="w-[18px] h-[18px]"></img>
                <div className="text-[#4778c6] font-bold text-[18px]">{t("empathy")}<span className="dash"> - </span><span className="font-normal">{t("des_empathy")}</span></div>
              </div>

              <div className="flex items-start gap-[20px] pb-[20px]">
                <img src={arrow} alt="" className="w-[18px] h-[18px]"></img>
                <div className="text-[#4778c6] font-bold text-[18px]">{t("excellence")}<span className="dash"> - </span><span className="font-normal">{t("des_excellence")}</span></div>
              </div>

              <div className="flex items-start gap-[20px] pb-[20px]">
                <img src={arrow} alt="" className="w-[18px] h-[18px]"></img>
                <div className="text-[#4778c6] font-bold text-[18px]">{t("commitment")}<span className="dash"> - </span><span className="font-normal">{t("des_commitment")}</span></div>
              </div>
  
              <div className="text-[18px] pt-[20px]">{t("description_about_us")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-solution-for-every">
        <div className="solution-for-every">
          <div className="lt-solution-for-every">
            <h1 className="lt-solution">{t('solution_for')}</h1>
            <p className="lt-des">{t('description2')}</p>
          </div>
          <div className="box-des-1">
            <div className="bg-[#fff] box-auditing_for">
              <EventAvailableIcon className="icon-eventAvailable" ></EventAvailableIcon>
              <div className="lt-auditing_for">
                <h3 className="auditing_for">{t("auditing_for")}</h3>
                <p className="des_auditing">{t("des_auditing")}</p>
                <div className="read_more">{t("read_more")}{" >"}</div>
              </div>
            </div>

            <div className="bg-[#fff] box-accounting_for">
              <LibraryBooksIcon className="icon-eventAvailable" ></LibraryBooksIcon>
              <div className="lt-accounting_for">
                <h3 className="accounting_for">{t("accounting_for")}</h3>
                <p className="des_accounting">{t("des_accounting")}</p>
                <div className="read_more">{t("read_more")}{" >"}</div>
              </div>
            </div>


            <div className="bg-[#fff] box-auditing_for">
              <LocationCityIcon className="icon-eventAvailable" ></LocationCityIcon>
              <div className="lt-auditing_for">
                <h3 className="auditing_for">{t("tax_for")}</h3>
                <p className="des_auditing">{t("des_tax")}</p>
                <div className="read_more">{t("read_more")}{" >"}</div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="bg-need-personal">
        <div className="need-personal">
          <div className="bg-lt-need text-center">
            <h1 className="lt-need">{t("need")}<span className="text-[30px] text-[#2cbc63]"> ?</span></h1>
            <p className="lt-des-need text-[16px]">{t("des_need")}</p>
            <button className="btn-how-we-can">{t("how_we_can")}</button>
          </div>
          <div className="box-empowering">
            <img className="img-empowering" src={empowering} alt=""></img>
            <div className="bg-empowering">
              <h2 className="lt-empowering">{t("empowering")}</h2>
              <div className="flex flex-col items-start gap-[10px]">
                <button className="lt-financial">{t("financial_empowering")}</button>
                <button className="lt-income">{t("income_empowering")}</button>
                <button className="lt-payroll">{t("payroll_empowering")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-no-matter">
        <div className="no-matter">
          <h1 className="text-[30px] text-center pt-[50px] pb-[60px]">{t("no_matter")}</h1>
          <div className="bg-box-matter">
            <div className="box-matter">
              <h2 className="text-[20px] pb-[35px]">{t("accounting_firms")}</h2>
              <div className="w-full flex justify-center pb-[20px]">
                <img className="img-matter" src={errorPage} alt=""></img>
              </div>
              <p className="des_accounting_firms">{t("des_accounting_firms")}</p>
            </div>

            <div className="box-matter">
              <h2 className="text-[20px] pb-[35px]">{t("local")}</h2>
              <div className="w-full flex justify-center pb-[20px]">
                <img className="img-matter" src={entreIndustry} alt=""></img>
              </div>
              <p className="des_accounting_firms">{t("des_local")}</p>
            </div>

            <div className="box-matter">
              <h2 className="text-[20px] pb-[35px]">{t("multinational")}</h2>
              <div className="w-full flex justify-center pb-[20px]">
                <img className="img-matter" src={blogInsights} alt=""></img>
              </div>
              <p className="des_accounting_firms">{t("des_multinational")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-get-personal">
        <div className="get-personal">

          <div className="bg-get text-[#fff]">
            <h1 className="lt-get">{t("get")}<span className="text-[#2cbc63]">.</span></h1>

            <div className="bg-lr-get">

              <div className="box-get">
                <div className="flex items-center gap-[10px] pb-[10px]">
                  <img src={commpany} alt="" className="img-get"></img>
                  <div className="text-[#fff] text-[24px] hover:text-[#2cbc63]">{t('office')}</div>
                </div>
                <p className="text-[#fff] text-[20px]">Sathorn, Bangkok</p>
                <p className="text-[#fff] text-[20px]">Thailand, 10120</p>
              </div>

              <div className="box-get">
                <div className="flex items-center gap-[10px] pb-[10px]">
                  <img src={letter} alt="" className="img-get"></img>
                  <div className="text-[#fff] text-[24px] hover:text-[#2cbc63]">{t('Contact')}</div>
                </div>
                <p className="text-[#fff] text-[20px]">info@connectacc.co.th</p>
              </div>

              <div className="box-get">
                <div className="flex items-center gap-[10px] pb-[10px]">
                  <img src={time} alt="" className="img-get"></img>
                  <div className="text-[#fff] text-[24px] hover:text-[#2cbc63]">{t('open_hours')}</div>
                </div>
                <p className="text-[#fff] text-[20px]">{t('time')} : 8am – 6pm</p>
              </div>

            </div>


          </div>

          <div className="bg-form text-[#fff]">
            <form onSubmit={handleSubmit}>
              <div className="set-position gap-[10px] pb-[25px]">
                <div className="form-group grid grid-row-2">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("Name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="(123)-456-7890*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="set-position-1 gap-[10px] pb-[25px]">
                <div className="form-group">
                  <label>Email address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("email_home")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Service interested in *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value={t("accounting_services")}>{t("accounting_services")}</option>
                    <option value={t("tax_services")}>{t("tax_services")}</option>
                    <option value={t("financial_services")}>{t("financial_services")}</option>
                    <option value={t("bookkeeping")}>{t("bookkeeping")}</option>
                    <option value={t("payroll")}>{t("payroll")}</option>
                    <option value={t("outsourcing")}>{t("outsourcing")}</option>
                  </select>
                </div>
              </div>

              <div className="form-group pb-[25px]">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder={t("personal")}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group pb-[15px]">
                <label>How can we help?</label>
                <textarea
                  name="message"
                  placeholder={t("des_how")}
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[150px]"
                />
              </div>

              <button type="submit">Request a Quote</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home