// Path: src/components/PasswordStrengthMeter.jsx
// Purpose: Visualize password strength using validators.passwordStrength

import React from 'react';
import { passwordStrength, passwordRules } from '../utils/validators';

export default function PasswordStrengthMeter({ password }) {
  const strength = passwordStrength(password);
  const rules = passwordRules(password);
  return (
    <div className="mt-2">
      <div className="flex items-center gap-3">
        <div className="w-36 h-2 bg-[#F0F0F0] rounded overflow-hidden">
          <div style={{ width: `${(strength.score / 3) * 100}%` }} className="h-full bg-[#4CAF50]"></div>
        </div>
        <div className="text-sm">{strength.label}</div>
      </div>

      <ul className="mt-2 text-sm text-gray-600">
        <li className={rules.length ? 'text-green-600' : 'text-gray-500'}>✅ Minimum 8 characters</li>
        <li className={rules.uppercase ? 'text-green-600' : 'text-gray-500'}>✅ 1 uppercase letter</li>
        <li className={rules.lowercase ? 'text-green-600' : 'text-gray-500'}>✅ 1 lowercase letter</li>
        <li className={rules.number ? 'text-green-600' : 'text-gray-500'}>✅ 1 number</li>
        <li className={rules.special ? 'text-green-600' : 'text-gray-500'}>✅ 1 special character</li>
      </ul>
    </div>
  );
}
