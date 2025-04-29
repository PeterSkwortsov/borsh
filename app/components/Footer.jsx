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
          обязательна ссылка на этот сайт
        </p>
      </div>
    </footer>
  );
}

export default Footer