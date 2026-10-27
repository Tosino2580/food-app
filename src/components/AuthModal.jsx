import React, { useState } from 'react';
import { X, Lock, Mail, User, ChefHat, ArrowRight, CheckCircle } from 'lucide-react';

export default function AuthModal({
  isOpen,
  onClose,
  onLoginAsVendor,
  onLoginAsCustomer
}) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [role, setRole] = useState('customer'); // 'customer' or 'vendor'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'vendor') {
      if (onLoginAsVendor) onLoginAsVendor();
    } else {
      if (onLoginAsCustomer) onLoginAsCustomer({ email, name: name || 'Valued Customer' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-charcoal-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-md bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto p-6 sm:p-8 text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white text-charcoal-700 shadow-sm flex items-center justify-center hover:bg-maize-100 transition-colors"
          aria-label="Close auth modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-2xl font-extrabold text-charcoal-900 font-display">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-xs text-charcoal-500">
            {mode === 'login' 
              ? 'Log in to manage orders or access your vendor kitchen.' 
              : 'Join HomeBatch Marketplace today.'}
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-maize-200/70 border border-maize-300 mb-5 text-xs font-black">
          <button
            type="button"
            onClick={() => setRole('customer')}
            className={`py-2 rounded-lg transition-all ${
              role === 'customer'
                ? 'bg-white text-charcoal-900 shadow-xs'
                : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            I am a Customer
          </button>

          <button
            type="button"
            onClick={() => setRole('vendor')}
            className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              role === 'vendor'
                ? 'bg-forest-800 text-white shadow-xs'
                : 'text-charcoal-600 hover:text-charcoal-900'
            }`}
          >
            <ChefHat className="w-3.5 h-3.5" />
            I am a Vendor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-charcoal-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Balogun"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-maize-300 bg-white text-xs focus:ring-2 focus:ring-paprika-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-charcoal-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-maize-300 bg-white text-xs focus:ring-2 focus:ring-paprika-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-maize-300 bg-white text-xs focus:ring-2 focus:ring-paprika-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-extrabold text-xs bg-paprika-600 hover:bg-paprika-700 text-white flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
          >
            <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Logins for Instant Testing */}
        <div className="mt-5 pt-4 border-t border-maize-200 text-center space-y-2">
          <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">
            Quick One-Click Demo Mode
          </span>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => {
                if (onLoginAsCustomer) onLoginAsCustomer({ email: 'lagos.foodie@gmail.com', name: 'Folake Adeyemi' });
                onClose();
              }}
              className="py-1.5 px-2 rounded-lg bg-white border border-maize-300 font-bold hover:bg-maize-100 text-charcoal-800"
            >
              Log in as Customer
            </button>
            <button
              type="button"
              onClick={() => {
                if (onLoginAsVendor) onLoginAsVendor();
                onClose();
              }}
              className="py-1.5 px-2 rounded-lg bg-forest-50 border border-forest-300 font-bold hover:bg-forest-100 text-forest-800"
            >
              Log in as Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
