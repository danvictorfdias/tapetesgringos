import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface NotificationName {
  id: string;
  name: string;
}

const fallbackNames = [
  'Maria Silva',
  'Ana Santos',
  'Juliana Costa',
  'Fernanda Oliveira',
  'Camila Souza',
  'Patricia Lima',
  'Carla Pereira',
  'Beatriz Alves',
  'Mariana Rocha',
  'Gabriela Martins',
  'Amanda Ferreira',
  'Larissa Gomes',
  'Renata Ribeiro',
  'Tatiana Cardoso',
  'Daniela Araújo',
  'Luciana Dias',
  'Vanessa Castro',
  'Adriana Barbosa',
  'Simone Moreira',
  'Cristina Nunes',
];

export default function PurchaseNotification() {
  const [names, setNames] = useState<string[]>(fallbackNames);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const { data, error } = await supabase
          .from('purchase_notification_names')
          .select('id, name')
          .eq('active', true);

        if (!error && data && data.length > 0) {
          const fetchedNames = data.map((item: NotificationName) => item.name);
          setNames(fetchedNames);
        }
      } catch (err) {
        console.error('Error fetching notification names:', err);
      }
    };

    fetchNames();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % names.length);
        }, 500);
      }, 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl p-4 flex items-center gap-3 border border-gray-200 max-w-xs">
        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {names[currentIndex]}
          </p>
          <p className="text-xs text-gray-600">acabou de comprar</p>
        </div>
      </div>
    </div>
  );
}
