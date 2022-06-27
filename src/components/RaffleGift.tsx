import React from 'react'

interface GiftItem {
    rank: string
    num: string
    name: string
    color: string
}

const giftInfos: GiftItem[] = [
    {
        rank: 'A',
        num: 'ONE',
        name: 'dehumidifier',
        color: 'green'
    },
    {
        rank: 'B',
        num: 'ONE',
        name: 'range hood',
        color: 'green'
    },
    {
        rank: 'C',
        num: 'ONE',
        name: 'vacuum cleaner',
        color: 'green'
    },
    {
        rank: 'D',
        num: 'ONE',
        name: 'toaster',
        color: 'blue'
    },
    {
        rank: 'E',
        num: 'ONE',
        name: 'scale',
        color: 'blue'
    },
    {
        rank: 'F',
        num: 'ONE',
        name: 'straightening iron',
        color: 'blue'
    },
    {
        rank: 'G',
        num: 'FIVE',
        name: 'vacuum cleaner',
        color: 'blue'
    },
    {
        rank: 'H',
        num: 'TEN',
        name: 'rice cooker',
        color: 'blue'
    }
]

function RaffleGift() {
    return (
        <div className='raffle-gift-wrapper'>
            <div className='raffle-gift-group'>
                {
                    giftInfos.map(infoItem => (
                        <div className='raffle-gift-item' key={infoItem.rank}>
                            <div className={infoItem.color === 'green' ? 'greenStyleDiv' : 'blueStyleDiv'}><span>{infoItem.rank}</span></div>
                            <p className={`font-caption ${infoItem.color === 'green' ? 'greenStyleNum' : 'blueStyleNum'}`}>{infoItem.num}</p>
                            <h5 className={`font-h5 ${infoItem.color === 'green' ? 'greenStyleH5' : 'blueStyleH5'}`}>{infoItem.name}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RaffleGift