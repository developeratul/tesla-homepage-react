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
            <h2>{prop.title}</h2>
            <p>
              {prop.desc}
              <span>{prop.descLink}</span>
            </p>
          </div>
          <div id="Buttons">
            <button>{prop.fButton}</button>
            <button>{prop.sButton}</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Single
