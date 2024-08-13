import React from 'react'
import '../properties/pro.css'
import watch from '../../src/imges/watch.png';
import book from '../../src/imges/book.png';
import loops from '../../src/imges/loop.png';
export const Properties = () => {
    return (
        <div className='properties'>
            <div className="address">
                <h1>لماذا المنصة </h1>
            </div>
            <span className='mark'></span>
            <span className='mark2'></span>
            <div className='pros'>
                <div data-aos-duration='1000' data-aos="fade-left" className="pro">
                    <img src="" alt="" srcSet={watch} />
                    <div className='pro-address'>
                        <h3> وفر وقت المواصلات والدروس </h3>
                    </div>
                </div>
                <div data-aos-duration='1000' data-aos="fade-up" className="pro">
                    <img src="" alt="" srcSet={loops} />
                    <div className='pro-address'>
                        <h3> شاهد دروسك اكتر من مره </h3>
                    </div>
                </div>
                <div data-aos-duration='1000' data-aos="fade-right" className="pro">
                    <img src="" alt="" srcSet={book} />
                    <div className='pro-address'>
                        <h3>مراجعة وامتحانات دورية  </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
