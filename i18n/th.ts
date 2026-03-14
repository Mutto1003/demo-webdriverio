/**
 * Thai strings
 */
import type { I18nStrings } from './index.js';

const th: I18nStrings = {
  // Onboarding
  skipButton: 'ข้าม',
  letsStartButton: 'เริ่มต้นใช้งาน',
  continueButton: 'ดำเนินการต่อ',

  // SignIn
  mobileNumberPlaceholder: 'หมายเลขโทรศัพท์',
  emailPlaceholder: 'กรอกอีเมลของคุณ',
  btnEmailSignIn: 'อีเมล',
  btnSignInToAccount: 'เข้าสู่ระบบ',
  btnMobileSignIn: 'หมายเลขโทรศัพท์',

  // Buttons
  btnContinue: 'ดำเนินการต่อ',

  // OTP
  otpTitle: 'ใส่รหัส OTP',
  resendOtp: 'ส่งรหัส OTP อีกครั้ง',

  // Home / Dashboard
  welcomeMessage: 'ยินดีต้อนรับ',
  logoutButton: 'ออกจากระบบ',

  // Forgot Password
  btnForgotPassword: 'ลืมรหัสผ่าน?',
  editEmailInput: '@mail.com',


  // Errors
  invalidNumber: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
  otpExpired: 'รหัส OTP หมดอายุแล้ว',
};

export default th;
