import React from 'react'

function Single(prop) {
  return (
    <>
      <section
        style={{
          background: `url(${prop.car})`,
          backgroundAttachment: `${prop.bgAttachment}`,
          backgroundPosition: `${prop.bgPosition}`,
          backgroundSize: `${prop.bgSize}`,
        }}
        id="SingleHomeOrCar"
      >
        <div id="ContentWrapper">
          <div id="Desc">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              {prop.title}
            </h2>
            <p data-aos="fade-in">
              {prop.desc}
              <span>{prop.descLink}</span>
            </p>
          </div>
          <div id="Buttons">
            <button data-aos="fade-right" data-aos-duration="900">
              {prop.fButton}
            </button>
            <button
              style={{ display: `${prop.display}` }}
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {prop.sButton}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Single
