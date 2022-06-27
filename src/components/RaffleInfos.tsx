import React from 'react'
import lighthouse from '../public/img/svg/lighthouse.svg'

interface RaffleInfosType {
    color: string
    info: string
}

const raffleInfos: RaffleInfosType[] = [
    {
        color: 'brown',
        info: '13.32'
    },
    {
        color: 'blue',
        info: 'who seeks after it and'
    },
    {
        color: 'blue',
        info: 'wants to have it'
    }
]

function RaffleInfos() {
    return (
        <div className='raffle-infos-wrapper'>
            <div className='raffle-infos-title-group'>
                {
                    raffleInfos.map(info => (
                        <h4 className={`font-h4 ${info.color === 'blue' ? 'h4-blue' : 'h4-brown'}`} key={info.info}>{info.info}</h4>
                    ))
                }
            </div>
            <img src={lighthouse} alt='lighthouse' />
        </div >
    )
}

export default RaffleInfos