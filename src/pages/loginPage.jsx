import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonClassic from '../components/buttonClassic';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-6xl text-blue-400 mb-4"><i className="fa-solid fa-headset"></i></div>

          <h1 className="text-4xl font-bold mb-2">incident IT</h1>
          <p className="text-lg text-gray-300 mb-8">faite votre choix !</p>

          <div className="flex flex-col gap-4 w-full max-w-xs">
   
            <ButtonClassic 
            tile="Se connecter"
            color="bg-blue-400 text-white cursor-pointer py-3 px-6 rounded-lg font-semibold"
            event={() => navigate('/connexion')} />
            
            <ButtonClassic 
            tile="S'inscrire"
            color="bg-gray-700 text-white cursor-pointer py-3 px-6 rounded-lg font-semibold"
            event={() => navigate('/inscription')} />
          </div>
        </div>
  
        {/* Footer */}
        <div className=" text-center p-4 border-t border-gray-700 text-sm text-gray-400">
          <div>
            <select className="bg-gray-900 text-gray-400 border-none">
              <option>Français - French</option>
            </select>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;