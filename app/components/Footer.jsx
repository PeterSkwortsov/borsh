import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto">
        <p
          className="text-center text-xs
"
        >
          &copy; {new Date().getFullYear()} При копировании информации
          обязательна ссылка на этот сайт. <br></br>
          <span>
            Сайт разработан{" "}
            <a href="https://vk.com/skwortsow.petia" className='font-bold'>СКВОРЦОМ</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer