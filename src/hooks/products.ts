import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() { // кастомный hook

    const [products, setProducts] = useState<IProduct[]>([]) //состояние тип которого IProduct
    const [loading, setLoading] = useState(false) // состояние для подгрузки страницы
    const [error, setError] = useState('')// состояние для ошибки

    function addProduct(product:IProduct) {
        setProducts( prev => [product, ...prev])
    }

    async function fetchProducts() {  // асинхронная функция для
        try {
            setError('') // выполняется если нет ошибки
            setLoading(true)  // выводит сообщение загрузки пока данные подгружаются
            // axios.get запрос для получения данных в константу response
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data) // передаем данные в состояние
            setLoading(false) // убираем сообщение озагрузке когда все выполнится
        } catch (e: unknown) {  // выполняется если есть ошибка
            const error = e as AxiosError // устанавливаем константку как AxiosError
            setLoading(false) // убираем сообщение загрузки если есть ошибка
            setError(error.message) // устанавливаем в состояние сообщение об ошибке
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, error, loading, addProduct}
}