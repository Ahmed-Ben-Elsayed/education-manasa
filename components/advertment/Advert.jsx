import React from 'react'
import '../advertment/advert.css'
import advertimg from '../../src/imges/advert.png'
export const Advert = () => {
    return (
        <>
            <div className='advert'>
                <div data-aos="fade-left"
                    data-aos-duration='1000' className="advert-right">
                    <img src="" alt="" srcSet={advertimg} />
                </div>
                <div data-aos="fade-right"
                    data-aos-duration='1000' className="advert-left">
                    <h3>منصة مجتمع الرياضيات</h3>
                    <h2> <span>لشرح منهج الرياضيات  </span>للصفوف الإعداديه والثانوية</h2>
                    <span className='mark'></span>
                    <p> هل تحتاج مساعدة فى مادة الرياضيات ؟</p>
                    <h3>انضم الآن لمنصة الأستاذ   محمد صلاح  !
                    </h3>
                    <button className="shadow__btn">
                        انضم الان
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}
