import { useState } from 'react';
import { Building2, Package, Sparkles, Truck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappUrl, wholesaleMessage } from '@/lib/utils';
import { useReveal } from '@/lib/useReveal';
import { useI18n } from '@/i18n/types';

const BENEFIT_ICONS = [Package, Sparkles, Truck, Building2];

export function Wholesale() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    interests: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.wholesale.errors.name;
    if (!form.business.trim()) e.business = t.wholesale.errors.business;
    if (!form.phone.trim()) e.phone = t.wholesale.errors.phone;
    if (!form.interests.trim()) e.interests = t.wholesale.errors.interests;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const whatsappLink = whatsappUrl(
    wholesaleMessage(form.name, form.business, form.phone, form.interests, form.message, t)
  );

  return (
    <section id="wholesale" className="py-16 sm:py-24 bg-espresso-900 text-ivory-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Left: Copy + Benefits */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-champagne-400 mb-4">
              {t.wholesale.eyebrow}
            </p>
            <h2 className="text-heading font-serif font-semibold text-ivory-50 mb-5">
              {t.wholesale.title}
            </h2>
            <p className="text-sm sm:text-base text-ivory-100/70 leading-relaxed max-w-md mb-8">
              {t.wholesale.body}
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {t.wholesale.benefits.map((benefit, idx) => {
                const Icon = BENEFIT_ICONS[idx];
                return (
                  <div key={benefit.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-burgundy-600/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-champagne-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-ivory-50 mb-1">{benefit.title}</h3>
                      <p className="text-xs text-ivory-100/60 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-ivory-50 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-5">
                  <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-espresso-900 mb-3">
                  {t.wholesale.successTitle}
                </h3>
                <p className="text-sm text-espresso-700/60 mb-6 max-w-xs mx-auto">
                  {t.wholesale.successBody}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {t.wholesale.successBtn}
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-espresso-700/50 hover:text-burgundy-600 transition-colors"
                >
                  {t.wholesale.editForm}
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold text-espresso-900 mb-1">
                  {t.wholesale.formTitle}
                </h3>
                <p className="text-sm text-espresso-700/60 mb-5">
                  {t.wholesale.formBody}
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="ws-name" className="block text-xs font-medium text-espresso-800 mb-1.5">
                      {t.wholesale.nameLabel} {t.wholesale.requiredMark}
                    </label>
                    <input
                      id="ws-name"
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder={t.wholesale.namePlaceholder}
                    />
                    {errors.name && <p className="mt-1 text-xs text-burgundy-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="ws-business" className="block text-xs font-medium text-espresso-800 mb-1.5">
                      {t.wholesale.businessLabel} {t.wholesale.requiredMark}
                    </label>
                    <input
                      id="ws-business"
                      type="text"
                      value={form.business}
                      onChange={e => setForm({ ...form, business: e.target.value })}
                      className="input-field"
                      placeholder={t.wholesale.businessPlaceholder}
                    />
                    {errors.business && <p className="mt-1 text-xs text-burgundy-600">{errors.business}</p>}
                  </div>
                  <div>
                    <label htmlFor="ws-phone" className="block text-xs font-medium text-espresso-800 mb-1.5">
                      {t.wholesale.phoneLabel} {t.wholesale.requiredMark}
                    </label>
                    <input
                      id="ws-phone"
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                      placeholder={t.wholesale.phonePlaceholder}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-burgundy-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="ws-interests" className="block text-xs font-medium text-espresso-800 mb-1.5">
                      {t.wholesale.interestsLabel} {t.wholesale.requiredMark}
                    </label>
                    <input
                      id="ws-interests"
                      type="text"
                      value={form.interests}
                      onChange={e => setForm({ ...form, interests: e.target.value })}
                      className="input-field"
                      placeholder={t.wholesale.interestsPlaceholder}
                    />
                    {errors.interests && <p className="mt-1 text-xs text-burgundy-600">{errors.interests}</p>}
                  </div>
                  <div>
                    <label htmlFor="ws-message" className="block text-xs font-medium text-espresso-800 mb-1.5">
                      {t.wholesale.messageLabel}
                    </label>
                    <textarea
                      id="ws-message"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="input-field resize-none"
                      placeholder={t.wholesale.messagePlaceholder}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t.wholesale.submitBtn}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
