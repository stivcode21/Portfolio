import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#6812EA] border-b-2 border-b-[#ffffff] rounded-sm' : 'text-[#ADB7BE] hover:text-[#fff]' //la razon por la cual necesitamos estar activos es porque tenemos diferentes estilos cuando esta activo y cuando no

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-bold ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton