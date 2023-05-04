import {IProduct} from "../models";
import {useState} from "react";


// интерфейс описания типов массива обьектов с типом IProduct в котором записаны все типы которые содержит массив
interface ProductProps {
    product: IProduct
}



export function Product({product}: ProductProps) { // передаю сразу products что ты не добавлять в начале props

    const [details, setDetails] = useState(false) // состояние отображения кнопки

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(!details)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 600}}>{product.rating.rate}</span></p>
            </div>
            }

        </div>
    )
}