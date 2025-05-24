"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useStarknetAccount } from '@/hooks/useStarknetAccount';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Dashboard() {
  const { user, logout, ready, authenticated } = usePrivy();
  const { account, isConnected } = useStarknetAccount();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  if (!ready || !authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0c0c15]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Convertir el email a string de forma segura
  const userEmail = typeof user?.email === 'string' ? user.email : user?.email?.toString() || 'Usuario conectado';

  return (
    <div className="min-h-screen bg-[#0c0c15] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/logo.png"
                alt="Skill Sprout Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="font-bold">Skill</span>{" "}
              <span className="font-light">Sprout</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-white/70">
              {userEmail}
            </div>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors rounded-lg text-white text-sm"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard de Microcertificaciones</h1>
          <p className="text-white/70">
            Aquí puedes ver y gestionar tus microcertificaciones en la blockchain de Starknet
          </p>
          {account && (
            <p className="text-sm text-white/50 mt-2">
              Wallet conectada: {account.slice(0, 6)}...{account.slice(-4)}
            </p>
          )}
        </div>
        
        {/* Grid de certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder para certificaciones */}
          <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-6 group hover:border-white/20">
            <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Starknet Basics</h3>
            <p className="text-white/70 text-sm mb-4">
              Fundamentos de desarrollo en Starknet y Cairo
            </p>
            <div className="text-xs text-white/50">
              Estado: Pendiente
            </div>
          </div>

          {/* Más placeholders... */}
          <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-6 group hover:border-white/20">
            <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Contracts Avanzados</h3>
            <p className="text-white/70 text-sm mb-4">
              Desarrollo de contratos inteligentes avanzados en Cairo
            </p>
            <div className="text-xs text-white/50">
              Estado: Disponible
            </div>
          </div>

          <div className="bg-black/20 border border-white/10 backdrop-blur-sm rounded-xl p-6 group hover:border-white/20">
            <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Seguridad en Starknet</h3>
            <p className="text-white/70 text-sm mb-4">
              Mejores prácticas de seguridad en contratos Cairo
            </p>
            <div className="text-xs text-white/50">
              Estado: Próximamente
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 