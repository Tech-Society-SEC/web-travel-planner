// Path: src/utils/validators.js
// Purpose: Password strength and rule validators

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function passwordRules(password) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}

export function passwordStrength(password) {
  const rules = Object.values(passwordRules(password)).filter(Boolean).length;
  if (password.length === 0) return { score: 0, label: 'Empty' };
  if (rules <= 2) return { score: 1, label: 'Weak' };
  if (rules === 3 || rules === 4) return { score: 2, label: 'Medium' };
  return { score: 3, label: 'Strong' };
}
