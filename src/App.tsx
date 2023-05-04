import React from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";

function App() {

    const {products, error, loading} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {/*создаем новый массив с продуктами*/}
            {products.map(product => <Product product={product} key={product.id}/>)}
            <Modal>
                <CreateProduct/>
            </Modal>
        </div>
    )
}

export default App;
