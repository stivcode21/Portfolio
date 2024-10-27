import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => { //props - nombre, funcion que ejecutara, seleccion actual
    const buttonStyles = isSelected
        ? "text-white border-[#ff007b]"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"

    return (
        <button className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-xl cursor-pointer`}
            onClick={() => onClick(name)}>
            {/*onClick es la funcion que se va a recibir como prop a la cual le pasamos name como argumento */}
            {name}
        </button>
    )
}

export default ProjectTag