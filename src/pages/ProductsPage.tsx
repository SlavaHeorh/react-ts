import {useProducts} from "../hooks/products";
import React, {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {

    const {products, error, loading, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {/*создаем новый массив с продуктами*/}
            {products.map(product => <Product product={product} key={product.id}/>)}

            {modal && <Modal title='Create new product' onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal && <button
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2 items-center'
                onClick={open}
            >+</button>}
        </div>
    )
}