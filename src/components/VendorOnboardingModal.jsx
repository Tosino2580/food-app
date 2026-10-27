import React, { useState } from 'react';
import { X, ChefHat, Store, CheckCircle, Upload, MapPin, Sparkles, Phone, Mail, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VendorOnboardingModal({
  isOpen,
  onClose,
  onRegisterVendor
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    storeName: '',
    email: '',
    phone: '',
    location: 'Lekki Phase 1, Lagos',
    coverage: 'Lekki, VI & Ikoyi',
    specialties: ['Igbo Traditional Soups', 'Royal Egusi'],
    bio: '',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80'
  });

  const [specialtyInput, setSpecialtyInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableSpecialtyTags = [
    'Igbo Traditional Soups',
    'Signature Lagos Stews',
    'Firewood Party Jollof',
    'Calabar Herb Soups (Afang & Edikaikong)',
    'Yoruba Ayamase & Ofada',
    'Delta Banga Cuisine',
    'Seafood & Okra Specialist',
    'Honey Beans & Dodo',
    'Homemade Snacks & Moi Moi'
  ];

  const toggleSpecialty = (tag) => {
    setFormData(prev => {
      const exists = prev.specialties.includes(tag);
      if (exists) {
        return { ...prev, specialties: prev.specialties.filter(t => t !== tag) };
      } else {
        return { ...prev, specialties: [...prev.specialties, tag] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.storeName || !formData.phone || !formData.email) {
      alert('Please fill out all required fields (Store Name, Phone, Email).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newVendor = {
        id: `vendor-${Date.now()}`,
        name: formData.storeName,
        ownerName: formData.fullName || formData.storeName,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        coverage: formData.coverage,
        specialties: formData.specialties.length ? formData.specialties : ['Nigerian Homemade Meals'],
        bio: formData.bio || 'Passionate homemade Nigerian food artisan serving freshly prepared batches across Lagos.',
        image: formData.image,
        coverImage: formData.coverImage,
        verified: true,
        rating: 5.0,
        reviewsCount: 1,
        activeDishesCount: 0,
        prepTime: '24 hours notice'
      };

      onRegisterVendor(newVendor);
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-charcoal-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-maize-50 rounded-2xl sm:rounded-3xl shadow-modal overflow-hidden border border-maize-300 my-auto max-h-[92vh] flex flex-col text-charcoal-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-700 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 border border-maize-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-forest-900 text-white p-6 sm:p-8 relative overflow-hidden shrink-0">
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amberGold text-charcoal-950 text-xs font-black uppercase tracking-wider">
              <ChefHat className="w-3.5 h-3.5" />
              <span>Partner With HomeBatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Become a Food Vendor
            </h2>
            <p className="text-xs sm:text-sm text-forest-200 max-w-lg leading-relaxed">
              Reach thousands of hungry Lagos professionals and households who buy 1.5L, 3L & 5L homemade soups and party batches every single week.
            </p>
          </div>
        </div>

        {/* Form Body */}
        {success ? (
          <div className="p-10 text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-charcoal-900">
              Welcome to the Kitchen Partner Network!
            </h3>
            <p className="text-sm text-charcoal-600 max-w-md mx-auto">
              Your vendor store <span className="font-bold text-paprika-600">"{formData.storeName}"</span> has been registered. Opening your vendor dashboard now...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 overflow-y-auto space-y-5 flex-1">
            {/* Store & Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  Business / Store Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Iya Moria Gourmet Pots"
                  value={formData.storeName}
                  onChange={e => setFormData({ ...formData, storeName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  Chef / Contact Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Moriam Adeyemi"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +234 803 123 4567"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. kitchen@yamoria.ng"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>
            </div>

            {/* Location & Coverage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  Kitchen Location in Lagos *
                </label>
                <select
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                >
                  <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                  <option value="Victoria Island & Ikoyi, Lagos">Victoria Island & Ikoyi, Lagos</option>
                  <option value="Ikeja GRA & Maryland, Lagos">Ikeja GRA & Maryland, Lagos</option>
                  <option value="Surulere & Yaba, Lagos">Surulere & Yaba, Lagos</option>
                  <option value="Magodo Phase 2, Lagos">Magodo Phase 2, Lagos</option>
                  <option value="Ajah & Sangotedo, Lagos">Ajah & Sangotedo, Lagos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                  Delivery Coverage Areas
                </label>
                <input
                  type="text"
                  placeholder="e.g. Island-wide, Lekki to Ikoyi"
                  value={formData.coverage}
                  onChange={e => setFormData({ ...formData, coverage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
                />
              </div>
            </div>

            {/* Specialties Picker */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-2">
                Food Specialties (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSpecialtyTags.map(tag => {
                  const isChecked = formData.specialties.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleSpecialty(tag)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                        isChecked
                          ? 'bg-paprika-600 text-white border-paprika-600 shadow-xs'
                          : 'bg-white text-charcoal-700 border-maize-300 hover:border-paprika-400'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '} {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Kitchen Bio */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-1">
                Store Bio & Cooking Story
              </label>
              <textarea
                rows={3}
                placeholder="Tell customers about your kitchen secrets, hygiene standards, and favorite signature dishes..."
                value={formData.bio}
                onChange={e => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-maize-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-paprika-500"
              />
            </div>

            {/* Profile Avatar / Photo Selector */}
            <div>
              <label className="block text-xs font-extrabold text-charcoal-900 uppercase tracking-wider mb-2">
                Chef Profile Image (Sample Avatar)
              </label>
              <div className="flex items-center gap-3">
                {[
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
                ].map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt="Sample avatar"
                    onClick={() => setFormData({ ...formData, image: imgUrl })}
                    className={`w-12 h-12 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                      formData.image === imgUrl ? 'border-paprika-600 scale-110 shadow-md ring-2 ring-paprika-300' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-maize-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-sm bg-paprika-600 hover:bg-paprika-700 text-white flex items-center justify-center gap-2 shadow-md shadow-paprika-600/25 transition-all duration-200 active:scale-98 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Registering Your Kitchen...' : 'Complete Vendor Registration & Open Dashboard'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
