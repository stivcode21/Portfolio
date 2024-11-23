"use client"
import React from 'react'
import { useInView } from '@/app/hooks/useInView'
import dynamic from 'next/dynamic'
import { RingLoader } from 'react-spinners'

const LazySection = ({ componentPath }) => {
    const { isVisible, setRef } = useInView({ threshold: 0.1 }); //porcentaje de visibilidad

    const LazyComponent = dynamic(() => import(`../${componentPath}`), {
        loading: () => (
            <div className='absolute z-30 inset-0 flex justify-center items-center'>
                <RingLoader color='#fff' size={60} />
            </div>
        ),
        ssr: false //indica que este componente solo se renderiza en el cliente
    })

    return (//Mostramos el componente solo si está visible en la pantalla
        <div ref={setRef}>
            {isVisible && <LazyComponent />}
        </div>
    )
}

export default LazySection