import React from 'react'
import cactusImg from '../public/img/svg/cactus.svg'
import sup from '../public/img/svg/sup.svg'
import fireSup from '../public/img/svg/sup煙火.svg'
import fire from '../public/img/svg/煙火.svg'

type ParagraphProps = {
    style: string
    srcImg: string
    title: string
}

interface PropsType {
    handleFormBtnClick: () => void
}

const ParagraphTitle = (props: ParagraphProps) => (
    <div className={props.style}>
        <img src={props.srcImg} alt={props.srcImg} />
        <h5 className='font-h5'>{props.title}</h5>
        <img src={props.srcImg} alt={props.srcImg} />
    </div>
)

function Information(props: PropsType) {

    return (
        <div className='information-wrapper'>
            <div className='information-titleGroup'>
                <p>There is no one</p>
                <p>who loves pain</p>
            </div>
            <button className='default-btn' onClick={props.handleFormBtnClick}>ＦＯＲＭ</button>
            <div className='infos'>
                <img src={sup} alt='sup' className='supImg' />
                <ParagraphTitle style='infos-titleGroup' srcImg={cactusImg} title='paragraph' />
                <ul>
                    <li className='font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <ParagraphTitle style='infos-titleGroup' srcImg={cactusImg} title='paragraph' />
                <ul>
                    <li className='font-body'>Quisque sodales leo <span className='bold underline'>vitae vulputate auctor</span>.</li>
                    <li className='font-body'>Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit.</li>
                    <li className='font-body'>Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.</li>
                    <li className='font-body'>Donec ultrices sapien <span className='bold'>vitae leo venenatis ullamcorper</span>.</li>
                </ul>
                <img src={fireSup} alt='fireSup' className='fireSupImg' />
                <img src={fire} alt='fire' className='fireImg' />
            </div>
        </div>
    )
}

export default Information