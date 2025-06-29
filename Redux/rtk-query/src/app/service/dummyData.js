import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi= createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder)=>({
        getAllProducts: builder.query({
            query: ()=>'/products'
        }),
        addNewProduct: builder.mutation({
            query: (newProduct)=>({
                url: `/products/add`,
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: newProduct
            })
        })
    })
})

// `use${GetAllProducts}query`

export const {useGetAllProductsQuery, useAddNewProductMutation} = productsApi;