import React from 'react'
import marketRoof from '../public/img/svg/marketroof.svg'
import star from '../public/img/svg/star.svg'
import marketItem1 from '../public/img/svg/marketItem-1.svg'
import marketItem2 from '../public/img/svg/marketItem-2.svg'
import marketItem3 from '../public/img/svg/marketItem-3.svg'
import marketItem4 from '../public/img/svg/marketItem-4.svg'

interface MarketItemType {
    src: string
    name: string
}

const marketItem: MarketItemType[] = [
    {
        src: marketItem1,
        name: 'marketItem-1'
    },
    {
        src: marketItem2,
        name: 'marketItem-2'
    },
    {
        src: marketItem3,
        name: 'marketItem-3'
    },
    {
        src: marketItem4,
        name: 'marketItem-4'
    }
]

function GoToShop() {
    return (
        <div className='goToShop-wrapper'>
            <div className='goToShop-title'>
                <p>Neque porro quisquam</p>
                <p>est qui dolorem!</p>
            </div>
            <img src={marketRoof} alt='roof' />
            <div className='goToShop-market'>
                <p className='goToShop-market-name'>Argentina</p>
                <div className='goToShop-item-title'>
                    <img src={star} alt='star' />
                    <p>adipisci velit.</p>
                </div>
                <div className='goToShop-item-title'>
                    <img src={star} alt='star' />
                    <p>adipisci velit.</p>
                </div>
                <div className='goToShop-marketItems'>
                    {
                        marketItem.map(item => (
                            <img src={item.src} alt={item.name} key={item.name} />
                        ))
                    }
                </div>
                <div className='goToShop-dot'>
                    <div />
                    <div />
                    <div />
                </div>

            </div>
        </div>
    )
}

export default GoToShop