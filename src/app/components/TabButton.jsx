import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#ff007b] border-b border-b-[#ffffff] rounded-sm' : 'text-[#ADB7BE]' //la razon por la cual necesitamos estar activos es porque tenemos diferentes estilos cuando esta activo y cuando no

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#ff007b] ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton