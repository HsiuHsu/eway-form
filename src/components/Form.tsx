import React, { useState, useEffect, useRef } from 'react'
import turtleImg from '../public/img/svg/烏龜.svg'
import success from '../public/img/svg/success.svg'
import failure from '../public/img/svg/failure.svg'

interface FormData {
    store: string
    name: string
    phone: string
    amountOfConsumption: string
    payment: string
}

interface DataListType {
    id: string
    store: string
}

interface PropsType {
    formRef: React.RefObject<HTMLDivElement>
}

const storeDataList: DataListType[] = [
    {
        id: '01',
        store: 'store1'
    },
    {
        id: '02',
        store: 'store2'
    },
    {
        id: '03',
        store: 'store3'
    },
    {
        id: '04',
        store: 'store4'
    },
    {
        id: '05',
        store: 'store5'
    },
    {
        id: '06',
        store: 'store6'
    },
]

function Form(props: PropsType) {
    const [formData, setFormData] = useState<FormData>({
        store: '',
        name: '',
        phone: '',
        amountOfConsumption: '',
        payment: 'digital payment'
    })
    const [formErrorData, setFormErrorData] = useState<FormData>({
        store: '',
        name: '',
        phone: '',
        amountOfConsumption: '',
        payment: ''
    })
    /*success failure button */
    const [isDefault, setIsDefault] = useState<boolean>(true)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    /* search in select */
    const [isActive, setIsActive] = useState<boolean>(false)
    const isActiveRef = useRef<HTMLDivElement>(null)
    const [filterData, setFilterData] = useState<DataListType[]>(storeDataList)

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsDefault(false)

        let errorFromData: FormData = {
            store: '',
            name: '',
            phone: '',
            amountOfConsumption: '',
            payment: '',
        }

        if (formData.store === '') {
            errorFromData = { ...errorFromData, store: 'required' }
        } else errorFromData = { ...errorFromData, store: '' }

        if (formData.name === '') {
            errorFromData = { ...errorFromData, name: 'required' }
        } else errorFromData = { ...errorFromData, name: '' }

        if (formData.phone.length === 0) {
            errorFromData = { ...errorFromData, phone: 'required' }
        } else if (formData.phone.length !== 10) {
            errorFromData = { ...errorFromData, phone: 'wrong format' }
        } else errorFromData = { ...errorFromData, phone: '' }

        if (formData.amountOfConsumption === '') {
            errorFromData = { ...errorFromData, amountOfConsumption: 'required' }
        } else if (Number(formData.amountOfConsumption) < 0) {
            errorFromData = { ...errorFromData, amountOfConsumption: 'wrong format' }
        } else errorFromData = { ...errorFromData, amountOfConsumption: '' }

        if (formData.payment === '') {
            errorFromData = { ...errorFromData, payment: 'required' }
        } else errorFromData = { ...errorFromData, payment: '' }
        setFormErrorData(errorFromData)

        if (errorFromData.store === '' && errorFromData.name === '' && errorFromData.phone === '' && errorFromData.amountOfConsumption === '' && errorFromData.payment === '') {
            setIsSuccess(true)
        } else setIsSuccess(false)

    }

    useEffect(() => {
        /*click outside close store select option */
        const handleClickOutside = (e: MouseEvent): void => {
            if (isActiveRef.current && !isActiveRef.current.contains(e.target as Node)) {
                setIsActive(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [])


    return (
        <div className='form-wrapper' ref={props.formRef}>
            <div className='form-titleGroup'>
                <p>ＦＯＲＭ</p>
                <img src={turtleImg} alt='turtle' />
            </div>
            <form onSubmit={(e: any) => handleSubmit(e)}>
                <div className='formItems'>
                    <div ref={isActiveRef}>
                        <label htmlFor='store' className='font-body'>store<span className='font-subtitle'>*</span></label>
                        <input type='text' id='store' placeholder='placeholder text' className={`font-body search-select ${formErrorData.store.length > 0 ? 'error' : 'success'}`}
                            onClick={() => setIsActive(true)} value={formData.store}
                            onChange={(e) => {
                                setIsActive(true)
                                if (e.target.value !== '') {
                                    const filterArr: DataListType[] = storeDataList.filter(list => {
                                        for (let i in list) {
                                            if (list.store.includes(e.target.value)) {
                                                setFormData(pre => ({ ...pre, store: e.target.value }))
                                                return list
                                            }
                                        }
                                    })
                                    setFilterData(filterArr)
                                } else {
                                    setFormData(pre => ({ ...pre, store: '' }))
                                    setFilterData(storeDataList)
                                }
                            }} />
                        <div className={`options ${isActive ? 'active' : 'inactive'}`}>
                            {
                                filterData.length !== 0 ?
                                    filterData.map(data => (
                                        <div key={data.id} onClick={() => {
                                            setFormData(pre => ({ ...pre, store: data.store }))
                                            setFormErrorData(pre => ({ ...pre, store: '' }))
                                            setIsActive(false)
                                        }}>{data.store}</div>
                                    )) : <div className='filterData-null'>no result</div>
                            }
                        </div>
                        {
                            formErrorData.store.length > 0 ? (<p className='font-caption'>{formErrorData.store}</p>) : null
                        }
                    </div>
                    <div>
                        <label htmlFor='name' className='font-body'>name<span className='font-subtitle'>*</span></label>
                        <input type='text' id='name' placeholder='placeholder text' className={`font-body ${formErrorData.name.length > 0 ? 'error' : 'success'}`} value={formData.name}
                            onChange={(e) => {
                                if (e.target.value.match(/^[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9\u4e00-\u9fa5]*$/)) {
                                    setFormData(pre => ({ ...pre, name: e.target.value }))
                                    setFormErrorData(pre => ({ ...pre, name: '' }))
                                }
                                if (e.target.value === '') {
                                    setFormData(pre => ({ ...pre, name: '' }))
                                }
                            }} />
                        {
                            formErrorData.name.length > 0 ? (<p className='font-caption'>{formErrorData.name}</p>) : null
                        }
                    </div>
                    <div>
                        <label htmlFor='phone' className='font-body'>phone<span className='font-subtitle'>*</span></label>
                        <input type='tel' id='phone' placeholder='placeholder text' className={`font-body ${formErrorData.phone.length > 0 ? 'error' : 'success'}`} value={formData.phone}
                            onChange={(e) => {
                                setFormData(pre => ({ ...pre, phone: e.target.value }))
                                setFormErrorData(pre => ({ ...pre, phone: '' }))
                            }} />
                        {
                            formErrorData.phone.length > 0 ? (<p className='font-caption'>{formErrorData.phone}</p>) : null
                        }
                    </div>
                    <div>
                        <label htmlFor='Amount of consumption' className='font-body'>Amount of consumption<span className='font-subtitle'>*</span></label>
                        <input type='number' min='0' id='Amount of consumption' placeholder='placeholder text' className={`font-body ${formErrorData.amountOfConsumption.length > 0 ? 'error' : 'success'}`} value={formData.amountOfConsumption}
                            onChange={(e) => {
                                setFormData(pre => ({ ...pre, amountOfConsumption: e.target.value }))
                                setFormErrorData(pre => ({ ...pre, amountOfConsumption: '' }))
                            }} />
                        {
                            formErrorData.amountOfConsumption.length > 0 ? (<p className='font-caption'>{formErrorData.amountOfConsumption}</p>) : null
                        }
                    </div>
                    <div>
                        <label htmlFor='payment' className='font-body'>payment<span className='font-subtitle'>*</span></label>
                        <select className={`font-body ${formErrorData.payment.length > 0 ? 'error' : 'success'}`} value={formData.payment} onChange={(e) => { setFormData(pre => ({ ...pre, payment: e.target.value })) }}>
                            <option value='digital payment'>digital payment</option>
                            <option value='ATM'>ATM</option>
                        </select>
                        {
                            formErrorData.payment.length > 0 ? (<p className='font-caption'>{formErrorData.payment}</p>) : null
                        }
                    </div>
                </div>
                {
                    isDefault ? (<button type='submit' className='default-btn'>submit</button>) : (
                        isSuccess ? (<button type='submit' className='default-btn successBtn'>
                            <img src={success} alt='success' />
                            success
                        </button>) : (
                            <div className='submit-failure-group'>
                                <button type='submit' className='default-btn failureBtn'>
                                    <img src={failure} alt='failure' />
                                    failure
                                </button>
                                <p className='font-input'>This person does not exist</p>
                            </div>)
                    )
                }
            </form>
        </div>
    )
}

export default Form
