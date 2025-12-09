import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-16 z-50">  {/* FIXED POSITION */}

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl mb-4">
          <div className="p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="space-y-3">
              <p className="font-semibold text-gray-800">Welcome to Educational ERP!</p>
              <p className="text-sm text-gray-600">Celine is here to assist you.</p>
              <p className="text-sm text-gray-600">Please provide your Email or Phone.</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full 
                     flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle size={28} />
        </button>

        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white 
                        rounded-full text-xs font-bold flex items-center justify-center">
          2
        </div>
      </div>

    </div>
  );
}
