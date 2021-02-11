import React from 'react'
import Data from './Data'
import Single from './Single'

function SingleCarOrHome() {
  return (
    <>
      {Data.map((datas, index) => {
        return (
          <Single
            key={index}
            title={datas.title}
            desc={datas.desc}
            descLink={datas.descLink}
            fButton={datas.fButton}
            sButton={datas.sButton}
            car={datas.car}
            bgAttachment={datas.bgAttachment}
            bgPosition={datas.bgPosition}
            bgSize={datas.bgSize}
            display={datas.display}
          />
        )
      })}
    </>
  )
}

export default SingleCarOrHome
