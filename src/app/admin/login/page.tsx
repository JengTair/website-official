'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sessionStorage.setItem('admin-auth', 'true');
    router.push('/admin/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-amber-500 font-bold text-2xl tracking-tight">正台國際</span>
          <p className="text-gray-400 text-sm mt-1">後台管理系統</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 space-y-5 border border-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">帳號</label>
            <input
              type="text"
              required
              placeholder="請輸入帳號"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">密碼</label>
            <input
              type="password"
              required
              placeholder="請輸入密碼"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
            />
          </div>
          {error && <p className="text-red-400 text-sm">帳號或密碼錯誤</p>}
          <button
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors"
          >
            登入
          </button>
          <p className="text-center text-xs text-gray-600">展示版 — 任意帳號密碼皆可登入</p>
        </form>
      </div>
    </div>
  );
}
